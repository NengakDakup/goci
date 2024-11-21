import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import AboutChurch from "@/components/AboutChurch";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStatement /> 
      <AboutChurch />   
    </>
  );
}
