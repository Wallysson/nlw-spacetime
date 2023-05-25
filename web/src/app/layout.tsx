import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { SignIn } from "@/components/SignIn";
import "./globals.css";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";
import { Copyright } from "@/components/Copyright";
import { cookies } from "next/headers";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-jamjuree",
});

export const metadata = {
  title: "NLW Spacetime",
  description:
    "Uma cápsula do tempo construída com NextJs, React, Tailwind, Typescript, NodeJS e Prisma.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = cookies().has("token");

  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}
      >
        <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* Left */}
          <div className="relative flex flex-col gap-10  items-start justify-between overflow-hidden px-8 py-4 border-b border-white/10 md:px-28  md:py-16 md:border-r md:border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover ">
            {/* Blur */}
            <div className="absolute bottom-0 top-1/2 md:right-0  h-[288px] w-[526px] -translate-x-1/4 -translate-y-1/4 md:-translate-y-1/2 md:translate-x-1/2 blur-full rounded-full bg-purple-700 opacity-50" />

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-1 md:w-2 bg-stripes" />

            {/* Sign In */}
            {isAuthenticated ? <Profile /> : <SignIn />}

            {/* Hero */}
            <Hero />

            {/* Copyright */}
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex flex-col max-h-screen bg-[url(../assets/bg-stars.svg)] bg-cover overflow-y-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
