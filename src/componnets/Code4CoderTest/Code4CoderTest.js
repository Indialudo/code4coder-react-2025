import React, { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowForward, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

// Dummy questions (replace with 30)
const questions = [
    {
        id: 1,
        question: "Which hook is used to manage state in React?",
        options: ["useEffect", "useState", "useReducer", "useMemo"],
        answer: 1,
    },
    {
        id: 2,
        question: "What does '===' mean in JavaScript?",
        options: ["Assignment", "Loose equality", "Strict equality", "None"],
        answer: 2,
    },
    // TODO: Add up to 30 questions
];

export default function Code4CoderTest() {
    const [stage, setStage] = useState("intro"); // intro | test | done


    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        location: "",
    });
    const [showPayment, setShowPayment] = useState(false);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});

    // Handle form submit → show QR
    const handleUserSubmit = (e) => {
        e.preventDefault();
        setShowPayment(true);
    };

    // After successful payment → close QR + start test
    const handlePaymentSuccess = () => {
        setShowPayment(false);
        setStage("test");
    };

    // Save user answer
    const handleOption = (index) => {
        setAnswers({ ...answers, [current]: index });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#0b0b3e] to-black text-white">
            {/* ------------------ INTRO SCREEN ------------------ */}
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
                        style={{backgroundColor:"#080935"}}
                            type="submit"
                            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
                        >
                            Proceed
                        </button>
                    </form>

                    {/* Payment Popup */}
                    {/* Payment Popup */}
                    {showPayment && stage === "intro" && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                            <div className="bg-white p-6 rounded-xl w-96 text-center text-black">
                                <h2 className="text-xl font-bold mb-4">Pay ₹49 to Start Test</h2>
                                <p className="mb-4">Scan or click below to pay</p>
                                <QRCode
                                    value="upi://pay?pa=7991152659@ybl&pn=Code4Coder&am=1&cu=INR"
                                    size={200}
                                />

                                <button
                                    onClick={handlePaymentSuccess}
                                    className="bg-green-700 text-white px-4 py-2 rounded mt-4"
                                >
                                    I Have Paid
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            )}

            {/* ------------------ TEST SCREEN ------------------ */}
            {stage === "test" && (
                <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-100 text-black">
                    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
                        <h2 className="text-xl font-bold mb-4">
                            Q{current + 1}. {questions[current].question}
                        </h2>
                        <div className="space-y-2">
                            {questions[current].options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    className={`w-full p-2 rounded border ${answers[current] === idx
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
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    onClick={() => setStage("done")}
                                    className="px-4 py-2 bg-green-700 text-white rounded"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ------------------ COMPLETION SCREEN ------------------ */}
            {stage === "done" && (
                <div className="flex flex-col items-center justify-center flex-1 p-6">
                    <h1 className="text-3xl font-bold mb-4">
                        Thank you for completing the test 🎉
                    </h1>
                    <p className="mb-6">Your submission has been recorded.</p>
                </div>
            )}

            {/* ------------------ FOOTER ------------------ */}
            <footer className="body-font bg-gradient-to-r to-black from-[#0b0b3e] text-white">
                <div className="container md:px-5 px-2 py-10 mx-auto max-w-screen-xl border-t border-gray-400">
                    <div className="flex flex-wrap md:text-left text-center order-first ">
                        <div className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
                            <h2 className="font-bold text-lg">Company</h2>
                            <nav className="list-none mt-5 mb-10 space-y-2">
                                <Link to="/link/about-us">
                                    <li className="hover:tracking-widest cursor-pointer flex items-center gap-1">
                                        <IoIosArrowForward /> About Us
                                    </li>
                                </Link>
                                <Link to="/link/privacy-policy">
                                    <li className="hover:tracking-widest cursor-pointer flex items-center gap-1">
                                        <IoIosArrowForward /> Privacy Policy
                                    </li>
                                </Link>
                                <Link to="/link/term-condition">
                                    <li className="hover:tracking-widest cursor-pointer flex items-center gap-1">
                                        <IoIosArrowForward /> Terms & Condition
                                    </li>
                                </Link>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
                            <h2 className="font-bold text-lg">Contact</h2>
                            <nav className="list-none mt-5 mb-10 space-y-2">
                                <li className="flex items-center gap-2">
                                    <FaLocationDot /> India
                                </li>
                                <li className="flex items-center gap-2">
                                    <IoCall /> 9341045976
                                </li>
                                <li className="flex items-center gap-2">
                                    <IoMdMail /> info@code4coder.com
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 sm:w-1/2 w-full md:px-4">
                            <h2 className="font-bold text-lg">Opening</h2>
                            <nav className="list-none mt-5 mb-10">
                                <li className="text-xl sm:text-2xl font-bold">24x7</li>
                            </nav>
                        </div>

                        <Link
                            to="https://wa.me/9341045976"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lg:w-1/4 sm:w-1/2 w-full md:px-4"
                        >
                            <h2 className="font-bold text-lg">Enquire Now</h2>
                            <button className="flex items-center justify-center gap-2 bg-green-700 text-white font-medium text-lg px-4 py-2 w-full rounded mt-4">
                                <FaWhatsapp size={26} /> Enquire Now
                            </button>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
