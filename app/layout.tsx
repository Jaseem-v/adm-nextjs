import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

// import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Abu Dhabi Malayalees: Connecting the Malayalee Community in Abu Dhabi",
  description: "Welcome to Abu Dhabi Malayalees, the online hub for Malayalees residing in Abu Dhabi. Connect, engage, and share experiences with fellow Malayalees in the capital city of the UAE. Join us today!",
  keywords: "Abu Dhabi Malayalees, Malayalee community, Abu Dhabi, Kerala culture, social network, community forum, events, Abu Dhabi expatriates, networking, discussions, cultural exchange",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}

        <Navbar />
        {children}
        <Footer />
        {/* <Toaster position="top-right"
          reverseOrder={false} /> */}
      </body>
    </html>
  );
}
