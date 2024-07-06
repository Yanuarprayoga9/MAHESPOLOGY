interface props {
  title: string;
  desc: string;
}
export const ProfileHeader = (props: props) => {
  const { title, desc } = props;
  return (
    <div className="p-5 md:px-12 flex flex-col space-y-3 py-8">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-sm" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
};
