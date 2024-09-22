import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <section className="bg-[#011C52] FooterSection min-h-[11.24rem] font-montserrat pt-[5.81rem]">
      <div className="grid grid-cols-5 px-[6.78rem] py-[8.56rem] gap-[6.5rem]">
        {/* frist div  */}
        <div className="col-span-2">
          <img src="/assets/Logo.png" alt="footer logo image " />
          <p className="text-white pt-[1.5rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero cum,
            officiis mollitia ducimus commodi vitae non natus officia
            necessitatibus eum quia maxime aspernatur? Deleniti, eligendi
            perferendis. Velit, laboriosam? Soluta recusandae amet blanditiis
            nihil eaque corrupti quam a dicta nisi odio laborum, voluptatibus
            ullam molestiae vero inventore debitis iste? Esse, voluptatibus.
          </p>
          <div className="mt-[3.56rem]">
            <h4 className="text-white text-[1.25rem] font-semibold font-montserrat ">
              Follow us
            </h4>
            <ul className="flex gap-5 pt-3">
              <li className="bg-white p-3 text-black rounded-full w-[1.5rem] h-[1.5rem] flex justify-center items-center">
                <a href="/facebook">
                  <FaInstagram className="font-[1.5rem]" />
                </a>
              </li>
              <li className="bg-white p-3 text-black rounded-full w-[1.5rem] h-[1.5rem] flex justify-center items-center">
                <a href="">
                  <FaFacebookF className="font-[1.5rem]" />
                </a>
              </li>
              <li className="bg-white p-3 text-black rounded-full w-[1.5rem] h-[1.5rem] flex justify-center items-center">
                <a href="">
                  <FaXTwitter className="font-[1.5rem]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* second div */}
        <div className="col-span-1">
          <h4 className="text-white text-[1.5rem] font-extrabold ">
            Quick Links
          </h4>
          <ul className="mt-[2.5rem] text-white text-[1.15rem] font-normal">
            <li className="mb-[0.88rem]">
              <a href="">Make a Donation</a>
            </li>
            <li className="mb-[0.88rem]">
              <a href="">Tojo Teams</a>
            </li>
            <li className="mb-[0.88rem]">
              <a href="">Latest News</a>
            </li>
            <li className="mb-[0.88rem]">
              <a href="">FAQ</a>
            </li>
            <li className="mb-[0.88rem]">
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* third div */}
        <div className="col-span-2 pl-10">
          <h4 className="text-white text-[1.5rem] font-extrabold ">
            Get in Touch
          </h4>
          <ul className="mt-[2.5rem] text-white text-[1.15rem] font-normal">
            <li className="mb-[0.88rem]">
              <a href="" className="flex items-center">
                <span className="w-[1.56rem] h-[1.56rem] bg-[#D9D9D9] footer-border-radius flex justify-center items-center mr-[0.88rem]">
                  <AiOutlineHome className="text-[40px] text-black" />
                </span>
                Tojo Foundation, House #00 Mirpur 1212, Bangladesh
              </a>
            </li>
            <li className="mb-[0.88rem]">
              <a href="" className="flex items-center">
                <span className="w-[1.56rem] h-[1.56rem] bg-[#D9D9D9] footer-border-radius flex justify-center items-center mr-[0.88rem]">
                  <MdPhoneInTalk className="text-[40px] text-black" />
                </span>
                +88 01717-000111
              </a>
            </li>
            <li className="mb-[0.88rem]">
              <a href="" className="flex items-center">
                <span className="w-[1.56rem] h-[1.56rem] bg-[#D9D9D9] footer-border-radius flex justify-center items-center mr-[0.88rem]">
                  <IoIosMail className="text-[40px] text-black" />
                </span>
                info@tojofoundation.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="flex justify-center items-center py-[2.23rem]">
        <p className="text-xl text-white">
          ©2024 Tojo Foundation | All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
