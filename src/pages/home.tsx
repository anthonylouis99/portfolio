import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <motion.div
        className="w-full min-h-[500px] h-screen max-h-[1000px] bg-[var(--main-background)] text-[var(--color-Text)] backdrop-blur-sm flex flex-col items-start text-center p-8"
        initial={{ opacity: 0, y: 50 }} // start hidden & slightly down
        whileInView={{ opacity: 1, y: 0 }} // animate when in view
        viewport={{ once: true, amount: 0.3 }} // trigger only once when 30% visible
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
          {/* <p>{t("home.intro")}</p> */}
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
      </motion.div>
    </div>
  );
};
