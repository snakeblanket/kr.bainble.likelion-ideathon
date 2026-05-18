import { useState } from "react";

interface AnswerInputProps {
  placeholder?: string;
  onSubmit?: (value: string) => void;
}

export default function AnswerInput({
  placeholder = "답변을 작성하세요.",
  onSubmit,
}: AnswerInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value.trim() && onSubmit) {
      onSubmit(value.trim());
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex items-center border border-secondary/50 rounded-full px-5 py-3 bg-white/40">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 font-pretendard font-thin text-secondary text-sm outline-none bg-transparent placeholder:text-secondary/60"
      />
      <button
        onClick={handleSubmit}
        className="text-secondary/60 hover:text-primary transition-colors flex-shrink-0 ml-2"
        aria-label="답변 제출"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5,3 19,12 5,21 5,3" />
        </svg>
      </button>
    </div>
  );
}
