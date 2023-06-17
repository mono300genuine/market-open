
interface Props {
  name: string;
  photo: string;
  price: number;
}

function Service({ name, photo, price }: Props) {
  return (
    <div className=" rounded-2xl drop-shadow-lg bg-white w-[340px] flex flex-col items-center max-h-[600px]">
      <img
        src={photo}
        alt=""
        className="rounded-t-2xl max-h-40 w-full object-cover"
        width=""
      />
      <div className="p-3">
        <div className="flex flex-row pb-3 gap-24">
          <h1 className="flex justify-start text-xl">{name}</h1>
          <h2 className="">{price}</h2>
        </div>
        <button
          className=" bg-[#3EA2FF] rounded-2xl px-6 py-2 w-full text-white text-lg
        hover:bg-[#56abfa]"
          type="submit"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export { Service };
