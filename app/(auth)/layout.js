import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const metadata = {
  title: "Auth",
  description: "next 14 CocNet App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-turquoise-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
