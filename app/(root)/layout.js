import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";

import LeftSideBar from "@components/layout/LeftSideBar";
import RightSideBar from "@components/layout/RightSideBar";
import TopBar from "@components/layout/TopBar";
import MainContainer from "@components/layout/MainContainer";
import BottomBar from "@components/layout/BottomBar";

export const metadata = {
  title: "Social Net",
  description: "Next 14 Social Net",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-turquoise-1`}>
          <main className="flex flex-row">
            <LeftSideBar />
            <MainContainer>
              <TopBar />
              {children}
            </MainContainer>
            <RightSideBar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
