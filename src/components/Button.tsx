type ButtonProps = {
  small?: boolean;
  gray?: boolean;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export function Button({
  small = false,
  gray = false,
  className = "",
  ...props
}: ButtonProps) {
  const sizeClasses = small ? "px-2 py-1 text-sm" : "px-4 py-2 font-bold";
  const colorClasses = gray
    ? "bg-gray-400 text-gray-700 hover:bg-gray-300 focus-visible:bg-gray-300"
    : "bg-blue-500 text-white hover:bg-blue-400 focus-visible:bg-blue-400";
  return (
    <button
      {...props}
      className={`rounded-full text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${sizeClasses} ${colorClasses} ${className}`}
    >
      {props.children}
    </button>
  );
}
