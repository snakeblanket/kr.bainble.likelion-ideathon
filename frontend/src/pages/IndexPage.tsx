import { Link } from "react-router-dom";

export default function IndexPage() {
  const pages = [
    { path: "/ground", label: "🌱 지면 보기" },
    { path: "/earth", label: "🌍 지구 보기" },
    { path: "/earth-big", label: "🎈 지구 + 집(풍선) 보기" },
    { path: "/space", label: "🚀 우주 보기" },
  ];

  return (
    <div className="w-full h-full bg-cream flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full flex flex-col items-center gap-8">
        {/* Logo */}
        <img src="/logo.png" alt="로고" className="h-10" />

        {/* Title */}
        <div className="text-center">
          <h1 className="font-pretendard font-bold text-primary text-2xl mb-2">
            MVP 미리보기
          </h1>
          <p className="font-pretendard text-secondary text-sm leading-relaxed">
            이 서비스는 <span className="font-semibold">모바일 전용</span>입니다.<br />
            데스크탑은 지원하지 않습니다.
          </p>
        </div>

        {/* Page Links */}
        <div className="w-full flex flex-col gap-3">
          {pages.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="block w-full py-4 px-5 bg-white rounded-2xl shadow-sm text-center font-pretendard font-medium text-primary text-lg hover:bg-primary/5 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <p className="font-pretendard text-secondary/60 text-xs text-center mt-4">
          MVP 단계로, 위 화면들이 순차적으로 개발될 예정입니다.
        </p>
      </div>
    </div>
  );
}
