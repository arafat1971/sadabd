import Link from "next/link";

const calendarData = Array.from({ length: 36 }, (_, i) => ({
  day: i + 1,
  title: `Day ${i + 1}`,
  description: "Placeholder description",
}));

export default function CalendarGrid() {
  return (
    <div 
      className="mx-auto max-w-4xl w-full aspect-[7/6] min-h-[350px] md:min-h-[500px] flex items-center justify-center p-4 rounded-lg relative overflow-hidden bg-[#d32f2f]"
      style={{
        backgroundImage: "url('/26-july-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-red-700/50"></div>
      {/* Calendar content */}
      <div className="relative z-10 grid grid-cols-7 gap-2 md:gap-4 w-full h-full">
        {calendarData.map((item) => (
          <Link key={item.day} href={`/day/${item.day}`} className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
            <div
              className="bg-white/90 rounded shadow flex flex-col items-center justify-center aspect-square px-3 py-4 md:px-4 md:py-6 min-h-[40px] md:min-h-[60px] border border-red-200 hover:bg-yellow-100 transition cursor-pointer"
            >
              <div className="text-2xl md:text-4xl font-extrabold text-red-700 leading-none mb-1">{item.day}</div>
              <div className="text-[10px] md:text-xs font-semibold text-gray-700 text-center mb-0.5">{item.title}</div>
              <div className="text-[9px] md:text-[11px] text-gray-500 text-center">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 