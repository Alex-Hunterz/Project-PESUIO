import React from "react";

const Search = () => {
  return (
    <div className="sticky top-0 bg-black">
      <div className="flex justify-center align-middle">
        <input
          type="text"
          placeholder="Search"
          className=" w-4/12 mt-2 align-center rounded-l-full border-solid text-white bg-gray-900 indent-3"
        />

        <button
          type="submit"
          className="mt-2 rounded-r-full border-show bg-gray-800"
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
        <button className="ml-3 p-1 mt-2 rounded-full bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
        </button>
      </div>
      <div>
        <button className="p-2 ml-2 mr-1 border-solid bg-gray-800 rounded-xl">
          All
        </button>
        <button className="p-2 m-1 border-solid bg-gray-800 rounded-xl">
          Music
        </button>
        <button className="p-2 m-1 border-solid bg-gray-800 rounded-xl">
          Live
        </button>
        <button className="p-2 m-1 border-solid bg-gray-800 rounded-xl">
          Drama
        </button>
        <button className="p-2 m-1 border-solid bg-gray-800 rounded-xl">
          Comedy
        </button>
        <button className="p-2 m-1 border-solid bg-gray-800 rounded-xl">
          Bollywood
        </button>
        <button className="p-2 m-1 border-solid bg-gray-800 rounded-xl">
          Thriller
        </button>
        <button className="p-2 m-1 border-solid bg-gray-800 rounded-xl">
          Horror
        </button>
        <button className="p-2 m-1 border-solid bg-gray-800 rounded-xl">
          5 Minute Crafts
        </button>
        <button className="p-2 m-1 border-solid bg-gray-800 rounded-xl">
          Physics
        </button>
      </div>
    </div>
  );
};

export default Search;
