import Image from "next/image";
import { easeInOut, motion } from "framer-motion";
import { MotionDiv } from "./MotionDiv";

export interface ArtProp {
  id: number;
  title: string;
  image_id: string;
}

interface Prop {
  art: ArtProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function ArtCard({ art, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-full rounded relative w-full h-full"
    >
      <div className="relative w-full h-[50vh]">
        <Image
          src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
          alt={art.title}
          fill
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {art.title}
          </h2>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default ArtCard;
