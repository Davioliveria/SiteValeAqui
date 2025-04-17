import React from 'react';
import './contato.css';

export default function Contato() {
  return (
    <div className="contato-container">
      <section className="form">
        <h1>Entre em contato!</h1>
        <p>Aqui você pode entrar em contato conosco.</p>
      </section>

      <div className="contato-item">
        <div className="email">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4285F4"
              d="M24 9.5c3.9 0 7.4 1.5 10.1 4l7.5-7.5C36.3 1.6 30.5 0 24 0 14.6 0 6.5 5.5 2.6 13.4l8.7 6.8C13.2 14.1 18.2 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.5 24.5c0-1.7-.2-3.4-.5-5H24v9.5h12.7c-1.2 3.3-3.2 6-5.8 7.8l8.7 6.8c5.1-4.7 8.1-11.7 8.1-19.1z"
            />
            <path
              fill="#FBBC05"
              d="M10.5 28.2c-.5-1.4-.8-2.9-.8-4.4s.3-3.1.8-4.4l-8.7-6.8C.6 16.6 0 20.2 0 24s.6 7.4 1.8 10.7l8.7-6.5z"
            />
            <path
              fill="#EA4335"
              d="M24 48c6.5 0 12.3-2.1 16.4-5.7l-8.7-6.8c-2.4 1.6-5.5 2.6-9.1 2.6-5.8 0-10.8-4.6-12.6-10.7l-8.7 6.5C6.5 42.5 14.6 48 24 48z"
            />
          </svg>
          <span>appvaleaqui@gmail.com</span>
        </div>
      </div>

      <div className="contato-item">
        <div className="instagram">
          <a
            href="https://www.instagram.com/app_valeaqui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="24"
              height="24"
            >
              <path
                fill="#d80d8a"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
            <span>@app_valeaqui</span>
          </a>
        </div>
      </div>
    </div>
  );
}
