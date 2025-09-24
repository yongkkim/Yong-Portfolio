import type { Metadata } from "next";
import "../style/global.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Resume Site",
  description: "By Yong Kuk Kim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased bg-black`}>
        {children}

        <div className="hidden max-[768px]:landscape:flex fixed inset-0 items-center justify-center bg-white z-50">
          <p className="text-lg text-gray-700 text-center px-6">
            Currently optimizing the UI for landscape mode. Please rotate your
            device back to portrait orientation for the best experience.
          </p>
        </div>
      </body>
    </html>
  );
}
