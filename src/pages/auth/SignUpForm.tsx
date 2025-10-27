"use client";
import React, { useState } from "react";
import Label from "@/components/ui/input/Label";
import Input from "@/components/ui/input/InputField";
import Checkbox from "@/components/ui/input/Checkbox";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { ShowToastProps } from "@/utilities/type";
import UIText from "@/utilities/testResource";

const SignUpForm: React.FC<ShowToastProps> = ({ onShowToast }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState<{
    message: string;
    color: string;
  }>({ message: "", color: "" });

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

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fname && !lname && !email && !password) {
      onShowToast("error", "Please fill all the required fields.");
      return;
    } else if (!fname) {
      onShowToast("error", "Please enter your first name.");
      return;
    } else if (!lname) {
      onShowToast("error", "Please enter your last name.");
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
    } else if (!isChecked) {
      onShowToast("info", "Please agree to the Terms and Privacy Policy.");
      return;
    }

    const userData = { email, password, keepMeLoggedIn: isChecked };
    localStorage.setItem("userSession", JSON.stringify(userData));

    // Clear inputs after login
    setLname("");
    setFname("");
    setEmail("");
    setPassword("");
    setIsChecked(false);
    setPasswordStrength({ message: "", color: "" });
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSignUp}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <Label>
              {UIText.auth.signUp.email}<span className="text-error-500">*</span>
            </Label>
            <Input
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter your first name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="sm:col-span-1">
            <Label>
              {UIText.auth.signUp.l_name}<span className="text-error-500">*</span>
            </Label>
            <Input
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter your last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Label>
            {UIText.auth.signUp.email}<span className="text-error-500">*</span>
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label>
            {UIText.auth.signUp.password}<span className="text-error-500">*</span>
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

        <div className="flex items-center gap-3">
          <Checkbox
            className="w-5 h-5"
            checked={isChecked}
            onChange={setIsChecked}
          />
          <p className="inline-block font-normal text-gray-500 dark:text-gray-400">
            {UIText.auth.signUp.by_creating_account}{" "}
            <span className="text-gray-800 dark:text-white/90">
              {UIText.auth.signUp.terms_and_conditions}
            </span>{" "}
            {UIText.auth.signUp.and_our}{" "}
            <span className="text-gray-800 dark:text-white">
              {UIText.auth.signUp.privacy_policy}
            </span>
          </p>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-3 py-3 w-full text-sm font-normal bg-[#FFAB00] text-white hover:bg-[#ffbc37] hover:text-white rounded-full px-7 transition-colors"
        >
          {UIText.auth.signUp.button}
        </button>
      </form>
    </>
  );
};

export default SignUpForm;