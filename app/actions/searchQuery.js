"use server";
import { prisma } from "../lib/db";

export const searchQuery = async (words) => {
  let items;
  try {
    items = await prisma.berita.findMany({
      where: {
        OR: [
          {
            judul: {
              contains: words,
            },
          },
          {
            isi: {
              contains: words,
            },
          },
        ],
        isDraft:false
      },
    });
  } catch (error) {
    console.log(error.message);
  }
  console.log(items);
  return items;
};
