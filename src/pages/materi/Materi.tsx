import { useEffect, useState } from 'react';
import { MateriSemesterHeader } from '../../components/materi/MateriSemesterHeader';
import Error from '../../components/_Shared/Error';
import { MateriList } from '../../components/materi/MateriList';
import { sortedMateri } from '../../utils/sortedMateri';
import { features } from '../../data/materi';

const Materi = () => {
  const [descs, setDescs] = useState('');
  const searchParams = new URLSearchParams(location.search);
  const [filter] = useState(searchParams.get('materi') || '');
  useEffect(() => {
    if (filter === '') return;

    const feature = features.find((f) => f.title === filter);
    if (feature) {
      setDescs(feature.desc);
    }
  }, [filter]);

  if (filter === '') return <Error />;

  return (
    <div className="p-5 md:px-12 py-24 min-h-screen">
      <div className="">
        <MateriSemesterHeader title={`Halo ${filter}`} desc={descs} />
        <MateriList materis={sortedMateri(filter)} />
      </div>
    </div>
  );
};

export default Materi;
