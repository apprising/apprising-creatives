import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import Header from "@/components/Headers/Header2";
import Services from "@/components/Services/Services3";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials/TestimonialsWithVideo";
import Team from "@/components/Team/Team2";
import CallToAction from "@/components/Others/CallToAction";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: "Vie - Creative Agency Dark",
};

export default function Home2() {
  return (
    <>
      <Loading />
      <Navbar />
      <Header />
      <Services />
      <Portfolio grid={3} filterPosition="center" />
      <Testimonials />
      <Team />
      <CallToAction />
      <Footer />
    </>
  );
}