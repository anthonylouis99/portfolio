import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../context/Languageswitchcontext/switchLang";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger and close icons

type NavbarProps = {
  onNavigate: (section: "home" | "about" | "frameworks" | "contact" | "projects") => void;
  activeSection: string;
};

const navItems = ["home", "about", "frameworks", "projects", "contact"];

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (activeSection !== active) {
      setActive(activeSection);
    }
  }, [activeSection, active]);

  return (
    <nav className="flex relative justify-between items-center p-4 bg-[var(--navbar-background)] text-white fixed top-0 left-0 w-full z-50">
      {/* Desktop Nav */}
      <div className="hidden md:flex text-[var(--color-Text)] gap-6">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => {
              onNavigate(item as NavbarProps["onNavigate"] extends (s: infer S) => void ? S : never);
              setActive(item);
            }}
            className={`relative px-2 py-1 font-medium transition-colors ${
              activeSection === item ? "text-white" : "text-gray-400"
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
        ))}
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="ml-auto">
        <LanguageSwitcher />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[var(--navbar-background)] shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(item as NavbarProps["onNavigate"] extends (s: infer S) => void ? S : never);
                    setActive(item);
                    setIsOpen(false);
                  }}
                  className={`relative px-2 py-1 font-medium ${
                    activeSection === item ? "text-white" : "text-gray-400"
                  }`}
                >
                  {t(`navbar.${item}`)}
                  {activeSection === item && (
                    <motion.div
                      layoutId="nav-highlight-mobile"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
