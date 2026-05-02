"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

// 카테고리 데이터
const categories = [
  {
    id: 1,
    title: "Category 1",
    contents: ["Content 1-1", "Content 1-2", "Content 1-3"],
  },
  {
    id: 2,
    title: "Category 2",
    contents: ["Content 2-1", "Content 2-2", "Content 2-3"],
  },
  {
    id: 3,
    title: "Category 3",
    contents: ["Content 3-1", "Content 3-2", "Content 3-3"],
  },
  {
    id: 4,
    title: "Category 4",
    contents: ["Content 4-1", "Content 4-2", "Content 4-3"],
  },
  {
    id: 5,
    title: "Category 5",
    contents: ["Content 5-1", "Content 5-2", "Content 5-3"],
  },
  {
    id: 6,
    title: "Category 6",
    contents: ["Content 6-1", "Content 6-2", "Content 6-3"],
  },
];

export default function Home() {
  // 현재 열린 카테고리 id 저장
  // null이면 아무 카테고리도 안 열린 상태
  const router = useRouter();
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* 1280 x 1080 기준 작업 영역 */}
      <section className="mx-auto min-h-screen w-full max-w-[1280px] px-5 pt-20 pb-20 md:px-20 md:pt-36 md:pb-36">
        {/* 상단 제목 영역 */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900">
            Education Contents
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            카테고리를 선택하면 관련 교육 콘텐츠를 볼 수 있습니다.
          </p>
        </header>

        {/* 
          드롭다운 6개 영역
          grid-cols-3 = 가로 3개
          총 6개라서 2줄 배치
          items-start = 한 카드가 열려도 같은 줄 카드 높이가 같이 늘어나지 않게 함
        */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {categories.map((category) => {
            // 현재 카드가 열려있는지 확인
            const isOpen = openId === category.id;

            return (
              <div
                key={category.id}
                // relative = 안쪽 absolute 드롭다운의 기준점
                className="relative rounded-2xl bg-white shadow-sm"
              >
                {/* 드롭다운 헤더 버튼 */}
                <button
                  onClick={() => setOpenId(isOpen ? null : category.id)}
                  className="flex h-16 w-full items-center justify-between rounded-2xl px-6 text-left"
                >
                  <span className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </span>

                  {/* 열림/닫힘 표시 아이콘 */}
                  <span className="text-2xl text-gray-500">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </button>

                {/* 
                  드롭다운 내용
                  absolute = 아래 요소를 밀지 않고 위에서 덮는 방식
                  top-16 = 헤더 높이 64px 아래에서 시작
                  z-20 = 다른 박스 위에 표시
                */}
                {isOpen && (
                  <div className="absolute left-0 right-0 top-16 z-20 rounded-b-2xl border-t border-gray-200 bg-white px-6 py-4 shadow-lg">
                    {category.contents.map((content) => (
                      <button
                        key={content}
                        onClick={() => {
  if (content === "Content 1-1") {
    window.open("https://www.youtube.com/watch?v=MRDMS01PtvI", "_black");
  }
  if (content === "Content 1-2") {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  }
  if (content === "Content 2-1") {
    router.push("/video/2-1");
  }

  if (content === "Content 2-2") {
    router.push("/video/2-2");
  }
}}
                        className="block w-full rounded-lg px-3 py-3 text-left text-gray-700 hover:bg-gray-100"
                      >
                        {content}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}