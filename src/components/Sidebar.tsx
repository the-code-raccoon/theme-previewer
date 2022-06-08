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
    <div
      className={`bg-${theme.accent1} w-[500px] min-h-screen flex flex-col justify-between pb-8`}
    >
      <div>
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
      <div className="w-100 flex justify-center">
        <button
          className={`bg-${
            theme.accent1
          } transition ease-in-out hover:bg-${theme.accent2} drop-shadow-lg h-[45px] px-5 mx-5 shadow rounded-md text-lg font-medium`}
        >
          Login
        </button>
        <button
          className={`bg-${theme.accent2} h-[45px] px-5 mx-5 shadow rounded-md text-lg font-medium`}
        >
          Register
        </button>
      </div>
    </div>
  );
}
