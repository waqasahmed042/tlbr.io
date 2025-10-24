import React from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GiCalendarHalfYear } from "react-icons/gi";
import { monthlyPlan, paymentHistory, yearlyPlan } from "@/utilities/data";

const Billing: React.FC = () => {
    return (
        <>
            <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl font-semibold text-[#0A0A04] dark:text-[#CCCCCC] mb-1">
                Billing & Subscription
            </h1>
            <p className="text-[#666666] dark:text-[#CCCCCC] mb-8">
                Manage your subscription and payment methods
            </p>

            {/* Current Plan */}
            <div className="bg-white dark:bg-[#333333] rounded-2xl shadow-sm p-6 mb-6 border border-gray-100 dark:border-[#FFAB00]/40 transition-colors duration-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-[#EAEAEA] flex items-center gap-2">
                            <CiCreditCard1 className="text-xl text-[#FFAB00]" />
                            Current Plan
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            You’re currently on the Free Trial
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="font-semibold text-gray-700 dark:text-[#FFFFFF]">
                            Free Trial
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            10-day trial period
                        </div>
                        <div className="text-lg font-semibold mt-1 text-gray-900 dark:text-[#FFAB00]">
                            $20 / month
                        </div>
                    </div>
                </div>
            </div>

            {/* Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Monthly Plan */}
                <div className="bg-white dark:bg-[#333333] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#FFAB00]/40 transition-colors duration-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-[#EAEAEA] flex items-center gap-2">
                        <MdOutlineCalendarMonth className="text-xl text-[#FFAB00]" />
                        Monthly Plan
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                        Flexible plan for individuals who prefer month-to-month access
                    </p>
                    <div className="text-3xl font-bold text-gray-900 dark:text-[#FFAB00] mb-2">
                        $20 <span className="text-sm text-[#333333] dark:text-gray-300 font-medium">/ per month</span>
                    </div>

                    <ul className="space-y-4 mb-6 text-sm mt-8 text-[#666666] dark:text-gray-300">
                        {monthlyPlan.map((feature, index) => (
                            <li key={index} className="flex flex-row gap-2 items-center">
                                <FaRegCheckCircle className="text-xl text-green-600" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="inline-flex items-center justify-center gap-3 py-3 w-full text-sm font-semibold bg-[#FFAB00] text-white hover:bg-[#ffbc37] dark:hover:bg-[#ffbc37]/90 rounded-full px-7 transition-colors">
                        Upgrade to Professional (Monthly)
                    </button>
                </div>

                {/* Yearly Plan */}
                <div className="bg-white dark:bg-[#333333] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-[#FFAB00]/40 transition-colors duration-200">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-[#EAEAEA] flex items-center gap-2">
                        <GiCalendarHalfYear className="text-xl text-[#FFAB00]" />
                        Yearly Plan
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                        Best value for individuals committed to long-term productivity — includes a $20 annual discount
                    </p>
                    <div className="text-3xl font-bold text-gray-900 dark:text-[#FFAB00] mb-2">
                        $120 <span className="text-sm text-[#333333] dark:text-gray-300 font-medium">/ per year</span>
                    </div>

                    <ul className="space-y-4 mb-6 text-sm mt-8 text-[#666666] dark:text-gray-300">
                        {yearlyPlan.map((feature, index) => (
                            <li key={index} className="flex flex-row gap-2 items-center">
                                <FaRegCheckCircle className="text-xl text-green-600" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <button className="inline-flex items-center justify-center gap-3 py-3 w-full text-sm font-semibold bg-[#eeeeee] dark:bg-[#444444] text-[#666666] dark:text-[#EAEAEA] hover:bg-[#666666] hover:text-white dark:hover:bg-[#FFAB00] dark:hover:text-black rounded-full px-7 transition-colors">
                        Upgrade to Professional (Yearly – Save $20)
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-[#333333] rounded-2xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
                <h2 className="text-lg font-semibold text-[#0A0A04] dark:text-[#CCCCCC] mb-2">
                    Payment History
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                    Your recent billing transactions
                </p>

                {paymentHistory.length === 0 ? (
                    <div className="text-center text-gray-400 text-sm py-6">
                        No payment history available
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead>
                                <tr className="text-gray-500 border-b border-gray-200 dark:border-gray-700">
                                    <th className="pb-3 font-medium">Date</th>
                                    <th className="pb-3 font-medium">Plan</th>
                                    <th className="pb-3 font-medium">Amount</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Invoice</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-[#CCCCCC]">
                                {paymentHistory.map((payment, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-100 dark:border-gray-700 last:border-0 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-[#444444]"
                                    >
                                        <td className="py-3">{payment.date}</td>
                                        <td>{payment.plan}</td>
                                        <td>{payment.amount}</td>
                                        <td>
                                            <span
                                                className={`font-medium ${payment.status === "Paid"
                                                    ? "text-green-600"
                                                    : payment.status === "Pending"
                                                        ? "text-yellow-500"
                                                        : "text-red-500"
                                                    }`}
                                            >
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td>
                                            <a
                                                href="#"
                                                className="text-[#FFAB00] hover:underline font-medium"
                                            >
                                                {payment.invoice}
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Payment History */}
            {/* <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Payment History
                </h2>
                <p className="text-gray-500 text-sm mb-4">Your billing transactions</p>
                <div className="text-center text-gray-400 text-sm py-6">
                    No payment history available
                </div>
            </div> */}
        </>
    );
};

export default Billing;
