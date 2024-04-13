"use client";
import { useFormState } from "react-dom";
import { updateFilms } from "../actions";

const initialState = {
  message: "",
};
export default function Page() {
  const [state, formAction] = useFormState(updateFilms, initialState);
  return (
    <div className="flex justify-center">
      <form
        className="max-w-sm w-full flex p-2 flex-col items-center"
        action={formAction}
      >
        {state.message && (
          <div
            className="p-4 mb-4 text-sm rounded-lg bg-gray-800 text-green-400"
            role="alert"
          >
            {state.message}
          </div>
        )}
        <button className="text-white focus:ring-4 w-full font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">
          Cập nhật
        </button>
      </form>
    </div>
  );
}
