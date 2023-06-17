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
          <Product name="Mouse Chido" photo={mouse} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Boing de Mango" photo={boing} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Pomada de la Campana" photo={campana} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Camiseta" photo={camiseta} price={100} />
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div className="text-center  font-Varela font-semibold">
          <Product name="Silla" photo={silla} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Almohada" photo={almohada} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Alcancia   " photo={alcancia} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Product name="Tenis Adidas" photo={tenis} price={100} />
        </div>
      </div>
    </div>
  );
}

export { Products };
