import { Skeleton } from "@/components/ui/skeleton";
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
    <section>
      Welcome <br /> {user.firstName} {user.lastName}
    </section>
  );
};

const WelcomeMessageFallback = () => {
  return <Skeleton />;
};
