import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import PagesHeader from "@/components/Headers/PagesHeader";
import AboutIntro from "@/components/AboutUs/AboutIntro";
import TestimonialsWithVideo from "@/components/Testimonials/TestimonialsWithVideo";
import SkillsCircle from "@/components/Skills/SkillsCircle";
import Team from "@/components/Team/Team2";
import MinimalArea from "@/components/Others/MinimalArea1";
import CallToAction from "@/components/Others/CallToAction";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: "Apprising Creatives",
};

function AboutDark() {
  return (
    <>
      <Loading />
      <Navbar />
      <PagesHeader imageLink="/img/slid/About.jpg">
        Ahoy, fellow voyagers! Welcome aboard Apprising Creatives.
      </PagesHeader>
      <MinimalArea />
      <AboutIntro />
      <Team />
      <TestimonialsWithVideo />
      <SkillsCircle from="aboutPage" />
      <CallToAction />
      <Footer />
    </>
  );
}

export default AboutDark;
