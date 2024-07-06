import { MahasiswaType } from '../../data/materi'
import { PersonCard } from './PersonCard'

export const PersonList = ({persons}:{persons:MahasiswaType[]}) => {
  return (
    <div className='flex flex-wrap space-x-4 justify-center items-center'>
        {
            persons.map((mhs)=>(
                <PersonCard as={mhs.as} image={ mhs.image} nama={mhs.nama} />
            ))
        }
    </div>
  )
}
