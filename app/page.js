import Hero from "./components/Hero";
import Services from "./components/Services";
import Proof from "./components/Proof";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Proof />
      <Process />
      <Contact />
    </main>
  );
}
