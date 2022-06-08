import CustomButton from "./CustomButton";

export default function Banner() {
  return (
    <div className="w-100 bg-sky-600 flex justify-between py-3 px-8 content-center">
      <span className="text-2xl my-auto">
        Big news! We're excited to announce a brand new product.
      </span>
      <CustomButton colour={"orange-300"}>Learn More</CustomButton>
    </div>
  );
}
