import { Routes, Route, useLocation } from "react-router-dom";
import FullComponent from './componnets/FullComponent';
import PlacementPage from './componnets/MainComponent/app/placement/page';
import InternshipPage from './componnets/MainComponent/app/internship/page';
import Interview from './componnets/MainComponent/app/interview/page';
import Course from './componnets/MainComponent/app/course/[slug]/page';
import CourseMain from './componnets/Home/Courses/CourseMain';
import TermCondition from './componnets/link/term-condition/page';
import PrivacyAndPolicy from './componnets/link/privacy-policy/page';
import ResumeForm from './componnets/Resume/ResumeForm';
import Games from './componnets/Games';
import AboutUs from './componnets/link/aboutUs/AboutUs';
import RegistrationForm from './componnets/FullComponent/registrationForm/RegistrationForm';
import RegistrationFormPopup from './componnets/FullComponent/registrationForm/RegistrationFormPopup';
import NotFoundPage from "./componnets/common/errorPage/NotFoundPage";
import MainContent from "./componnets/FullComponent/cerificates/MainContent";
import MainQuiz from "./quiz/QuizContainer/MainQuiz/MainQuiz";
import './App.css'; 

function App() {
  const location = useLocation();
  const hidePopupOnPaths = ['/course-registration-form','/certificates','resume'];
  const shouldShowPopup = !hidePopupOnPaths.includes(location.pathname);

  return (
    <>
    

      {shouldShowPopup && <RegistrationFormPopup />}

      <Routes>
        <Route path="/" element={<FullComponent />} />
        <Route path="/placement" element={<PlacementPage />} />
        <Route path="/course-registration-form" element={<RegistrationForm />} />
        <Route path="/courses" element={<CourseMain />} />
        <Route path="/internship" element={<InternshipPage />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/link/term-condition" element={<TermCondition />} />
        <Route path="/link/privacy-policy" element={<PrivacyAndPolicy />} />
        <Route path="/link/about-us" element={<AboutUs />} />
        <Route path="/course/:slug" element={<Course />} />
        <Route path="/resume" element={<ResumeForm />} />
        <Route path="/certificates" element={<MainContent />} />

         <Route path="/quiz" element={<MainQuiz />} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  );
}

export default App;
