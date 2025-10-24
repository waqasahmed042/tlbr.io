"use client";
import React from "react";
import { FaWindows } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { latestVersion, systemRequirements, installSteps } from "@/utilities/data";

const Download: React.FC = () => {
    return (
        <>
            <div className="space-y-10">
                {/* Page Header */}
                <div className="bg-[#FFAB00] dark:bg-[#333333] dark:border-[#FFAB00] border border-transparent rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#0A0A04] dark:text-white mb-2 flex items-center gap-3">
                        <MdOutlineFileDownload className="text-3xl dark:text-[#FFAB00]" />
                        Download TLBR.io for Windows
                    </h1>
                    <p className="text-sm text-[#333333] dark:text-[#CCCCCC] font-light">
                        Get the latest Windows version of TLBR.io and enhance your productivity
                        with advanced PowerPoint integration.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {/* Windows Download Card */}
                    <div className="bg-white dark:bg-[#333333] dark:border-[#FFAB00] border border-gray-100 rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all">
                        <FaWindows className="text-5xl text-[#0A0A04] dark:text-[#FFAB00] mb-3" />
                        <h3 className="font-semibold text-xl text-[#0A0A04] dark:text-white mb-2">
                            TLBR.io for Windows
                        </h3>
                        <p className="text-sm text-[#666666] dark:text-[#CCCCCC] mb-4">
                            Compatible with Windows 10 and later.
                        </p>

                        <button className="bg-[#FFAB00] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#ffbc37] transition-colors w-full sm:w-auto">
                            Download for Windows
                        </button>
                    </div>

                    {/* Latest Version Info */}
                    <div className="bg-white dark:bg-[#333333] border border-gray-100 dark:border-[#FFAB00] rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all">
                        <h2 className="text-xl font-semibold text-[#0A0A04] dark:text-[#FFFFFF] mb-2">
                            Latest Version
                        </h2>
                        <p className="text-sm text-[#666666] dark:text-[#CCCCCC] mb-4">
                            TLBR.io v{latestVersion.version} — Released {latestVersion.releaseDate}
                        </p>
                        <ul className="text-sm text-[#333333] dark:text-[#CCCCCC] space-y-2">
                            {latestVersion.updates.map((update, index) => (
                                <li key={index}>• {update}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {/* System Requirements */}
                    <div className="bg-white dark:bg-[#333333] dark:border-[#FFAB00] border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                        <h2 className="text-xl font-semibold text-[#0A0A04] dark:text-white mb-4">
                            System Requirements
                        </h2>
                        <ul className="space-y-2 text-sm text-[#333333] dark:text-[#CCCCCC]">
                            {systemRequirements.map((req, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-[#FFAB00] mr-2">•</span> {req}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Installation Guide */}
                    <div className="bg-white dark:bg-[#333333] dark:border-[#FFAB00] border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                        <h2 className="text-xl font-semibold text-[#0A0A04] dark:text-white mb-4">
                            Installation Instructions
                        </h2>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-[#333333] dark:text-[#CCCCCC]">
                            {installSteps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Download;
