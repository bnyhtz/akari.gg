import type { Metadata } from "next";
// Import Poppins and Inter from next/font/google
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import Footer component

// Configure Poppins for headings
const poppins = Poppins({
  variable: "--font-poppins", // CSS variable name
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Include needed weights
  display: "swap", // Improve font loading performance
});

// Configure Inter for body text
const inter = Inter({
  variable: "--font-inter", // CSS variable name
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Game Developer Portfolio",
  description: "Portfolio website for an awesome game developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply font variables to the body */}
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-gray-900 text-white font-sans`} // Removed pt-20 from body
      >
        {/* Wrap content in a flex column to push footer down */}
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {/* Added pt-20 and pb-16 (padding-bottom) to main */}
          <main className="flex-grow pt-20 pb-16">{children}</main>
          <Footer /> {/* Add Footer component */}
        </div>
      </body>
    </html>
  );
}
