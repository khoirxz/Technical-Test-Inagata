import { useState, useEffect } from "react";

import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";
import Drawer from "@/components/Drawer";

export default function Main({ children }: React.PropsWithChildren) {
  const [width, setWidth] = useState<number>(300);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    // handle width change
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setWidth(0);
      } else {
        setWidth(300);
      }
    };

    handleResize(); // Set initial width based on window size
    window.addEventListener("resize", handleResize); // Update width on resize

    // cleanup function to remove the event listener
    // when the component is unmounted or the effect is re-run
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
          <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
