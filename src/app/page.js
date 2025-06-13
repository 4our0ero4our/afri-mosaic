"use client";
import { useRef } from "react";
import Hero from "./components/Hero";
import FeaturedCollection from "./components/FeaturedCollection";
import FeaturedCultures from "./components/FeaturedCultures";

export default function HomePage() {
  const featuredRef = useRef(null);

  const handleBrowseClick = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero onBrowseClick={handleBrowseClick} />
      <div ref={featuredRef}>
        <FeaturedCollection />
      </div>
      <FeaturedCultures />
    </>
  );
}
