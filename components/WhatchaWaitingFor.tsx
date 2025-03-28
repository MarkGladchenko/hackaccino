import { IdeaGenerator } from "./IdeaGenerator";
import { Showcase } from "./Showcase";
export const WhatchaWaitingFor = () => {
  return (
    <div>
      <div className="text-center md:flex px-6 space-x-0 space-y-10 md:space-y-0 md:space-x-10 justify-center">
        <div className="">
          <h1 className="text-2xl italic font-lighter">
            So, you've heard it all now...whatcha waitin' for?
          </h1>
          <h1 className="text-2xl italic font-lighter  mt-4">
            Oh...you might not know what to build.
          </h1>
          <h1 className="text-3xl italic font-lighter font-bold mt-4">
            Try clicking our espresso machine...
          </h1>
        </div>
        <IdeaGenerator />
      </div>

      <div className="max-w-4xl mx-auto mt-12 pb-8 md:pb-24 px-8">
        <h1 className="spicy-rice text-5xl text-center">Get a free Frap</h1>
        <p className="text-2xl text-center mt-3 mb-8">
          Build your site, get a delicious frappuccino
        </p>

        {/* <a href="#" className=""> */}
        <a
          href="https://github.com/hackclub/hackaccino"
          target="_blank"
          className="max-w-xl mx-auto justify-center  text-[#FFF2DE] transition duration-750 get-free-frap text-3xl flex items-center spicy-rice rounded-xl hover:bg-[#FFF2DE] px-6 py-3 ring-4 ring-[#4F2A0E] border-2 border-[#FFF2DE] bg-[#4F2A0E] hover:text-[#4F2A0E]"
        >
          Get Started
        </a>
        {/* </a> */}
      </div>
    </div>
  );
};
