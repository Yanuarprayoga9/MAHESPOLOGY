import { MINI1,MINI2,MINI3 } from ".";
import irulimg from "../assets/profile/irul.jpg"
import safira from "../assets/profile/safira maia.jpg"
import faradis from "../assets/profile/faradis.jpg"
import fiqhi from "../assets/profile/fiqhi.png"
import yanu from "../assets/profile/yanu.jpg"
import upi from "../assets/profile/upi.jpg"
import nesya from "../assets/profile/nesya syafa.jpg"
import amal from "../assets/profile/amalia dyah.jpg"

export interface MateriType {
  title:string,
  desc:string,
  image:string,
  category:string,
}
export const kehidupanAnakKuliah: MateriType[] = [
  {
    title: "Kehidupan Mahasiswa Baru",
    desc: "Baru masuk kuliah? Tenang aja, semua orang pasti ngerasain masa-masa adaptasi. Mulai dari nyari kelas, kenalan sama dosen, sampe belajar hidup mandiri. Kuliah beda banget sama sekolah, jadi siap-siap aja buat banyak perubahan. Jangan lupa buat aktif ikut kegiatan kampus, biar bisa dapet banyak temen baru dan pengalaman seru. Nikmatin aja prosesnya, karena masa-masa ini bakal jadi kenangan yang nggak terlupakan.",
    image: MINI1,
    category: "Maba"
  },
  {
    title: "Tips Mengatur Waktu bagi Mahasiswa Baru",
    desc: "Mengatur waktu dengan baik adalah kunci sukses bagi mahasiswa baru. Buat jadwal harian yang jelas, prioritaskan tugas-tugas penting, dan jangan lupa buat waktu istirahat. Gunakan kalender akademik untuk melacak deadline tugas dan ujian. Hindari prokrastinasi dengan cara membagi tugas besar menjadi bagian-bagian kecil yang lebih mudah dikerjakan. Manfaatkan teknologi seperti aplikasi to-do list atau kalender digital untuk membantu mengorganisir waktu. Dengan manajemen waktu yang baik, kamu bisa tetap produktif tanpa merasa kewalahan.",
    image: MINI1,
    category: "Maba"
  },
  {
    title: "Cara Membangun Jaringan Pertemanan",
    desc: "Di awal kuliah, penting banget buat bangun jaringan pertemanan yang luas. Kenalan sama temen-temen di kelas, ikut organisasi, atau sekedar nongkrong di kantin bisa jadi cara efektif buat dapet temen baru. Jangan ragu buat gabung di acara-acara kampus, karena disitu kamu bisa ketemu banyak orang dengan minat yang sama. Jaringan pertemanan yang luas bisa bantu kamu lebih mudah adaptasi dan dapet banyak informasi penting tentang perkuliahan.",
    image: MINI1,
    category: "Maba"
  },
  {
    title: "Mengenal Sistem Pembelajaran di Kampus",
    desc: "Sistem pembelajaran di kampus beda banget sama di sekolah. Kamu harus lebih mandiri dalam mencari materi, karena dosen biasanya nggak akan mengulang-ulang penjelasan. Manfaatkan perpustakaan dan sumber-sumber belajar online untuk menambah pengetahuan. Jangan ragu buat tanya ke dosen atau asisten dosen kalau ada yang nggak paham. Aktiflah di kelas dan jangan malu untuk berpartisipasi dalam diskusi.",
    image: MINI1,
    category: "Maba"
  },

  // Kategori: Pertengahan
  {
    title: "Kehidupan Mahasiswa Semester Pertengahan",
    desc: "Semester pertengahan adalah saatnya untuk lebih fokus pada jurusan yang dipilih dan mulai terlibat lebih dalam di organisasi kampus. Kamu sudah lebih mengenal dunia perkuliahan dan bisa mulai merencanakan langkah-langkah ke depan. Ini adalah waktu yang tepat untuk mencari magang atau proyek yang sesuai dengan minat dan jurusanmu. Jangan lupa untuk menjaga keseimbangan antara akademis dan kegiatan non-akademis. Aktif dalam organisasi bisa nambah pengalaman dan skill yang berguna buat karier masa depan.",
    image: MINI2,
    category: "Pertengahan"
  },
  {
    title: "Strategi Belajar di Semester Pertengahan",
    desc: "Udah paham cara kuliah? Coba deh pake strategi belajar yang lebih efektif. Bikin tempat belajar yang nyaman dan bebas gangguan, gunakan teknik belajar yang sesuai dengan gaya belajarmu, seperti membaca cepat, membuat mind map, atau diskusi kelompok. Aktiflah di kelas dengan bertanya dan berpartisipasi dalam diskusi. Jangan ragu buat minta bantuan dosen atau teman kalau ada materi yang nggak paham. Review materi secara rutin, jangan nunggu sampe mau ujian aja. Dengan strategi belajar yang tepat, kamu bisa lebih paham dan nggak gampang lupa materi kuliah.",
    image: MINI2,
    category: "Pertengahan"
  },
  {
    title: "Manfaat Ikut Organisasi Kampus",
    desc: "Ikut organisasi kampus punya banyak manfaat, lho! Kamu bisa dapet pengalaman kepemimpinan, memperluas jaringan pertemanan, dan menambah soft skills yang berguna buat dunia kerja nanti. Selain itu, kamu juga bisa belajar bekerja dalam tim, mengatur waktu, dan mengasah kemampuan komunikasi. Jangan ragu buat gabung di organisasi yang sesuai dengan minatmu. Pengalaman ini nggak cuma bikin masa kuliahmu lebih berwarna, tapi juga nambah poin plus di CV kamu.",
    image: MINI2,
    category: "Pertengahan"
  },
  {
    title: "Mengelola Keuangan Selama Kuliah",
    desc: "Mengelola keuangan dengan bijak itu penting banget selama kuliah. Buatlah anggaran bulanan untuk mengatur pengeluaran dan pemasukan. Usahakan untuk menabung meski sedikit, karena bisa jadi dana darurat. Jangan tergoda buat sering-sering nongkrong atau belanja yang nggak perlu. Manfaatkan diskon mahasiswa dan cari tahu tentang beasiswa yang bisa kamu dapatkan. Dengan pengelolaan keuangan yang baik, kamu bisa hidup lebih tenang dan fokus pada perkuliahan.",
    image: MINI2,
    category: "Pertengahan"
  },

  // Kategori: Akhir
  {
    title: "Kehidupan Mahasiswa Semester Akhir",
    desc: "Semester akhir adalah masa-masa yang menantang dan penuh dengan berbagai persiapan. Fokus utama kamu adalah menyelesaikan tugas akhir, mencari magang atau pekerjaan, dan mempersiapkan diri untuk masuk ke dunia kerja. Jangan lupa untuk tetap menjaga kesehatan fisik dan mental, karena tekanan di semester akhir bisa sangat tinggi. Manfaatkan waktu sebaik mungkin untuk menyelesaikan tugas-tugas yang ada, tapi jangan lupa untuk tetap bersosialisasi dan menikmati waktu bersama teman-teman. Masa-masa ini akan jadi kenangan yang sangat berharga.",
    image: MINI3,
    category: "Akhir"
  },
  {
    title: "Persiapan Karier di Semester Akhir",
    desc: "Di semester akhir, persiapan karier menjadi fokus utama. Perbarui CV dan portofolio dengan semua pengalaman dan skill yang kamu punya. Cari peluang magang atau kerja yang sesuai dengan jurusan dan minatmu. Jangan lupa untuk aktif menghadiri job fair dan seminar karier untuk menambah wawasan dan jaringan. Persiapkan diri untuk interview kerja dengan latihan soal-soal interview dan simulasi. Manfaatkan jasa bimbingan karier yang biasanya disediakan oleh kampus. Persiapan yang matang akan membantumu lebih percaya diri saat memasuki dunia kerja.",
    image: MINI3,
    category: "Akhir"
  },
  {
    title: "Menyelesaikan Tugas Akhir dengan Sukses",
    desc: "Tugas akhir adalah salah satu tantangan terbesar di semester akhir. Mulailah dengan memilih topik yang kamu minati dan buat rencana kerja yang jelas. Jangan tunda-tunda pengerjaannya, karena tugas akhir butuh waktu dan penelitian yang mendalam. Jangan ragu untuk berkonsultasi dengan dosen pembimbing dan meminta masukan dari teman atau senior. Jaga kesehatan dan istirahat yang cukup, karena menyelesaikan tugas akhir memerlukan stamina yang baik. Dengan persiapan yang matang dan kerja keras, kamu bisa menyelesaikan tugas akhir dengan sukses.",
    image: MINI3,
    category: "Akhir"
  },
  {
    title: "Menghadapi Dunia Kerja Setelah Lulus",
    desc: "Setelah lulus, kamu akan memasuki dunia kerja yang penuh dengan tantangan baru. Persiapkan diri dengan terus belajar dan meningkatkan keterampilan. Jangan takut untuk memulai dari bawah dan terus mencari pengalaman. Manfaatkan jaringan yang sudah kamu bangun selama kuliah untuk mencari peluang kerja. Tetap semangat dan jangan mudah menyerah. Ingat, kesuksesan tidak datang dengan instan, tapi dengan kerja keras dan dedikasi.",
    image: MINI3,
    category: "Akhir"
  }
];


export interface gayaHidupMateriType {
  title: string;
  desc: string;
}
export const gayaHidupMateri:gayaHidupMateriType[] = [
  {
      title: "Pola Makan Mahasiswa",
      desc: "Saat kuliah, menjaga pola makan yang sehat bisa menjadi tantangan tersendiri. Dengan jadwal yang padat, seringkali lebih memilih makanan cepat saji atau cemilan yang kurang sehat. Pastikan mengonsumsi makanan yang kaya akan serat, protein, vitamin, dan mineral. Jangan lupa untuk minum cukup air agar tubuh tetap terhidrasi. Usahakan untuk tidak melewatkan sarapan karena ini adalah sumber energi utama di pagi hari."
  },
  {
      title: "Jam Tidur",
      desc: "Tidur yang cukup adalah kunci untuk menjaga kesehatan dan performa akademik. Mahasiswa idealnya butuh sekitar 7-9 jam tidur setiap malam. Kurang tidur bisa berdampak buruk pada konsentrasi, mood, dan kesehatan secara keseluruhan. Cobalah untuk membuat jadwal tidur yang teratur dan hindari penggunaan gadget sebelum tidur agar kualitas tidur lebih baik. Tidur siang singkat bisa menjadi solusi sementara untuk mengembalikan energi di siang hari."
  },
  {
      title: "Olahraga Teratur",
      desc: "Di tengah kesibukan kuliah, jangan lupakan pentingnya berolahraga. Olahraga membantu menjaga kebugaran tubuh dan mengurangi stres. Luangkan waktu 30 menit setiap hari untuk berjalan kaki, bersepeda, atau yoga. Bergabung dengan komunitas olahraga di kampus bisa menjadi cara yang menyenangkan untuk tetap aktif dan menambah teman baru."
  },
  {
      title: "Pertemanan dan Organisasi",
      desc: "Pertemanan dan keaktifan dalam organisasi mahasiswa adalah bagian penting dari kehidupan kampus. Teman yang mendukung membuat perjalanan kuliah lebih menyenangkan. Bergabung dengan organisasi membantu mengembangkan soft skills seperti kepemimpinan, komunikasi, dan kerja tim. Organisasi juga merupakan tempat membangun jaringan profesional yang berguna di masa depan."
  },
  {
      title: "Pentingnya Olahraga bagi Mahasiswa",
      desc: "Olahraga tidak hanya berpengaruh pada kesehatan fisik, tetapi juga memengaruhi kesehatan mental dan kemampuan akademis. Melalui olahraga, tubuh tetap bugar, meningkatkan kekuatan otot dan tulang, serta daya tahan tubuh. Olahraga juga meningkatkan konsentrasi dan memperbaiki aliran darah ke otak untuk kemampuan ingatan dan pembelajaran. Selain itu, olahraga mengurangi stres dan menjaga kesiapan mental."
  },
  {
      title: "Yuk Tetap Aktif dan Produktif!",
      desc: "Untuk menjaga kesehatan dan produktivitas melalui olahraga, ada berbagai cara yang bisa dicoba. Mulai dari berjalan santai sampai yoga, tersedia banyak opsi untuk meningkatkan energi dan fokus. Dengan memasukkan kegiatan olahraga ke dalam rutinitas sehari-hari, tidak hanya kesehatan fisik yang meningkat, tetapi juga kemampuan akademis akan teroptimalkan. Pastikan memberikan waktu istirahat yang cukup agar tubuh pulih sepenuhnya dan siap menghadapi berbagai tantangan."
  }
];
export const features = [
  {
    image: MINI1,
    title: 'Maba',
    // desc: "Lo awal semester baru masuk kuliah ",
    desc: 'Hai Sobat Posey! Selamat datang di tahap awal perjalanan kuliahmu, yaitu sebagai mahasiswa baru! Di tahap ini, kalian sedang beradaptasi dengan lingkungan kampus yang baru, bertemu dengan teman-teman baru, dan mulai mengenal berbagai mata kuliah dasar. Ini adalah masa yang penuh dengan kegembiraan sekaligus tantangan.<br><br> Sebagai mahasiswa baru, penting untuk mengenali ritme perkuliahan yang berbeda dari masa sekolah. Mulailah dengan memahami jadwal kuliah, mencari tahu lokasi kelas, dan mengenal dosen-dosen yang akan mengajar kalian. Jangan ragu untuk bertanya dan mencari bantuan jika merasa kesulitan.<br><br> Selain itu, Sobat Posey bisa mulai aktif dalam kegiatan di luar kelas seperti organisasi mahasiswa atau klub yang sesuai dengan minat kalian. Ini akan membantu kalian untuk cepat beradaptasi dan membangun jaringan pertemanan yang kuat. Tetap semangat dan nikmati proses belajar yang baru ini! ',
  },
  {
    image: MINI2,
    title: 'Pertengahan',
    // desc: "Lo pertengahan semester udah mulai banyak nih tugasnya   ",
    desc: 'Hai Sobat Posey!<br/> Selamat datang di tahap seru perjalanan kuliahmu, yaitu kehidupan mahasiswa pertengahan!<br/><br/> Di tahap ini, kalian sudah mulai terbiasa dengan ritme perkuliahan dan mulai mendalami materi-materi yang lebih spesifik. Sobat Posey sudah lebih paham dengan gaya belajar di kampus. Tugas-tugas kelompok, presentasi, dan proyek mulai terasa lebih menantang. Jangan khawatir, ini adalah bagian dari proses pembelajaranmu! Di tahap ini, Sobat Posey mungkin mulai memilih mata kuliah yang lebih sesuai dengan minat dan bakat. Ini adalah kesempatan emas untuk mengeksplorasi bidang yang paling menarik bagi kalian. Selain itu, menjadi mahasiswa pertengahan artinya Sobat Posey mulai aktif dalam kegiatan di luar kelas. Bergabung dengan organisasi mahasiswa atau mengikuti kegiatan ekstrakurikuler bisa menambah pengalaman dan memperluas jaringan pertemananmu. <br/><br/> Tantangan terbesar di tahap ini adalah bagaimana Sobat Posey bisa menyeimbangkan waktu antara belajar, berorganisasi, dan bersosialisasi. Manajemen waktu yang baik sangat diperlukan agar semuanya berjalan lancar. Jangan lupa juga untuk tetap menjaga kesehatan fisik dan mentalmu ya, Sobat Posey!',
  },
  {
    image: MINI3,
    title: 'Akhir',
    // desc: "Lo pertengahan semester akhir yang lagi pusing ngerjain skripsi ",
    desc: 'Hai Sobat Posey! Selamat datang di tahap akhir perjalanan kuliahmu, yaitu sebagai mahasiswa tingkat akhir! Di tahap ini, kalian sedang bersiap-siap untuk menyelesaikan studi dan mempersiapkan diri untuk terjun ke dunia profesional. Tugas akhir, skripsi, atau proyek akhir mungkin menjadi fokus utama kalian saat ini.<br><br> Menjadi mahasiswa tingkat akhir berarti kalian sudah memiliki pemahaman yang mendalam tentang bidang studi kalian. Gunakan kesempatan ini untuk memperdalam pengetahuan dan keterampilan yang telah kalian pelajari. Jangan lupa untuk aktif mencari informasi tentang peluang karir, magang, atau studi lanjut yang sesuai dengan minat dan tujuan kalian.<br><br> Tantangan terbesar di tahap ini adalah bagaimana Sobat Posey bisa menyelesaikan tugas akhir tepat waktu sambil mempersiapkan diri untuk langkah selanjutnya. Manajemen waktu, fokus, dan ketekunan sangat diperlukan agar semua berjalan lancar. Jaga kesehatan fisik dan mentalmu, serta tetap semangat mencapai tujuan akhir! ',
  },
];
export const semesterFilterdesc = [
  'Lo awal semester baru masuk kuliah ',
  'Lo pertengahan semester udah mulai banyak nih tugasnya   ',
  'Lo pertengahan semester akhir yang lagi pusing ngerjain skripsi ',
];


export  type MahasiswaType = {
  nama:string;
  as:string;
  image:string;
}
export const mahasiswaTeknikInformatika2022:MahasiswaType[] = [
  {
    nama: "Achmad Choerul Ramdhani",
    as: "Mahasiswa Teknik Informatika 2022",
    image: irulimg
  },
  {
    nama: "Amalia Dyah Puspita",
    as: "Mahasiswa Teknik Informatika 2022",
    image: amal
  },
  {
    nama: "Fiqhi Naura",
    as: "Mahasiswa Teknik Informatika 2022",
    image: fiqhi
  },
  {
    nama: "Lutfiya Ainurrahman Prasetyo",
    as: "Mahasiswa Teknik Informatika 2022",
    image: upi
  },
  {
    nama: "Muhammad Faradis",
    as: "Mahasiswa Teknik Informatika 2022",
    image: faradis
  },
  {
    nama: "Nesya Syafa Nabila",
    as: "Mahasiswa Teknik Informatika 2022",
    image: nesya
  },
  {
    nama: "Safira Maia Prasasti",
    as: "Mahasiswa Teknik Informatika 2022",
    image: safira
  },
  {
    nama: "Yanuar Prayoga",
    as: "Mahasiswa Teknik Informatika 2022",
    image: yanu
  }
];
