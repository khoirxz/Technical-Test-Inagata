import useEmblaCarousel from "embla-carousel-react";

import MainLayout from "@/layout/main";

import ActivityChart, {
  BalanceHistoryChart,
  ExpensePieChart,
} from "./partials/Charts";

import { recentTransactions } from "@/const/recenttransactions";
import cardChip from "../../assets/images/cc-chip.png";
import cardChipDark from "../../assets/images/cc-chip-dark.png";
import QuickTransfer from "./partials/Carousel";

export default function Dashboard() {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
  });

  return (
    <MainLayout title="Overview">
      <div className="grid grid-cols-12 gap-4 m-5">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          {/* Cards */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">My Cards</h1>
            <a href="#" className="font-semibold hover:underline">
              See All
            </a>
          </div>
          {/* Slides card */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex lg:grid lg:grid-cols-2 gap-4">
              <div className="min-w-[400px] lg:min-w-full w-full">
                <div className="bg-blue-600 rounded-t-3xl p-6 flex flex-col gap-2 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm">Balance</p>
                      <p className="text-3xl font-lato font-semibold">$5,756</p>
                    </div>

                    <p>
                      <img src={cardChip} alt="chip" className="w-10 h-10" />
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm uppercase font-thin">card holder</p>
                      <p className="font-semibold">Eddy Cusuma</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase font-thin">valid thru</p>
                      <p className="font-semibold">12/22</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-row justify-between gap-1 col-span-2 bg-blue-600 p-6 rounded-b-3xl text-white">
                  <div
                    className="absolute w-full h-full top-0 left-0 rounded-b-3xl"
                    style={{
                      background:
                        "linear-gradient(338deg, rgb(42 123 155 / 0%) 0%, rgb(255 255 255 / 16%) 100%)",
                    }}></div>
                  <p className="text-2xl font-lato">3778 **** **** 1234</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="30"
                    fill="none"
                    viewBox="0 0 44 30">
                    <circle
                      cx="15"
                      cy="15"
                      r="15"
                      fill="#fff"
                      fillOpacity="0.5"></circle>
                    <circle
                      cx="29"
                      cy="15"
                      r="15"
                      fill="#fff"
                      fillOpacity="0.5"></circle>
                  </svg>
                </div>
              </div>

              <div className="min-w-[400px] lg:min-w-full w-full">
                <div className="bg-white rounded-t-3xl p-6 flex flex-col gap-2 text-[#343C6A] border border-b-0 border-[#DFEAF2]">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-[#718EBF]">Balance</p>
                      <p className="text-3xl font-lato font-semibold">$5,756</p>
                    </div>

                    <p>
                      <img
                        src={cardChipDark}
                        alt="chip"
                        className="w-10 h-10"
                      />
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm uppercase text-[#718EBF]">
                        card holder
                      </p>
                      <p className="font-semibold">Eddy Cusuma</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase text-[#718EBF]">
                        valid thru
                      </p>
                      <p className="font-semibold">12/22</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex flex-row justify-between gap-1 col-span-2 text-[#343C6A] p-6 rounded-b-3xl bg-white border border-[#DFEAF2]">
                  <div
                    className="absolute w-full h-full top-0 left-0 rounded-b-3xl"
                    style={{
                      background:
                        "linear-gradient(338deg, rgb(42 123 155 / 0%) 0%, rgb(255 255 255 / 16%) 100%)",
                    }}></div>
                  <p className="text-2xl font-lato">3778 **** **** 1234</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="30"
                    fill="none"
                    viewBox="0 0 44 30">
                    <circle
                      cx="15"
                      cy="15"
                      r="15"
                      fill="#9199AF80"
                      fillOpacity="0.5"></circle>
                    <circle
                      cx="29"
                      cy="15"
                      r="15"
                      fill="#9199AF80"
                      fillOpacity="0.5"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Slides card */}
          {/* Cards */}
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          {/* Recent Transaction */}
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Recent Transaction</h1>
          </div>
          <div className="bg-white rounded-3xl p-6 flex flex-col gap-2">
            {recentTransactions.map((transaction) => (
              <div className="flex items-center p-2 gap-5" key={transaction.id}>
                <div
                  style={{
                    background: transaction.background,
                  }}
                  className={`p-2 rounded-full`}>
                  <transaction.icon
                    fill={transaction.theme}
                    width={30}
                    height={30}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-[#232323] font-semibold">
                    {transaction.title}
                  </p>
                  <p className="text-[#718EBF]">{transaction.date}</p>
                </div>
                {transaction.amount > 0 ? (
                  <p className="text-green-600">
                    +$
                    {transaction.amount.toLocaleString("en-US")}
                  </p>
                ) : (
                  <p className="text-red-600">
                    -$
                    {Math.abs(transaction.amount).toLocaleString("en-US")}
                  </p>
                )}
              </div>
            ))}
          </div>
          {/* Recent Transaction */}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 m-5">
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Weekly Activity</h1>
          </div>

          <div className="bg-white rounded-3xl p-3">
            <div className="flex justify-end items-center gap-4 pt-4 pr-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#16DBCC]"></span>
                <p className="text-[#718EBF]">Diposit</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF82AC]"></span>
                <p className="text-[#718EBF]">Withdraw</p>
              </div>
            </div>
            <ActivityChart />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Expenses Statistics</h1>
          </div>

          <div className="bg-white rounded-3xl p-3 h-full flex flex-col items-center justify-center">
            <ExpensePieChart />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 m-5">
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Quick Transfer</h1>
          </div>

          <div className="bg-white rounded-3xl px-5 py-8 h-full">
            <QuickTransfer />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Balance History</h1>
          </div>

          <div className="bg-white rounded-3xl p-3">
            <BalanceHistoryChart />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
