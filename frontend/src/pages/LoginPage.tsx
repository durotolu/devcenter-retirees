import { useNavigate } from "react-router-dom";
import Group from "../assests/Group 17.png";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleRegisterNavigation = () => {
    navigate("/register");
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
              <h1 className="text-h1 font-bold mb-3">Login</h1>
              <div className="text-gray-400 text-subheading">
                Enter your details to access your account
              </div>
            </div>
            <form className="w-full">
              <label className="block text-gray-600">Email Address*</label>
              <input
                type="email"
                placeholder="xxxxx"
                className="w-full h-14 border rounded-sm border-gray-300 mb-6 p-3"
              />
              <label className="block text-gray-600">Password*</label>
              <input
                type="password"
                placeholder="x x x x x x"
                className="w-full h-14 border rounded-sm border-gray-300 p-3"
              />
              <button className="text-primary-500 text-smallText py-2 rounded mb-6">
                Forgot password?
              </button>
              <button className="bg-primary-600 text-white text-body w-full py-3 rounded">
                Login
              </button>
              <div className="text-gray-400 text-subheading mt-6">
                Are you a retiree without an account?{" "}
                <button
                  className="text-primary-700 font-medium"
                  type="button"
                  onClick={handleRegisterNavigation}
                >
                  Register here
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
export default LoginPage;
