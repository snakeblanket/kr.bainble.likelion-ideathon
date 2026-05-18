interface MenuButtonProps {
  onClick?: () => void;
}

export default function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary/60"
      aria-label="메뉴"
    >
      <div className="flex flex-col gap-[5px]">
        <span className="block w-[22px] h-[2.5px] bg-primary rounded-full" />
        <span className="block w-[22px] h-[2.5px] bg-primary rounded-full" />
        <span className="block w-[22px] h-[2.5px] bg-primary rounded-full" />
      </div>
    </button>
  );
}
