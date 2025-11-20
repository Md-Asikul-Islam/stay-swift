const PaymentForm = () => {
  return (
    <form className="mt-8 space-y-6">

      {/* Name */}
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white  outline-0 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="john@example.com"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white  outline-0 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Check-in Date */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Check-in</label>
        <input
          type="date"
          name="checkin"
          id="checkin"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white  outline-0 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Checkout Date */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Check-out</label>
        <input
          type="date"
          name="checkout"
          id="checkout"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white  outline-0 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Card Number */}
      <div className="space-y-1">
        <label htmlFor="card" className="text-sm font-medium text-gray-700">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          placeholder="1234 5678 9012 3456"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white  outline-0 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

      {/* Expiry + CVV */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="expiry" className="text-sm font-medium text-gray-700">
            Expiry
          </label>
          <input
            type="text"
            id="expiry"
            placeholder="MM/YY"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white  outline-0 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="cvv" className="text-sm font-medium text-gray-700">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            placeholder="123"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white  outline-0 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition"
          />
        </div>
      </div>

      {/* Pay Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold shadow-lg transition-all duration-200"
      >
        Pay Now ($10)
      </button>
    </form>
  );
};

export default PaymentForm;
