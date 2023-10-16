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
import FeatureSection from "@/components/home/featureSection";
import BrandSection from "@/components/home/brandSection";
import Three from "@/components/home/threeSection";

const Home = () => {
  const [variant, setVariant] = useState("default");
  const variantCB = (data: string) => {
    setVariant(data);
  };
  useEffect(() => {
    const scroller = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };
    scroller();
  }, []);

  return (
    <div className="md:cursor-non">
      <HomeHeader setVariant={variantCB} />
      <Cursor variant={variant} />
      <HeroSection setVariant={variantCB} />
      <ReverseSection />
      <BrandSection />
      <FeatureSection />
      <Three />
      <Footer />
    </div>
  );
};

export default Home;
