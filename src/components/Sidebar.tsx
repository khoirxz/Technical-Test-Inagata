import { useLocation, Link } from "react-router";
import cardLogo from "../assets/card.svg";
import { items } from "@/const/menuItems";
import clsx from "clsx";

export default function Sidebar({ width }: { width: number }) {
  const { pathname } = useLocation();

  return (
    <div
      className="fixed top-0 left-0 z-40 bg-white h-full border-r border-[#E6EFF5] max-h-screen"
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
          <LinkItem key={item.name} item={item} current={pathname} />
        ))}
      </div>
    </div>
  );
}

const LinkItem = ({
  item,
  current,
}: {
  item: (typeof items)[number];
  current: string;
}) => {
  return (
    <Link
      to={item.url}
      key={item.name}
      className={clsx(
        "flex items-center gap-5 w-full relative py-3 px-8 cursor-pointer hover:bg-[#2D60FF]/10",
        current === item.url ? "text-[#2D60FF]" : "text-[#b1b1b1]"
      )}>
      <span
        className={clsx(
          "absolute left-0 w-1 h-full rounded-br-lg rounded-tr-lg",
          current === item.url ? "bg-[#2D60FF]" : "bg-transparent"
        )}></span>
      <item.icon fill={current === item.url ? "#2D60FF" : "#b1b1b1"} />
      <span className="text-lg font-medium">{item.name}</span>
    </Link>
  );
};
