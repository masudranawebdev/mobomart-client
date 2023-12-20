import { MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <>
      <div className="bg-[#F4F5F8] h-[250px] mt-20">
        <div className="container  relative space-y-5 flex flex-col h-full justify-center">
          <h3 className="tertiary-heading">
            Can't find your desired service?
            <br />
            Let us know 24/7 in +88 01678 200900
          </h3>
          <div className="flex justify-between md:justify-start gap-x-1 md:gap-x-5">
            <Link
              to={"/get-quote"}
              className="lg:px-5 lg:py-3 px-2 py-3 bg-primaryColor hover:bg-opacity-80 transition-all duration-150 rounded-md lg:text-xl text-[14px] text-[#fff]"
            >
              Request a service
            </Link>
            <button className="lg:px-5 lg:py-3 px-2 py-3 transition-all duration-150 border border-primaryColor hover:bg-primaryColor hover:text-[#fff] rounded-md lg:text-xl text-[14px] text-[#000]">
              <MdOutlinePhone className="lg:w-5 lg:h-5 inline-block" /> +88
              01678 200900
            </button>
          </div>
          <img
            className="absolute -top-[111px] right-0 hidden lg:block"
            src="/assets/images/service-request.png"
            alt="packnshift"
          />
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
