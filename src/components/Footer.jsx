import React from "react";

const Footer = () => {
  return (
    <footer className="w-[100%] flex items-center justify-center py-10 md:py-[100px] dark:bg-gray-900 dark:text-gray-300 bg-gray-400 text-slate-950">
      <div className="flex items-center justify-center flex-col gap-4 px-4 text-center">
        <p className="text-lg">
          Discover your next cinematic adventure with{" "}
          <span className="font-bold">CinemaScope</span>. Explore handpicked
          recommendations and more to fuel your love for the silver screen.
        </p>
        <p>&copy; 2024 CinemaScope. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
