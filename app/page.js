import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import AboutChurch from "@/components/AboutChurch";
import Statistics from "@/components/Statistics";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStatement /> 
      <AboutChurch />  
      <Statistics />
      <Gallery /> 
    </>
  );
}
