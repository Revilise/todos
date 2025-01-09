import localFont from "next/font/local";

export const KanitFont = localFont({
  src: [
    {
      path: "./fonts/Kanit-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Kanit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Kanit-Light.ttf",
      weight: "300",
      style: "normal"
    }
  ],
})
