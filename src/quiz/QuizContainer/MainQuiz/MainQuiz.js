import { useState, useEffect } from "react";
import quizdata from "../quizdata.json";
import QuizNavbar from "../QuizNavbar/QuizNavbar";
import QuizMainLayout from "../QuizMainLayout/QuizMainLayout";
import QuizPage from "../QuizPage/QuizPage";
import Navbar from "../../../componnets/header/NavBar";
import Footer from "../../../componnets/footer/Footer";

function MainQuiz() {
  const quizzes = quizdata.quizzes;

  const [quizData, setQuizData] = useState({
    title: "",
    icon: "",
    iconbg: "",
    questions: [],
  });

  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem("themeMode") || "light"
  );

  const [isQuizStarted, setIsQuizStarted] = useState(false);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const handleThemeMode = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleStartQuiz = (quiz) => {
    setQuizData(quiz);
    setIsQuizStarted(true);
  };

  const handleRestart = () => {
    setIsQuizStarted(false);
    setQuizData({
      title: "",
      icon: "",
      iconbg: "",
      questions: [],
    });
  };

  return (
    <>
      <Navbar />
      <div className="mx-6 sm:mx-12 lg:mx-32 ">
        <QuizNavbar
          themeMode={themeMode}
          setThemeMode={setThemeMode}
          handleThemeMode={handleThemeMode}
          title={quizData.title}
          icon={quizData.icon}
          iconbg={quizData.iconbg}
        />

        <main className="flex-1 mx-6 sm:mx-12 lg:mx-32">
          {!isQuizStarted ? (
            <QuizMainLayout quizzes={quizzes} setQuizData={handleStartQuiz} />
          ) : (
            <QuizPage quizData={quizData} onRestart={handleRestart} />
          )}
        </main>

      </div>
      <Footer />
    </>
  );
}

export default MainQuiz;
