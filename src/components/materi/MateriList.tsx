import { MateriType } from '../../data/materi'
import { MateriCard } from './MateriCard'

interface props {
    materis:MateriType[]
}
export const MateriList = (props:props) => {
    console.log(props.materis)
  return (
    <div className='flex flex-wrap justify-center'>
        {
            props.materis.map((materi)=>(
                <MateriCard category={materi.category} desc={materi.desc} image={materi.image} title={materi.title}/>
            ))
        }
        
    </div>
  )
}
