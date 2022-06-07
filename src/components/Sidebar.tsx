interface SideBarProps {
  theme: any;
}

export default function SideBar(props: SideBarProps) {
  const { theme } = props;

  const options = [
    "Dashboard",
    "Team",
    "Projects",
    "Calendar",
    "Documents",
    "Reports",
  ];

  return (
    <div className={`bg-${theme.accent1} w-[500px] min-h-screen`}>
      <div className="px-5 py-3 mt-3">
        <h1 className="text-6xl font-semibold">Logo</h1>
      </div>
      {options.map((option) => {
        return (
          <div key={option}>
            <h1
              className="text-2xl font-medium hover:bg-purple-600 m-3 px-3 py-4 rounded-md align-middle
        transition ease-in-out hover:cursor-pointer"
            >
              {option}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
