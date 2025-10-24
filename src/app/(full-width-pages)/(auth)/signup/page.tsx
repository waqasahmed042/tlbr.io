import { Metadata } from "next";
import Auth from "@/pages/auth/auth";

export const metadata: Metadata = {
  title: "Sign Up | tlbr.io Dashboard",
  description: "Create your tlbr.io account to access the dashboard and manage your workspace.",
};

export default function SignUp() {
  return <Auth />;
}
