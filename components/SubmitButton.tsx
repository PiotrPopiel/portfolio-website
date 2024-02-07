"use client";

import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="w-[10rem] flex items-center bg-gray-950 text-gray-50 rounded-full justify-center  gap-3 p-2 hover:bg-gray-800 transition-all shadow-md text-xl mt-3 hover:scale-110 focus:scale-105 active:scale-105 dark:bg-gray-200 dark:text-gray-950">
      {pending ? (
        <>
          Submit
          <ImSpinner8 className="text-gray-50 animate-spin dark:text-gray-800" />
        </>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs opacity-80" />
        </>
      )}
    </button>
  );
}

export default SubmitButton;
