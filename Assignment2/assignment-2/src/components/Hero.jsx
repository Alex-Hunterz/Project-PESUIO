import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center align-middle w-100 h-56">
      <video
        autoPlay
        muted
        src="/video/sample-vid.mp4"
        className="w-96 h-52 ml-24 rounded-2xl"
      ></video>
      <div className="ml-5 w-150 h-20 flex flex-col">
        <img
          src="/img/titanium2.jpg"
          className="w-150 h-20 object-fill rounded-xl"
        ></img>
        <div className="mt-3">
          <div className="w-100 h-25 flex flex-col-2">
            <img src="/img/apple2.png" className="w-10 h-10 rounded-full"></img>
            <div>
              <p className="flex align-middle">Iphone 15 with titanium </p>
              <p className="font-bold">
                Ad <span className="font-light">• Apple India</span>
              </p>
              <button className="rounded-xl bg-blue-600 w-5/6">
                Learn More
              </button>
              <image className="flex justify-end">
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
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
