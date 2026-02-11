import { HomePage } from './pages/home'
// import { AboutPage } from './pages/about'
import { ContactPage } from './pages/contact'
import { Footer } from './pages/footer';
// import { Frameworks } from './pages/freameWorks';
import { Projects } from './pages/projects';
import Navbar from './pages/nav/Navbar';
  import { useRef,useEffect,useState } from "react";
  import { Liner } from './components/liner';

import './App.css'


function App() {
const homeRef = useRef<HTMLDivElement>(null);
// const aboutRef = useRef<HTMLDivElement>(null);
const frameworksRef = useRef<HTMLDivElement>(null);
const contactRef = useRef<HTMLDivElement>(null);
const projectsRef = useRef<HTMLDivElement>(null);
const [activeSection, setActiveSection] = useState("home");



const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
ref.current?.scrollIntoView({ behavior: "smooth" });
};


useEffect(() => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}, []);
  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "frameworks", ref: frameworksRef },
      { id: "contact", ref: contactRef },
      { id: "projects", ref:projectsRef}
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  useEffect(() => {
  if (activeSection) {
    window.history.replaceState(null, "", `#${activeSection}`);
  }
}, [activeSection]);

  return (
    <div className='mainBackground'>
  <div className=" text-gray-800 min-h-screen w-screen flex flex-col">
    <div   className="fixed top-0 left-0 w-full z-50"
    >
  <Navbar 
   activeSection={activeSection}
          onNavigate={(section) => {
          if (section === "home") scrollToSection(homeRef);
          // if (section === "about") scrollToSection(aboutRef);
          if (section === "contact") scrollToSection(contactRef);
          if (section === "projects") scrollToSection(projectsRef);
        }}

  />
    </div>

  <main className="flex-1 flex flex-col items-center w-full">
    <div className=" w-full max-w-[1700px] flex-1 bg-[var(--content-bg)] ">
      <section ref={homeRef} id="home"><HomePage /></section>
      <Liner/>
      {/* <section ref={aboutRef} id="about"><AboutPage /></section> */}
        <section ref={projectsRef}   id="projects"><Projects/></section>
      <Liner/>
      <section ref={contactRef}   id="contact"><ContactPage /></section>
    </div>
  </main>
  <Footer />
</div>
    </div>
 

  )
}

export default App






