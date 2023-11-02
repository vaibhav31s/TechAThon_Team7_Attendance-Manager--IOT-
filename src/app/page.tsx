"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

import { useRouter } from "next/navigation";
import Loading from "./student/loading";
import Footer from "@/Components/Footer/Footer";
import Landing from "@/Components/Landing";
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
      <Loading/>
    );
  }
  return <div>
      <Landing/>
      
      <Footer />
    </div>;
};

export default Hello;
