export interface Volume {
  volumeNumber: number;
  price: number;
  chapters: number;
  previewLink: string; // link a könyv elejére
}

export interface Manga {
  jpTitleRomaji: string; // japán cím latin betűvel
  enTitle: string;
  author: string;
  illustrator: string;
  description: string;
  volumes: Volume[];
}

export const MANGAS: Manga[] = [
  {
    jpTitleRomaji: "Shingeki no Kyojin",
    enTitle: "Attack on Titan",
    author: "Hajime Isayama",
    illustrator: "Hajime Isayama",
    description: "Egy emberiség a falak mögött él, és gigászi titánokkal küzd.",
    volumes: Array.from({ length: 34 }, (_, i) => ({
      volumeNumber: i + 1,
      price: 9.99,
      chapters: 4 + (i % 2), // példa, felezett chapters
      previewLink: `https://example.com/shingeki/vol${i + 1}/preview`
    }))
  },
  {
    jpTitleRomaji: "Boku no Hero Academia",
    enTitle: "My Hero Academia",
    author: "Kōhei Horikoshi",
    illustrator: "Kōhei Horikoshi",
    description: "Hősök akadémiája, ahol a fiatalok képességeket fejlesztenek.",
    volumes: Array.from({ length: 38 }, (_, i) => ({
      volumeNumber: i + 1,
      price: 7.99,
      chapters: 5 + (i % 3),
      previewLink: `https://example.com/mha/vol${i + 1}/preview`
    }))
  },
  {
    jpTitleRomaji: "Naruto",
    enTitle: "Naruto",
    author: "Masashi Kishimoto",
    illustrator: "Masashi Kishimoto",
    description: "Fiatal ninja kalandjai és barátságai.",
    volumes: Array.from({ length: 72 }, (_, i) => ({
      volumeNumber: i + 1,
      price: 8.99,
      chapters: 9 + (i % 2),
      previewLink: `https://example.com/naruto/vol${i + 1}/preview`
    }))
  },
  {
    jpTitleRomaji: "One Piece",
    enTitle: "One Piece",
    author: "Eiichiro Oda",
    illustrator: "Eiichiro Oda",
    description: "Kalózok kincset keresnek a Grand Line-on.",
    volumes: Array.from({ length: 105 }, (_, i) => ({
      volumeNumber: i + 1,
      price: 10.99,
      chapters: 10 + (i % 3),
      previewLink: `https://example.com/onepiece/vol${i + 1}/preview`
    }))
  },
  {
    jpTitleRomaji: "Kimetsu no Yaiba",
    enTitle: "Demon Slayer",
    author: "Koyoharu Gotouge",
    illustrator: "Koyoharu Gotouge",
    description: "Fiatal démonölő küzdelme a gonosz erőkkel.",
    volumes: Array.from({ length: 23 }, (_, i) => ({
      volumeNumber: i + 1,
      price: 9.49,
      chapters: 8 + (i % 2),
      previewLink: `https://example.com/demonslayer/vol${i + 1}/preview`
    }))
  }
  // Ide jöhet még további mangák ugyanilyen formátumban
];
