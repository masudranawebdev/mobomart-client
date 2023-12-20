import { BiSolidMap } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/footerlogo.png";
import { BsArrowRightShort } from "react-icons/bs";

const useFullLink = [
  { path: "#", label: "About-Us" },
  { path: "#", label: "Site-map" },
  { path: "#", label: "Privacy-Policy" },
  { path: "#", label: "Terms-&-Conditions" },
  { path: "#", label: "Office-Relocation-Service" },
  { path: "#", label: "Moving-Tips" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const handleEmailClick = () => {
    window.location.href = `mailto:masudranainfo99@gmail.com`;
  };
  return (
    <footer>
      <div className="bg-hoverColor text-white border-t-[5px] border-primaryColor">
        <div className="container py-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-col-3 sm:grid-cols-2 gap-5">
            <div>
              <Link to={"/"}>
                <figure>
                  <img
                    loading="lazy"
                    src={footerLogo}
                    alt="footerLogo"
                    className="w-[250px] lg:w-full"
                  />
                </figure>
              </Link>
              <p className="text-[16px] leading-7 font-[400] text-white mt-4">
                Welcome to PACK & SHIFT, We're a Domestic and International
                Packers & Movers Service Provider. Supported Related House
                shifting, Office Shifting any time anywhere in Dhaka and
                Bangladesh. We provide quality packing and moving service
                provider.
              </p>
            </div>
            <ul className="list-none ml-0 mb-0">
              <li className="leading-[30px] font-[500]">
                <h2
                  className="mb-6 text-primaryColor"
                  style={{ fontSize: "22px" }}
                >
                  UseFull Link
                </h2>
              </li>
              {useFullLink.map((item, index) => (
                <li key={index} className="flex items-center mt-3">
                  <BsArrowRightShort className="w-5 h-5 mr-1 inline-block" />
                  <Link
                    to={item.path}
                    className="flex flex-col  text-[15px]  hover:underline hover:decoration-primaryColor"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <ul className="flex flex-col leading-8 cursor-pointer ml-0 mb-0 list-none">
                <li className="text-[20px] leading-[30px] font-[500]">
                  <h2 className="mb-6 text-primaryColor text-[22px]">
                    Get in Touch
                  </h2>
                </li>
                <li className="flex items-center gap-3 mb-2">
                  <span>
                    <BiSolidMap className="w-[2rem] h-9  text-white bg-primaryColor rounded-md" />
                  </span>
                  <address className="text-[16px] leading-7 font-[400] hover:underline hover:decoration-primaryColor">
                  Dhaka - 1207, Bangladesh
                  </address>
                </li>
                <li className="flex items-center gap-3 mb-2">
                  <span>
                    <IoCallSharp className="w-7 h-7  text-white bg-primaryColor rounded-md" />
                  </span>
                  <h3 className="text-[16px] leading-7 font-[400] hover:underline hover:decoration-primaryColor">
                    +8801796682951
                  </h3>
                </li>
                <li className="flex items-center gap-3 mb-2">
                  <span>
                    <SiMinutemailer className="w-[2rem] h-9 text-white bg-primaryColor rounded-md" />
                  </span>
                  <h3
                    onClick={handleEmailClick}
                    className="text-[16px] leading-7 font-[400] hover:underline hover:decoration-primaryColor"
                  >
                    masudranainfo99@gmail.com
                  </h3>
                </li>
                <li className="flex items-center gap-3">
                  <span>
                    <FaMapMarkedAlt className="w-[2rem] h-9 text-white bg-primaryColor rounded-md" />
                  </span>
                  <h3 className="text-[16px] leading-7 font-[400]">
                    <a
                      href="https://goo.gl/maps/W8jkKJ1w7cFa3RSz8"
                      target="_blank"
                      className="hover:underline hover:decoration-primaryColor "
                    >
                      Find us in Google
                    </a>
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-social-bg">
          <p className="text-[16px] text-center py-4 leading-7 font-[400] text-white">
            copyright @ {year} developed by
            <strong>
              <a
                href="https://mrmasud.netlify"
                target="_blank"
                className="hover:underline hover:decoration-primaryColor"
              >
                MRTECH
              </a>
            </strong>{" "}
            | All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
