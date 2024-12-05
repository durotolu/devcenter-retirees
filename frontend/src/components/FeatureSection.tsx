import Group from "../assests/Group 17.png";

const FeatureSection = () => {
  return (
    <section className="pt-16 pb-8 flex text-left px-32">
      <div className="container mx-auto text-left items-start flex flex-col justify-center">
        <h2 className="text-h1 font-black text-darkGreen">
          One Platform, <br />
          Two Solutions
        </h2>
        <p className="text-gray-400 mt-4 text-h3 font-semibold">
          Simplifying Benefits for Retirees and <br /> Employers.
        </p>
        <p className="text-gray-400 mt-4 text-subheading leading-9">
          Whether you're a retiree claiming your benefits or an employer
          <br />
          submitting employee data for verification, we've got you covered with
          a <br />
          secure and seamless experience.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-primary-600 text-white px-8 py-3 rounded font-semibold">
            Claim Your Benefits
          </button>
          <button className="border border-primary-600 text-primary-600 text-body rounded py-3 px-8">
            Upload Employee Data
          </button>
        </div>
      </div>
      <div className="h-[70%] w-[70%]">
        <img src={Group} alt="Group" className="object-contain" />
      </div>
    </section>
  );
};

export default FeatureSection;
