import {
  HomeIcon,
  TransactionsIcon,
  UserIcon,
  EconomicInvestmentIcon,
  CreditCardIcon,
  LoanIcon,
  ServiceIcon,
  EconometricsIcon,
  SettingIcon,
} from "../components/icons";

export const items: {
  name: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
  url: string;
  active: boolean;
}[] = [
  { name: "Dashboard", icon: HomeIcon, url: "/", active: true },
  { name: "Transactions", icon: TransactionsIcon, url: "/", active: false },
  { name: "Accounts", icon: UserIcon, url: "/", active: false },
  {
    name: "Investments",
    icon: EconomicInvestmentIcon,
    url: "/",
    active: false,
  },
  { name: "Credit Cards", icon: CreditCardIcon, url: "/", active: false },
  { name: "Loans", icon: LoanIcon, url: "/", active: false },
  { name: "Services", icon: ServiceIcon, url: "/", active: false },
  { name: "My Privileges", icon: EconometricsIcon, url: "/", active: false },
  { name: "Setting", icon: SettingIcon, url: "/", active: false },
];
