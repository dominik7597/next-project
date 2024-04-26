"use server";

import ArtCard, { ArtProp } from "@/components/ArtCard";
import { error } from "console";

export const fetchArt = async (page: number) => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=4&fields=id,title,image_id`
  );

  const data = (await response.json()).data;

  const filteredData = data.filter(async (item: ArtProp) => {
    try {
      const imageResponse = await fetch(
        `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
        { method: "HEAD" }
      );
      if (imageResponse.status === 403) {
        throw error;
      }
      return imageResponse.ok;
    } catch (error) {
      return false;
    }
  });

  return filteredData.map((item: ArtProp, index: number) => (
    <ArtCard key={item.id} art={item} index={index} />
  ));
};
