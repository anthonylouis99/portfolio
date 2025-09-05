import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <motion.div
        className="w-full min-h-[500px] h-screen max-h-[1000px] bg-[var(--main-background)] text-[var(--color-Text)] backdrop-blur-sm flex flex-col items-start text-center p-8"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Text Section */}
        <motion.div
          className="w-[80%] max-w-[700px] flex flex-col gap-4 text-left mt-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold">{t("home.welcome")}</h2>
          <p className="text-xl font-semibold">{t("home.subText")}</p>
       
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex w-full gap-6 justify-center pt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="fit w-100 rounded-lg overflow-hidden border">
            <img src="./Laptop-II.jpg" alt="work Space" />
          </div>
        </motion.div>

         <motion.div
          className="flex w-full gap-6 justify-center pt-20"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x:0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
         <a href="/resume.pdf" download="My_Resume.pdf">
         <button className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-600 transition">
            Download Resume
        </button>
       </a>

        </motion.div>


      </motion.div>
    </div>
  );
};
