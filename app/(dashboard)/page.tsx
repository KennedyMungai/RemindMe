import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import prisma from "@/lib/prisma";
import { wait } from "@/lib/wait";
import { currentUser } from "@clerk/nextjs";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<WelcomeMessageFallback />}>
        <WelcomeMessage />
      </Suspense>
    </>
  );
}

const WelcomeMessage = async () => {
  const user = await currentUser();
  await wait(3000);

  if (!user) {
    return <div className="">Error</div>;
  }

  return (
    <section className="flex w-full justify-center items-center">
      <h1 className="text-4xl font-bold">
        Welcome <br /> {user.firstName} {user.lastName}
      </h1>
    </section>
  );
};

const WelcomeMessageFallback = () => {
  return (
    <section className="flex w-full justify-center items-center">
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
    <Alert>
      <AlertTitle>There are no collections yet</AlertTitle>
      <AlertDescription>Create a collection to get started</AlertDescription>
    </Alert>;
  }
}
