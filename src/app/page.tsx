"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
// import Landing from "@/Components/Landing";
type Props = {};

const Hello = (props: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    if (session?.user?.role === "admin") {
      router.push("/teacher");
    }
    if (session?.user?.role === "user") {
      router.push("/student");
    }

    return (
      <div>
        <p>Signed in as {session?.user?.role}</p>

        <button onClick={() => signOut()}> Sign Out</button>
       
      </div>
    );
  }
  return <div>
    <h1>Hello</h1>
    </div>;
};

export default Hello;
