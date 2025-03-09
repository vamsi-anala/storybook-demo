type ButtonProps = {
  label: string;
  color: string;
  isDisabled: boolean;
};

function Button({ label, color, isDisabled }: ButtonProps) {
  return (
    <button
      className={`m-[20px] px-[10px] py-[5px] rounded-lg text-white font-normal font-sans text-lg disabled:bg-gray-600`}
      style={{
        backgroundColor: isDisabled ? 'gray' : color,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
}

export default Button;