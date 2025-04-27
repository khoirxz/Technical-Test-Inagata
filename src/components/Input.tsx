import { useState } from "react";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";

import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function Input({
  type = "text",
  placeholder = "Enter your text here",
  styles,
  ...props
}: {
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "month"
    | "week"
    | "datetime-local";
  placeholder?: string;
  styles?: React.HTMLAttributes<HTMLInputElement>["className"];
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={clsx(
        "border border-[#DFEAF2] rounded-[20px] px-4 py-3 outline-none w-full",
        styles
      )}
      {...props}
    />
  );
}

export function InputDate() {
  const [inputValue, setInputValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<Date>(new Date());

  const handleDayClick = (date: Date) => {
    if (!date) {
      setInputValue("");
      setSelectedDate(undefined);
    } else {
      setSelectedDate(date);
      setInputValue(format(date, "dd MMMM yyyy"));
    }
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    const parseDate = parse(e.target.value, "dd MMMM yyyy", new Date());

    if (isValid(parseDate)) {
      setSelectedDate(parseDate);
      setMonth(parseDate);
    } else {
      setSelectedDate(undefined);
    }
  };

  return (
    <div className="relative w-full">
      <input
        placeholder="25 January 1990"
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        className="border border-[#DFEAF2] rounded-[20px] px-4 py-3 outline-none w-full"
      />
      <button
        onClick={() => setOpen(true)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-sky-200 rounded-full flex items-center justify-center w-7 h-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="7"
          fill="none"
          viewBox="0 0 12 7">
          <path stroke="#718EBF" strokeWidth="1.3" d="m1 1 5 5 5-5"></path>
        </svg>
      </button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50">
        <div className="fixed inset-0 bg-black/30 bg-opacity-25 flex items-center justify-center">
          <div className="bg-white max-w-sm w-full p-4 rounded-2xl">
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="hover:bg-sky-200 rounded-full flex items-center justify-center w-7 h-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="7"
                  fill="none"
                  viewBox="0 0 12 7">
                  <path
                    stroke="#718EBF"
                    strokeWidth="1.3"
                    d="m1 1 5 5 5-5"></path>
                </svg>
              </button>
            </div>
            <DayPicker
              month={month}
              onMonthChange={setMonth}
              autoFocus
              mode="single"
              required={true}
              selected={selectedDate}
              onSelect={handleDayClick}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
