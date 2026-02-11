import { useTranslation } from "react-i18next";
// import ServiceCard from "../components/cards/cards";
// import { GiSecurityGate } from "react-icons/gi";
// import { HouseIcon,ShoppingCart } from "lucide-react";
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        variants={container}
      >
  
<a href="https://safepazz.com/" target="_blank" rel="noopener noreferrer">
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
    
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="cursor-pointer flex flex-col gap-2"
          >
            <motion.div>
         <img src="/safepazz.png" alt="Project 1" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </motion.div>
           <p>{t("projects.links.text")} Safepazz dashboard</p>
          </motion.div>
          </a>
        {/* ))} */}

<a href="https://atl-store-82c99.web.app/signIn" target="_blank" rel="noopener noreferrer">
          <motion.div
          
            variants={item}
            whileHover={{ scale: 1.05 }}
    
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="cursor-pointer flex flex-col gap-2"
          >
            <motion.div>
         <img src="/atldash.png" alt="Project 2" className="w-full h-48 object-cover rounded-lg shadow-md" />
      
          </motion.div>
        <p>{t("projects.links.text")} ATL Store Dashboard</p>
          </motion.div>
</a>


<a href="https://smart-save-a659c.web.app" target="_blank" rel="noopener noreferrer">
            <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
    
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="cursor-pointer flex flex-col gap-2"
          >
            <motion.div  >
         <img src="/SSdash.png" alt="Project 3" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </motion.div>
           <p>{t("projects.links.text")} Smartsave Dashboard</p>
          </motion.div>
          </a>



         <a href="https://www.zetabyte.studio" target="_blank" rel="noopener noreferrer">
            <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
    
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="cursor-pointer flex flex-col gap-2"
          >
          <motion.div>
         <img src="/zetalanding.png" alt="Project 5" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </motion.div>
            <p>{t("projects.links.text")}Zetabyte Landing Page</p>
          </motion.div>
</a>

{/* 
<a href="https://smart-save-a659c.web.app/dashboard" target="_blank" rel="noopener noreferrer">
             <motion.div
            variants={item}
            whileHover={{ scale: 1.05 }}
    
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="cursor-pointer  flex flex-col gap-2"
          >
            <motion.div>
         <img src="/SSgraph.png" alt="Project 5" className="w-full h-48 object-cover rounded-lg shadow-md" />
          </motion.div>
            <p>{t("projects.links.text")} Smarsave Dashboard</p>
          </motion.div>
          </a> */}

      </motion.div>
    </motion.div>
  );
};
