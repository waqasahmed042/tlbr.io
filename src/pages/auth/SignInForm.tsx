"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Label from "@/components/ui/input/Label";
import Input from "@/components/ui/input/InputField";
import Checkbox from "@/components/ui/input/Checkbox";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { ShowToastProps } from "@/utilities/type";

const SignInForm: React.FC<ShowToastProps> = ({ onShowToast }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<{
    message: string;
    color: string;
  }>({ message: "", color: "" });

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

  // Evaluate Password Strength
  const evaluatePasswordStrength = (value: string) => {
    if (!value) {
      setPasswordStrength({ message: "", color: "" });
      return;
    }

    const hasLower = /[a-z]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecial = /[\W_]/.test(value);
    const passed = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean)
      .length;

    if (value.length < 8 || passed <= 1) {
      setPasswordStrength({
        message: "Password is too weak. Add uppercase, lowercase, numbers, and special characters.",
        color: "text-error-500",
      });
    } else if (passed === 2 || passed === 3) {
      setPasswordStrength({
        message: "Password is acceptable but could be more stronger. Include more diverse characters.",
        color: "text-[#FFAB00]",
      });
    } else if (passed === 4 && value.length >= 8) {
      setPasswordStrength({
        message: "Your password looks secure.",
        color: "text-success-500",
      });
    }
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email && !password) {
      onShowToast("error", "Please fill all the required fields.");
      return;
    } else if (!email) {
      onShowToast("error", "Please enter your email address.");
      return;
    } else if (!password) {
      onShowToast("error", "Please enter your password.");
      return;
    } else if (passwordStrength.message !== "Your password looks secure.") {
      onShowToast("info", "Please use a strong password.");
      return;
    }

    const userData = { email, password, keepMeLoggedIn: isChecked };
    localStorage.setItem("userSession", JSON.stringify(userData));

    // Clear inputs after login
    setEmail("");
    setPassword("");
    setIsChecked(false);
    setPasswordStrength({ message: "", color: "" });

    router.push("/");
  };

  return (
    <>
      <form className="space-y-6 mt-8" onSubmit={handleSignIn}>
        <div>
          <Label>
            Email <span className="text-error-500">*</span>
          </Label>
          <Input
            placeholder="info@gmail.com"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div>
          <Label>
            Password <span className="text-error-500">*</span>
          </Label>
          <div className="relative">
            <Input
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
                evaluatePasswordStrength(e.target.value);
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
            >
              {showPassword ? (
                <GoEye className="fill-gray-500 dark:fill-gray-400" />
              ) : (
                <GoEyeClosed className="fill-gray-500 dark:fill-gray-400" />
              )}
            </span>
          </div>

          {/* Password Strength Message */}
          {passwordStrength.message && (
            <p className={`mt-1 text-sm ${passwordStrength.color}`}>
              {passwordStrength.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Checkbox checked={isChecked} onChange={setIsChecked} />
            <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
              Keep me logged in
            </span>
          </div>
          <Link
            href="/reset-password"
            className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 py-3 w-full text-sm font-normal bg-[#FFAB00] text-white hover:bg-[#ffbc37] hover:text-white rounded-full px-7 transition-colors"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default SignInForm;