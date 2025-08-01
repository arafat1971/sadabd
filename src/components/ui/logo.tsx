import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-6 py-6">
      <div className="w-[120px] h-[120px] rounded-lg overflow-hidden">
        <img 
          src="/sadalogo.png" 
          alt="SADA Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-2xl md:text-3xl font-bold text-white">STUDENT AGAINST DISCRIMINATION ARCHIVE (SADA)</span>
    </div>
  );
} 