import React, { useState, useEffect } from "react";
import { questions } from "./testData";
import TestFooter from "./TestFooter";
import Submission from "./Submission";
import IntroForm from "./IntroForm";
import TestScreen from "./TestScreen";
import Verifying from "./Verifying";
import PaymentSuccess from "./PaymentSuccess";

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
                    tickSound.play().catch((e) => { });

                    // Last 10 seconds alert sound
                    if (prev <= 10) {
                        alertSound.play().catch((e) => { });
                    }

                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [stage, answers]);

  

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

            {/* Render different screens by stage */}
            {stage === "intro" && (
                <IntroForm
                    user={user}
                    setUser={setUser}
                    showPayment={showPayment}
                    setShowPayment={setShowPayment}
                    utr={utr}
                    setUtr={setUtr}
                    utrError={utrError}
                    setUtrError={setUtrError}
                    setStage={setStage}
                />
            )}

            {/* VERIFYING */}
            {stage === "verifying" && (
                <Verifying />
            )}

            {/* PAYMENT SUCCESS */}

            {stage === "paymentSuccess" && <PaymentSuccess utr={utr} setStage={setStage} />}


            {/* TEST */}
            {stage === "test" && (
                <TestScreen
                    questions={questions}
                    current={current}
                    setCurrent={setCurrent}
                    answers={answers}
                    setAnswers={setAnswers}
                    setStage={setStage}
                    timeLeft={timeLeft}
                    setTimeLeft={setTimeLeft}
                />
            )}

            {/* DONE */}
            {stage === "done" && (
                <Submission />
            )}

            {/* FOOTER */}
            <TestFooter />
        </div>
    );
}
