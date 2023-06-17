import { Service } from "components/layout/servicess/ServiceRectangle"; 
import limpieza from "../../assets/images/limpieza.jpg";
import carpinteria from "../../assets/images/carpinteria.jpg";
import campana from "../../assets/images/plomeria.jpg";
import camiseta from "../../assets/images/jardineria.jpg";
import silla from "../../assets/images/electricista.jpg";
import almohada from "../../assets/images/web.jpg";
import alcancia from "../../assets/images/asesorias.jpg";
import tenis from "../../assets/images/perros.jpg";

function Services() {
  return (
    <div className="flex flex-col gap-5 px-5 py-10">
      <div className="flex flex-row gap-5">
        <div className="text-center  font-Varela font-semibold">
          <Service name="House Cleaning" photo={limpieza} price={50} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Service name="Carpentry" photo={carpinteria} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Service name="Plumbing" photo={campana} price={100} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Service name="Gardening" photo={camiseta} price={80} />
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div className="text-center  font-Varela font-semibold">
          <Service name="Electrician" photo={silla} price={150} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Service name="Web Dev'" photo={almohada} price={200} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Service name="Math assesories" photo={alcancia} price={40} />
        </div>
        <div className="text-center  font-Varela font-semibold">
          <Service name="Dog walker" photo={tenis} price={20} />
        </div>
      </div>
    </div>
  );
}

export { Services };