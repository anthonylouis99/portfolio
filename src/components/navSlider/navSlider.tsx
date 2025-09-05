import { motion } from "framer-motion";



type NavSliderProps = {
  items: string[];
    active: string;
    activeSetter: (item: string) => void;

}

export default function NavbarSlider({items,active,activeSetter}:NavSliderProps) {


  return (
   <div className="flex  relative justify-between p-4 bg-[var(--navbar-background)] text-white">
     <div className="flex gap-4">
      {items.map((item) => (

        <button
          key={item}
          onClick={() => activeSetter(item)}
          className={`relative z-10 px-2 py-1 font-medium ${
            active === item ? "text-blue-600" : "text-gray-600"
          }`}
        >
          {item}
          {active === item && (
            <motion.div
              layoutId="nav-highlight"
              className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600 rounded"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>

      ))}
      </div>
    </div>
  );
};

