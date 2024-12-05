import DataCard from "./DataCard";
import Shield from "../assests/shield-check.svg";
import Profiles from "../assests/users-profiles-03.svg";
import BankNote from "../assests/bank-note-05.svg";
import Book from "../assests/book-02.svg";
import Help from "../assests/help-circle-contained.svg";

const cardsData = [
  {
    icon: Shield,
    header: "Secure and Reliable",
    details:
      "We prioritize your data security with advanced encryption and strict privacy protocols, ensuring that your information is always protected.",
  },
  {
    icon: Profiles,
    header: "User-Friendly Experience",
    details:
      "Our platform is designed with simplicity in mind. Whether you're a retiree submitting your employment history or an employer managing records, the process is quick and easy, with clear instructions at every step.",
  },
  {
    icon: BankNote,
    header: "Accurate and Timely Payments",
    details:
      "For retirees, our system ensures that once your employment history is verified, payments are processed promptly and accurately. No delays, just the benefits you've earned.",
  },
  {
    icon: Book,
    header: "Comprehensive Compliance for Employers",
    details:
      "Employers can rest assured knowing that they are meeting all regulatory requirements by securely uploading employee data. Our platform takes the guesswork out of compliance.",
  },
  {
    icon: Help,
    header: "24/7 Support",
    details:
      "Our dedicated support team is available around the clock to assist with any questions or concerns you may have, ensuring a seamless experience from start to finish.",
  },
];

const DataSection = () => {
  return (
    <section className="py-32 px-32 bg-gray-100 w-full">
      <h1 className="text-h1 font-bold text-darkGreen text-center mb-20">
        Retiree data processing
        <br /> <span className="text-primary-600">made easy!</span>
      </h1>
      <div className="flex flex-wrap gap-x-8 gap-y-10">
        {cardsData.map(({icon, header, details}) => (
          <DataCard icon={icon} header={header} details={details} />
        ))}
      </div>

      {/* <p className="text-gray-600 mt-4">
        Whether you're a retiree claiming your benefits or an employer
        submitting employee data for verification, our secure platform provides
        a seamless experience.
      </p> */}
    </section>
  );
};

export default DataSection;
