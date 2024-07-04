import { MINI1 } from ".";


export interface MateriType {
  title:string,
  desc:string,
  image:string,
  category:string,
}
export const kehidupanAnakKuliah:MateriType[] = [
    {
      title: "Kehidupan Mahasiswa Baru",
      desc: "Masa transisi dari SMA ke kehidupan perkuliahan penuh tantangan dan penyesuaian. Mahasiswa baru biasanya masih dalam tahap beradaptasi dengan lingkungan, sistem pembelajaran, dan cara hidup yang lebih mandiri.",
      image: MINI1,  // Ganti dengan URL atau path gambar yang relevan
      category: "Maba"
    },
    {
      title: "Kehidupan Mahasiswa Semester Pertengahan",
      desc: "Mahasiswa semester pertengahan sudah lebih mengenal dunia perkuliahan. Mereka mulai fokus pada jurusan yang dipilih, terlibat dalam organisasi, dan mulai merencanakan karier masa depan.",
      image: MINI1,  // Ganti dengan URL atau path gambar yang relevan
      category: "Pertengahan"
    },
    {
      title: "Kehidupan Mahasiswa Semester Akhir",
      desc: "Mahasiswa semester akhir berada dalam tahap penyelesaian studi. Fokus utama mereka adalah menyelesaikan tugas akhir, magang, dan mempersiapkan diri untuk masuk ke dunia kerja.",
      image:MINI1,  // Ganti dengan URL atau path gambar yang relevan
      category: "Akhir"
    },
    {
      title: "Cara Mengatur Waktu untuk Mahasiswa Baru",
      desc: "Mengatur waktu dengan baik adalah kunci sukses bagi mahasiswa baru dalam menjalani perkuliahan. Berikut adalah beberapa tips yang dapat membantu mahasiswa baru untuk mengelola waktu mereka dengan efektif: Buat jadwal harian, prioritaskan tugas, gunakan kalender akademik, hindari prokrastinasi, sisihkan waktu untuk istirahat, dan manfaatkan teknologi.",
      image: MINI1,  // Ganti dengan URL atau path gambar yang relevan
      category: "Maba"
    }
  ];
  
  console.log(kehidupanAnakKuliah);
  