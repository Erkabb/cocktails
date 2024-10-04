import Footer from "./footer";

export const MainPoster = () => {
  return (
    <main className="flex flex-col pt-10 pb-5 items-center h-full gap-10 justify-between">
      <div className="flex flex-col items-center gap-10">
        <div>
          <h1 className="font-sans text-[22px]">
            <strong>SIP</strong>
          </h1>
        </div>
        <div>
          <h1 className="text-[55px] font-sans absolute left-20">MINGLE</h1>
          <div>
            {" "}
            <h2 className="text-[50px] font-serif relative left-24 top-7 text-orange-600">
              MONDAYS
            </h2>
          </div>
        </div>

        <div className=" absolute bottom-[450px] left-0  ">
          <p className="border border-white-600 border-t-0 border-l-0 border-r-0 w-[160px] text-[12px] ml-3 ">
            <strong>Our special cocktail:</strong>
          </p>
          <p className="border border-b-white-600 border-t-0 border-l-0 border-r-0 w-[180px] text-[16px] ml-6">
            <strong>Lavender Berry</strong>
          </p>
          <p className="border border-b-white-600 border-t-0 border-l-0 border-r-0 w-[200px] text-[12px] ml-9">
            <strong>is available only on Friday.</strong>
          </p>
        </div>
      </div>
      <div className="absolute bottom-3">
        {" "}
        <Footer />
      </div>
    </main>
  );
};
