'use client';
import { useRouter } from "next/navigation";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineAccountBalance } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

const Dashboard = () => {
    const router = useRouter();

    const handleDownload = () => {
        router.push('/download');
    }

    const handleBilling = () => {
        router.push('/billing');
    }

    const handleSetting = () => {
        router.push('/setting');
    }

    return (
        <>
            {/* Main Content */}
            <div className="flex-1 box-border">
                <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl mb-10 text-[#0A0A04] dark:text-[#CCCCCC]">
                    Welcome Jayvin!
                </h1>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {/* Trial Period */}
                    <div className="bg-[#FFAB00] dark:bg-[#333333] dark:border-[#FFAB00] rounded-xl p-5 hover:shadow-lg transition-all border border-transparent">
                        <div className="flex items-center mb-2">
                            <IoTimeOutline className="text-[#333333] dark:text-[#FFAB00] text-xl mr-2" />
                            <h3 className="text-lg font-bold text-[#0A0A04] dark:text-white">
                                Trial Period
                            </h3>
                        </div>
                        <p className="text-sm text-[#333333] dark:text-[#CCCCCC] font-light mb-4">
                            Days remaining in your free trial
                        </p>
                        <div className="flex items-baseline mb-1">
                            <span className="text-4xl text-[#0A0A04] dark:text-white">7</span>
                            <span className="text-sm text-[#333333] dark:text-[#CCCCCC] ml-1">
                                / 7 days remaining
                            </span>
                        </div>
                        <div className="bg-[#FAFAFA] dark:bg-[#555555] h-1 rounded-sm overflow-hidden">
                            <div className="bg-[#0A0A04] dark:bg-[#FFAB00] w-full h-full"></div>
                        </div>
                        <p className="text-xs text-[#333333] dark:text-[#CCCCCC] mt-2.5">
                            Your free trial expires in 7 days
                        </p>
                    </div>

                    {/* Account Status */}
                    <div className="bg-[#FFAB00] dark:bg-[#333333] dark:border-[#FFAB00] rounded-xl p-5 hover:shadow-lg transition-all border border-transparent">
                        <div className="flex items-center mb-2">
                            <MdOutlineAccountBalance className="text-[#333333] dark:text-[#FFAB00] text-xl mr-2" />
                            <h3 className="text-lg font-bold text-[#0A0A04] dark:text-white">
                                Account Status
                            </h3>
                        </div>
                        <p className="text-sm text-[#333333] dark:text-[#CCCCCC] font-light mb-2">
                            Your current plan status
                        </p>
                        <div className="space-y-2 my-4">
                            <p className="flex justify-between text-md text-[#333333] dark:text-[#CCCCCC] font-light">
                                <span>Plan Type</span>
                                <span>Free Trial</span>
                            </p>
                            <p className="flex justify-between text-md text-[#333333] dark:text-[#CCCCCC] font-light">
                                <span>Status</span>
                                <span className="text-white dark:text-[#FFAB00]">Active</span>
                            </p>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-[#FFAB00] dark:bg-[#333333] dark:border-[#FFAB00] rounded-xl p-5 hover:shadow-lg transition-all border border-transparent">
                        <div className="flex items-center mb-2">
                            <TfiStatsUp className="text-[#333333] dark:text-[#FFAB00] text-xl mr-2" />
                            <h3 className="text-lg font-bold text-[#0A0A04] dark:text-white">
                                Quick Stats
                            </h3>
                        </div>
                        <p className="text-sm text-[#333333] dark:text-[#CCCCCC] font-light mb-2">
                            Your usage overview
                        </p>
                        <div className="space-y-2 my-4">
                            <p className="flex justify-between text-md text-[#333333] dark:text-[#CCCCCC] font-light">
                                <span>Downloads</span>
                                <span>0</span>
                            </p>
                            <p className="flex justify-between text-md text-[#333333] dark:text-[#CCCCCC] font-light">
                                <span>Version</span>
                                <span>1.0.0</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Getting Started */}
                <div className="bg-[#FAFAFA] dark:bg-[#555555] rounded-2xl p-6 shadow-md">
                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-lg md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#0A0A04] dark:text-[#CCCCCC]">
                            Getting Started
                        </h1>
                        <p className="text-sm md:text-base text-[#333333] dark:text-[#CCCCCC] mt-1">
                            Quick actions to help you begin
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {/* Download Add-in */}
                        <div
                            className="bg-white dark:bg-[#333333] border border-[#FFAB00] cursor-pointer rounded-xl p-5 hover:shadow-lg transition-shadow"
                            onClick={handleDownload}
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#0A0A04] dark:text-[#CCCCCC] mb-1">
                                Download Add-in
                            </h3>
                            <p className="text-sm text-[#333333] dark:text-[#CCCCCC] font-light">
                                Get the latest version of TLBR for PowerPoint
                            </p>
                        </div>

                        {/* View Billing */}
                        <div
                            className="bg-white dark:bg-[#333333] border border-[#FFAB00] cursor-pointer rounded-xl p-5 hover:shadow-lg transition-shadow"
                            onClick={handleBilling}
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#0A0A04] dark:text-[#CCCCCC] mb-1">
                                View Billing
                            </h3>
                            <p className="text-sm text-[#333333] dark:text-[#CCCCCC] font-light">
                                Manage your subscription and payment details
                            </p>
                        </div>

                        {/* Update Settings */}
                        <div
                            className="bg-white dark:bg-[#333333] border border-[#FFAB00] cursor-pointer rounded-xl p-5 hover:shadow-lg transition-shadow"
                            onClick={handleSetting}
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#0A0A04] dark:text-[#CCCCCC] mb-1">
                                Update Settings
                            </h3>
                            <p className="text-sm text-[#333333] dark:text-[#CCCCCC] font-light">
                                Customize your preferences and account info
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;