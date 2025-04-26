import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { personData } from "@/const/person";

export default function QuickTransfer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
  });

  // state untuk melacak kemampuan scroll
  const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(true);

  // Fungsi untuk scroll ke slide berikutnya
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Fungsi untuk scroll ke slide sebelumnya
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  // update status tombol berdasarkan posisi carousel
  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    // periksa apakah bisa croll ke pev/next
    setPrevBtnEnabled(!emblaApi.canScrollPrev());
    setNextBtnEnabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // set event listener untuk mengupdate status tombol saat slide berubah
    emblaApi.on("select", onSelect);

    // set ke event re init
    emblaApi.on("reInit", onSelect);

    onSelect();

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
        emblaApi.off("reInit", onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="relative">
        {/* Tombol previous - hanya muncul jika ada slide sebelumnya */}
        {nextBtnEnabled && (
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 -ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#718EBF">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-7">
            {personData.map((person) => (
              <div
                key={person.id}
                className="flex-shrink-0 flex-grow-0 min-w-[100px] mx-2">
                <div className="flex flex-col items-center justify-center gap-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="object-cover rounded-full w-28 h-2w-28"
                  />
                  <div>
                    {person.id === 1 ? (
                      <p className="text-center text-sm font-bold text-[#232323]">
                        {person.name}
                      </p>
                    ) : (
                      <p className="text-center text-sm text-[#232323]">
                        {person.name}
                      </p>
                    )}

                    <p className="text-center text-xs text-[#718EBF]">
                      {person.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol next */}
        {prevBtnEnabled && (
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 -mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#718EBF">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>

      <div className="flex mt-10 items-center justify-between ">
        <p className="text-[#718EBF] text-sm lg:text-lg">Write Amount</p>
        <div className="flex items-center gap-2 bg-[#EDF1F7] rounded-full">
          <input
            type="text"
            placeholder="525.50"
            className="px-6 py-3 max-w-[100px] lg:max-w-[200px] outline-0"
          />
          <button className="bg-[#1814F3] text-white px-6 lg:px-12 py-4 rounded-full shadow-md">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
