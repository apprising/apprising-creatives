//= Global Styles
import "@/styles/main.scss";
import "@/styles/preloader.css";
import "@/styles/modal-video.css";
import "swiper/css/bundle";
import "react-circular-progressbar/dist/styles.css";

import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Apprising",
  description: "Your ride to the digital world",
  keywords: [
    "web design",
    "mobile app",
    "software",
    "web developer",
    "create website",
  ],
  icons: {
    icon: "../../public/img/favicon.ico",
    shortcut: "../../public/img/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights />
      <body>{children}</body>
    </html>
  );
}
