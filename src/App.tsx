import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-row justify-between bg-slate-950 w-full h-full pl-32">
        {/* Gradients */}
        <div className="flex flex-col justify-center items-start gap-20 w-[800px]">
          {/* Two Colors */}
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

          {/* Three Colors */}
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

          {/* Other Assets */}
          <div className="flex flex-col gap-12 text-left">
            <p className="text-white font-bold tracking-[3px] text-[20px]">
              Other Assets
            </p>

            {/* Line */}
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex justify-center items-center relative pl-[190px]">
                <div className="w-[389px] h-[20px] bg-gradient-to-r from-[#5721B7] to-[#D668CD] blur-[5px] absolute rounded-lg"></div>

                <div className="w-[377px] h-[3px] bg-white blur-[1px] absolute rounded-full"></div>

                <div className="w-[377px] h-[7px] bg-white opacity-[1%] absolute rounded-full"></div>

                <div className="w-[377px] h-[7px] bg-white opacity-[3%] absolute rounded-full"></div>
              </div>
            </div>

            {/* Box */}
            <div className="flex flex-col w-[377px]">
              <div className="flex justify-center items-center">
                <div className="w-[379px] h-[9px] bg-gradient-to-r from-[#5721B7] to-[#D668CD] blur-[5px] absolute rounded-lg"></div>

                <div className="w-[379px] h-[3px] bg-white blur-[1px] absolute rounded-full"></div>

                <div className="w-[379px] h-[6px] bg-white opacity-[1%] absolute rounded-full"></div>

                <div className="w-[379px] h-[6px] bg-white opacity-[3%] absolute rounded-full"></div>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex justify-center">
                  <div className="w-[9px] h-[50px] bg-gradient-to-r from-[#5721B7] to-[#D668CD] blur-[5px] absolute rounded-lg"></div>

                  <div className="w-[3px] h-[50px] bg-white blur-[1px] absolute rounded-full"></div>

                  <div className="w-[6px] h-[50px] bg-white opacity-[1%] absolute rounded-full"></div>

                  <div className="w-[6px] h-[50px] bg-white opacity-[3%] absolute rounded-full"></div>
                </div>

                <div className="flex justify-center">
                  <div className="w-[9px] h-[50px] bg-gradient-to-r from-[#5721B7] to-[#D668CD] blur-[5px] absolute rounded-lg"></div>

                  <div className="w-[3px] h-[50px] bg-white blur-[1px] absolute rounded-full"></div>

                  <div className="w-[6px] h-[50px] bg-white opacity-[1%] absolute rounded-full"></div>

                  <div className="w-[6px] h-[50px] bg-white opacity-[3%] absolute rounded-full"></div>
                </div>
              </div>

              <div className="flex justify-center items-center pt-[50px]">
                <div className="w-[379px] h-[9px] bg-gradient-to-r from-[#5721B7] to-[#D668CD] blur-[5px] absolute rounded-lg"></div>

                <div className="w-[379px] h-[3px] bg-white blur-[1px] absolute rounded-full"></div>

                <div className="w-[379px] h-[6px] bg-white opacity-[1%] absolute rounded-full"></div>

                <div className="w-[379px] h-[6px] bg-white opacity-[3%] absolute rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Designs */}
        <div className="flex flex-col justify-center gap-20 w-[800px]">
          
        </div>

        {/* Other Designs */}
        <div className="flex flex-col justify-center items-start gap-20 w-[500px]">
          
          
        </div>
      </div>
    </>
  );
}

export default App;
