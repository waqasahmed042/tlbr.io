"use client";
import { Modal } from "@/components/ui/modal";
import React, { useState } from "react";
import { FiUser, FiLock, FiSave } from "react-icons/fi";
import Toast from "@/hooks/useToast";

const Setting: React.FC = () => {
    const [username, setUsername] = useState("Jayvin");
    const [email, setEmail] = useState("Jayvin@gmail.com");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toastType, setToastType] = useState<"error" | "success" | "info" | null>(null);
    const [toastMessage, setToastMessage] = useState("");

    const handleConfirmDelete = () => {
        setIsModalOpen(true);
    };

    const handleDelete = () => {
        setToastType(null);
        setToastMessage("");

        // Trigger again after a short delay
        setTimeout(() => {
            setToastType("success");
            setToastMessage("Your account has been successfully deleted.");
        }, 10);

        setIsModalOpen(false);
    };

    return (
        <>
            {/* Header */}
            <h1 className="text-md md:text-xl lg:text-2xl xl:text-3xl mb-4 text-[#0A0A04] dark:text-[#CCCCCC]">
                Settings
            </h1>
            <p className="text-sm text-[#333333] dark:text-[#CCCCCC] font-light">
                Manage your profile, application preferences, and account details.
            </p>

            <div className="w-full gap-6 mt-8">
                {/* Profile Settings */}
                <div className="bg-white dark:bg-[#333333] border border-gray-100 dark:border-[#FFAB00] rounded-2xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold text-[#0A0A04] dark:text-[#FFFFFF] flex items-center gap-2 mb-4">
                        <FiUser className="text-xl" /> Profile Information
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-[#666666] dark:text-[#CCCCCC] mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full rounded-md border border-gray-300 dark:border-[#FFAB00] bg-[#FAFAFA] dark:bg-[#444444] text-[#0A0A04] dark:text-[#FFFFFF] p-2 focus:outline-none focus:ring-2 focus:ring-[#FFAB00]"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-[#666666] dark:text-[#CCCCCC] mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-md border border-gray-300 dark:border-[#FFAB00] bg-[#FAFAFA] dark:bg-[#444444] text-[#0A0A04] dark:text-[#FFFFFF] p-2 focus:outline-none focus:ring-2 focus:ring-[#FFAB00]"
                            />
                        </div>
                        <button className="mt-4 inline-flex items-center gap-2 bg-[#FFAB00] hover:bg-[#ffbc37] text-white font-semibold px-5 py-2 rounded-full transition-colors">
                            <FiSave />
                            Save Changes
                        </button>
                    </div>
                </div>

                {/* Account Management */}
                <div className="bg-white dark:bg-[#333333] mt-4 border border-gray-100 dark:border-[#FFAB00] rounded-2xl shadow-sm p-6 lg:col-span-2">
                    <h2 className="text-lg font-semibold text-[#0A0A04] dark:text-[#FFFFFF] flex items-center gap-2 mb-4">
                        <FiLock className="text-xl" /> Account Management
                    </h2>
                    <p className="text-sm text-[#666666] dark:text-[#CCCCCC] mb-4">
                        Secure your account and manage password settings.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="inline-flex items-center justify-center gap-2 py-2.5 px-5 font-semibold bg-[#FFAB00] text-white hover:bg-[#ffbc37] rounded-full transition-colors">
                            Change Password
                        </button>

                        {/* Delete Account Button */}
                        <button
                            onClick={handleConfirmDelete}
                            className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
                        >
                            Confirm Delete
                        </button>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="max-w-md mx-auto p-6">
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#0A0A04] dark:text-white mb-2">
                        Confirm Account Deletion
                    </h3>
                    <p className="text-sm text-[#666666] dark:text-[#CCCCCC] mb-6">
                        Are you sure you want to permanently delete your account? This action cannot be undone.
                    </p>

                    <div className="flex justify-end gap-3">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-[#333333] dark:text-[#CCCCCC] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleDelete}
                            className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition-colors"
                        >
                            Confirm Delete
                        </button>
                    </div>
                </div>
            </Modal>

            {/* Global Toast */}
            {toastType && (
                <div className="fixed bottom-6 right-6 z-50">
                    <Toast
                        infoMessage={toastType === "info" ? toastMessage : ""}
                        errorMessage={toastType === "error" ? toastMessage : ""}
                        successMessage={toastType === "success" ? toastMessage : ""}
                    />
                </div>
            )}
        </>
    );
};

export default Setting;
