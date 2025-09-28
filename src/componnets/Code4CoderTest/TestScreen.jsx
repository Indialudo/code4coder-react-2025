import React, { useEffect } from "react";

export default function TestScreen({
  questions,
  current,
  setCurrent,
  answers,
  setAnswers,
  setStage,
  timeLeft,
  setTimeLeft,
}) {
  // Sounds
  const tickSound = new Audio("https://www.soundjay.com/button/beep-07.mp3");
  const alertSound = new Audio("https://www.soundjay.com/button/beep-10.mp3");

  // Timer + sounds
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          console.log("Auto-submitting answers:", answers);
          alert("⏰ Time's up! Test submitted automatically.");
          setStage("done");
          return 0;
        }

        // Tick sound every second
        tickSound.play().catch(() => {});

        // Last 10 seconds → louder alert
        if (prev <= 10) {
          alertSound.play().catch(() => {});
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [answers, setStage, setTimeLeft]);

  // Format mm:ss
  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Select option
  const handleOption = (index) => {
    setAnswers({ ...answers, [current]: index });
  };

  // Manual submit
  const handleManualSubmit = () => {
    console.log("User submitted answers:", answers);
    setStage("done");
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-gray-100 text-black">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
        {/* Timer */}
        <div className="text-right text-lg font-bold mb-4 text-red-600">
          ⏱ Time Left: {formatTime(timeLeft)}
        </div>

        {/* Question */}
        <h2 className="text-xl font-bold mb-4">
          Q{current + 1}. {questions[current].question}
        </h2>

        {/* Options */}
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

        {/* Navigation */}
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
              className="px-4 py-2 text-white rounded"
              style={{ backgroundColor: "#080935" }}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleManualSubmit}
              className="px-4 py-2 text-white rounded"
              style={{ backgroundColor: "red" }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
