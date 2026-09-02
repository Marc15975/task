import { auth } from "@/components/auth/auth";
import { redirect } from "next/navigation";
import SidebarMain from "@/components/sidebar/sidebar-main";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return <SidebarMain>{children}</SidebarMain>;
}
