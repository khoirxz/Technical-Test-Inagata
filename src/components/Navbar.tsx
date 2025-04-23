import {
  NotificationOutlineIcon,
  SettingOutlineIcon,
  BarMenuIcon,
} from "./icons";

import avatarImg from "../assets/images/profile-avatar.jpg";

export default function Navbar({
  drawerOpen,
  setDrawerOpen,
}: {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}) {
  return (
    <nav className="flex items-center justify-between py-4 px-8 border-b border-[#E6EFF5] bg-white shadow-xs">
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="md:hidden cursor-pointer flex items-center justify-center transition duration-200 ease-in-out">
        <BarMenuIcon width={22} height={22} />
      </button>
      <div>
        <p className="text-2xl font-medium">Overview</p>
      </div>
      <div className="flex items-center gap-0 md:gap-4">
        <div className="bg-[#f5f7fa] hover:bg-[#E6EFF5] hidden md:flex transition duration-200 ease-in-out px-4 py-3 rounded-full items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20">
            <g clipPath="url(#a)">
              <path
                fill="#718EBF"
                d="m19.336 18.21-4.602-4.6A8.069 8.069 0 0 0 8.496.43a8.066 8.066 0 1 0 0 16.133 8.02 8.02 0 0 0 5.11-1.825l4.601 4.598a.797.797 0 0 0 1.129-1.125m-10.84-3.253a6.47 6.47 0 0 1-6.465-6.46A6.473 6.473 0 0 1 8.496 2.03a6.475 6.475 0 0 1 6.465 6.465c0 3.563-2.902 6.461-6.465 6.461"></path>
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h20v20H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <input
            type="text"
            placeholder="Search for something"
            className="outline-none placeholder:text-[#718EBF]"
          />
        </div>
        <div>
          <button className="items-center hidden md:flex justify-center p-3 rounded-full bg-[#f5f7fa] hover:bg-[#E6EFF5] transition duration-200 ease-in-out">
            <SettingOutlineIcon fill="#718EBF" />
          </button>
        </div>
        <div>
          <button className="items-center hidden md:flex justify-center p-3 rounded-full bg-[#f5f7fa] hover:bg-[#E6EFF5] transition duration-200 ease-in-out">
            <NotificationOutlineIcon fill="#FE5C73" />
          </button>
        </div>
        <div>
          <button className="flex items-center justify-center p-3 rounded-full">
            <img
              src={avatarImg}
              alt="avatar"
              className="w-12 h-1w-12 rounded-full"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
