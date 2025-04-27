import useEmblaCarousel from "embla-carousel-react";

import MainLayout from "@/layout/main";

import { dataLoans } from "@/const/loans";

const dataCard: {
  id: number;
  title: string;
  icon: string | null;
  amount?: number;
  theme?: string;
}[] = [
  {
    id: 1,
    title: "Personal Loan",
    icon: "/icons/user.svg",
    amount: 50000,
    theme: "#E7EDFF",
  },
  {
    id: 2,
    title: "Corporate Loan",
    icon: "/icons/briefcase.svg",
    amount: 100000,
    theme: "#FFF5D9",
  },
  {
    id: 3,
    title: "Business Loans",
    icon: "/icons/graph.svg",
    amount: 500000,
    theme: "#FFE0EB",
  },
];

export default function LoansPage() {
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: 1, align: "start" });

  return (
    <MainLayout title="Loans">
      <div className="grid grid-cols-12 gap-4 m-5">
        <div className="col-span-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex lg:grid lg:grid-cols-12 gap-4 m-10">
              {dataCard.map((item) => (
                <div
                  className="col-span-3 bg-white rounded-3xl flex justify-start items-start p-5 min-w-[300px]"
                  key={item.id}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                    style={{
                      backgroundColor: item.theme || "#E7EDFF",
                    }}>
                    <img src={item.icon || "/icons/user.svg"} alt="Icon" />
                  </div>
                  <div>
                    <p className="text-[#718EBF]">{item.title}</p>
                    <p className="text-xl font-semibold">
                      ${Math.abs(item.amount || 0).toLocaleString("en-US")}
                    </p>
                  </div>
                </div>
              ))}
              <div className="col-span-3 bg-white rounded-3xl flex justify-start items-start p-5 min-w-[300px]">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
                  style={{
                    backgroundColor: "#DCFAF8",
                  }}>
                  <img src="/icons/support.svg" alt="Icon" />
                </div>
                <div>
                  <p className="text-[#718EBF]">Custom loans</p>
                  <p className="text-xl font-semibold">Choose Money</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-10 flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Active Loans Overview</h1>
        </div>

        <div className="bg-white rounded-3xl py-2 px-5">
          <div className="max-h-[600px] overflow-y-auto">
            <table className="w-full">
              <thead className="border-b border-[#E6EFF5] text-[#718EBF] sticky top-0 bg-white">
                <tr>
                  <th className="p-4 font-normal hidden lg:table-cell">
                    SL No
                  </th>
                  <th className="p-4 font-normal text-left">Loan Money</th>
                  <th className="p-4 font-normal text-left">Left to repay</th>
                  <th className="p-4 font-normal text-left hidden lg:table-cell">
                    Duration
                  </th>
                  <th className="p-4 font-normal text-left hidden lg:table-cell">
                    Interest rate
                  </th>
                  <th className="p-4 font-normal text-left hidden lg:table-cell">
                    Installment
                  </th>
                  <th className="p-4 font-normal">Repay</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {dataLoans.map((item) => (
                  <tr
                    key={item.id}
                    className={`${
                      item.id === dataLoans.length ? "" : "border-b"
                    } border-[#E6EFF5]`}>
                    <td className="p-4 hidden lg:table-cell">{item.no}</td>
                    <td className="p-4 text-left">
                      ${item.loan.toLocaleString("en-US")}
                    </td>
                    <td className="p-4 text-left">
                      ${item.repay.toLocaleString("en-US")}
                    </td>
                    <td className="p-4 text-left hidden lg:table-cell">
                      {item.duration} Months
                    </td>
                    <td className="p-4 text-left hidden lg:table-cell">
                      {item.rate}%
                    </td>
                    <td className="p-4 text-left hidden lg:table-cell">
                      ${item.installment.toLocaleString("en-US")} / month
                    </td>
                    <td className="p-4">
                      {item.id === 1 ? (
                        <button className="border border-[#1814F3] text-[#1814F3] hover:bg-[#1814F3] hover:text-white px-6 py-2 rounded-full cursor-pointer transition-all">
                          Repay
                        </button>
                      ) : (
                        <button className="border border-black text-black hover:border-black/40 hover:text-black/40 px-6 py-2 rounded-full cursor-pointer">
                          Repay
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t border-[#E6EFF5] sticky bottom-0 bg-white">
                <tr className="text-[#FE5C73]">
                  <td className="p-4 hidden lg:table-cell">Total</td>
                  <td className="p-4 text-left flex flex-col lg:flex-row gap-2">
                    <span className="lg:hidden">Total</span>
                    <span>
                      $
                      {dataLoans
                        .reduce((total, item) => total + item.loan, 0)
                        .toLocaleString("en-US")}
                    </span>
                  </td>
                  <td className="p-4 text-left h-full">
                    <span className="flex flex-col justify-end items-center content-end">
                      <span>
                        $
                        {dataLoans
                          .reduce((total, item) => total + item.repay, 0)
                          .toLocaleString("en-US")}
                      </span>
                    </span>
                  </td>
                  <td className="p-4 text-left hidden lg:table-cell"></td>
                  <td className="p-4 text-left hidden lg:table-cell"></td>
                  <td className="p-4 text-left hidden lg:table-cell">
                    $
                    {dataLoans
                      .reduce((total, item) => total + item.installment, 0)
                      .toLocaleString("en-US")}{" "}
                    / month
                  </td>
                  <td className="p-4 hidden lg:table-cell"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
