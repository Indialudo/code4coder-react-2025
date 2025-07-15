import RegistrationForm from '@/components/form/RegistrationForm'
import React from 'react'

export const metadata = {
  title: "Student & Professionals Programming Course Registration Form | Code4Coder",
  description: "Register for programming courses with Code4Coder, a leading platform offering 100% placement assistance. Learn a variety of courses including MERN full-stack development, web development, digital marketing, C/C++, machine learning, data science, React.js, Node.js, MongoDB, Oracle, JavaScript, Next.js, and many more. Join us to enhance your skills and kickstart your career journey.",
  keywords :[
    "Code4Coder",
    "programming courses",
    "placement assistance",
    "MERN full-stack development",
    "web development",
    "digital marketing",
    "C/C++",
    "machine learning",
    "data science",
    "React",
    "Node.js",
    "MongoDB",
    "Oracle",
    "JavaScript",
    "Next.js",
    "career development"]
};

const page = () => {
  return (
    <div>
      <RegistrationForm />
    </div>
  )
}

export default page