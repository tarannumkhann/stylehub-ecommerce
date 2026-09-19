import {
   
    Mail,
    Phone,
    MapPin,
  } from "lucide-react";
  
  function Footer() {
    return (
      <footer className="mt-8 bg-pink-100 text-black">
  
        {/* MAIN FOOTER */}
        <div className="mx-auto max-w-[1400px] px-2 py-5 sm:px-4 lg:px-5 lg:py-6">
  
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
  
            {/* BRAND */}
            <div>
              <h2 className="text-2xl font-semibold tracking-wide">
                StyleHub
              </h2>
  
              <p className="mt-3 max-w-xs text-sm leading-6">
                Discover modern fashion designed for your everyday style.
                Quality, comfort and trend — all in one place.
              </p>
  
              <div className="mt-5 flex gap-2.5">
  
               
              </div>
            </div>
  
  
            {/* SHOP */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em]">
                Shop
              </h3>
  
              <div className="flex flex-col gap-2.5 text-sm ">
  
                <a href="#T-Shirts" className="transition ">
                  T-Shirts
                </a>
  
                <a href="#Sweaters" className="transition ">
                  Sweaters
                </a>
  
                <a href="#Lowers" className="transition ">
                  Lowers
                </a>
  
                <a href="#Jeans" className="transition ">
                  Jeans
                </a>
  
                <a href="#Hoodies" className="transition ">
                  Hoodies
                </a>
  
              </div>
            </div>
  
  
            {/* QUICK LINKS */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em]">
                Quick Links
              </h3>
  
              <div className="flex flex-col gap-2.5 text-sm ">
  
                <a href="#" className="transition ">
                  Home
                </a>
  
                <a href="#" className="transition ">
                  About Us
                </a>
  
                <a href="#" className="transition ">
                  Contact
                </a>
  
                <a href="#" className="transition ">
                  Privacy Policy
                </a>
  
                <a href="#" className="transition ">
                  Terms & Conditions
                </a>
  
              </div>
            </div>
  
  
            {/* CONTACT */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.15em]">
                Contact Us
              </h3>
  
              <div className="flex flex-col gap-3 text-sm ">
  
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>
                    Pipra, Near Over bridge East Champaran , India
                  </span>
                </div>
  
                <div className="flex items-center gap-2.5">
                  <Phone size={16} />
                  <span>+91 00000 00000</span>
                </div>
  
                <div className="flex items-center gap-2.5">
                  <Mail size={16} />
                  <span>support@stylehub.com</span>
                </div>
  
              </div>
            </div>
  
          </div>
  
  
          {/* BOTTOM */}
          <div className="mt-9 border-t border-white pt-5 text-center">
  
            <p className="text-[11px] tracking-wide ">
              © 2026 StyleHub. All rights reserved.
            </p>
  
          </div>
  
        </div>
      </footer>
    );
  }
  
  export default Footer;