import React from "react";

const Searchbar = () => {
  return (
    <div className="flex align-middle justify-center mt-4">
      <input
        type="text"
        placeholder="Search"
        className="border-solid border-2  bg-gray-200 rounded-l-xl indent-3 w-4/12 h-10 align-center mt-2"
      ></input>
      <button
        type="submit"
        className="mt-2 rounded-r-xl border-solid bg-gray-200 border-l-black "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Searchbar;
