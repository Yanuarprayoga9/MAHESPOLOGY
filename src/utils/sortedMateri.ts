import { MateriType, kehidupanAnakKuliah } from "../data/materi";

export const sortedMateri = (s: string): MateriType[] => {
  const sorted: MateriType[] = kehidupanAnakKuliah.filter((obj) => obj.category.toLowerCase() === s.toLowerCase());
  return sorted;
};
