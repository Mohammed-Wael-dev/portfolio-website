import plashoe from "../../assets/Imgs/plashoe.webp";
import myAssist from "../../assets/Imgs/myAssist.webp";

export default function PortfolioItems() {
  const portfolioContent = [
    {
      title: "PLASHOE",
      description:
        "Responsive and modern e-commerce website for selling shoes, built using React and Tailwind CSS. It features a clean UI, product listings, detailed pages, and smooth navigation for a seamless and user-friendly shopping experience across all devices.",
      img: plashoe,
      demoLink: "https://ecommerce-theta-lemon.vercel.app/",
    },
    {
      title: "MyAssist",
      description:
        "Responsive AI-powered chatbot website built with React, Tailwind CSS, and Context API. It features light/dark theme switching, smooth UI, and real-time interaction, offering users a simple and modern interface to communicate with an intelligent assistant.",
      img: myAssist,
      demoLink: "https://myassist-eosin.vercel.app/",
    },
  ];

  return (
    <div className="">
      {portfolioContent.map((item: any, index: number) => (
        <div key={index} className={`flex items-center gap-x-[3%] h-screen mx-[10%] snap-center`}>
          <img
            src={item.img}
            alt={`${item.title}`}
            className={`w-[50%] aspect-[11/6] rounded-2xl`}
          />
          <div className={`flex flex-col justify-center gap-y-[20px] py-[50px] tracking-widest z-10`}>
            <h2 className="text-5xl font-semibold text-white">{item.title}</h2>
            <p className="text-gray-400 w-[450px]">{item.description}</p>
            <a
              href={item.demoLink}
              className="py-[7px] px-[50px] bg-[#f8a301] rounded-xl text-center w-[200px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
