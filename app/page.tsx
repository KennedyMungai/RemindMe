import { currentUser } from "@clerk/nextjs";
import Error from "next/error";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <div className="">Error</div>;
  }

  return (
    <section>
      Welcome <br /> {user.firstName} {user.lastName}
    </section>
  );
}
