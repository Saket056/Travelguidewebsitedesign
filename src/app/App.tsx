import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { TouristPlaces } from "./components/TouristPlaces";
import { FoodSection } from "./components/FoodSection";
import { Transportation } from "./components/Transportation";
import { TouristGuides } from "./components/TouristGuides";
import { Footer } from "./components/Footer";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen">
      <Navigation onSearchChange={setSearchQuery} />
      <Hero />
      <TouristPlaces searchQuery={searchQuery} />
      <FoodSection searchQuery={searchQuery} />
      <Transportation />
      <TouristGuides />
      <Footer />
    </div>
  );
}
