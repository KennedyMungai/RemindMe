import { wait } from "@/lib/wait";
import { currentUser } from "@clerk/nextjs";
import Error from "next/error";

export default async function Home() {
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
}
