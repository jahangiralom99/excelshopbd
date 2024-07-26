import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { MdOutlineCallToAction, MdOutlineCheckBox } from "react-icons/md";
import logo from "../../assets/premium-package-450x450.png";

const Order = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-8">
      <div className="bg-white border-2 border-black rounded mt-12 max-w-screen-xl mx-auto p-6">
        <p className="text-center font-bold md:text-2xl">
          অর্ডার করতে আপনার সঠিক তথ্য দিয়ে নিচের ফর্মটি সম্পূর্ণ পূরন করুন। (আগে
          থেকে কোন টাকা দেয়া লাগবে না। প্রোডাক্ট হাতে পাবার পর টাকা দিবেন)
        </p>
        <div className="flex flex-col gap-8 md:flex-row justify-between mt-10 ">
          <div className="md:flex-1">
            <h2 className="font-bold text-xl">Billing details</h2>
            {/* form Start  */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  Name আপনার নাম <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border border-black  rounded py-2 px-4 block text-sm w-full appearance-none"
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="নাম লিখুন"
                  id="name"
                  name="name"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-600">Name is Required</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  Full Address ঠিকানা <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 px-4 block border-black text-sm w-full appearance-none"
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                  id="address"
                  name="address"
                  autoComplete="text"
                />
                {errors.address && (
                  <p className="text-red-600">
                    মোবাইল নাম্বার তথ্যটি প্রয়োজনীয়
                  </p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  Mobile Number (মোবাইল নাম্বার)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 border-black px-4 block text-sm w-full appearance-none"
                  type="number"
                  {...register("phone", { required: true })}
                  placeholder="আপনার সম্পূর্ণ ফোন নম্বর লিখুন"
                  id="phone"
                  name="phone"
                  autoComplete="number"
                />
                {errors.phone && (
                  <p className="text-red-600">আপনার সম্পূর্ণ ফোন নম্বর লিখুন</p>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-sm mb-2">
                  Order notes (optional)
                </label>
                <textarea
                  className=" focus:outline-none focus:shadow-outline border  rounded py-2 border-black px-4 block text-sm w-full appearance-none"
                  rows="5"
                  cols="10"
                  {...register("text", { required: true })}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  id="text"
                  name="text"
                  autoComplete="text"
                />
                {errors.text && (
                  <p className="text-red-600">আপনার সম্পূর্ণ ফোন নম্বর লিখুন</p>
                )}
              </div>
            </form>

            {/* গ্রোথিং প্যাকেজঃ */}
            <div className="mt-12">
              <h1 className="text-xl font-bold">গ্রোথিং প্যাকেজঃ</h1>
              <div className="bg-[#f3f3f3]  mt-4 rounded-md"></div>
            </div>
          </div>

          {/*Your  order  */}
          <div className="md:flex-1">
            <h2 className="font-bold text-xl">Your order</h2>
            <div className="flex  text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Product</p>
              <p>SubTotal</p>
            </div>
            <p className="border-b-2 border-dashed mt-2"></p>
            <div className="mt-5 flex items-center justify-between gap-3  text-sm font-semibold">
              <div className="flex items-center gap-3">
                <img className="w-12 rounded" src={logo} alt="" />
                <p>P106 | উদ্যোক্তা প্যাকেজ</p>
              </div>
              <div>
                <p>× 1 390.00৳ </p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5"></p>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>SubTotal</p>
              <div>
                <p className="text-end">390 $</p>
                <div className="flex items-center gap-2">
                  <input
                    className="accent-red-500"
                    type="radio"
                    name="b"
                    id="background"
                  />
                  <p>ঢাকা সিটির বাহিরে: ৳ 120.00</p>
                </div>
              </div>
            </div>
            <div className="flex text-sm font-semibold justify-between items-center gap-3 mt-5">
              <p>Shopping</p>
              <div className="flex items-center gap-2">
                <input className="accent-red-500" type="radio" name="" id="" />
                <p>ঢাকা সিটির ভিতরে: ৳ 70.00</p>
              </div>
            </div>
            <p className="border-b-2 border-dashed mt-5 "></p>
            <div className="flex  text-sm font-bold justify-between items-center gap-3 mt-5">
              <p>Total</p>
              <p>390</p>
            </div>
            <div className="bg-[#f4f8fa] p-4 mt-5 rounded">
              <div className="flex items-center gap-3">
                <p>ক্যাশ অন ডেলিভারি</p>
              </div>
              <p className="p-4 bg-[#89bc97] mt-4 text-sm text-white">
                কোন টাকা অগ্রিম ছাড়াই অর্ডার করুন।
              </p>
            </div>
            <p className="mt-2 text-[#777] text-[12px]">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
              <span className="text-red-500">privacy policy.</span>
            </p>
            <div className="text-center mt-12 md:mt-12">
              <button className="px-6 w-full gap-3 py-3 flex items-center justify-center  font-bold text-white rounded-lg bg-[#FF0000] hover:bg-[#b11111]">
                <FaLock />
                অর্ডার সম্পূর্ণ করুন ৳ 2,670.00
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
