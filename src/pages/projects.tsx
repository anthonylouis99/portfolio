import { useTranslation } from "react-i18next";
import ServiceCard from "../components/cards/cards";
import { GiSecurityGate } from "react-icons/gi";
import { HouseIcon,ShoppingCart } from "lucide-react";
import {  motion, type Variants } from "framer-motion";
import { easeOut } from "framer-motion"; 


const container: Variants = {

  hidden:{opacity:0},
  show:{opacity:1,
    transition: { staggerChildren: 0.3 },
  },

 

  }


const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }, 
};

export const Projects=() => {

  const { t } = useTranslation();

  return (
    <motion.div
      className="w-full min-h-[500px] h-screen text-[var(--color-Text)] flex flex-col justify-center gap-20 items-center text-center p-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Heading */}
      <motion.h2  className="text-3xl md:text-4xl font-bold text-center"variants={item}>
        {t("projects.title")}
      </motion.h2>
       <motion.p  className="text-xl md:text-2xl font-semibold text-center"variants={item}>
        {t("projects.description")}
      </motion.p>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        variants={container}
      >
        {[
  {
    title: t("projects.Project1"),
    ref:"https://safepazz.com/",
    desc: t("projects.P1description"),
    icon: <GiSecurityGate />,
  },
  {
    title: t("projects.Project2"),
    //  ref:"https://harmony-portal-zeta.vercel.app/dashboard",
    desc: t("projects.P2description"),
    icon: <HouseIcon />,
  },
  {
    title:t("projects.Project3"),
     ref:"https://atl-store-82c99.web.app/signIn",
    desc: t("projects.P3description"),
    icon: <ShoppingCart />,
  },
]
.map((service, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.05 }}
    
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="cursor-pointer"
          >
            <ServiceCard
              isLink={true}
              ref={service.ref}
              title={service.title}
              description={service.desc}
              icon={service.icon}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
