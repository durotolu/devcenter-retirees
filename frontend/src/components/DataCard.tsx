import Shield from "../assests/shield-check.svg";

type DataCardProps = {
  icon: string;
  header: string;
  details: string;
}

  const DataCard = ({icon, header, details} : DataCardProps) => {
  return (
    <div className="p-8 pb-20 bg-white max-w-md rounded-2xl">
      <div>
        <img src={icon} alt="shield" className="object-contain" />
      </div>
      <div className="text-h6 font-bold mt-8">{header}</div>
      <p className="text-gray-600 mt-4 text-subheading leading-8">{details}</p>
      {/* <h1 className="text-5xl font-bold text-darkGreen text-center">
        Retiree data processing<br /> <span className="text-primary-600">made easy!</span>
      </h1>
      <p className="text-gray-600 mt-4">
        Whether you're a retiree claiming your benefits or an employer
        submitting employee data for verification, our secure platform provides
        a seamless experience.
      </p> */}
    </div>
  );
};

export default DataCard;
