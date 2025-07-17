import { BsGithub, BsGoogle } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../ReduxConfig/Slices/AuthSlice";
const index = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    // Handle login logic here
    // For example, you can dispatch a login action to your Redux store
    dispatch(loginThunk(data));
  };
  return (
    <div className="w-4/6 h-3/4 my-10 rounded-lg shadow-lg">
      <div className="flex justify-center items-center h-full">
        <div className="w-7/12 h-full rounded-s-lg flex justify-center items-center pe-2 bg-[url('/assets/images/Login4.jpg')] bg-cover bg-center">
          <div className="text-center !bg-transparent">
            <h3 className="text-xl !bg-transparent font-semibold mb-2">
              Welcome Back!
            </h3>
            <p className="text-gray-600 !bg-transparent">
              Please enter your credentials to login.
            </p>
          </div>
        </div>
        <div className="w-5/12 h-full flex flex-col justify-center items-center p-6">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                {...register("Username", { required: "Username is required" })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your username"
                id="username"
              />
              {errors.Username && (
                <p className="text-red-500">{errors.Username.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
                type="password"
                id="password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="!bg-blue-500 hover:!bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              <FiLogIn className="inline-block mr-2" />
              Login
            </button>
            <a href={`${import.meta.env.VITE_SERVER_URL}/auth/google`}>
              <button
                type="button"
                className="!bg-gray-200 hover:!bg-gray-300 !text-gray-800 my-3 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                <BsGoogle className="inline-block mr-2" />
                Google
              </button>
            </a>
            <button
              type="button"
              className="!bg-blue-500 hover:!bg-blue-600 mb-3 flex items-center justify-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              <CgFacebook className="inline-block mr-2" />
              Facebook
            </button>
            <button
              type="button"
              className="!bg-gray-700 hover:!bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              <BsGithub className="inline-block mr-2" />
              Github
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
