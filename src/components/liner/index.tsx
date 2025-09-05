
import {motion} from "framer-motion"


export const Liner=()=>{
    return(
        <div className="flex w-full justify-center items-center ">

    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 6000 315"
      width="100%"
      height="200"
      fill="none"
      stroke="gray"
      strokeWidth={6}
    //   strokeLinecap="round"
    >
      <motion.path
        d="
          M 0 157.5 
          H 2622 
          A 231.5 157.5 0 1 1 3085 157.5 
          A 231.5 157.5 0 1 1 2622 157.5 
          H 6000
        "
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{
          duration: 2,
        //   repeat: Infinity,
        //   repeatType: "reverse", // yoyo
          ease: "linear",
        }}
      />
    </motion.svg>

        </div>
    )
}