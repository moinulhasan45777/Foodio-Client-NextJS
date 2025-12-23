import bannerPlate from "@/assets/banner-plate.png";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative mb-[9.6875rem]">
      <div className="absolute -top-30.5 -right-25 z-0 w-152 h-141 bg-[#FEF7EA] rounded-bl-[13.125rem] flex">
        <Image
          loading="eager"
          src={bannerPlate}
          alt="Plate with Food"
          className="w-118.5 h-118.5 mt-auto self-end"
        />
      </div>
      <div className="max-w-151">
        <div className="inline-flex items-center gap-1 bg-[#FEF7EA] px-2.5 py-1.5 rounded-full mb-6.5">
          <svg
            className="w-4 h-4"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 1.33331H3.33333V14.6666H2V1.33331ZM6.66667 3.99998H11.3333V5.33331H6.66667V3.99998ZM6.66667 6.66665H11.3333V7.99998H6.66667V6.66665Z"
              fill="#1A3C34"
            />
            <path
              d="M12.6667 1.33331H4V14.6666H12.6667C13.402 14.6666 14 14.0686 14 13.3333V2.66665C14 1.93131 13.402 1.33331 12.6667 1.33331ZM12.6667 13.3333H5.33333V2.66665H12.6667V13.3333Z"
              fill="#1A3C34"
            />
          </svg>
          <span className="text-sm font-semibold tracking-[-2%]">
            Food Ordering Service
          </span>
        </div>
        <h1 className="heading text-[#1A3C34] font-semibold text-[4.625rem] leading-[100%] tracking-[-5%] mb-6.5">
          Where Great Food Meets Great Taste.
        </h1>
        <p className="font-medium text-xl  tracking-[-2%] mb-10">
          Experience a symphony of flavors crafted with passion. Premium
          ingredients, exquisite recipes, delivered to your door.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-[#1a3c34] w-35 text-white py-3  rounded-l-[20px] rounded-br-[20px] flex justify-center items-center gap-2.5 cursor-pointer shadow-[0px_20px_25px_rgba(26,60,52,0.3)]">
            <span className="text-base font-semibold">Order Now</span>
            <svg
              className="w-2.5 h-2.5"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.800049 5.46665H10.1334M10.1334 5.46665L5.46672 0.799988M10.1334 5.46665L5.46672 10.1333"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="border border-[#1a3c34] text-[#1a3c34] py-3 w-35 rounded-r-[20px] rounded-bl-[20px]  cursor-pointer">
            <span className="text-base font-semibold">View Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}
