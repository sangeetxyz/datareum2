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
import FeatureSection from "@/components/home/featureSection/featureSection";
import BrandSection from "@/components/home/brandSection";
import Three from "@/components/home/threeSection";
import { scroller } from "@/utils/helper/helpers";

const Home = () => {
  useEffect(() => {
    scroller();
  }, []);

  return (
    <div className="cursor-none">
      <HomeHeader />
      <Cursor />
      <HeroSection />
      <ReverseSection />
      <BrandSection />
      <FeatureSection />
      <Three />
      <Footer />
    </div>
  );
};

export default Home;
