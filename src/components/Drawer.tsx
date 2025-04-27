import { useLocation } from "react-router";

import { items } from "@/const/menuItems";
import cardLogo from "../assets/card.svg";
import { LinkItem } from "./Sidebar";

export default function Drawer({
  drawerOpen,
  setDrawerOpen,
}: {
  width: number;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}) {
  const { pathname } = useLocation();

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
            <LinkItem key={item.name} item={item} current={pathname} />
          ))}
        </div>
      </div>
    </>
  );
}
