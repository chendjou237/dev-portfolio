import AnimationLottie from "./components/helper/animation-lottie";
import lottieFile from '/public/lottie/code.json';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0E0E2C] relative overflow-hidden">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="z-10 px-4 w-full max-w-xl text-center">
        <div className="mx-auto mb-8 w-48 h-48">
          <AnimationLottie animationPath={lottieFile} />
        </div>

        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl animate-fade-in">
          Coming Soon
        </h1>

        <p className="text-lg text-[#16f2b3] mb-8 animate-fade-in-delay">
          Something amazing is in the works!
        </p>

        <div className="inline-block">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg opacity-75 blur transition duration-1000 animate-pulse group-hover:opacity-100 group-hover:duration-200" />
            <button className="flex relative items-center px-7 py-4 leading-none bg-black rounded-lg divide-x divide-gray-600">
              <span className="pr-6 text-gray-100">Stay tuned for updates</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="absolute w-full h-full">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: '35%', left: '10%' }}>
          <div className="w-[350px] h-[350px] bg-violet-500/30 rounded-full blur-3xl" />
        </div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: '65%', left: '90%' }}>
          <div className="w-[350px] h-[350px] bg-indigo-500/30 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
}
