import { Metadata } from "next";
import Download from "@/pages/download/page";

export const metadata: Metadata = {
    title: "Download | Get the tlbr.io Add-in for PowerPoint",
    description: "Download the latest version of the tlbr.io add-in for PowerPoint and streamline your workflow with powerful productivity tools.",
};

export default function DownloadPage() {
    return <Download />;
}
