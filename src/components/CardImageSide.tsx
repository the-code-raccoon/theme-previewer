import { lighter } from "../helper";

export default function Card1(props: any) {
  const { theme } = props;
  return (
    <div
      className={`max-w-md mx-auto mb-10 bg-${lighter(
        theme.background
      )} rounded-xl shadow-md overflow-hidden md:max-w-2xl`}
    >
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.pexels.com/photos/1700656/pexels-photo-1700656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div
            className={`uppercase tracking-wide text-sm text-${theme.accent1} font-semibold`}
          >
            Case study
          </div>
          <a
            href="/"
            className={`block mt-1 text-lg leading-tight font-medium text-${theme.text2} hover:underline`}
          >
            Finding customers for your new business
          </a>
          <p
            className={
              theme.text2 === "white"
                ? "mt-2 text-slate-300"
                : "mt-2 text-slate-900"
            }
          >
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  );
}
