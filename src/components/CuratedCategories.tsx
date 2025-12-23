import DishCard from "./DishCard";

export default function CuratedCategories() {
  return (
    <div className="pt-19.5 text-center mb-47.5">
      <h2 className="heading text-[3.375rem] font-semibold leading-[100%] tracking-[-5%]  mb-6">
        Curated Categories
      </h2>
      <p className="text-lg font-medium leading-[100%] text-[#2d2d2d] mb-9">
        Explore our diverse menu of culinary delights.{" "}
      </p>
      <div className="flex justify-center items-center gap-4.5 mb-37.5">
        <button className="bg-[#FEF7EA] shadow-sm w-53.75 py-5 flex flex-col gap-4.5 justify-center items-center">
          <div className="w-13.5 h-13.5 rounded-full bg-[#1a3c34] flex justify-center items-center ">
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5.2 h-5.2 "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.70808 10.6055C9.32837 16.6686 13.9359 21.8918 19.999 22.2715L20.2647 18.0298C18.478 17.9179 16.8089 17.1008 15.6246 15.7583C14.4403 14.4158 13.8379 12.6578 13.9498 10.8711C14.0617 9.0844 14.8787 7.41532 16.2213 6.23105C17.5638 5.04677 19.3218 4.44431 21.1085 4.55621L21.3741 0.314516C15.311 -0.0651897 10.0878 4.54235 9.70808 10.6055ZM15.4468 10.9649C15.6281 8.07054 18.1204 5.87201 21.0147 6.05327L20.3584 16.5327C18.9688 16.4457 17.6706 15.8102 16.7495 14.766C15.8284 13.7219 15.3598 12.3545 15.4468 10.9649ZM0.352658 -2.07782e-06L0.0088918 5.48924C-0.0523254 6.46296 0.204568 7.43019 0.740864 8.2452C1.27716 9.06022 2.06381 9.67887 2.98227 10.0079L2.34624 20.164L4.84136 20.3203L5.47739 10.1642C6.42973 9.95228 7.28741 9.43661 7.9212 8.69488C8.55499 7.95314 8.93055 7.02551 8.99129 6.05177L9.33506 0.562525L7.33897 0.437519L7.05771 4.92872L5.56064 4.83497L5.8419 0.343764L3.84582 0.218758L3.56455 4.70996L2.06748 4.61621L2.34875 0.125004L0.352658 -2.07782e-06Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold text-center">Starters</span>
        </button>
        <button className="  w-53.75 py-5 flex flex-col gap-4.5 justify-center items-center">
          <div className="w-13.5 h-13.5 rounded-full bg-[#1a3c34] flex justify-center items-center ">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                d="M6.5 12H8.5V7H6.5V12ZM2.5 14V10.5C1.73333 10.1167 1.125 9.56267 0.675 8.838C0.225 8.11333 0 7.32567 0 6.475C0 5.225 0.429333 4.16667 1.288 3.3C2.14667 2.43333 3.20067 2 4.45 2C4.65 2 4.85433 2.01667 5.063 2.05C5.27167 2.08333 5.47567 2.125 5.675 2.175C6.09167 1.49167 6.63333 0.958333 7.3 0.575C7.96667 0.191667 8.7 0 9.5 0C10.3 0 11.0333 0.191667 11.7 0.575C12.3667 0.958333 12.9083 1.49167 13.325 2.175C13.525 2.125 13.725 2.08333 13.925 2.05C14.125 2.01667 14.3333 2 14.55 2C15.8 2 16.8543 2.43333 17.713 3.3C18.5717 4.16667 19.0007 5.225 19 6.475C19 7.325 18.775 8.11267 18.325 8.838C17.875 9.56333 17.2667 10.1173 16.5 10.5V14H2.5ZM10.5 12H12.5V7H10.5V12ZM2.5 20V16H16.5V20H2.5Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold text-center">
            Main Courses
          </span>
        </button>
        <button className="  w-53.75 py-5 flex flex-col gap-4.5 justify-center items-center">
          <div className="w-13.5 h-13.5 rounded-full bg-[#1a3c34] flex justify-center items-center ">
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9V12H24V9M3 15V18H24V15M0 21V6L6 0L24 6V21"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold text-center">Desserts</span>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        <DishCard></DishCard>
        <DishCard></DishCard>
        <DishCard></DishCard>
        <DishCard></DishCard>
      </div>
    </div>
  );
}
