// react
import { Dispatch, FC, SetStateAction } from "react";

interface LabelInputProps {
  labelText: string;
  placeholderText: string;
  textarea?: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const LabelInput: FC<LabelInputProps> = ({
  labelText,
  placeholderText,
  textarea,
  value,
  setValue,
}) => {
  const onChange = (evt: any) => {
    setValue(evt.target.value);
  };

  return (
    <div className="flex flex-col gap-2.5 flex-1 w-full">
      <label
        htmlFor={placeholderText}
        className="text-textPrimary text-base sm:text-lg font-bold"
      >
        {labelText}
      </label>

      {textarea ? (
        <textarea
          id={placeholderText}
          rows={9}
          placeholder={placeholderText}
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary"
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type="text"
          id={placeholderText}
          placeholder={placeholderText}
          autoComplete="off"
          className="bg-accent rounded-2xl py-4 px-6 text-textPrimary text-base sm:text-lg placeholder-textSecondary outline-none resize-none border-[1px] border-transparent focus:border-hoverSecondary xl:max-w-[335px]"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default LabelInput;
