type InputProps = {
  placeholder: string;
};

export default function Input({ placeholder }: InputProps) {
  return (
    <div>
      <input placeholder={placeholder} className=" border border-black rounded-md w-40 " />
    </div>
  );
}
