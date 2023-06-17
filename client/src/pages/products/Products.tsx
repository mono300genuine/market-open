import { Product } from "components/layout/product/ProductRectangle";
import mouse from "../../assets/images/mouse.jpg";
import boing from "../../assets/images/boing.jpg";
import campana from "../../assets/images/pomada.jpg";
import camiseta from "../../assets/images/camiseta.jpg";
import silla from "../../assets/images/silla.jpg";
import almohada from "../../assets/images/almohada.jpg";
import alcancia from "../../assets/images/alcancia.jpg";
import tenis from "../../assets/images/tenis.jpg";

function Products() {
  return (
    <div className="flex flex-col gap-5 px-5 py-10">
      <div className="flex flex-row gap-5">
        <div className="text-center  font-Varela font-semibold">
          <Product name="Mouse" photo={mouse} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Mango Boing" photo={boing} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Pomada" photo={campana} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="T-shirt" photo={camiseta} price={100} />
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div className="text-center  font-Varela font-semibold">
          <Product name="Chair" photo={silla} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Pillow" photo={almohada} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Piggy bank" photo={alcancia} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Adidas Tenis" photo={tenis} price={100} />
        </div>
      </div>
    </div>
  );
}

export { Products };
