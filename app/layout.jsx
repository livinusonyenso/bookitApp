import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthWrapper from "@/component/AuthWrapper";
const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Bookit App | Book a Room",
  description: "Book a Meeting or conference room for your team",
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <body
        className={inter.className}
      >
        <AuthWrapper>
        <Header/>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {children}
        </main>
        <Footer/>
        <ToastContainer />
        </AuthWrapper>
      </body>
    </html>
  
  );
}
