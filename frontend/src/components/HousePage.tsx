import { useState, useRef, useEffect } from "react";
import MenuButton from "@/components/MenuButton";
import QuestionCard from "@/components/QuestionCard";
import AnswerInput from "@/components/AnswerInput";
import Sidebar from "@/components/Sidebar";

interface HousePageProps {
  bgImage: string;
  houseImage: string;
  houseAlt: string;
  showArrow?: boolean;
  bgStyle?: React.CSSProperties;
  houseStyle?: React.CSSProperties;
  questionPadding?: string;
  scrollHeight?: string;
}

export default function HousePage({ bgImage, houseImage, houseAlt, showArrow = true, bgStyle, houseStyle, questionPadding = "pt-[12vh] pb-[6vh]", scrollHeight = "h-[120vh]" }: HousePageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      setScrolledDown(el.scrollTop > 100);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-full bg-cream">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        userName="사용자 이름"
      />

      <div ref={scrollRef} className="h-full overflow-y-scroll overflow-x-hidden hide-scrollbar">
        <div className={`${scrollHeight} overflow-hidden`}>

          <div className="max-w-md mx-auto w-full px-7">
            {/* Logo */}
            {/* <div className="pt-6 flex justify-center">
              <img src="/logo.png" alt="로고" className="h-8" />
            </div> */}

            {/* Header */}
            <header className="pt-4">
              <MenuButton onClick={() => setSidebarOpen(true)} />
            </header>

            <div className={`flex flex-col items-center gap-4 ${questionPadding}`}>
              <QuestionCard
                question="당신을 웃게 만드는 요소가 무엇인가요?"
                description="머릿속에 있는 상황, 생각 같은 모든 걸 공유해보세요."
              />
              <div className="w-full pt-4">
                <AnswerInput onSubmit={(value) => console.log("답변:", value)} />
              </div>
            </div>

            {showArrow && (
              <div className="flex flex-col items-center relative z-20 -mb-16">
                {scrolledDown && (
                  <p className="font-pretendard font-light text-secondary text-base pb-2">
                    화면을 아래로 내리면 질문지만 확인 가능해요.
                  </p>
                )}
                <img
                  src="/arrow-up.png"
                  alt="스크롤"
                  className={`w-40 transition-transform duration-500 ${
                    scrolledDown ? "rotate-180" : ""
                  }`}
                />
                {!scrolledDown && (
                  <p className="font-pretendard font-light text-secondary text-base pt-2">
                    화면을 끌어올리면 당신의 집을 볼 수 있어요.
                  </p>
                )}
              </div>
            )}
          </div>

          <div
            className="w-full max-w-md mx-auto relative"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              transform: "translateY(-10%)",
              ...bgStyle,
            }}
          >
            <img
              src={houseImage}
              alt={houseAlt}
              className="relative z-10"
              style={{ width: "180vw", maxWidth: "none", marginLeft: "50%", transform: "translateX(-50%) translateY(50%)", ...houseStyle }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
