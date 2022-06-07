interface ProfileCardProps {
  name: string;
  colour: string;
  pic: string;
}

export default function ProfileCard(props: ProfileCardProps) {
  const { name, colour, pic } = props;

  return (
    <div className="mx-auto mb-10 bg-white rounded-xl shadow-md overflow-hidden w-72">
      <div>
        <div>
          <div
            className={`h-56 w-full bg-${colour} flex items-center justify-center`}
          >
            <img
              className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
              src={pic}
              alt=""
            />
          </div>
        </div>
        <div className="p-8">
          <a
            href="/"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {name}
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
