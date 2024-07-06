import { PersonList } from "../../components/tentangkami/PersonList"
import { ProfileHeader } from "../../components/tentangkami/profileHeader"
import { mahasiswaTeknikInformatika2022 } from "../../data/materi"

const TentangKami = () => {

  return (
    <div className=" py-24 min-h-screen">
      <ProfileHeader title="Tentang Kami" desc="Kami berharap website ini bisa menjadi sumber informasi yang bermanfaat dan inspiratif bagi semua mahasiswa, baik itu mahasiswa baru, mahasiswa pertengahan, maupun mahasiswa akhir. Dengan berbagi tips, pengalaman, dan panduan praktis, saya ingin membantu Sobat Posey menjalani masa perkuliahan dengan lebih mudah dan menyenangkan. Semoga website ini juga dapat menjadi tempat untuk berbagi cerita dan bertukar informasi, sehingga kita semua bisa saling mendukung dan berkembang bersama. Mari jadikan website ini sebagai wadah untuk belajar, bertumbuh, dan saling menginspirasi satu sama lain!"/>
      <div className="w-full">
        <PersonList  persons={mahasiswaTeknikInformatika2022}/>
      </div>
    </div>
  )
}

export default TentangKami