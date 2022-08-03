import Link from "next/link.js";
import React from "react";

function Logo() {
  return (
    <Link href="/">
      <a>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="40"
            height="40"
            rx="6"
            fill="url(#paint0_linear_1_5024)"
          />
          <path
            d="M9.98663 27.448L12.6426 24.12C13.944 25.2507 15.192 26.0827 16.3866 26.616C17.6026 27.128 18.8826 27.384 20.2266 27.384C21.6133 27.384 22.7226 27.128 23.5546 26.616C24.3866 26.104 24.8026 25.4213 24.8026 24.568C24.8026 23.8 24.5146 23.2027 23.9386 22.776C23.384 22.3493 22.4453 22.0293 21.1226 21.816L16.6746 21.048C14.7546 20.728 13.2933 20.056 12.2906 19.032C11.3093 18.008 10.8186 16.6853 10.8186 15.064C10.8186 12.9733 11.608 11.32 13.1866 10.104C14.7866 8.888 16.9413 8.28 19.6506 8.28C21.272 8.28 22.904 8.55733 24.5466 9.112C26.2106 9.66667 27.6613 10.4347 28.8986 11.416L26.4026 14.872C25.208 13.9547 24.0346 13.2827 22.8826 12.856C21.7306 12.408 20.5466 12.184 19.3306 12.184C18.0933 12.184 17.1013 12.4187 16.3546 12.888C15.608 13.336 15.2346 13.944 15.2346 14.712C15.2346 15.3947 15.48 15.928 15.9706 16.312C16.4613 16.696 17.2826 16.9733 18.4346 17.144L22.6586 17.848C24.8773 18.2107 26.5413 18.9253 27.6506 19.992C28.7813 21.0373 29.3466 22.424 29.3466 24.152C29.3466 26.328 28.4826 28.0667 26.7546 29.368C25.048 30.6693 22.7653 31.32 19.9066 31.32C18.1146 31.32 16.344 30.9787 14.5946 30.296C12.8666 29.6133 11.3306 28.664 9.98663 27.448Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_5024"
              x1="0"
              y1="20"
              x2="40"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2979FF" />
              <stop offset="1" stopColor="#4C589E" />
            </linearGradient>
          </defs>
        </svg>
      </a>
    </Link>
  );
}

export default Logo;
