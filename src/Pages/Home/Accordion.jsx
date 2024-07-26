const Accordion = () => {
  return (
    <div className="section-1 ">
      <div className="p-6  max-w-screen-xl mx-auto px-5">
        <h1 className="font-bold md:text-2xl text-center">
          নীচের প্রশ্নগুলো আমরা প্রতিনিয়ত পেয়ে থাকি। আশা করি এর মধ্যে আপনি আপনার
          প্রশ্নের উত্তর পেয়ে যাবেন এবং আমাদের তেলের সম্পর্কে বিস্তারিত জানতে
          পারবেন.
        </h1>
        {/* Accordions */}
      <div className="mt-8">
          {/*<!-- Component: Basic accordion --> */}
          <section className="w-full divide-y rounded divide-slate-200">
            <details className="p-4 group" open>
              <summary className="relative cursor-pointer list-none pr-8 text-[#0e77a4] transition-colors duration-300 focus-visible:outline-none  [&::-webkit-details-marker]:hidden font-bold group-hover:text-slate-800">
              এটি কি তেল? কি কি উপাদান দিয়ে তৈরি?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac01 desc-ac01"
                >
                  <title id="title-ac01">Open icon</title>
                  <desc id="desc-ac01">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500 text-sm">
              এটি একটি ১০০% পিউর এবং হালাল অর্গানিক তেল। খাটি নারিকেল তেল, ব্রাক্ষি, শিকাকাই, বহেরা, আমলকি, মেথি, কারিপাতা, রিঠা, জবা ফুলের নির্যাস সহ ৩২ টি প্রাকৃতিক উপাদান।


              </p>
            </details>
            <details className="p-4 group" open>
              <summary className="relative cursor-pointer list-none pr-8 text-[#0e77a4] transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden font-bold">
              চুল পড়ে, আগের চেয়ে চুল অনেক পাতলা হয়ে গেছে, নতুন চুল গজাবে কি?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac01 desc-ac01"
                >
                  <title id="title-ac01">Open icon</title>
                  <desc id="desc-ac01">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500 text-sm">
              জ্বি, এই তেল ব্যাবহারে চুল পড়া বন্ধ হবে এবং নতুন চুল গজাবে।
              </p>
            </details>
            <details className="p-4 group" open>
              <summary className="relative cursor-pointer list-none pr-8 text-[#0e77a4] transition-colors duration-300 focus-visible:outline-none [&::-webkit-details-marker]:hidden font-bold">
              খুশকির সমস্যা ও পাকা চুল কালো করে কি?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac01 desc-ac01"
                >
                  <title id="title-ac01">Open icon</title>
                  <desc id="desc-ac01">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-slate-500 text-sm">
              জ্বি, খুশকির সমস্যা সমাধান হবে এবং চুল কালো করবে।
              </p>
            </details>
       
          </section>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
