import { items } from "@/const/menuItems";
import cardLogo from "../assets/card.svg";

export default function Drawer({
  drawerOpen,
  setDrawerOpen,
}: {
  width: number;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 z-10 bg-black/50 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed min-w-[300px] top-0 z-50 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          drawerOpen
            ? "left-0 translate-x-0"
            : "-left-[999px] -translate-x-full"
        }`}>
        {/* Header */}
        <div className="flex items-center gap-4 py-8 px-8">
          <span>
            <object data={cardLogo} type="image/svg+xml" className="w-9 h-9" />
          </span>
          <h1 className="text-2xl font-extrabold">Bankku</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 mt-6">
          {items.map((item) => (
            <button
              key={item.name}
              className={`flex items-center gap-5 w-full relative py-3 px-8 cursor-pointer hover:bg-[#2D60FF]/10 ${
                item.active ? "text-[#2D60FF]" : "text-[#b1b1b1]"
              }`}>
              <span
                className={`absolute left-0 w-1 h-full rounded-br-lg rounded-tr-lg ${
                  item.active ? "bg-[#2D60FF]" : "bg-transparent"
                }`}></span>
              <item.icon fill={item.active ? "#2D60FF" : "#b1b1b1"} />
              <span className="text-lg font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
