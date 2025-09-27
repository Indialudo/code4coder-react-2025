import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

import { questions } from "./testData";
import TestFooter from "./TestFooter";
import Submission from "./Submission";

export default function Code4CoderTest() {
  const [stage, setStage] = useState("intro"); // intro | verifying | paymentSuccess | test | done
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
  });
  const [showPayment, setShowPayment] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  // UTR related state
  const [utr, setUtr] = useState("");
  const [utrError, setUtrError] = useState("");

  // Test timer
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 35 minutes in seconds

  // Sounds
  const tickSound = new Audio(
    "https://www.soundjay.com/button/beep-07.mp3"
  );
  const alertSound = new Audio(
    "https://www.soundjay.com/button/beep-10.mp3"
  );

  // Anti-copy / screenshot state
  const [restricted, setRestricted] = useState(false);

  // Simple UPI QR
  const upiValue = `upi://pay?pa=9608960535@ybl&pn=Code4Coder&am=49&cu=INR`;

  // On form submit -> show payment popup
  const handleUserSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
    setUtr("");
    setUtrError("");
  };

  // Verify UTR (only accept "developer8085")
  const handleVerifyUtr = () => {
    if (utr.trim() !== "developer8085") {
      setUtrError("❌ Invalid UTR! Please enter correct UTR.");
      return;
    }
    setUtrError("");
    setShowPayment(false);
    setStage("verifying");

    // simulate backend check
    setTimeout(() => {
      setStage("paymentSuccess");
    }, 2000);
  };

  // Auto move to test after 5 seconds on success
  useEffect(() => {
    if (stage === "paymentSuccess") {
      const timer = setTimeout(() => setStage("test"), 5000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // Auto-submit timer for 35 minutes with live countdown & sound
  useEffect(() => {
    let interval;
    if (stage === "test") {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            console.log("Auto-submitting answers:", answers);
            alert("⏰ Time's up! Test submitted automatically.");
            setStage("done");
            return 0;
          }

          // Play tick sound every second
          tickSound.play().catch((e) => {});

          // Last 10 seconds alert sound
          if (prev <= 10) {
            alertSound.play().catch((e) => {});
          }

          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [stage, answers]);

  const handleOption = (index) =>
    setAnswers({ ...answers, [current]: index });

  const handleManualSubmit = () => {
    console.log("User submitted answers:", answers);
    setStage("done");
  };

  // Format seconds to mm:ss
  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Anti-copy / screenshot functionality
  useEffect(() => {
    if (stage !== "test") return; // only active during test

    const handleKeyDown = (e) => {
      // Detect PrintScreen key
      if (e.key === "PrintScreen") {
        setRestricted(true);
        navigator.clipboard.writeText(""); // Clear clipboard
        setTimeout(() => setRestricted(false), 3000);
      }

      // Disable Ctrl/Cmd + C, S, P
      if ((e.ctrlKey || e.metaKey) && ["c", "s", "p"].includes(e.key.toLowerCase())) {
        e.preventDefault();
        setRestricted(true);
        setTimeout(() => setRestricted(false), 3000);
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault(); // Disable right-click
      setRestricted(true);
      setTimeout(() => setRestricted(false), 3000);
    };

    const handleSelectStart = (e) => e.preventDefault(); // Disable text selection

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, [stage]);


  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "PrintScreen") {
      alert("Screenshots are not allowed!");
      navigator.clipboard.writeText(""); // Clear clipboard
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#0b0b3e] to-black text-white">
      {/* Restricted overlay */}
      {restricted && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <p className="text-red-500 text-2xl font-bold">
            🚫 Screenshot / Copy Restricted
          </p>
        </div>
      )}

      {/* INTRO FORM */}
      {stage === "intro" && (
        <div className="flex flex-col items-center justify-center flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Code4Coder Joining Test</h1>
          <form
            onSubmit={handleUserSubmit}
            className="bg-white text-black rounded-xl p-6 w-full max-w-md shadow-lg space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border rounded"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border rounded"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              required
              className="w-full p-2 border rounded"
              onChange={(e) => setUser({ ...user, mobile: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              required
              className="w-full p-2 border rounded"
              onChange={(e) => setUser({ ...user, location: e.target.value })}
            />
            <button
              style={{ backgroundColor: "#080935" }}
              type="submit"
              className="w-full text-white py-2 rounded hover:bg-green-800"
            >
              Proceed
            </button>
          </form>

          {showPayment && stage === "intro" && (
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
                  After payment, enter the transaction UTR / Transaction ID
                  below and click <b>Verify UTR</b>.
                </p>
                <input
                  type="text"
                  placeholder="Enter UTR"
                  value={utr}
                  onChange={(e) => setUtr(e.target.value)}
                  className="w-full p-2 border rounded mt-3"
                />
                {utrError && (
                  <p className="text-red-600 mt-2 text-sm">{utrError}</p>
                )}
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
      )}

      {/* VERIFYING */}
      {stage === "verifying" && (
        <div className="flex flex-col items-center justify-center flex-1 p-6">
          <h1 className="text-2xl font-bold text-blue-400 mb-4">
            🔄 Verifying your UTR...
          </h1>
          <p className="text-gray-300">Please wait a moment.</p>
        </div>
      )}

      {/* PAYMENT SUCCESS */}
      {stage === "paymentSuccess" && (
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
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            Start Test Now
          </button>
        </div>
      )}

      {/* TEST */}
      {stage === "test" && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-100 text-black">
          <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
            {/* Timer */}
            <div className="text-right text-lg font-bold mb-4 text-red-600">
              ⏱ Time Left: {formatTime(timeLeft)}
            </div>

            <h2 className="text-xl font-bold mb-4">
              Q{current + 1}. {questions[current].question}
            </h2>
            <div className="space-y-2">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  className={`w-full p-2 rounded border ${
                    answers[current] === idx
                      ? "bg-green-700 text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleOption(idx)}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                disabled={current === 0}
                onClick={() => setCurrent(current - 1)}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Previous
              </button>
              {current < questions.length - 1 ? (
                <button
                  onClick={() => setCurrent(current + 1)}
                  className="px-4 py-2 bg-green-700 text-white rounded"
                  style={{ backgroundColor: "#080935" }}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleManualSubmit}
                  className="px-4 py-2 bg-green-700 text-white rounded"
                   style={{ backgroundColor: "red" }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* DONE */}
      {stage === "done" && (
        <Submission/>
      )}

      {/* FOOTER */}
     <TestFooter/>
    </div>
  );
}
