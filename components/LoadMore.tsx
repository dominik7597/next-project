"use client";

import { fetchArt } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ArtCard from "./ArtCard";

let page = 2;

export type ArtCard = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<ArtCard[]>([]);

  useEffect(() => {
    if (inView) {
      fetchArt(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
