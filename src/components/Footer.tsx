export default function Footer() {
  return (
    <footer className="flex justify-between items-center h-22.5 border-t border-t-[#E6E2D8] -mx-25 px-27 text-[#7a7a7a]">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl leading-7 heading">Foodio.</span>
        <p className="text-sm leading-5 ">&copy; 2025 Foodio Inc.</p>
      </div>
      <ul className="flex items-center gap-6 text-sm leading-5 tracking-[-0.15px]">
        <li className="cursor-pointer">Privacy</li>
        <li className="cursor-pointer">Terms</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </footer>
  );
}
