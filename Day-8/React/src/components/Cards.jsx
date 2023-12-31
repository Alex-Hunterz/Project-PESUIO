import React from "react";

const Cards = (props) => {
  return (
    <div className="p-2 m-4 rounded min-w-[200px] outline outline-indigo-500">
      <div className="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-800">Card Title</h2>
        <p className="text-gray-600 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, voluptatem, voluptas, quas nisi quia quod voluptatum
          consequuntur autem nemo doloremque? Quisquam voluptate, voluptatem,
          voluptas, quas nisi quia quod voluptatum consequuntur autem nemo
          doloremque?
        </p>
      </div>
      <ul className="my-3 flex items-center gap-x-3 px-3 py-2 rounded bg-indigo-100 ">
        <li>5</li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
        </li>
      </ul>
      <ul className="flex items-center gap-x-2">
        <li className="bg-indigo-500 px-3 py-1 text-white rounded">{tags}</li>
        <li className="bg-indigo-500 px-3 py-1 text-white rounded">tag</li>
        <li className="bg-indigo-500 px-3 py-1 text-white rounded">tag</li>
        {/* {tags.map((tag) => (
          <li className="bg-indigo-500 px-3 "></li>
        ))} */}
      </ul>
    </div>
  );
};

export default Cards;
