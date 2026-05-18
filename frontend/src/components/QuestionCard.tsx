interface QuestionCardProps {
  question: string;
  description?: string;
}

export default function QuestionCard({ question, description }: QuestionCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="font-pretendard font-light text-primary text-xl leading-relaxed">
        Q. {question}
      </h2>
      {description && (
        <p className="font-pretendard font-thin text-secondary text-[13px]">
          {description}
        </p>
      )}
    </div>
  );
}
