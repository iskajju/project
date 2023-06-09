
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "PopX",
  description: "PopX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   

      <body
        className={`${rubik.className} flex flex-col-reverse h-screen w-full bg-[#F7F8F9]  `}
        >
        {" "}
        {children}{" "}
      </body>
    </html>
  );
}
