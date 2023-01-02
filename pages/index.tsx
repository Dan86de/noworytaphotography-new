import { Popover, Transition } from "@headlessui/react";
import { Inter } from "@next/font/google";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../public/images/logo_icon.png";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Popover className="relative bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex sm:py-8 items-center justify-between">
              <Image src={logo} width={80} alt="Noworytaphotography Logo" />
              <nav className="hidden md:flex gap-8">
                <a
                  href="/home"
                  className="text-base font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-base font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
                >
                  Über-mich
                </a>
                <a
                  href="/portfolio"
                  className="text-base font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
                >
                  Portfolio
                </a>
                <a
                  href="/contact"
                  className="text-base font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand"
                >
                  Kontakt
                </a>
              </nav>
              {!open && (
                <div className="-my-2 -mr-2 md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              )}
            </div>
          </div>
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
              className="absolute inset-x-0 top-0 origin-top-right transform  transition md:hidden"
            >
              <div className="rounded-lg bg-white shadow-lg ring-1 ring-brand ring-opacity-5 px-4 sm:px-6 sm:py-8">
                <div className="flex items-center justify-between">
                  <Image src={logo} width={80} alt="Noworytaphotography Logo" />
                  <div className="-my-2 -mr-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <nav className="flex flex-col gap-8 py-6">
                  <a
                    href="/home"
                    className=" p-2 text-base font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-2xl"
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className=" p-2 text-base font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-2xl"
                  >
                    Über-mich
                  </a>
                  <a
                    href="/portfolio"
                    className=" p-2 text-base font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-2xl"
                  >
                    Portfolio
                  </a>
                  <a
                    href="/contact"
                    className=" p-2 text-base font-bold text-brand cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand rounded-2xl"
                  >
                    Kontakt
                  </a>
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
