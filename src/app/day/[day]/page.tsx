"use client";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const dayImages: Record<number, string> = {
  1: "https://cdn.dhakapost.com/media/imgAll/BG/2025July/july-student-20250701083239.jpg",
  // Add more day-specific images here if needed
};

export default function DayPage({ params }: { params: { day: string } }) {
  const dayNumber = Number(params.day);
  const imageUrl = dayImages[dayNumber] || "/placeholder.jpg"; // fallback to placeholder
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // Day 1 article highlights
  const day1Highlights = [
    "১ জুলাই, ‘সবে’ শুরু আন্দোলন",
    "শিক্ষার্থীদের বিক্ষোভে উত্তাল ছিল বিশ্ববিদ্যালয়গুলোর ক্যাম্পাস",
    "প্রথম দিকে আন্দোলনকে গুরুত্ব দেয়নি আওয়ামী লীগ",
    "সরকারি ও বেসরকারিভাবে নানা কর্মসূচি গ্রহণ"
  ];
  const day1ArticleUrl = "https://www.dhakapost.com/politics/376365";

  if (!dayNumber || dayNumber < 1 || dayNumber > 36) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-red-900 to-yellow-100 p-8">
        <div className="bg-white/90 rounded-lg shadow-lg p-8 max-w-lg w-full flex flex-col items-center gap-6">
          <button
            onClick={() => router.back()}
            className="self-start mb-2 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition font-semibold shadow"
          >
            ← Back
          </button>
          <div className="text-2xl font-bold text-red-700">Invalid Day</div>
          <div className="text-lg text-gray-700 text-center">
            The day parameter is invalid. Please select a valid day from the calendar.
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-900 to-yellow-100 p-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-red-700 mb-4">Day {dayNumber}</h1>
      <div className="w-full max-w-md aspect-video rounded-lg overflow-hidden shadow mb-4 bg-gray-200 flex items-center justify-center">
        <img
          src={imageUrl}
          alt={`Day ${dayNumber} event`}
          className="w-full h-full object-cover"
        />
      </div>
      {dayNumber === 1 && (
        <>
          <div className="w-full max-w-md bg-white/90 rounded-lg shadow p-4 mb-4">
            <h2 className="text-lg font-bold text-red-700 mb-2">আর্টিকেল হাইলাইট</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-800 text-sm">
              {day1Highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <a
              href={day1ArticleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition font-semibold"
            >
              আর্টিকেল পড়ুন
            </a>
          </div>
          {/* Photo frame with zoom modal */}
          <div className="w-full max-w-md flex justify-center mb-6">
            <div className="border-4 border-yellow-400 rounded-xl shadow-lg overflow-hidden cursor-pointer transition hover:scale-105" onClick={() => setShowModal(true)}>
              <img
                src="/Screenshot 2025-07-19 at 9.35.52 PM.png"
                alt="বৈষম্যবিরোধী ছাত্র আন্দোলন"
                className="w-full h-auto object-cover"
                style={{ maxHeight: 220 }}
              />
            </div>
          </div>
          {/* Modal for zoomed image */}
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setShowModal(false)}>
              <div className="relative max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
                <button
                  className="absolute top-2 right-2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
                <img
                  src="/Screenshot 2025-07-19 at 9.35.52 PM.png"
                  alt="বৈষম্যবিরোধী ছাত্র আন্দোলন"
                  className="w-full h-auto rounded-lg shadow-lg border-4 border-yellow-400"
                  style={{ maxHeight: '80vh', objectFit: 'contain' }}
                />
              </div>
            </div>
          )}
        </>
      )}
      <a href="/" className="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition">Back to Calendar</a>
    </div>
  );
} 

