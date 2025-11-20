import Link from "next/link";

const RegistrationForm = () => {
  return (
    <form className="w-full max-w-md mx-auto p-8 space-y-6 ">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Create an Account
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="fname"
            className="text-sm font-medium text-gray-600 mb-1"
          >
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="lname"
            className="text-sm font-medium text-gray-600 mb-1"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-600 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="text-sm font-medium text-gray-600 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl shadow-md transition"
      >
        Create Account
      </button>

      <p className="text-center text-sm text-gray-600 mt-3">
        Already have an account?
        <Link href="/login" className="text-indigo-600 hover:underline ml-1">
          Sign in
        </Link>
        .
      </p>
    </form>
  );
};

export default RegistrationForm;
