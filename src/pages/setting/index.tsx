import { Fragment } from "react/jsx-runtime";
import clsx from "clsx";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import MainLayout from "@/layout/main";
import ProfileSection from "./partials/profile";
import PreferencesSection from "./partials/preferences";
import SecuritySection from "./partials/security";

export default function SettingPage() {
  return (
    <MainLayout title="Settings">
      <div className="grid grid-cols-12 gap-4 m-5">
        <div className="col-span-12">
          <div className="bg-white rounded-3xl py-6 px-10">
            <TabGroup>
              <TabList className="flex gap-10 border-b border-[#F4F5F7] overflow-auto">
                {["Edit profile", "Preferences", "Security"].map((item) => (
                  <Tab as={Fragment} key={item}>
                    {({ selected }) => (
                      <button
                        className={clsx(
                          "text-[#718EBF] px-5 py-3 relative outline-none cursor-pointer",
                          selected && "text-[#1814F3]"
                        )}>
                        {item}
                        <div
                          className={clsx(
                            "absolute left-0 bottom-0 w-full h-1 rounded-tr-lg rounded-tl-lg",
                            selected && "bg-[#1814F3]"
                          )}></div>
                      </button>
                    )}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                <TabPanel className="mt-14">
                  <ProfileSection />
                </TabPanel>
                <TabPanel className="mt-14">
                  <PreferencesSection />
                </TabPanel>
                <TabPanel className="mt-14">
                  <SecuritySection />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
