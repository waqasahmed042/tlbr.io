import { Metadata } from "next";
import Billing from "@/pages/billing/page";

export const metadata: Metadata = {
    title: "Billing | Manage Your Subscription on tlbr.io",
    description: "View and manage your tlbr.io billing details, subscriptions, and payment history to keep your account up to date.",
};

export default function BillingPage() {
    return <Billing />;
}
