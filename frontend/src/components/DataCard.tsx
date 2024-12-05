import Shield from "../assests/shield-check.svg";

type DataCardProps = {
  icon: string;
  header: string;
  details: string;
}

  const DataCard = ({icon, header, details} : DataCardProps) => {
  return (
    <div className="p-8 pb-10 bg-white rounded-2xl">
      <div>
        <img src={icon} alt="shield" className="object-contain" />
      </div>
      <div className="text-h6 font-bold mt-8">{header}</div>
      <p className="text-gray-600 mt-4 text-subheading leading-8">{details}</p>
    </div>
  );
};

export default DataCard;
