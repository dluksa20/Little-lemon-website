import React from 'react';
import logo from '../../assets/logos/logo.jpg';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsBasket2 } from 'react-icons/bs';
import { IoMdSearch } from 'react-icons/io';

const Header = () => {
  const linksItems = [
    { url: '/', link: 'Home' },
    { url: '/about', link: 'About' },
    { url: '/menu', link: 'Menu' },
    { url: '/book', link: 'Book Now' },
  ];

  return (
    <nav className="relative bg-white shadow-lg">

			{/* top navigation */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* logo */}
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0">
            <a href="/">
              <img className="h-10" src={logo} alt="Logo" />
            </a>
          </div>
					{/* icons */}
          <div className="flex items-center space-x-3">
					<div className="relative group">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[350px] transition-all duration-300 rounded-xl border border-primary px-2 py-1 focus:outline-none focus:border-secondary focus:ring-primary focus:shadow-lg focus:bg-gray-50 max-sm:hidden"/>
              <IoMdSearch 
  						className="text-primary absolute top-1/2 -translate-y-1/2 right-0	h-8 w-8 rounded-full p-1.5 transition-all duration-300 cursor-pointer max-sm:group-hover:text-white max-sm:group-hover:bg-primary" />
            </div>
            <div className="group">
              <BsBasket2 className="h-8 w-8 text-primary group-hover:text-white group-hover:bg-primary rounded-full p-1.5 transition-all duration-300 cursor-pointer" />
            </div>
            <div className="group">
              <CgProfile className="h-8 w-8 text-primary group-hover:text-white group-hover:bg-primary rounded-full p-1.5 transition-all duration-300 cursor-pointer" />
            </div>
            <div className="group md:hidden">
              <RxHamburgerMenu className="h-8 w-8 text-primary group-hover:text-white group-hover:bg-primary rounded-full p-1.5 transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navigation Section */}
      <div className="max-md:hidden relative">
        <div className="absolute w-[500px] right-0 top-3  -translate-y-1/6 -translate-x-1/3
				 bg-white shadow-lg py-4 rounded-lg  border-[1px] border-primary">
          <div className="gap-1 flex justify-evenly items-center">
            {linksItems.map((item) => (
              <a
                key={item.link}
                href={item.url}
                className="text-primary font-medium transition-all relative
								 rounded-md group hover:text-secondary duration-300 hover:scale-110">
                {item.link}         
								<span class="absolute bottom-0 left-0 block w-0 h-0.5 bg-secondary transition-all duration-500 ease-out group-hover:w-[100%]
								hover:scale-110"></span>     
							</a>
            ))}
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Header;
