import { JSX, ReactNode } from "react";

export interface ToastProps {
    errorMessage: string;
    successMessage: string;
    infoMessage: string;
}

export interface ShowToastProps {
    onShowToast: (type: "error" | "success" | "info", message: string) => void;
}

export interface LabelProps {
    htmlFor?: string;
    children: ReactNode;
    className?: string;
}

export interface InputProps {
    type?: "text" | "email" | "password" | string;
    id?: string;
    name?: string;
    placeholder?: string;
    value?: string | number;
    defaultValue?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    min?: string;
    max?: string;
    step?: number;
    disabled?: boolean;
    success?: boolean;
    error?: boolean;
    hint?: string;
}

export interface CheckboxProps {
    label?: string;
    checked: boolean;
    className?: string;
    id?: string;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export interface NavItem {
    icon: JSX.Element;
    name: string;
    path: string;
    subItems?: { name: string; path: string }[];
}

export interface Payment {
    date: string;
    plan: string;
    amount: string;
    status: "Paid" | "Pending" | "Failed";
    invoice: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children: React.ReactNode;
    showCloseButton?: boolean;
    isFullscreen?: boolean;
}

export interface DialogProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setToastType: React.Dispatch<React.SetStateAction<"error" | "success" | "info" | null>>;
    setToastMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface DialogProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setToastType: React.Dispatch<React.SetStateAction<"error" | "success" | "info" | null>>;
    setToastMessage: React.Dispatch<React.SetStateAction<string>>;
}