


type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  return (
    <li className="relative mx-2 inline-block w-[460px]">
      <div className="absolute z-30 flex h-[286px] w-[380px] md:h-[345px] md:w-[460px] flex-col items-center justify-center bg-primary-500 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90 select-chevron">
        <p className="text-2xl select-chevron">{name}</p>
        <p className="mt-5 select-chevron">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default Class;
