import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess({ utr, setStage }) {
  useEffect(() => {
    // Auto move to test after 5 seconds
    const timer = setTimeout(() => {
      setStage("test");
    }, 5000);

    return () => clearTimeout(timer);
  }, [setStage]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#0b0b3e] to-black text-white">
      <div className="bg-white/10 p-8 rounded-2xl shadow-lg flex flex-col items-center w-full max-w-lg">
        {/* Success Icon */}
        <CheckCircle className="w-16 h-16 text-green-400 mb-4" />

        {/* New Verified UI Block */}
        <div className="flex flex-col items-center justify-center flex-1 p-6">
          <h1 className="text-3xl font-bold text-green-500 mb-4">
            ✅ Payment Verified
          </h1>
          <p className="mb-4 text-lg">
            Your UTR:{" "}
            <span className="font-mono text-black bg-white px-2 rounded">
              {utr}
            </span>
          </p>
          <p className="text-gray-200 mb-6">
            Your test will start in <b>5 seconds</b>...
          </p>
          <button
            onClick={() => setStage("test")}
            className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded transition"
          >
            Start Test Now
          </button>
        </div>
      </div>
    </div>
  );
}
