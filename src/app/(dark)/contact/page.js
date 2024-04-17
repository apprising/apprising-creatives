import React from "react";
//= Page components
import Loading from "@/components/Common/Loader";
import Navbar from "@/components/Common/Navbar";
import ContactHeader from "@/components/Contact/ContactHeader";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Common/Footer";

export const metadata = {
  title: "Vie - Contact Dark",
};

export default function ContactPage() {
  return (
    <>
      <Loading />
      <Navbar />
      <ContactHeader />
      <div className="main-content">
        <ContactForm />

        <Footer hideBGCOLOR />
      </div>
    </>
  );
}
