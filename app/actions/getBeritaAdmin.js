'use server';

import { prisma } from "../lib/db";

export async function getBeritaAdmin(cursor, limit = 14) {
  const items = await prisma.berita.findMany({
    take: limit + 1, // Ambil satu tambahan untuk mengecek apakah ada data berikutnya
    skip: cursor ? 1 : 0, // Lewati satu jika cursor ada
    cursor: cursor ? { id: cursor } : undefined,
    orderBy: { createdAt: 'desc' }, // Urutkan berdasarkan waktu atau field lain
    include: {
      kategori: {
        select: {
          nama: true
        }
      }
    }
  });

  const nextCursor = items.length > limit ? items.pop().id : null; // Ambil item tambahan dan tentukan cursor baru
  
  return {
    items,
    nextCursor,
  };
}
