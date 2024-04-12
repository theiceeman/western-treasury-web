import clsx from 'clsx';

const Button = ({
  children,
  variant
}: {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}) => {
  let classes;
  if (variant == 'primary') {
    classes = 'bg-primary  text-white';
  } else if (variant == 'secondary') {
    classes = 'bg-[#C2C7F6] text-black';
  }

  return (
    <button
      className={clsx(
        `gap-5 text-nowrap rounded-[10px]  px-[35px] py-3 text-[16px]/[20px] capitalize ${classes}`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
