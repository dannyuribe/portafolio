import WebSVG from "@/assets/icons/dw.gif";
import ShopPNG from "@/assets/icons/e-commerce.gif";
import SupportPNG from "@/assets/icons/mantenimiento.gif";
import IntegratePNG from "@/assets/icons/series_task.gif";
import MovilPNG from "@/assets/icons/developer.gif";
export const WebIcon = ({ className = "w-12 h-12 mb-4" }) => (
  <img src={WebSVG} alt="Icono Web" className={className} />
);

export const ShopIcon = ({ className = "w-12 h-12 mb-4" }) => (
  <img src={ShopPNG} alt="Icono Tienda" className={className} />
);

export const SupportIcon = ({ className = "w-12 h-12 text-purple-500 mb-4" }) => (
  <img src={SupportPNG} alt="Icono Tienda" className={className} />
);

export const IntegrateIcon = ({ className = "w-12 h-12 text-red-500 mb-4" }) => (
  <img src={IntegratePNG} alt="Icono Tienda" className={className} />
);

export const MovilIcon = ({ className = "w-12 h-12 text-pink-500 mb-4" }) => (
  <img src={MovilPNG} alt="Icono Tienda" className={className} />
);
