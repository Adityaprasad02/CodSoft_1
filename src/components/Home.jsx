import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../components/pexels-kindelmedia-7007174.jpg';

function Home() {
  return (
    <div>
      <section
        className="relative h-fit bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 sm:bg-transparent backdrop-blur-sm"></div>

        <div className="relative mx-auto  max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-92 lg:items-center lg:px-8">
          <div className="max-w-fit shadow-inner backdrop-blur-lg rounded-2xl p-7 text-center sm:text-left">
           <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-400">
              <span className="text-black glow-text-shadow outline-8 outline-black">Get best deals</span>
              <strong className="block font-extrabold text-purple-900">
                <span className="shadow-2xl text-white "> @ 40% discount </span>
              </strong>
              </h1>

            <p className="mt-5 max-w-lg font-medium text-black sm:text-l/relaxed glow-text-shadow">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 mx-4 sm:mx-20 text-center">
              <Link
                to="/shopnow"
                className="block w-full shadow-xl rounded bg-rose-600 px-8 sm:px-12 py-3 text-lg font-medium text-white  hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
