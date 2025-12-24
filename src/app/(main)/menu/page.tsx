import DishCard from "@/components/DishCard";
import React from "react";

export default function Menu() {
  return (
    <div className="mt-10.5 text-center mb-40">
      <h1 className="heading text-[3.375rem] font-semibold leading-[100%] tracking-[-5%]  mb-4.5">
        Our Menu
      </h1>
      <p className="text-lg font-medium leading-[100%] text-[#2d2d2d] mb-10.5">
        Discover our selection of premium dishes, crafted with passion.
      </p>
      <div className="flex justify-center items-center gap-2 mb-23.5">
        <button className="px-4 py-2 text-sm leading-5 font-medium tracking-[-0.15px] rounded-full text-white bg-[#1a3c34]">
          All
        </button>
        <button className="px-4 py-2 text-sm leading-5 font-medium tracking-[-0.15px] text-[#1a1a1a] rounded-full bg-[#fbfaf8] border border-[#e6e2d8]">
          Starters
        </button>
        <button className="px-4 py-2 text-sm leading-5 font-medium tracking-[-0.15px] text-[#1a1a1a] rounded-full bg-[#fbfaf8] border border-[#e6e2d8]">
          Main Courses
        </button>
        <button className="px-4 py-2 text-sm leading-5 font-medium tracking-[-0.15px] text-[#1a1a1a] rounded-full bg-[#fbfaf8] border border-[#e6e2d8]">
          Desserts
        </button>
      </div>
      <div className="grid grid-cols-4 gap-x-10 gap-y-28">
        <DishCard></DishCard>
        <DishCard></DishCard>
        <DishCard></DishCard>
        <DishCard></DishCard>
        <DishCard></DishCard>
        <DishCard></DishCard>
        <DishCard></DishCard>
        <DishCard></DishCard>
      </div>
    </div>
  );
}
