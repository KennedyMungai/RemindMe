import CreateCollectionButton from "@/components/Collections/CreateCollectionButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import prisma from "@/lib/prisma";
import { wait } from "@/lib/wait";
import { currentUser } from "@clerk/nextjs";
import { Suspense } from "react";
import { HiFaceFrown } from "react-icons/hi2";

export default async function Home() {
  return (
    <div className="flex flex-col gap-3">
      <Suspense fallback={<WelcomeMessageFallback />}>
        <WelcomeMessage />
      </Suspense>
      <Suspense
        fallback={<p className="text-center">Loading Collections List...</p>}
      >
        <CollectionList />
      </Suspense>
    </div>
  );
}

const WelcomeMessage = async () => {
  const user = await currentUser();
  await wait(3000);

  if (!user) {
    return <div className="">Error</div>;
  }

  return (
    <section className="flex w-full justify-center items-center mb-2">
      <h1 className="text-4xl font-bold">
        Welcome, <br /> {user.firstName} {user.lastName}
      </h1>
    </section>
  );
};

const WelcomeMessageFallback = () => {
  return (
    <section className="flex w-full justify-center items-center mb-12">
      <h1 className="flex flex-col gap-1 text-4xl font-bold">
        <Skeleton className="w-[20rem] h-[3rem]" />
        <Skeleton className="w-[20rem] h-[3rem]" />
      </h1>
    </section>
  );
};

async function CollectionList() {
  const user = await currentUser();
  const collections = await prisma.collection.findMany({
    where: {
      userId: user?.id,
    },
  });

  if (collections.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <Alert className="flex flex-col gap-4 justify-center">
          <div className="">
            <HiFaceFrown className="text-4xl text-orange-600 bg:text-orange-200" />
          </div>
          <div className="">
            <AlertTitle>There are no collections yet</AlertTitle>
            <AlertDescription>
              Create a collection to get started
            </AlertDescription>
          </div>
        </Alert>
        <div className="">
          <CreateCollectionButton />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center gap-1">
      Collections: {collections.length}
      <CreateCollectionButton />
    </div>
  );
}
