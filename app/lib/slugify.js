export const createSlug = (title) => {
    return title
      .toLowerCase() // Mengubah semua huruf menjadi lowercase
      .replace(/\s+/g, '-') // Mengganti semua spasi dengan -
      .replace(/[^\w-]+/g, '') // Menghapus karakter non-alfanumerik (selain - dan _)
      .replace(/--+/g, '-') // Mengganti beberapa tanda - yang berurutan menjadi satu
      .trim('-'); // Menghapus tanda - yang ada di awal atau akhir string
  };