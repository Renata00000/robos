import Menu from "./componentes/menu";
import Filter from "./componentes/filtroDePesquisa";
import NotificationIcon from "./componentes/iconsAnimacao/notificationIcon";
import PerfilIcon from "./componentes/iconsAnimacao/perfilIcon";
import Maim from "./componentes/maim";


export default function App() {
  return (
    <div>
      <div className="flex items-center justify-end h-16 bg-gray-100">
        <NotificationIcon/>
        <PerfilIcon/>

      </div>
      <h1 className="mt-3 text-sm mx-10 font-bold">Robôs</h1>

      <h2 className="mt-3 mx-10 text-[#807D9B] text-sm font-normal">
        Gerenciamento de robôs e visualização de logs
      </h2>

      <Menu />
      <div className="h-1 w-full bg-[#D9D5EC] "></div>
      <div className="mt-4">
        <Filter />
      </div>
      <div className="mt-4">
        <button
          className=" font-medium  text-xs text-white bg-[#5E48E8]  rounded-full shadow-2xl w-24 h-8 mx-10"
          type="button"
        >
          Ativos X
        </button>
      </div>
      <div className="mt-4">
        <Maim/>
      </div>
    </div>
  );
}
