import mouse from "../../../assets/images/mouse.jpg"

function Product(){
  return (
    <div className="w-1/5 rounded-2xl drop-shadow-lg bg-white">
      <img src={mouse} alt='' className="rounded-t-2xl"/>
      <div className="p-3">
        <div className="flex flex-row pb-3 gap-24">
          <h1 className="flex justify-start text-xl">Mouse Chido</h1>
          <h2 className="">$1</h2>
        </div>
        <button className=" bg-[#3EA2FF] rounded-2xl px-6 py-2 w-full text-white text-lg
        hover:bg-[#56abfa]" type="submit">Buy</button>
      </div>
    </div>
    );
}

export {Product};