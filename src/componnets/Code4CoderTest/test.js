import React, { useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";
import moment from "moment";

export default function IntroForm({
  user,
  setUser,
  showPayment,
  setShowPayment,
  utr,
  setUtr,
  utrError,
  setUtrError,
  setStage,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const upiValue = `upi://pay?pa=9608960535@ybl&pn=Code4Coder&am=49&cu=INR`;
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzoI5cy7A5utQyhf-no4dNKEMSEH9virvLYsz5zpeHUvZ-sM1q-5AUY0Js-1kVDNweetQ/exec";

  // Handle form submit → send to Google Sheet + open payment popup
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("Name", user.name);
    formDataToSend.append("Email", user.email);
    formDataToSend.append("Mobile", user.mobile);
    formDataToSend.append("Location", user.location);
    formDataToSend.append("Time", moment().format("MM/DD h:mmA"));

    try {
      await axios.post(scriptURL, formDataToSend);
      console.log("✅ Data submitted to Google Sheet");

      // Clear form (optional)
      setUser({ name: "", email: "", mobile: "", location: "" });

      // Show payment popup
      setShowPayment(true);
      setUtr("");
      setUtrError("");
    } catch (error) {
      console.error("❌ Error submitting to Google Sheet", error);
      alert("Failed to save your data. Please try again.");
    }

    setIsLoading(false);
  };

  // Verify UTR
  const handleVerifyUtr = () => {
    if (utr.trim() !== "developer8085") {
      setUtrError("❌ Invalid UTR! Please enter correct UTR.");
      return;
    }
    setUtrError("");
    setShowPayment(false);
    setStage("verifying");

    setTimeout(() => {
      setStage("paymentSuccess");
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 p-6">
      <h1 className="text-3xl font-bold mb-6">Code4Coder Joining Test</h1>

      {/* USER FORM */}
      <form
        onSubmit={handleUserSubmit}
        className="bg-white text-black rounded-xl p-6 w-full max-w-md shadow-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Name"
          required
          className="w-full p-2 border rounded"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          required
          className="w-full p-2 border rounded"
          value={user.mobile}
          onChange={(e) => setUser({ ...user, mobile: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          required
          className="w-full p-2 border rounded"
          value={user.location}
          onChange={(e) => setUser({ ...user, location: e.target.value })}
        />
        <button
          style={{ backgroundColor: "#080935" }}
          type="submit"
          className="w-full text-white py-2 rounded hover:bg-green-800"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Proceed"}
        </button>
      </form>

      {/* PAYMENT POPUP */}
      {showPayment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-xl w-96 text-center text-black">
            <h2 className="text-xl font-bold mb-2">Pay ₹49 to Start Test</h2>
            <p className="mb-3">
              Scan the QR code with your UPI app and complete payment.
            </p>
            <div className="mb-3 flex justify-center">
              <QRCode value={upiValue} size={180} />
            </div>
            <p className="text-sm mb-2">
              After payment, enter the transaction UTR / Transaction ID below
              and click <b>Verify UTR</b>.
            </p>
            <input
              type="text"
              placeholder="Enter UTR"
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
              className="w-full p-2 border rounded mt-3"
            />
            {utrError && <p className="text-red-600 mt-2 text-sm">{utrError}</p>}

            <div className="flex gap-2 justify-center mt-4">
              <button
                onClick={() => setShowPayment(false)}
                className="px-4 py-2 rounded border"
              >
                Cancel
              </button>
              <button
                onClick={handleVerifyUtr}
                className="px-4 py-2 rounded text-white"
                style={{ backgroundColor: "blue" }}
              >
                Verify UTR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
