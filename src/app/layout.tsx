import type {Metadata, Viewport} from "next";

import { KanitFont } from "./style/font";
import "./style/index.css";

export const metadata: Metadata = {
  applicationName: "Todos",
  title: "Todo app",
  description: "my test app",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Todo app",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#FFFFFF",
}

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
