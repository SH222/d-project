"use client";

import Image from "next/image";
import { useState } from "react";
import Paperplane from "../public/imgs/paper-plane.png";

export default function EmailVlidation() {
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(false);
  const regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return (
    <>
      <form className="Email-form">
        <span className="Subscribe-to-our-newsletter Text-Style-2">
          Subscribe to our newsletter
        </span>
        <div
          className={`Rectangle-4 ${email == "" ? "" : isEmail ? "email-false" : "email-true"} `}
        >
          <input
            name="email"
            type="text"
            className="Enter-your-email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
              !regExp.test(email) ? setIsEmail(true) : setIsEmail(false);
            }}
          />
          <button type="sumbit" className="paper-plane-1">
            <Image src={Paperplane} className="paper-plane-1" alt="btn" width={32} height={32} />
          </button>
          {isEmail ? (
            <span className="Please-enter-a-valid-email">Please enter a valid email</span>
          ) : (
            ""
          )}
        </div>
      </form>
    </>
  );
}
