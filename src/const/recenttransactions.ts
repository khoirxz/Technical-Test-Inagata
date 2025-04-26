import { CardBusinessIcon, PaypalIcon, CoinIcon } from "@/components/icons";

export const recentTransactions: {
  id: number;
  background: string;
  theme: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
  title: string;
  date: string;
  amount: number;
}[] = [
  {
    id: 1,
    theme: "#FFBB38",
    background: "#FFF5D9",
    icon: CardBusinessIcon,
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: -200,
  },
  {
    id: 2,
    theme: "#396AFF",
    background: "#E7EDFF",
    icon: PaypalIcon,
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
  },
  {
    id: 3,
    theme: "#16DBCC",
    background: "#DCFAF8",
    icon: CoinIcon,
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
  },
] as const;
