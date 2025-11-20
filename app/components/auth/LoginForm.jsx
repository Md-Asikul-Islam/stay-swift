import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="w-full max-w-sm mx-auto  p-6 space-y-4 ">
      <h2 className="text-2xl font-semibold text-center mb-2">Welcome Back</h2>
      <p className="text-center text-gray-500 text-sm mb-4">
        Login to continue
      </p>

      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-1 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow-md transition"
      >
        Login
      </button>

      <p className="text-center text-gray-500 text-sm mt-2">
        Forgot your password?
        <Link href="/register" className="text-blue-600 hover:underline ml-1">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
