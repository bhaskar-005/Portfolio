import Hero from "./_components/hero/Hero";
import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Skills from "./_components/Skills";
import Maxwidth from "./_components/MaxWidth";
import Projects from "./_components/Projects";
import Contact from "./_components/Contact";
import Deviders from "./_components/Deviders";
import Footer from "./_components/Footer";

export default function Home() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <Maxwidth>
     <About/>
      <Deviders text="Skills"/>
     <Skills/>
     <Deviders text="Projects"/>
     <Projects/>
     <Deviders text="Get in touch"/>
     <Contact />
     <Footer/>
    </Maxwidth>
   </>
  );
}
