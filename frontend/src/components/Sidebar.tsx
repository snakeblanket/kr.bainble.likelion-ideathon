interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
}

export default function Sidebar({ isOpen, onClose, userName }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-full w-[50%] max-w-[220px] bg-primary z-50 flex flex-col px-6 pt-10 pb-8 rounded-r-3xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="mb-10">
          <img src="/sidebar-logo.png" alt="로고" className="w-full h-full" />
        </div>

        {/* User Name */}
        <h1 className="font-pretendard font-extrabold text-white text-2xl">
          {userName}
        </h1>

        {/* Spacer */}
        <div className="flex-1" />
      </aside>
    </>
  );
}
