import { Inter } from "next/font/google";

export const metadata = {
  title: "Auth",
  description: "next 14 CocNet App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-turquoise-1`}>{children}</body>
    </html>
  );
}
