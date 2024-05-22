import clsx from 'clsx';

const Button = ({
  children,
  variant,
  className,
  onClick,
  isLoading,
  disabled
}: {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}) => {
  let classes;
  if (variant == 'primary') {
    classes = 'bg-primary hover:bg-blue-900  text-white';
  } else if (variant == 'secondary') {
    classes = 'bg-[#C2C7F6] hover:bg-blue-200 text-black';
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `gap-5 text-nowrap rounded-[10px]  px-[35px] py-3 text-[16px]/[20px] capitalize ${classes} ${className} `
      )}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
