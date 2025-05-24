import PortfolioItems from "./subComponents/portfolioItems";
import useScrollTrigger from "../hooks/ScrollTrigger";
export default function Portfolio() {
  const [ref, isVisible] = useScrollTrigger();
  return (
    <div className="snap-y snap-mandatory">
      <div className="sticky top-0 flex flex-col w-full gap-y-[10px] py-[50px]">
        <h2 className="text-6xl text-[#f8a301] font-bold text-center">
          Featured Works
        </h2>
        <div className={`w-full h-[8px] bg-white my-[20px]`}></div>
      </div>
      <PortfolioItems/>
    </div>
  );
}
