import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import ShowcasesFullScreen from "@/components/Showcases/ShowcaseFullscreen";
import Navbar from "@/components/Common/Navbar";

export const metadata = {
  title: "Vie - Showcase Dark",
};

export default function ShowcasePage() {
  return (
    <>
      <Loading />
      <Navbar />
      <ShowcasesFullScreen />
    </>
  );
}
