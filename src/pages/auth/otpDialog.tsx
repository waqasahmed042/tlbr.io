"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Modal } from "@/components/ui/modal";
import { DialogProps } from "@/utilities/type";
import { GoVerified } from "react-icons/go";

const OTPDialog: React.FC<DialogProps> = ({
    isModalOpen,
    setIsModalOpen,
    setToastType,
    setToastMessage,
}) => {
    const router = useRouter();
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [showSuccessScreen, setShowSuccessScreen] = useState(false);

    const handleVerify = () => {
        const otp = inputsRef.current.map((input) => input?.value || "").join("");

        if (otp.length !== 6) {
            setToastType("info");
            setToastMessage("Please enter a valid 6-digit code.");
            return;
        }

        // Show success animation
        setShowSuccessScreen(true);

        // Toast success
        setTimeout(() => {
            setToastType("success");
            setToastMessage("Your account has been verified successfully.");
        }, 300);

        // Redirect after short delay
        setTimeout(() => {
            setShowSuccessScreen(false);
            setIsModalOpen(false);
            router.push("/");
        }, 1800);
    };

    const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
        const input = e.currentTarget;
        const value = input.value;

        if (!/^[0-9]$/.test(value) && value !== "") {
            input.value = "";
            setToastType("info");
            setToastMessage("Please enter only digits.");
            return;
        }

        if (value !== "" && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        const input = e.currentTarget;

        if (e.key === "Backspace" && input.value === "" && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="max-w-md mx-auto p-6 relative"
            >
                <div className="p-4">
                    {!showSuccessScreen ? (
                        <>
                            <h3 className="text-lg font-semibold text-[#0A0A04] dark:text-white mb-2">
                                Verify Your Account
                            </h3>
                            <p className="text-sm text-[#666666] dark:text-[#CCCCCC] mb-6">
                                Please enter the 6-digit verification code sent to your email.
                            </p>

                            {/* OTP Input Boxes */}
                            <div className="flex justify-center gap-3 mb-8">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        ref={(el) => {
                                            inputsRef.current[index] = el;
                                        }}
                                        onInput={(e) => handleInput(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        className="w-12 h-12 text-center text-lg font-semibold text-gray-800 dark:text-white 
                                            border border-gray-300 dark:border-gray-600 rounded-xl outline-none 
                                            focus:border-[#FFAB00] focus:ring-2 focus:ring-orange-200 transition-all"
                                    />
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="inline-flex items-center justify-center gap-3 py-3 w-full text-sm font-normal border border-[#CCCCCC] text-[#666666] hover:bg-[#666666] hover:text-white rounded-full px-7 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleVerify}
                                    className="inline-flex items-center justify-center gap-3 py-3 w-full text-sm font-normal bg-[#FFAB00] text-white hover:bg-[#ffbc37] hover:text-white rounded-full px-7 transition-colors"
                                >
                                    Verify Account
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-8 animate-fadeIn">
                            <GoVerified className="text-5xl mb-8 text-[#FFAB00] animate-popIn animate-glow" />
                            <h3 className="text-lg font-semibold text-[#0A0A04] dark:text-white">
                                Verification Successful!
                            </h3>
                            <p className="text-sm text-[#666666] dark:text-[#CCCCCC] mt-2">
                                Redirecting you to your dashboard...
                            </p>
                        </div>
                    )}
                </div>
            </Modal>
        </>
    );
};

export default OTPDialog;