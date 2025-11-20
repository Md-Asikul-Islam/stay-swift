import PaymentForm from "@/app/components/payment/PaymentForm";

const PaymentPage = () => {
  return (
    <section className="container px-4">
      <div className="max-w-xl mx-auto mt-[120px] bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="font-bold text-3xl text-gray-800 mb-2">
          Payment Details
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          You have selected <b>Effotel By Sayaji Jaipur</b>.  
          The base price is <b>$10</b>.
        </p>

        <PaymentForm />
      </div>
    </section>
  );
};

export default PaymentPage;
