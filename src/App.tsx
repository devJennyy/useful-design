import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-row justify-between bg-slate-950 w-full h-[100vh] pl-32">
        {/* Linear Gradients */}
        <div className="flex flex-col justify-center items-start gap-20 w-[800px]">
          {/* Linear Gradients Two Colors */}
          <div className="flex flex-col gap-5 text-left">
            <p className="text-white font-bold tracking-[3px] mb-5 text-[20px]">
              Two Colors
            </p>

            <div className="flex flex-row justify-between gap-5">
              <div className="w-20 h-20 rounded-full bg-gradient-to-t from-[#A22DFF] to-[#FF95DB]"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#A22DFF] to-[#FF95DB]"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#A22DFF] to-[#FF95DB]"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-tl from-[#A22DFF] to-[#FF95DB]"></div>
            </div>

            <div className="flex flex-row justify-between gap-5">
              <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-t from-amber-500 to-fuchsia-700">
                <div className="bg-slate-950 w-[74px] h-[74px] rounded-full"></div>
              </div>
              <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-b from-amber-500 to-fuchsia-700">
                <div className="bg-slate-950 w-[74px] h-[74px] rounded-full"></div>
              </div>
              <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 to-fuchsia-700">
                <div className="bg-slate-950 w-[74px] h-[74px] rounded-full"></div>
              </div>
              <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-tl from-amber-500 to-fuchsia-700">
                <div className="bg-slate-950 w-[74px] h-[74px] rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Linear Gradients Three Colors */}
          <div className="flex flex-col gap-5 text-left">
            <p className="text-white font-bold tracking-[3px] mb-5 text-[20px]">
              Three Colors
            </p>

            <div className="flex flex-row justify-between gap-5">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 from-20% via-purple-500 via-50% to-indigo-500 to-90%"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 from-20% via-purple-500 to-indigo-500"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 from-30% via-purple-500 to-indigo-500"></div>
            </div>
          </div>

          {/* Colors you might want */}
          <div className="flex flex-col gap-5 text-left">
            <p className="text-white font-bold tracking-[3px] mb-5 text-[20px]">
              Colors you might like
            </p>

            <div className="flex flex-row justify-between gap-5">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 from-20% via-purple-500 via-50% to-indigo-500 to-90%"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 from-20% via-purple-500 to-indigo-500"></div>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 from-30% via-purple-500 to-indigo-500"></div>
            </div>
          </div>
        </div>

        {/* Other Designs */}
        <div className="flex flex-col justify-center gap-20 w-[800px]">
          {/* Linear Gradients Two Colors */}
          <div className="flex justify-center items-center relative">
            <div className="w-[489px] h-[20px] bg-gradient-to-r from-[#5721B7] to-[#D668CD] blur-[5px] absolute rounded-lg"></div>

            <div className="w-[477px] h-[3px] bg-white blur-[1px] absolute rounded-full"></div>

            <div className="w-[477px] h-[7px] bg-white opacity-[1%] absolute rounded-full"></div>

            <div className="w-[477px] h-[7px] bg-white opacity-[3%] absolute rounded-full"></div>
          </div>
        </div>

        {/* Other Designs */}
        <div className="flex flex-col justify-center items-start gap-20 w-[500px]">
          {/* Linear Gradients Two Colors */}
          <div className="flex flex-col gap-5 text-left">
            <p className="text-white font-bold tracking-[3px] mb-5 text-[20px]">
              Blur
            </p>

            <div className="flex flex-row justify-between gap-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
