import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const navigation = [
  { name: "Home", href: "#", class: "" },
  { name: "Introduction", href: "#", class: "" },
  { name: "Feature", href: "#", class: "" },
  { name: "Goals", href: "#", class: "" },
];

const Header = () => {
  return (
    <div className="min-w-full absolute z-[100] py-2">
      <Disclosure as="nav" className="">
        {({ open }: { open: Boolean }) => (
          <>
            <div className="mx-auto max-w-6xl px-8 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center w-full">
                  <div className="flex-shrink-0">
                    <img src="/assets/logo/logo.png" alt="Ainetica" />
                  </div>

                  <div className="ml-auto navbar hidden md:flex md:justify-end items-center">
                    <div className="ml-10 flex">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href}>
                          <span
                            className={clsx(
                              "text-white rounded-md px-3 py-2 pl-8 pr-8 text-xl font-medium"
                            )}
                          >
                            {item.name}
                          </span>
                        </a>
                      ))}
                      <a href="/">
                        <span className="joinUs">Join Us</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="navbar md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={clsx(
                      item.class,
                      "text-gray-300 bg-hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Header;
