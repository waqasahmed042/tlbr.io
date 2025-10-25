'use client';
import UIText from "@/utilities/testResource";
import GetStarted from "./getStarted";
import TrialPeriod from "./trialPeriod";
import AccountStatus from "./accountStatus";
import QuickStats from "./quickStats";

const Dashboard = () => {
    return (
        <>
            <div className="flex-1 box-border">
                <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl mb-10 text-[#0A0A04] dark:text-[#CCCCCC]">
                    {UIText.dashboard.trial_period.welcome}
                </h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {/* Trial Period */}
                    <TrialPeriod />

                    {/* Account Status */}
                    <AccountStatus />

                    {/* Quick Stats */}
                    <QuickStats />
                </div>

                {/* Getting Started */}
                <GetStarted />
            </div>
        </>
    );
};

export default Dashboard;