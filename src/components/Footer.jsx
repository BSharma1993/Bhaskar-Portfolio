import React from "react";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-8">
        {" "}
        <div className="max-w-screen-2xl container mx-auto md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm ">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Bhaskar Sharma</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
