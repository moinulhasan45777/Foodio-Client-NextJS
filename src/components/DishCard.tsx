import goldenBites from "@/assets/items/golden_crunch_bites.png";
import Image from "next/image";
export default function DishCard() {
  return (
    <div className="relative rounded-[34px] bg-[#Fef7ea] text-left pt-43 pb-12.5 px-5">
      <Image
        src={goldenBites}
        loading="eager"
        alt="Golden Crucn Bites Dish"
        className="absolute -top-15 -left-40 max-w-110 min-w-110"
      ></Image>
      <button className="absolute right-0 top-full translate-y-[-50%] bg-[#1a3c34] w-35 text-white py-3  rounded-l-[20px] rounded-br-[20px] flex justify-center items-center gap-2.5 cursor-pointer shadow-[0px_20px_25px_rgba(26,60,52,0.3)]">
        <span className="text-base font-semibold">Order Now</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00001 3.33337V12.6667M3.33334 8.00004H12.6667"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <h3 className="font-bold text-lg leading-5.5 text-[#1a1a1a] mb-1 ">
        Golden Crunch Bites
      </h3>
      <p className="mb-5 text-sm font-medium leading-5.5 text-[#7a7a7a]">
        Jumbo scallops with cauliflower puree and truffle oil.
      </p>
      <p className="font-extrabold text-2xl leading-5.5 text-[#1a3c34]">
        $15.00
      </p>
    </div>
  );
}
