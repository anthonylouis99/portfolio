import { useTranslation } from "react-i18next";
import ServiceCard from "../components/cards/cards";
import { Code, Smartphone, Layout } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { easeOut } from "framer-motion"; 


const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }, 
};

export const Frameworks = () => {
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
        {t("frameworks.title")}
      </motion.h2>
      

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        variants={container}
      >
        {[
  {
    title: t("frameworks.Framework1"),
    desc: t("frameworks.descFramework1"),
    icon: <Code />,
  },
  {
    title: t("frameworks.Framework2"),
    desc:t("frameworks.descFramework2"),
    icon: <Layout />,
  },
  {
    title: t("frameworks.Framework3"),
    desc: t("frameworks.descFramework3"),
    icon: <Smartphone />,
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
