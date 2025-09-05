import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../context/Languageswitchcontext/switchLang";
import { motion } from "framer-motion";
import { useEffect,useState } from "react";
type NavbarProps = {
  onNavigate: (section: "home" | "about" | "frameworks" | "contact"|"projects") => void;
  activeSection: string;

};

const navItems = ["home", "about", "frameworks", "projects", "contact"];


export default function Navbar({onNavigate,activeSection}:NavbarProps) {
  const [active, setActive] = useState("home");
  const { t } = useTranslation();


useEffect(()=>{
   if (activeSection !== active) {
   setActive(activeSection) }
},[activeSection,active])
  console.log('activeSection:',activeSection,"active:",active);

  

  return (
    <>
   <nav className="flex  relative justify-between p-4 bg-[var(--navbar-background)] text-white fixed top-0 left-0 w-full z-50">
     <div className="flex text-[var(--color-Text)] gap-4">

{navItems.map((item) => (
   <a href={`#${active}` } className="text-[var(--color-Text)]"  key={item}>

  <button
  
    onClick={() => {
      onNavigate(item as NavbarProps["onNavigate"] extends (s: infer S) => void ? S : never);
      setActive(item)
    }}
    
    
    className={`relative z-10 px-2 py-1 font-medium ${
      activeSection === item ? "text-white" : "text-gray-600"
    }`}
  >
   {t(`navbar.${item}`)}
    {activeSection === item && (
      <motion.div
        layoutId="nav-highlight"
        className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    )}
  </button>
  </a>
))}
      </div>

        <LanguageSwitcher />
    </nav>
    </>
  );
};


