// import { useTranslation } from "react-i18next";
// import { motion, type Variants } from "framer-motion";

// const container:Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut",
//       staggerChildren: 0.3,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

export const AboutPage = () => {
//   const { t } = useTranslation();

//   return (
//     <section
//       id="about"
//       className="relative flex flex-col items-center justify-center min-h-screen px-6 text-[var(--color-Text)]"
//     >
 
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold text-center"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         {t("about.title")}
//       </motion.h2>

//       <motion.div
//         className="w-full max-w-7xl bg-[var(--main-background)] 
//         backdrop-blur-sm rounded-2xl flex flex-col md:flex-row items-center 
//         gap-10 p-8 md:p-12"
//         variants={container}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         <motion.div
//           variants={item}
//           className="h-48 w-48 md:h-60 md:w-60 overflow-hidden rounded-full border border-[var(--primary)] flex-shrink-0 shadow-lg"
//         >
//           <img
//             src="./TonyImage.jpeg"
//             alt="Photo"
//             className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
//           />
//         </motion.div>

//         <motion.div
//           variants={item}
//           className="flex-1 max-w-2xl text-center md:text-left space-y-6"
//         >
//           <p className="text-lg md:text-xl leading-relaxed italic">
//             {t("about.description")}
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
};
