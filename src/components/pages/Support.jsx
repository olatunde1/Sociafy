import { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import Castine from "../../assets/images/castine.png";
import { Link } from "react-router-dom";
import SupportImage from "../../assets/images/telegram-support.png";

export default function Support() {
  return (
    <main className="">
      {/* Welcome & Balance */}

      {/* Rules Section */}
      <div className="grid gap-8 space-y-8 md:flex md:space-y-0">
        <div className="flex mt-16 bg-white p-6 rounded-lg shadow w-full md:w-[578px]">
          <div>
            <div className="flex items-center gap-4">
              <img src={SupportImage} alt="" />
              <div className="ml-6">
                <h3 className="text-lg font-bold">Telegram</h3>
                <p className="text-gray-600">
                  Reach out to us on telegram for help and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
