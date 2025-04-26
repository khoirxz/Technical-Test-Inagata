import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { day: "Sat", Deposit: 250, Withdraw: 500 },
  { day: "Sun", Deposit: 100, Withdraw: 350 },
  { day: "Mon", Deposit: 270, Withdraw: 320 },
  { day: "Tue", Deposit: 380, Withdraw: 490 },
  { day: "Wed", Deposit: 260, Withdraw: 150 },
  { day: "Thu", Deposit: 240, Withdraw: 400 },
  { day: "Fri", Deposit: 310, Withdraw: 410 },
];

const ActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 0,
          bottom: 5,
        }}
        barGap={20}
        barCategoryGap={25}
        barSize={15}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={"day"} />
        <YAxis />
        <Tooltip />

        <Bar dataKey="Deposit" fill="#0000ff" radius={[20, 20, 20, 20]} />
        <Bar dataKey="Withdraw" fill="#1cc9c3" radius={[20, 20, 20, 20]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const expenseData = [
  { name: "Entertainment", value: 300, color: "#343C6A" },
  { name: "Bill Expenses", value: 150, color: "#FC7900" },
  { name: "Investment", value: 350, color: "#1814F3" },
  { name: "Other", value: 200, color: "#FA00FF" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  name: string;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central">
      <tspan x={x} dy={-5} fontSize={12}>
        {`${(percent * 100).toFixed(0)}%`}
      </tspan>
      <tspan x={x} dy={15} fontSize={12}>
        {name}
      </tspan>
    </text>
  );
};

export const ExpensePieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart
        margin={{
          top: 30,
          right: 30,
          left: 30,
          bottom: 30,
        }}>
        <Pie
          data={expenseData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value">
          {expenseData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

const balanceData = [
  { month: "Jul", value: 250 },
  { month: "Aug", value: 100 },
  { month: "Sep", value: 270 },
  { month: "Oct", value: 380 },
  { month: "Nov", value: 260 },
  { month: "Dec", value: 240 },
  { month: "Jan", value: 310 },
];

export const BalanceHistoryChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        data={balanceData}
        margin={{
          top: 30,
          right: 30,
          left: 0,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={"month"} />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#1814F3"
          fill="#2D60FF80"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
