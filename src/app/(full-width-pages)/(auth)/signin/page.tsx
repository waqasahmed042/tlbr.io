import { Metadata } from "next";
import Auth from "@/pages/auth/auth";

export const metadata: Metadata = {
  title: "Sign In | tlbr.io Dashboard",
  description: "Access your tlbr.io dashboard by signing in to your account and managing your projects efficiently.",
};

export default function SignIn() {
  return <Auth />;
}