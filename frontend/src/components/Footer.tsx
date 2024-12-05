import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-600 text-white py-12 px-32 z-10 sticky">
      <div className="flex justify-between items-center mb-12">
        <address className="not-italic">
          <div className="font-semibold mb-3">Address</div>
          <div>123 Maple Street, Springfield, IL 62704, Lagos</div>
        </address>
        <div className="flex gap-20 items-center">
          <div>
            <div className="font-semibold mb-3">Info</div>
            <div className="mb-1">About</div>
            <div>How it works</div>
          </div>
          <address className="not-italic">
            <div className="font-semibold mb-3">Contact us</div>
            <div className="mb-1">
              <a href="tel:0800-125-500-626">0800-125-500-6266</a>
            </div>
            <div>
              <a href="mailto:info@abcd.com.ng">info@abcd.com.ng</a>
            </div>
          </address>
          <a href="#header" className="bg-white rounded-full h-12 w-12 text-center flex items-center justify-center">
            <span className="font-medium text-h5 text-primary-600">↑</span>
          </a>
        </div>
      </div>
      <div className="text-smallCaption border-t border-primary-500 pt-5 pb-1o text-center">
        <p className="flex justify-between">
          <span>Powered by StellarSync Technology © 2024</span>
          <span>v.1.0.0</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
