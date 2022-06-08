import CustomButton from "./CustomButton";

export default function Banner(props: any) {
  const { theme } = props;

  return (
    <div
      className={`w-100 bg-${theme.accent2} flex justify-between py-3 px-8 content-center`}
    >
      <span className={`text-2xl my-auto text-${theme.text1}`}>
        Big news! We're excited to announce a brand new product.
      </span>
      <CustomButton colour={theme.accent1} text={theme.text1}>
        Learn More
      </CustomButton>
    </div>
  );
}
