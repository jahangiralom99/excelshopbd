/* eslint-disable no-irregular-whitespace */
import logo from "../../assets/excelShop_bd-1.png";
import banner from "../../assets/product-samll-title-1536x1502.png";

const Banner = () => {
  return (
    <div className="px-5 mt-4 pb-12">
      <div className="text-center rounded-lg p-8 max-w-screen-xl mx-auto  border-2 border-[#f44c4c]">
        <img className="w-44 inline " src={logo} alt="" />
        <h1 className="text-xl md:text-4xl lg:text-6xl font-bold mt-4">
          চুলের সকল সমস্যার প্রাকৃতিক সমাধান​
        </h1>
      </div>
      {/* banner image  */}
      <div className="mt-8 text-center ">
        <img className=" md:w-[400px] inline p-12 md:p-2" src={banner} alt="" />
      </div>
      {/* youtube the thumbnell */}
      <div className="max-w-screen-xl mx-auto mt-8">
        <iframe
          className="w-full h-96 md:h-[400px] lg:h-[700px] border border-black"
          src="https://www.youtube.com/embed/pWMMTEJ2yCA?si=zef5z8Or0732fkAg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p className="mt-6 text-center border-2 border-dashed border-black lg:text-3xl font-bold md:text-xl p-6">
          চুলের যেকোনো সমস্যার যদি প্রাকৃতিক ভাবে সমাধান করতে চান কোন
          পার্শ্ব-প্রতিক্রিয়া ছাড়া তাহলে এখনই অর্ডার করুন প্রাকৃতিক প্রায় ৩২ টি
          উপাদানে তৈরি এক্সেল হেয়ার গ্রোথিং প্রিমিয়াম অয়েল।
        </p>
      </div>
      {/* button */}
      <div className="text-center mt-8">
        <button className="border-2 px-3 py-4 rounded-full border-black bg-[#f44c4c] text-white md:text-4xl font-bold">
          এখনই অর্ডার করুন
        </button>
      </div>
    </div>
  );
};

export default Banner;
