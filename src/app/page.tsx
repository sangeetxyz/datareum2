"use client";
import Cursor from "@/components/cursor/cursor";
import Footer from "@/components/footers/footer";
import HomeHeader from "@/components/headers/homeHeader";
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/home/heroSection";
import Toaster from "@/components/containers/Toaster";
import Container from "@/components/containers/container";

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
    <div className="md:cursor-none">
      <Container>
        <HomeHeader setVariant={variantCB} />
        <Cursor variant={variant} />
        <HeroSection setVariant={variantCB} />
        <HeroSection setVariant={variantCB} />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
