import React from "react";
import { Metadata } from "next";
import Dashboard from "@/pages/dashboard/page";

export const metadata: Metadata = {
  title: "TLBR.io Dashboard | Elevate your presentation.",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function DashboardPage() {
  return <Dashboard />;
}
