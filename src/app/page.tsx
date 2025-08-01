import Logo from "@/components/ui/logo";
import CalendarGrid from "@/components/ui/calendar-grid";
import Banner from "@/components/ui/banner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-900 to-yellow-100 flex flex-col items-center px-2 md:px-0 pb-10">
      <div className="w-full max-w-5xl flex flex-col items-center gap-6 mt-6">
        <Logo />
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-white drop-shadow mb-2">
          জুলাই গণঅভ্যুত্থান ৩৬ দিনের ক্যালেন্ডার
        </h1>
        <div className="w-full p-4 rounded-lg bg-gradient-to-r from-red-800/80 to-yellow-600/80">
          <CalendarGrid />
        </div>
        <Banner />
    </div>
    </main>
  );
}
