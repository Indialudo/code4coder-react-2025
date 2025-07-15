import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/topsection/Header";
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";
import Script from "next/script";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

const Footer = dynamic(() => import("@/components/footer/Footer"), {
  loading: () => <Spinner />
});
// const Script = dynamic(() => import("next/script"));

export const metadata = {
  generator: "React.js",
  applicationName: "Code4coder",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Learn Coding",
    "Learning Platform",
    "Coding Platform",
    "Build a Website",
    "Learn Programming in Indore",
    "Learn Web Development Course",
    "Fullstack Web Development Course",
    "Code4Coding",
    "code4coder",
    "Learn Web Design",
    "Coding & Much More",
    "India's Most Demanded Coding Learning Platform",
    "Next.js",
    "React",
    "JavaScript",
    "Next.js fundamentals",
    "React.js essentials",
    "JavaScript programming basics",
    "Next.js online course",
    "React.js hands-on training",
    "Advanced JavaScript concepts",
    "Front-end development with React.js",
    "Next.js project examples",
    "JavaScript coding practices",
    "React.js web development",
    "Next.js best practices",
    "JavaScript frameworks",
    "React.js application development",
    "Next.js tutorials",
    "JavaScript programming language",
    "Full Stack Web Development concepts",
    "MERN stack architecture",
    "Python programming for web development",
    "Digital Marketing strategies and tactics",
    "Node.js server-side scripting techniques",
    "MySQL database design principles",
    "100% Placement Guarantee courses overview",
  ],
  authors: [{ name: "Seb" }, { name: "Josh", url: process.env.PUBLIC_URL }],
  creator: "Jiachi Liu",
  publisher: "Sebastian Markbåge",

  title: {
    template: "%s | Code4Coder",
    default: "Code4Coder – Learn coding online at India's best coding platform",
  },
  description:
    "Learn the most in-demand coding skills on Code4Coder with the help of real-world experts. Code4Coder.com is your go-to online learning and teaching marketplace, offering comprehensive courses to help you become a skilled web developer from scratch. Explore our courses: - MERN Full Stack Web Development Course | Digital Marketing | React.js | Node.js | Next.js |C/C++ Course| Web Development| Our courses cover everything you need to know, even if you've never programmed before! Gain hands-on experience, get certified, and achieve a 100% placement guarantee with our expertly crafted courses. Code4Coder | Your Coding and Learning Platform",
  description:
    "Explore world-class coding courses in MERN Full Stack, Python Mastery, React Front End, Backend Node.js, MongoDB, MySQL, and more. Code4Coder empowers learners with hands-on projects and expert guidance.",
  robot: "index,follow",
  googleSideVerification: "WxvvJJwqPIfd9OzaGrcLRJbzqFdnvnOhrEaiOWx0YWc",
  yandexVerification: "9679e5d0b58d4bca",
  openGraph: {
    url: process.env.PUBLIC_URL,
    siteName: "Code4Coder",
    // images: [
    //   {
    //     url: "/opengraph-image.png",
    //     width: 800,
    //     height: 600,
    //   },
    //   // Add more images if needed
    // ],
    locale: "en_US",
    type: "article",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head> */}
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3149369037332600"
          crossorigin="anonymous"/>
      {/* </Head> */}
      <Script id="ld-json-script" type="application/ld+json">
          {`{
              "@context": "http://schema.org",
              "@graph": [
                  {
                      "@type": "Organization",
                      "@id": "https://code4coder.com/#organization",
                      "name": "Code4Coder Coding Learning Platform",
                      "url": "https://code4coder.com/",
                      "sameAs": [
                          "https://www.facebook.com/code4coder",
                          "https://www.instagram.com/code4coder_official"
                      ],
                      "logo": {
                          "@type": "ImageObject",
                          "@id": "https://code4coder.com/#logo",
                          "inLanguage": "en-US",
                          "width": 89,
                          "height": 39,
                          "caption": "Code4Coder Logo"
                      },
                      "image": {
                          "@id": "https://code4coder.com/#logo"
                      }
                  },
                  {
                      "@type": "WebSite",
                      "@id": "https://code4coder.com/#website",
                      "url": "https://code4coder.com/",
                      "name": "Code4Coder",
                      "description": "Empower yourself with top-notch coding courses. Learn MERN Full Stack, Python Mastery, React Front End, Backend Node.js, MongoDB, MySQL, and more at Code4Coder.",
                      "publisher": {
                          "@id": "https://code4coder.com/development/#organization"
                      },
                      "potentialAction": [
                          {
                              "@type": "SearchAction",
                              "target": "https://code4coder.com/?s={search_term_string}",
                              "query-input": "required name=search_term_string"
                          }
                      ],
                      "inLanguage": "en-US"
                  },
                  {
                      "@type": "WebPage",
                      "@id": "https://code4coder.com/#webpage",
                      "url": "https://code4coder.com/",
                      "name": "Coding Courses | Code4Coder",
                      "isPartOf": {
                          "@id": "https://code4coder.com/#website"
                      },
                      "description": "Explore world-class coding courses in MERN Full Stack, Python Mastery, React Front End, Backend Node.js, MongoDB, MySQL, and more. Code4Coder empowers learners with hands-on projects and expert guidance.",
                      "inLanguage": "en-US",
                      "potentialAction": [
                          {
                              "@type": "ReadAction",
                              "target": ["https://code4coder.com/"]
                          }
                      ]
                  },
                  {
                      "itemListElement": [
                          {
                              "@type": "ListItem",
                              "position": 1,
                              "item": {
                                  "@type": "WebPage",
                                  "@id": "https://code4coder.com/t",
                                  "url": "https://code4coder.com/",
                                  "name": "Home"
                              }
                          },
                          {
                              "@type": "ListItem",
                              "position": 2,
                              "item": {
                                  "@type": "WebPage",
                                  "@id": "https://code4coder.com/courses",
                                  "url": "https://code4coder.com/courses",
                                  "name": "Courses"
                              }
                          }
                      ]
                  }
              ]
          }`}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `
                    function gtag() { dataLayer.push(arguments) }
                    window.dataLayer = window.dataLayer || [];
                    gtag("js", new Date);
                    gtag("config", "G-HC4TQWE9LX");
                `,
            }}
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-HC4TQWE9LX"
          ></script> */}
        </Script>
      <body className={`${inter.className} overflow-x-hidden`}>
      
        {/* <Script
          id="razorpay-script"
          src="https://checkout.razorpay.com/v1/checkout.js"
        ></Script> */}
        {/* <Header /> */}
        <Navbar />
        <div className="mt-12">

          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
