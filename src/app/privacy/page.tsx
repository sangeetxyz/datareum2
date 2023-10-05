"use client"
import Footer from '@/components/footers/footer';
import DashHeader from '@/components/headers/dashHeader';
import React from 'react'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-stone-950 pt-20 text-stone-100">
      <DashHeader />
      <div className="flex justify-center bg-gradient-to-b from-stone-950 to-stone-900">
        {/* <img src={aboutSvg.src} alt="" className="max-w-6xl " /> */}
      </div>
      <div className="flex flex-col items-center bg-stone-900">
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            About Us
          </div>
          <div className="text-justify">
            At Datareum, we are driven by an unwavering commitment to
            revolutionize the healthcare landscape through innovative solutions
            in decentralized health data exchange. Our journey began with a
            profound belief that healthcare should be data-driven,
            collaborative, and patient-centric. Today, we stand as a pioneering
            platform, bridging the gap between healthcare organizations and
            researchers to unlock the transformative power of health data.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            Our Purpose
          </div>
          <div className="text-justify">
            Our foundation rests on core principles of data privacy, security,
            and transparency. We understand that health data is among the most
            sensitive information, and we have made it our mission to safeguard
            it with state-of-the-art encryption and access controls. We empower
            healthcare organizations with the autonomy to determine how their
            data is shared while ensuring rigorous ethical standards and patient
            consent.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            Empowering Healthcare Research
          </div>
          <div className="text-justify">
            One of our primary objectives is to empower healthcare research. We
            recognize the immense potential of data in driving scientific
            progress. Our platform acts as a catalyst, enabling researchers to
            access a diverse range of datasets, delve into uncharted
            territories, and make groundbreaking discoveries. We believe that
            through collaboration and shared knowledge, we can find innovative
            solutions to some of the most pressing healthcare challenges.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            A Vision for a Healthier Future
          </div>
          <div className="text-justify">
            Our vision for the future of healthcare is ambitious and
            transformative. We envision a world where health data flows
            seamlessly, unrestricted by geographic or institutional boundaries.
            In this future, healthcare providers, institutions, and researchers
            have instant access to the insights they need to improve patient
            care and develop cutting-edge treatments. We envision a world where
            data-driven decisions lead to better patient outcomes, shorter
            recovery times, and ultimately, healthier communities.
          </div>
        </div>
        <div className="my-4 flex max-w-6xl flex-col space-y-4 px-4">
          <div className="text-3xl font-bold capitalize underline decoration-acc">
            Join Us on This Journey
          </div>
          <div className="text-justify">
            We invite you to join us on this incredible journey towards a
            brighter and healthier future. Whether you are a healthcare
            organization looking to contribute valuable data or a researcher
            seeking to leverage the collective knowledge of the healthcare
            community, we provide the platform for collaboration and discovery.
            Together, we can redefine the boundaries of healthcare, where data
            is the driving force behind a new era of medical breakthroughs and
            improved quality of life for all.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy