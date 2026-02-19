import { useTranslation } from "react-i18next";
import { motion, type Variants} from "framer-motion";

export const HomePage = () => {
  const { t } = useTranslation();
  const container:Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

  return (
    <div className="">
         <motion.div
          className="w-[80%] max-w-[700px] flex flex-col gap-4 text-left text-white ml-10 mt-20"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold">{t("home.welcome")}</h2>
          <p className="text-xl font-semibold">{t("home.subText")}</p>
       
        </motion.div>
      <motion.div
        className="w-full min-h-[500px] h-screen max-h-[1000px] bg-[var(--main-background)] text-[var(--color-Text)] backdrop-blur-sm flex flex-col items-center text-center p-8"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.3 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Text Section */}
     

         <section
              id="about"
              className="relative flex flex-col items-center justify-center mt-10 text-[var(--color-Text)]"
            >
         
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-center"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                {t("about.title")}
              </motion.h2>
        
              <motion.div
                className="w-full max-w-7xl bg-[var(--main-background)] 
                backdrop-blur-sm rounded-2xl flex flex-col md:flex-row items-center 
                gap-10 p-8 md:p-12"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  variants={item}
                  className="h-48 w-48 md:h-60 md:w-60 overflow-hidden rounded-full border border-[var(--primary)] flex-shrink-0 shadow-lg"
                >
                  <img
                    src="./TonyImage2.webp"
                    alt="Photo"
                    loading="lazy"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
        
                <motion.div
                  variants={item}
                  className="flex-1 max-w-2xl text-center md:text-left space-y-6"
                >
                  <p className="text-lg md:text-xl leading-relaxed italic">
                    {t("about.description")}
                  </p>
                </motion.div>
              </motion.div>

         <motion.div
          className="flex w-full  gap-6 justify-center pt-5"
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
            </section>

      </motion.div>
    </div>
  );
};
