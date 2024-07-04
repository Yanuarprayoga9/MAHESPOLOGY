import { useState } from 'react'
import { MateriSemesterHeader } from '../../components/materi/MateriSemesterHeader';
import Error from '../../components/_Shared/Error';
import { MateriList } from '../../components/materi/MateriList';
import { sortedMateri } from '../../utils/sortedMateri';


const Materi = () => {
   
    const searchParams = new URLSearchParams(location.search);
    const  [filter] = useState(searchParams.get('materi') || "")
 
    if(filter=="") return <Error/>



  return (
    <div className='p-5 md:px-12 py-24 min-h-screen'>
        <div className=''>
            <MateriSemesterHeader title={`Halo ${filter}`} desc='hail'/>
            <MateriList  materis={sortedMateri(filter)}/>
        </div>
    </div>
  )
}

export default Materi