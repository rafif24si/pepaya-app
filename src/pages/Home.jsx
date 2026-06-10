// app/page.js atau pages/index.js
import DetectSection from "../components/sections/DetectSection";
import EducationSection from "../components/sections/EducationSection";
import HistorySection from "../components/sections/HistorySection";

export default function Home() {
  return (
    <>
      <DetectSection />
      <EducationSection />
      <HistorySection />
    </>
  );
}