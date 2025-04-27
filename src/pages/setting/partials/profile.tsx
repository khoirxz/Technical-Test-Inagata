import profileImg from "@/assets/images/profile-avatar.jpg";
import Input, { InputDate } from "@/components/Input";

export default function ProfileSection() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="w-44 h-44 relative mx-auto lg:mx-0">
          <img
            src={profileImg}
            className="w-full h-full object-cover rounded-full"
            alt="Profile"
          />
          <button className="absolute right-0 bottom-8 bg-[#2D60FF] rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="none"
              viewBox="0 0 15 15">
              <g clipPath="url(#a)">
                <path
                  fill="#fff"
                  d="m14.587 4.163-1.35 1.35a.35.35 0 0 1-.499 0L9.486 2.263a.35.35 0 0 1 0-.498l1.351-1.35a1.41 1.41 0 0 1 1.99 0l1.76 1.76c.55.548.55 1.438 0 1.99m-6.26-1.24L.632 10.618l-.621 3.56a.704.704 0 0 0 .814.814l3.56-.624 7.693-7.693a.35.35 0 0 0 0-.498L8.827 2.924a.355.355 0 0 0-.5 0M3.635 9.959a.41.41 0 0 1 0-.58l4.512-4.512a.41.41 0 0 1 .58 0 .41.41 0 0 1 0 .58L4.216 9.958a.41.41 0 0 1-.58 0m-1.058 2.464h1.406v1.063l-1.89.332-.91-.912.33-1.89h1.064z"></path>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h15v15H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
          <div className="col-span-1 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Name</label>
              <Input placeholder="Charlene Reed" type="text" id="name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Input
                placeholder="charlenereed@gmail.com"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="date">Date of Birth</label>
              <InputDate />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address">Permanent Address</label>
              <Input
                placeholder="San Jose, California, USA"
                type="text"
                id="address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="code">Postal Code</label>
              <Input placeholder="45962" type="text" id="code" />
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="username">User Name</label>
              <Input placeholder="Charlene Reed " type="text" id="username" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <Input placeholder="********" type="password" id="password" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="address2">Present Address</label>
              <Input
                placeholder="San Jose, California, USA"
                type="text"
                id="address2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="city">City</label>
              <Input placeholder="San Jose" type="text" id="city" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="country">Country</label>
              <Input placeholder="USA" type="text" id="country" />
            </div>
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
