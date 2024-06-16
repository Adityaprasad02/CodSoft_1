import React from 'react'
function About() {
    return (
        <div className="py-16 bg-gray-900">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                     <img
                            src="https://media.licdn.com/dms/image/D4D03AQHfmxSvulmYxQ/profile-displayphoto-shrink_400_400/0/1709050660217?e=1724284800&v=beta&t=hoVaHA-EhbqzaVJD1F2W-scyi0jxgNENgfAVZjY-QkQ"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-white font-bold md:text-4xl">
                       This E-commerce React Project is dedicated to apply my learning and uses of componenets and libraries.
                        </h2>
                        <p className="mt-6 text-sky-700">
                          I,Aditya Prasad Sahoo currently a CSE student in SKIT JAIPUR.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor
                        </p>
                        <p className="mt-4 text-blue-30000">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;