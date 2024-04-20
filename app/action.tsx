"use server";

import ArtCard, { ArtProp } from "@/components/ArtCard";

export const fetchArt = async (page: number) => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=4&fields=id,title,image_id`
  );

  const data = (await response.json()).data;

  return data.map((item: ArtProp, index: number) => (
    <ArtCard key={item.id} art={item} index={index} />
  ));
};
