import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStatement />    
    </>
  );
}
