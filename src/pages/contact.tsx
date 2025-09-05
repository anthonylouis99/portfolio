import { useTranslation } from "react-i18next";
import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


// Animation Variants
const container :Variants= {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
};

export const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-[var(--color-Text)]"
    >
      {/* Section Wrapper */}
      <motion.div
        className="w-full max-w-4xl bg-[var(--main-background)] 
        backdrop-blur-sm rounded-2xl  flex flex-col items-center 
        gap-6 p-8 md:p-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          variants={item}
        >
          {t("contact.title")}
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-center max-w-2xl"
          variants={item}
        >
          {t("contact.description")}
        </motion.p>

        {/* Email */}
        <motion.p
          className="text-lg md:text-xl font-medium"
          variants={item}
        >
          📧 {t("contact.email")}
        </motion.p>

        {/* Phone */}
        <motion.p
          className="text-lg md:text-xl font-medium"
          variants={item}
        >
          📞 {t("contact.phone")}
        </motion.p>

         <motion.div
         variants={item}
         className=" flex gap-4">
      <a href={"https://github.com/anthonylouis99"}>
      <div className="flex flex-col gap-2 justify-center items-center">
           <FaGithub />
       <small>
        GitHub
       </small>
      </div>
      </a>


    <a href={"https://www.linkedin.com/in/dalu-orji-a58018381/"}>
      <div className="flex flex-col gap-2 justify-center items-center">
            <FaLinkedin />
       <small>
        LinkIn
       </small>

      </div>
      
      </a>


       <a href="https://orjidalu@gmail.com">
      <div className="flex flex-col gap-2 justify-center items-center">
           <FcGoogle />
       <small>
        Gmail
       </small>

      </div>
      
      </a>
    </motion.div>
      </motion.div>
    </section>
  );
};
