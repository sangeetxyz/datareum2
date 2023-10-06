"use client";
import Footer from "@/components/footers/footer";
import DashHeader from "@/components/headers/dashHeader";
import React from "react";
import privacySvg from "../../../public/privacy/privacy.svg";
const Privacy = () => {
  return (
    <div className="min-h-screen bg-stone-950 pt-20 text-stone-100">
      <DashHeader />
      <div className="flex justify-center bg-gradient-to-b from-stone-950 to-stone-900">
        <img src={privacySvg.src} alt="" className="max-w-6xl " />
      </div>
      <div className="flex flex-col items-center bg-stone-900">
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            Privacy Policy
          </div>
          <div className="text-justify">
            At Datareum, we are committed to safeguarding your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and protect your data when you
            use our decentralized health data exchange platform. By accessing
            and using our website, you consent to the practices described in
            this policy.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            1. Data Collection and Usage
          </div>
          <div className="text-justify">
            We collect various types of data, including user information, health
            data, and usage data. This data is used for purposes such as data
            exchange, research collaboration, and platform improvement. Your
            security of data is of utmost importance to us, and we employ
            industry-standard measures to protect it. You have control over your
            data and can exercise your rights by contacting our Privacy Officer.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            2. Data Security
          </div>
          <div className="text-justify">
            We employ industry-standard security measures to safeguard your data
            from unauthorized access, disclosure, or alteration. Your data is
            encrypted during transmission and at rest, and access is restricted
            to authorized personnel only.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            3. Data Retention
          </div>
          <div className="text-justify">
            We retain data as necessary to fulfill the purposes outlined in this
            policy. Healthcare data is subject to specific retention periods in
            accordance with applicable laws and regulations.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            4. Your Choices
          </div>
          <div className="text-justify">
            You have the right to access, update, or delete your personal
            information and control the sharing and usage of your health data on
            our platform. For specific requests or to exercise your rights,
            please contact our Privacy Officer.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            5. Questions and Contact
          </div>
          <div className="text-justify">
            If you have questions about this Privacy Policy, our data practices,
            or want more information about data handling on our platform, please
            contact our Privacy Officer at contact@email.com.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            6. Policy Changes
          </div>
          <div className="text-justify">
            We may update this Privacy Policy to reflect changes in our data
            practices or legal requirements. We will notify you of significant
            changes, and your continued use of our platform constitutes your
            consent to the updated policy.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
