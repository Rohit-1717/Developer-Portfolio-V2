import { useMotionValue } from "motion/react";
import { useMotionTemplate, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const EvervaultCard = ({
  image,
  alt,
  className,
}: {
  image: string;
  alt?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseX={mouseX} mouseY={mouseY} image={image} alt={alt} />
      </div>
    </div>
  );
};
function CardPattern({ mouseX, mouseY, image, alt }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none w-full h-full relative">
      {/* Hover effect for medium and up screens only */}
      <div className="hidden sm:block">
        {/* Background Fade */}
        <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>

        {/* Gradient highlight */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
          style={style}
        />

        {/* Image Reveal on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100"
          style={style}
        >
          <img
            src={image}
            alt={alt || "reveal image"}
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>
      </div>

      {/* Direct image for small screens */}
      <div className="sm:hidden absolute inset-0 rounded-2xl overflow-hidden">
        <img
          src={image}
          alt={alt || "reveal image"}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}


export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
