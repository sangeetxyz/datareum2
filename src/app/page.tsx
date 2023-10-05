"use client";
import Cursor from "@/components/cursor/cursor";
import Footer from "@/components/footers/footer";
import HomeHeader from "@/components/headers/homeHeader";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/home/heroSection";
import Toaster from "@/components/containers/Toaster";
import Container from "@/components/containers/container";
import Se from "@/components/home/se";
import ReverseSection from "@/components/home/reverseSection";
import A from "@/components/home/a";
import BrandSection from "@/components/home/brandSection";
import Three from "@/components/home/three";

const Home = () => {
  const [variant, setVariant] = useState("default");
  const variantCB = (data: string) => {
    setVariant(data);
  };
  useEffect(() => {
    const scroller = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
    scroller();
  }, []);

  return (
    <div className="md:cursor-non">
      <Container>
        <HomeHeader setVariant={variantCB} />
        {/* <Cursor variant={variant} /> */}
        <HeroSection setVariant={variantCB} />
        <ReverseSection />
        <BrandSection />
        <A />
        <Three />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
