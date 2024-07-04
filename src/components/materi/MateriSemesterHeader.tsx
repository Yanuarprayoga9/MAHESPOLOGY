interface props {
    title:string;
    desc:string
}
export const MateriSemesterHeader = (props:props) => {
    const {title,desc} = props;
  return (
    <div className='flex flex-col space-y-3'>
        <h1 className='text-2xl'>{title}</h1>
        <p className='text-sm '>{desc}</p>
    </div>
  )
}
