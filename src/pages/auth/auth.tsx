"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import tlbr_white from "@/assets/tlbr.io-white.png";
import tlbr_dark from "@/assets/tlbr.io-dark.png";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Toast from "@/hooks/useToast";
import UIText from "@/utilities/testResource";

const Auth: React.FC = () => {
    const router = useRouter();
    const [activeForm, setActiveForm] = useState<"signin" | "signup">("signin");
    const [toastType, setToastType] = useState<"error" | "success" | "info" | null>(null);
    const [toastMessage, setToastMessage] = useState("");

    const handleShowToast = (type: "error" | "success" | "info", message: string) => {
        setToastType(type);
        setToastMessage(message);

        // Auto-hide after 3s
        setTimeout(() => {
            setToastType(null);
            setToastMessage("");
        }, 3000);
    };

    // Check login persistence on page load
    useEffect(() => {
        const savedUser = localStorage.getItem("userSession");
        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            if (parsedUser.keepMeLoggedIn === true) {
                router.push("/");
            } else {
                localStorage.removeItem("userSession");
                router.push("/signin");
            }
        }
    }, [router]);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
                <div className="flex flex-col justify-center w-full max-w-md px-6 pt-16">
                    {/* Logo */}
                    <div className="flex justify-center items-center mb-6">
                        <Image
                            className="dark:hidden"
                            src={tlbr_dark}
                            alt="Logo"
                            width={130}
                            height={30}
                        />
                        <Image
                            className="hidden dark:block"
                            src={tlbr_white}
                            alt="Logo"
                            width={130}
                            height={30}
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-6 text-center text-[#0A0A04]">
                        <h1 className="mb-2 font-semibold text-gray-800 text-2xl dark:text-white/90">
                            {activeForm === "signin" ? "Welcome" : "Create an Account"}
                        </h1>
                        <p className="text-sm text-[#333333] dark:text-[#CCCCCC]">
                            {activeForm === "signin"
                                ? "Sign in or get started – your slides are waiting!"
                                : "Create your account – your slides are awaiting!"}
                        </p>
                    </div>

                    {/* Toggle Buttons */}
                    <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 w-full">
                        <button
                            onClick={() => setActiveForm("signin")}
                            className={`inline-flex items-center justify-center gap-3 py-3 text-sm font-normal rounded-full px-7 transition-colors w-full
                            ${activeForm === "signin"
                                    ? "bg-[#333333] text-white hover:bg-[#666666]"
                                    : "border border-[#666666] text-[#333333] dark:text-[#CCCCCC] hover:bg-[#f5f5f5] dark:hover:text-[#333333]"
                                }`}
                        >
                            {UIText.auth.signIn.title}
                        </button>
                        <button
                            onClick={() => setActiveForm("signup")}
                            className={`inline-flex items-center justify-center gap-3 py-3 text-sm font-normal rounded-full px-7 transition-colors w-full
                            ${activeForm === "signup"
                                    ? "bg-[#333333] text-white hover:bg-[#666666]"
                                    : "border border-[#666666] text-[#333333] dark:text-[#CCCCCC] hover:bg-[#f5f5f5] dark:hover:text-[#333333]"
                                }`}
                        >
                            {UIText.auth.signUp.title}
                        </button>
                    </div>

                    {/* Sliding Container */}
                    <div className="relative w-full overflow-hidden">
                        <div
                            className={`flex transition-transform duration-[600ms] ease-in-out`}
                            style={{
                                transform:
                                    activeForm === "signin" ? "translateX(0%)" : "translateX(-100%)",
                            }}
                        >
                            <div className="flex-shrink-0 w-full">
                                <SignInForm onShowToast={handleShowToast} />
                            </div>
                            <div className="flex-shrink-0 w-full">
                                <SignUpForm onShowToast={handleShowToast} />
                            </div>
                        </div>
                    </div>
                </div>

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
            </div>
        </>
    );
};

export default Auth;