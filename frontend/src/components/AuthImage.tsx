import Group from "../assests/Group 17.png";

const AuthImage = () => (
  <div className="w-1/3 bg-gray-200">
    <h3 className="text-h3 mt-5 ml-5 font-semibold">Logo</h3>
    <img
      src={Group}
      alt="Group"
      className="h-full w-full object-contain grayscale mt-32"
    />
  </div>
);

export default AuthImage;
