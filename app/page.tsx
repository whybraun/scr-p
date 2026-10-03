import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import HowItWorks from "@/components/HowItWorks";
import Requirements from "@/components/Requirements";
import FAQ from "@/components/FAQ";
import ReadyToDrive from "@/components/ReadyToDrive";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fleet />
        <HowItWorks />
        <Requirements />
        <FAQ />
        <ReadyToDrive />
      </main>
      <Footer />
    </>
  );
}