import Input from "@/components/Input";

export default function PreferencesSection() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="currency">Currency</label>
            <Input placeholder="USD" type="text" id="currency" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="timezone">Time Zone</label>
            <Input
              placeholder="(GMT-12:00) International Date Line West"
              type="text"
              id="timezone"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-lg font-semibold mb-5">Notification</h1>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label
              htmlFor="AcceptConditions"
              className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-[#16DBCC]">
              <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
              />

              <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6"></span>
            </label>
            <p>I send or receive digita currency</p>
          </div>
          <div className="flex items-center gap-4">
            <label
              htmlFor="AcceptConditions2"
              className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-[#16DBCC]">
              <input
                type="checkbox"
                id="AcceptConditions2"
                className="peer sr-only"
              />

              <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6"></span>
            </label>
            <p>I receive merchant order</p>
          </div>
          <div className="flex items-center gap-4">
            <label
              htmlFor="AcceptConditions3"
              className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-[#16DBCC]">
              <input
                type="checkbox"
                id="AcceptConditions3"
                className="peer sr-only"
              />

              <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6"></span>
            </label>
            <p>There are recommendation for my account</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <button className="bg-[#1814F3] text-white py-3 px-10 rounded-2xl hover:bg-[#2D60FF] cursor-pointer transition-all">
          Save
        </button>
      </div>
    </div>
  );
}
