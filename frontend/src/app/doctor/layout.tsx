import type { Metadata } from "next";
import { NavbarDemo } from "@/components/doctor/DocNav";

export const metadata: Metadata = {
  title: "Doctor Page",
  description: "Doctor section of the app",
};

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarDemo />
      <main>{children}</main>
    </>
  );
}
