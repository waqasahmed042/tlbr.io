import { Metadata } from "next";
import Dashboard from "@/pages/dashboard/page";

export const metadata: Metadata = {
    title: "Dashboard | Elevate every Productivity with tlbr.io",
    description: "Access your tlbr.io dashboard to manage your projects, track progress, and boost productivity—all in one place.",
};

export default function SignIn() {
    return <Dashboard />;
}