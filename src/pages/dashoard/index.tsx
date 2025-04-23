import MainLayout from "@/layout/main";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 p-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-lg text-gray-600">Welcome to your dashboard!</p>
      </div>
    </MainLayout>
  );
}
