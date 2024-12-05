import React, { useState } from "react";
import Woman from "../assests/file (9).png";
import Man from "../assests/file (11).png";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState<"retiree" | "pfa" | "mda">(
    "retiree"
  );

  const retireeSteps = [
    {
      heading: "Create Your Profile",
      description:
        "Start by creating an account. You'll be asked to provide basic personal information to get started.",
    },
    {
      heading: "Submit Employment History",
      description:
        "Enter relevant employment details, through a simple, guided form. This information helps verify your eligibility for retirement payments.",
    },
    {
      heading: "Verify and Confirm",
      description:
        "Once submitted, your information is reviewed for accuracy. Additional verification documents may be required.",
    },
    {
      heading: "Receive Your Benefits",
      description:
        "Once your history is confirmed, you can begin receiving your retirement payments seamlessly, right into your bank account.",
    },
  ];
  const pfaSteps = [
    {
      heading: "Verify Retiree Information",
      description:
        "As a PFA, your role is to review and verify the employment history submitted by retirees. Cross-check the data provided to ensure it aligns with official records, ensuring accuracy and eligibility.",
    },
    {
      heading: "Capture Biometric Data",
      description:
        "Once the retiree's employment details have been verified, PFAs are responsible for capturing biometric data, such as fingerprints and facial recognition. This added layer of security helps prevent fraud and ensures the authenticity of the retiree's claims.",
    },
    {
      heading: "Submit and Approve",
      description:
        "After validating the information and capturing biometrics, submit the data to the platform for final approval. This step ensures that the retiree can start receiving their payments seamlessly.",
    },
  ];
  const mdaSteps = [
    {
      heading: "Upload Employee Records",
      description:
        "Employers can log in and upload employee data for compliance and verification purposes. This helps ensure that former employees' records are correctly matched to receive retirement benefits.",
    },
    {
      heading: "Review and Validate",
      description:
        "Our platform automatically validates the uploaded records against internal databases, making sure the information is accurate and up to date.",
    },
    {
      heading: "Ensure Compliance",
      description:
        "By completing this process, you'll meet regulatory requirements while ensuring your employees have access to the benefits they've earned.",
    },
  ];

  return (
    <section className="bg-white pt-12 flex">
      <div className="flex items-end">
        <img src={Man} alt="Man" className="object-contain" />
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-h1 font-bold text-darkGreen text-center">
          How it <span className="text-primary-600">works</span>
        </h2>
        <p className="text-gray-400 mt-2 text-subheading leading-9 text-center">
          Follow these easy steps to get started
        </p>
        <div className="mt-8 flex justify-center items-start mx-auto space-x-4 bg-gray-100 rounded-2xl max-w-4xl p-3">
          <button
            className={`px-6 py-3 w-1/3 text-h6 font-medium rounded ${
              activeTab === "retiree"
                ? "text-primary-600 bg-white rounded-2xl"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab("retiree")}
          >
            Retiree
          </button>
          <button
            className={`px-6 py-3 w-1/3 text-h6 font-medium rounded ${
              activeTab === "pfa"
                ? "text-primary-600 bg-white rounded-2xl"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab("pfa")}
          >
            PFA
          </button>
          <button
            className={`px-6 py-3 w-1/3 text-h6 font-medium rounded ${
              activeTab === "mda"
                ? "text-primary-600 bg-white rounded-2xl"
                : "text-gray-700"
            }`}
            onClick={() => setActiveTab("mda")}
          >
            MDA
          </button>
        </div>
        <div className="mt-8 px-8">
          {activeTab === "retiree" && (
            <ul className="space-y-10">
              {retireeSteps.map(({ heading, description }, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="flex text-darkGreen bg-gray-100 rounded-[50%] w-16 h-14 mr-4 p-6 font-bold text-center">
                    <span className="relative bottom-2">
                    {index + 1}
                    </span>
                    </div>
                  <div>
                    <div className="text-darkGreen mb-3 text-subheading font-medium">
                      {heading}
                    </div>
                    <p className="leading-8 text-gray-400 text-subheading">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {activeTab === "pfa" && (
            <ul className="space-y-10">
              {pfaSteps.map(({ heading, description }, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="flex text-darkGreen bg-gray-100 rounded-[50%] w-16 h-14 mr-4 p-6 font-bold text-center">
                    <span className="relative bottom-2">
                    {index + 1}
                    </span>
                    </div>
                  <div>
                    <div className="text-darkGreen mb-3 text-subheading font-medium">
                      {heading}
                    </div>
                    <p className="leading-8 text-gray-400 text-subheading">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {activeTab === "mda" && (
            <ul className="space-y-10">
              {mdaSteps.map(({ heading, description }, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="flex text-darkGreen bg-gray-100 rounded-[50%] w-16 h-14 mr-4 p-6 font-bold text-center">
                    <span className="relative bottom-2">
                    {index + 1}
                    </span>
                    </div>
                  <div>
                    <div className="text-darkGreen mb-3 text-subheading font-medium">
                      {heading}
                    </div>
                    <p className="leading-8 text-gray-400 text-subheading">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex items-end relative top-12">
        <img src={Woman} alt="Woman" className="object-contain" />
      </div>
    </section>
  );
};

export default HowItWorksSection;
