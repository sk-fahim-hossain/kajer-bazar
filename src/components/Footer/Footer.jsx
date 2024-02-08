import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 bg-black text-white p-4 mt-32 py-32">
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-3xl mb-5">CareerHub</h2>
          <p className="text-base text-[#ffffffb3] mt-3">
            There are many variations of passages of Lorem Ipsum, but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex gap-4 text-2xl my-3">
            <FaFacebook />
            <FaXTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-1 pl-8">
          <p className="text-xl">Company</p>
          <div className="text-base text-[#ffffffb3] mt-3">
            <p>About Us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Careers</p>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <p>Product</p>
          <div className="text-base text-[#ffffffb3] mt-3">
            <p>Prototype</p>
            <p>Plans & Pricing</p>
            <p>Customers</p>
            <p>Integrations</p>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <p>Support</p>
          <div className="text-base text-[#ffffffb3] mt-3">
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Developers</p>
          </div>
        </div>
        <div className="md:col-span-1 lg:col-span-1">
          <p>Contact</p>
          <p className="text-base text-[#ffffffb3] mt-3">
            524 Broadway, NYC <br />
            +1 777 - 978 - 5570
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
