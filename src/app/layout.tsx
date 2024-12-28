import type { Metadata } from "next";
import { KanitFont } from "./style/font";
import "./style/index.css";

export const metadata: Metadata = {
  title: "Todo app",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${KanitFont.className}`}>
        {children}
      </body>
    </html>
  );
}
