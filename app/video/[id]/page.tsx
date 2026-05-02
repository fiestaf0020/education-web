import Link from "next/link";

// 영상 ID별 유튜브 embed 주소
const videoMap: Record<string, string> = {
  "2-1": "https://www.youtube.com/embed/MRDMS01PtvI",
  "2-2": "https://www.youtube.com/embed/dQw4w9WgXcQ",
};

export default async function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Next.js 15/16에서는 params를 await해서 받는 게 안전함
  const { id } = await params;

  const videoUrl = videoMap[id];

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-black p-6">
      <Link
        href="/"
        className="absolute right-8 top-8 z-10 rounded-full bg-white px-4 py-2 text-xl font-bold text-black hover:bg-gray-200"
      >
        ×
      </Link>

      <div className="aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            title="Video player"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full items-center justify-center text-white">
            영상을 찾을 수 없습니다. 현재 id: {id}
          </div>
        )}
      </div>
    </main>
  );
}