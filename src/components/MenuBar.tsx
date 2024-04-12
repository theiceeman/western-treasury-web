
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

const MenuBar = () => {
    return ( 
        <Menu>
          <Menu.Button className="lg:hidden">
            <Image src={'/menu-icon.svg'} alt="demo" width={25} height={25} />
          </Menu.Button>
          <Transition
            className="absolute left-0 top-0 mt-14 flex h-screen w-full flex-col border-t border-solid border-[#dce6f0]  bg-background text-2xl"
            enter="transition duration-500 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-150 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="flex h-screen w-full  flex-col gap-5 bg-background pl-10 pt-20 font-bold">
              <Menu.Item>
                {({ close }) => (
                  <div>
                    <Link href={`/`} onClick={close}>
                      Home
                    </Link>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ close }) => (
                  <div>
                    <Link href={`/portfolio`} onClick={close}>
                      Features
                    </Link>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ close }) => (
                  <div>
                    <Link href={`/contact`} onClick={close}>
                      Rates
                    </Link>
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                <div>
                  <a target="_blank" href="https://kelviniot.hashnode.dev/">
                    Contact
                  </a>
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
     );
}
 
export default MenuBar;