import { useNavigate } from "react-router-dom";
import Group from "../assests/Group 17.png";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleLoginNavigation = () => {
    navigate("/login");
  };
  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <div className="w-1/3 bg-gray-200">
        <h3 className="text-h3 mt-5 ml-5 font-semibold">Logo</h3>
        <img
          src={Group}
          alt="Group"
          className="h-full w-full object-contain grayscale mt-32"
        />
      </div>

      <div className="w-2/3 flex flex-col justify-center items-center bg-white">
        <div className="w-3/5 h-full flex flex-col justify-between mt-16">
          <div>
            <button
              className="text-gray-400 text-smallText py-2 rounded"
              type="button"
              onClick={handleHomeNavigation}
            >
              <span className="mr-2">{"<"}</span>
              Back to home
            </button>
            <div className="mb-10 mt-6">
              <h1 className="text-h1 font-bold mb-3">Register</h1>
              <div className="text-gray-400 text-subheading">
                Enter your details to start your pension process
              </div>
            </div>
            <form className="w-full">
              <div>
                <label className="block text-gray-600">RSA Pin*</label>
                <input
                  type="text"
                  placeholder="xxxxxx"
                  className="w-full h-14 border rounded-sm border-gray-300 mb-6 p-3"
                />
              </div>

              <div>
                <label className="block text-gray-600">Surname*</label>
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full h-14 border rounded-sm border-gray-300 mb-6 p-3"
                />
              </div>

              <div>
                <label className="block text-gray-600">Email Address*</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full h-14 border rounded-sm border-gray-300 mb-6 p-3"
                />
              </div>

              <div className="flex justify-between gap-6 mb-6">
                <div className="w-full">
                  <label className="block text-gray-600">Password*</label>
                  <input
                    type="password"
                    placeholder="xxxxxx"
                    className="w-full h-14 border rounded-sm border-gray-300 p-3"
                  />
                  <div className="text-smallCaption text-gray-400 py-2">
                    Help text
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-gray-600">
                    Confirm Password*
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full h-14 border rounded-sm border-gray-300 p-3"
                  />
                </div>
              </div>

              <button className="bg-primary-700 text-white text-body w-full py-3 rounded">
                Register
              </button>
              <div className="text-gray-400 text-body mt-6">
                Already have an account or are not a retiree?{" "}
                <button
                  className="text-primary-600 font-medium"
                  type="button"
                  onClick={handleLoginNavigation}
                >
                  Login here
                </button>
              </div>
            </form>
          </div>
          <div className="text-smallCaption mb-6 text-center">
            Powered by StellarSync Technology © 2024 v.1.0.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
