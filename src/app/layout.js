import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Nav from "@/components/Navbar";

export const metadata = {
  title: "Sravan Kumar Angadi - Innovator, Entrepreneur & Visionary Leader",
  description:
    "Discover the entrepreneurial journey of Sravan Kumar Angadi, the force behind Angadi World Technologies. Explore his ventures in technology and sustainability that are shaping the future. Learn about his mission to leverage innovation for global impact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* FONT- Montserrat */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        {/* FONT- Pacifico*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <div id="smooth-wrapper">
          <div id="smooth-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
