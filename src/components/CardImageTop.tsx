export default function CardImageTop() {
  return (
    <div className="max-w-md mx-auto mb-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div>
        <div>
          <img
            className="h-48 w-full object-cover md:h-full"
            src="https://images.pexels.com/photos/2832641/pexels-photo-2832641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case study
          </div>
          <a
            href="/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding customers for your new business
          </a>
          <p className="mt-2 text-slate-500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </p>
        </div>
      </div>
    </div>
  );
}
