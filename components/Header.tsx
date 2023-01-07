import Image from "next/image";
import logo from "../public/images/logo_icon.png";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
            <div className="flex  items-center justify-between">
              <div className="w-16 md:w-24">
                <Image src={logo} width="100" alt="Noworytaphotography Logo" />
              </div>
              <nav className="hidden md:flex gap-2">
                <Link
                  scroll={false}
                  href="/"
                  className="font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-md p-4"
                >
                  Home
                </Link>
                <Link
                  scroll={false}
                  href="#about"
                  className="font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-md p-4"
                >
                  Über-mich
                </Link>
                <Link
                  scroll={false}
                  href="#portfolio"
                  className="font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-md p-4"
                >
                  Portfolio
                </Link>
                <Link
                  scroll={false}
                  href="#contact"
                  className="font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-md p-4"
                >
                  Kontakt
                </Link>
              </nav>
              {!open && (
                <div className="-my-2 -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-brand hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              )}
            </div>
          </div>
          <Popover.Overlay className="fixed inset-0 bg-brand opacity-50" />
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden"
            >
              <div className="rounded-lg bg-white shadow-lg shadow-brand ring-1 ring-brand ring-opacity-5 px-4 md:px-6 md:py-8">
                <div className="flex items-center justify-between">
                  <div className="w-16">
                    <Image src={logo} alt="Noworytaphotography Logo" />
                  </div>
                  <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-brand hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand">
                      <span className="sr-only">Open menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <nav className="flex flex-col gap-2 py-6">
                  <Popover.Button
                    as={Link}
                    scroll={false}
                    href="/"
                    className="uppercase p-2 font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-2xl"
                  >
                    Home
                  </Popover.Button>
                  <Popover.Button
                    as={Link}
                    href="#about"
                    className="uppercase p-2 font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-2xl"
                  >
                    Über-mich
                  </Popover.Button>
                  <Popover.Button
                    as={Link}
                    href="#portfolio"
                    className="uppercase p-2 font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-2xl"
                  >
                    Portfolio
                  </Popover.Button>
                  <Popover.Button
                    as={Link}
                    href="#contact"
                    className="uppercase p-2 font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-2xl"
                  >
                    Kontakt
                  </Popover.Button>
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
