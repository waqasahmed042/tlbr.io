import { Metadata } from "next";
import Setting from "@/pages/setting/page";

export const metadata: Metadata = {
    title: "Settings | Customize Your Experience on tlbr.io",
    description: "Manage your tlbr.io account settings, preferences, and subscription details to personalize your productivity experience.",
};

export default function SettingsPage() {
    return <Setting />;
}
