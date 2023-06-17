import mouse from "../../../assets/images/mouse.jpg"

function Product(){
  return (
    <div className="w-1/5 rounded-2xl drop-shadow-lg bg-white">
      <img src={mouse} alt='' className="rounded-t-2xl"/>
      <div>
        <h1 className="flex justify-start px-4 py-2 text-xl">Mouse Chido</h1>
        <div className="flex flex-row gap-5 px-6 py-2 justify-center">
          <button className=" bg-[#3EA2FF] rounded-2xl px-6 py-2" type="submit">Buy</button>
          <h2>$1</h2>
        </div>
      </div>
    </div>
    );
}

export {Product};