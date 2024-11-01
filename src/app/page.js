import Image from "next/image";
import img1 from "./../assets/home.png";
import img2 from "./../assets/mail.png";
import img3 from "./../assets/hacher.png";
import img5 from "./../assets/metro.png";

import img6 from "./../assets/con1.png";
import img7 from "./../assets/con2.png";
import img8 from "./../assets/post.png";
import img88 from "./../assets/phone.png";
import Header from "./../components/Header";
import Scroll from "./../components/Scroll";
// import Experiment from "./../components/Experiment";
import Vir from "./../assets/virtue.png";
import Trans from "./../assets/trans.png";
export default function Home() {
  return (
    <>
      <Scroll />
      <Header />
      {/* <Experiment /> */}
      <div className="mt-5">
        <div className="flex sm:flex-row flex-col justify-center items-center relative">
          <div className="sm:w-[30%] w-[71%] sm:mr-40 mr-0 sm:mb-0 mb-5">
            <h1 className="sm:font-semibold font-extrabold sm:text-6xl text-4xl sm:text-left text-center sm:my-0 my-6">
              Find the Perfect Home with AI
            </h1>
            <p className="my-3 text-lg font-md sm:text-left text-center sm:mb-3 mb-6">
              Say goodbye to outdated listings, hidden fees, and time-consuming
              searches.{" "}
            </p>
            <div className="border-2 border-gray-300 p-2  rounded-2xl   flex flex-row justify-between sm:w-[110%] w-full sm:my-0 my-6">
              <input
                className="focus:outline-none text-gray-600 font-semibold placeholder:font-semibold placeholder:text-gray-600 text-sm sm:pl-2 pl-2 w-[60%]"
                type="text"
                placeholder="2BHK in Central London"
              />
              <button className="rounded-xl bg-[#0040E6] text-md  text-white px-3 py-2">
                Search now
              </button>
            </div>
          </div>
          <Image
            src={img1}
            width={3}
            height={5}
            unoptimized={true}
            className="sm:w-[31%] w-[98%] rounded-t-[50rem] rounded-b-[3rem] "
          />
          <div className="absolute bottom-[-20px] flex flex-row justify-between flex-wrap  sm:w-[25%] w-11/12 mx-auto rounded-2xl  backdrop-blur-xl bg-opacity-50 bg-gray-200 p-2">
            <Image className="w-[25%] m-2" src={img5} />
            <Image className="w-[25%] m-2" src={img3} />
            <Image className="w-[25%] m-2" src={img2} />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-around items-center sm:mx-48 mx-2 my-24">
        <h1 className="font-extrabold sm:text-3xl text-[2.7rem] leading-[3rem] sm:w-[32%] w-11/12 sm:mb-0 mb-8">
          AI-Powered Personalized Search
        </h1>
        <p className=" text-xl sm:font-semibold font-thin leading-8 sm:w-[42%] w-11/12">
          Right Home AI helps you discover the right property, smarter and
          stress-free.
        </p>
      </div>
      <div className="mb-12">
        <div className="flex sm:flex-row flex-col justify-between items-center sm:p-10 p-6 rounded-2xl bg-[#F6F6F4] sm:w-[65%] mx-auto w-11/12 my-12">
          <div className="flex flex-col justify-between items-start sm:h-[23rem] h-auto sm:mb-0 mb-16">
            <h3 className="text-xl text-black sm:font-md font-extrabold sm:mb-0 mb-4">
              Real-Time, Accurate Listings
            </h3>
            <h1 className="sm:text-2xl text-[1.8rem] leading-9 text-black font-semibold  sm:w-3/4 w-full">
              Only see properties that are available now. No more outdated
              listings.
            </h1>
          </div>
          <Image
            className="sm:w-2/4 w-full  rounded-2xl"
            width={3}
            height={5}
            unoptimized={true}
            src={"https://propimagestore.blob.core.windows.net/homescreenimages/homescreengifs/Real-Time,%20Accurate%20Listings%20%20-%201.gif"}
          />
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center sm:p-10 p-6 rounded-2xl bg-[#F6F6F4] sm:w-[65%] mx-auto w-11/12 my-12">
          <div className="flex flex-col justify-between items-start sm:h-[23rem] h-auto sm:mb-0 mb-16">
            <h3 className="text-xl text-black sm:font-md font-extrabold sm:mb-0 mb-4">
              AI-Powered Personalized Search
            </h3>
            <h1 className="sm:text-2xl text-[1.8rem] leading-9 text-black font-semibold sm:w-3/4 w-full">
              Our smart AI tailors property recommendations to your exact needs.
            </h1>
          </div>
          {/* <div className="sm:w-2/5 w-full h-[25rem] bg-gray-500 rounded-2xl"></div> */}
          <Image
            className="sm:w-2/4 w-full  rounded-2xl"
            width={3}
            height={5}
            unoptimized={true}
            src={"https://propimagestore.blob.core.windows.net/homescreenimages/homescreengifs/AI-Powered%20Personalized%20Search%20-%202%20(1).gif"}
          />
        </div>
        <div className="flex sm:flex-row flex-col justify-between items-center sm:p-10 p-6 rounded-2xl bg-[#F6F6F4] sm:w-[65%] mx-auto w-11/12 my-12">
          <div className="flex flex-col justify-between items-start sm:h-[23rem] h-auto sm:mb-0 mb-16">
            <h3 className="text-xl text-black sm:font-md font-extrabold sm:mb-0 mb-4">
              Transparent Pricing, No Hidden Fees
            </h3>
            <h1 className="sm:text-2xl text-[1.8rem] leading-9 text-black font-semibold sm:w-3/4 w-full">
              Get a full breakdown of all costs upfront, with zero surprises.
            </h1>
          </div>
          <Image className="sm:w-2/4 w-full  rounded-2xl" src={Trans} />
        </div>
        <div className="flex relative sm:flex-row flex-col justify-between items-center sm:p-10 p-6 rounded-2xl bg-[#F6F6F4] sm:w-[65%] mx-auto w-11/12 my-12">
          <div className="flex flex-col justify-between items-start sm:w-[60%] w-11/12  sm:h-[23rem] h-auto sm:mb-0 mb-[23rem]">
            <h3 className="text-xl text-black sm:font-md font-extrabold sm:mb-0 mb-4">
              Virtual Tours & Smart Scheduling
            </h3>
            <h1 className="sm:text-2xl text-[1.8rem] leading-9 text-black font-semibold sm:w-3/4 w-full">
              View properties on your own time, from the comfort of your home.
            </h1>
          </div>
          <Image
            className="sm:w-2/4 w-full absolute right-0 bottom-0  rounded-2xl"
            src={img8}
          />
        </div>
      </div>

      <div className=" map flex flex-col justify-center items-center py-36">
        <h1 className="text-3xl text-white font-bold ">Start Searching with</h1>
        <h3 className="text-3xl text-[#786E64] font-semibold mb-5">
          Right Home AI
        </h3>
        <p className="text-lg sm:w-1/4 w-3/4 mx-auto text-center  text-white mb-6">
          Sign up for free, and let Right Home AI do the hard work for you.
        </p>
        <button className="px-6 py-2 rounded-xl text-white bg-blue-600">
          Sign in
        </button>
      </div>

      <div className="flex sm:flex-row flex-col justify-between items-center sm:mx-48 mx-2 my-24">
        <div className="sm:w-[30%] w-11/12 m-3 sm:text-4xl text-3xl font-bold">
          <span className="text-[#0040E6]">Join our customers </span>
          and discover the easy way to find your dream home
        </div>
        <div className="rounded-3xl p-3 bg-[#F6F6F4] sm:w-[30%] w-11/12 flex flex-col justify-center items-center  m-3">
          <Image src={img6} className="rounded-full w-[30%] my-4" />
          <p className="text-center leading-7 px-10 mb-10">
            “Right Home AI’s suggestions were spot on. Instead of spending hours
            searching, I got exactly what I was looking for within minutes.”
          </p>
          <button className="mb-8 text-blue-600 text-lg font-semibold">
            read more
          </button>
          <h2 className="text-black font-semibold text-md">Charlisa Boyd</h2>
          <p className="text-gray-400 text-sm">Croydon, England</p>
        </div>
        <div className="rounded-3xl p-3 bg-[#F6F6F4] sm:w-[30%] w-11/12  flex flex-col justify-center items-center  m-3">
          <Image src={img7} className="rounded-full w-[30%] my-4" />
          <p className="text-center leading-7 px-10 mb-10">
            “Right Home AI’s suggestions were spot on. Instead of spending hours
            searching, I got exactly what I was looking for within minutes.”
          </p>
          <button className="mb-8 text-blue-600 text-lg font-semibold">
            read more
          </button>
          <h2 className="text-black font-semibold text-md">Charlisa Boyd</h2>
          <p className="text-gray-400 text-sm">Croydon, England</p>
        </div>
      </div>
      <div className="bg-[#F6F6F4] py-16">
        <div className="flex sm:flex-row flex-col justify-between items-center p-6 rounded-2xl bg-white  sm:w-[65%] mx-auto w-11/12 my-5">
          <div className="flex flex-col justify-between items-start sm:h-[23rem] sm:p-8 h-auto sm:mb-0 mb-16">
            <h3 className="sm:text-lg text-lg text-black sm:font-md font-extrabold sm:mb-0 mb-4">
              Ready to Make Your Move?
            </h3>
            <div>
              <h1 className="sm:text-4xl text-[2rem] text-black font-semibold sm:w-3/4 w-[100%] mb-5">
                Let Right Home AI Guide You to the Perfect Match.
              </h1>
              <button className="px-6 py-2 rounded-xl text-white bg-blue-600">
                Browse Homes
              </button>
            </div>
          </div>
          <div className="sm:w-[90%] w-full  rounded-2xl">
            <Image
              src={img88}
              className="w-full rounded-t-[50rem] rounded-b-[3rem]"
            />
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-evenly items-center my-24">
        <div className="sm:w-[30%] w-11/12 sm:mb-0 mb-6">
          <h2 className="text-3xl font-semibold ">Questions?</h2>
          <h2 className="text-3xl font-semibold mb-2">We have answers.</h2>
          <p className="text-xl font-md">
            Tell us your Real Estate goals, and we’ll guide you every step of
            the way.
          </p>
        </div>
        <div className="sm:w-[30%] w-11/12">
          <button className="px-4 py-2 text-white bg-black rounded-full my-2 mx-4 hover:bg-blue-500">
            999-000-6274
          </button>
          <button className="px-4 py-2 text-white bg-black rounded-full my-2 mx-4 hover:bg-blue-500">
            hello@righthomeai.com
          </button>
          <button className="px-4 py-2 text-white bg-black rounded-full my-2 mx-4 hover:bg-blue-500">
            Visit our help center
          </button>
        </div>
      </div>

      <footer className="bg-[#23201D] pt-8 pb-2">
        <div className="flex sm:flex-row flex-col justify-around items-center">
          <h1 className="text-3xl text-white sm:w-1/4 w-11/12 sm:mb-0 mb-6">
            The Smarter Way to Find Your Dream Home
          </h1>
          <Image
            src={img1}
            className="sm:w-[15%] w-10/12 rounded-t-[50rem] rounded-b-[3rem]"
          />
        </div>

        <p className="px-5 py-2 rounded-2xl bg-[#50361b] text-white text-md w-fit mt-6  mx-auto">
          © 2024 Right Home AI | All rights reserved.
        </p>
      </footer>
    </>
  );
}
