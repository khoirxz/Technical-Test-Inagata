import cardLogo from "../assets/card.svg";
import { items } from "@/const/menuItems";

export default function Sidebar({ width }: { width: number }) {
  return (
    <div
      className="relative border-r border-[#E6EFF5] max-h-screen"
      style={{
        width: `${width}px`,
        transition: "width 0.3s ease-in-out",
        overflowY: "auto",
      }}>
      <div className="flex items-center gap-4 py-8 px-8">
        <span>
          <object data={cardLogo} type="image/svg+xml" className="w-9 h-9" />
        </span>
        <h1 className="text-2xl font-extrabold">Bankku</h1>
      </div>

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
  );
}
