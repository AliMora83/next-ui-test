import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nama Language",
  description: "NAMKA Software Development",
};

export default function RootLayout({children}){
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../favicon.png" />
      </head>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
        </body>
    </html>
  );
}
