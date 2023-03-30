"use client";
import { Roboto } from "@next/font/google";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!(status === "authenticated")) {
      router.push("/");
    }
  }, [status, data]);

  


  const path = usePathname();
  return (
    <div className="layouts">
      <Sidebar />
      <div className="layout__main-contents">
        <h1>Path :{path?.toString()}</h1>

        {children}
      </div>
    </div>
  );
}