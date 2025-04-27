import { useState, useEffect } from "react";

import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";
import Drawer from "@/components/Drawer";
import clsx from "clsx";

export default function Main({
  children,
  title = "Dashboard",
}: React.PropsWithChildren<{ title?: string }>) {
  const [width, setWidth] = useState<number>(270);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    // handle width change
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setWidth(0);
      } else {
        setWidth(width);
      }
    };

    handleResize(); // Set initial width based on window size
    window.addEventListener("resize", handleResize); // Update width on resize

    // cleanup function to remove the event listener
    // when the component is unmounted or the effect is re-run
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="font-sans bg-white dark:bg-white text-primary">
      <div className="min-h-screen flex relative">
        <Drawer
          width={width}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
        />
        <Sidebar width={width} />
        <div className="flex-1 flex flex-col bg-[#F5F7FA]">
          <Navbar
            title={title}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
          />
          <div className="w-full flex justify-center bg-[#F5F7FA]">
            <main
              className={clsx(
                "w-full max-w-[1440px] mx-auto",
                width === 0 ? "ml-0" : "ml-[270px]"
              )}>
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
