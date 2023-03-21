import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import {useRouter} from "next/router";


const navigation = [
    { name: 'ទំព័រដើម', href: '/home' },
    { name: 'មុខជំនាញ', href: '/major' },
    { name: 'ណែនាំមុខជំនាញ', href: '/recommendation-major' },
    { name: 'អំពីយើង', href: '/about-us' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const router = useRouter();
    return (
        <Disclosure as="nav" className="bg-gray-900">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-12 w-auto lg:hidden"
                                        src="/logo.png"
                                        alt="Find University"
                                    />
                                    <img
                                        className="hidden h-12 w-auto lg:block"
                                        src="/logo.png"
                                        alt="Find University"
                                    />
                                </div>
                                <div className="hidden lg:ml-6 lg:block">
                                    <div className="flex space-x-4 h-16 items-center">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    (router.pathname === item.href) ? 'bg-gray-900 text-white underline decoration-sky-500' : 'text-gray-300 hover:underline hover:decoration-sky-500 hover:text-white',
                                                    'rounded-md px-3 py-2 font-medium'
                                                )}
                                                aria-current={(router.pathname === item.href) ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                            </div>
                            <div className="hidden h-16 items-center lg:flex">
                                <form>
                                    <label htmlFor="default-search"
                                           className="mb-2 font-medium text-gray-900 sr-only dark:text-white">ស្វែងរក</label>
                                    <div className="relative flex h-14 items-center" >
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        </div>
                                        <input type="search" id="default-search"
                                               className="block w-72 h-10 pl-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="ស្វែងរកឈ្មោះសាកលវិទ្យាល័យ"/>
                                        <button type="submit"
                                                className="text-white absolute right-0.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-700 dark:hover:bg-orange-800 dark:focus:ring-orange-800">
                                            <svg aria-hidden="true" className="w-5 h-5 dark:text-gray-400"
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">

                                <Link
                                    key="register"
                                    href="/register"
                                    className="text-white"
                                    aria-current = "register"
                                >
                                    Register
                                </Link>

                                {/*<button*/}
                                {/*    type="button"*/}
                                {/*    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"*/}
                                {/*>*/}
                                {/*    <span className="sr-only">View notifications</span>*/}
                                {/*    <BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                                {/*</button>*/}

                                {/* Profile dropdown */}
                                {/*<Menu as="div" className="relative ml-3">*/}
                                {/*    <div>*/}
                                {/*        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">*/}
                                {/*            <span className="sr-only">Open user menu</span>*/}
                                {/*            <img*/}
                                {/*                className="h-8 w-8 rounded-full"*/}
                                {/*                src="/profile.png"*/}
                                {/*                alt=""*/}
                                {/*            />*/}
                                {/*        </Menu.Button>*/}
                                {/*    </div>*/}
                                {/*    <Transition*/}
                                {/*        as={Fragment}*/}
                                {/*        enter="transition ease-out duration-100"*/}
                                {/*        enterFrom="transform opacity-0 scale-95"*/}
                                {/*        enterTo="transform opacity-100 scale-100"*/}
                                {/*        leave="transition ease-in duration-75"*/}
                                {/*        leaveFrom="transform opacity-100 scale-100"*/}
                                {/*        leaveTo="transform opacity-0 scale-95"*/}
                                {/*    >*/}
                                {/*        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                                {/*            <Menu.Item>*/}
                                {/*                {({ active }) => (*/}
                                {/*                    <a*/}
                                {/*                        href="#"*/}
                                {/*                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}*/}
                                {/*                    >*/}
                                {/*                        Your Profile*/}
                                {/*                    </a>*/}
                                {/*                )}*/}
                                {/*            </Menu.Item>*/}
                                {/*            <Menu.Item>*/}
                                {/*                {({ active }) => (*/}
                                {/*                    <a*/}
                                {/*                        href="#"*/}
                                {/*                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}*/}
                                {/*                    >*/}
                                {/*                        Settings*/}
                                {/*                    </a>*/}
                                {/*                )}*/}
                                {/*            </Menu.Item>*/}
                                {/*            <Menu.Item>*/}
                                {/*                {({ active }) => (*/}
                                {/*                    <a*/}
                                {/*                        href="#"*/}
                                {/*                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}*/}
                                {/*                    >*/}
                                {/*                        Sign out*/}
                                {/*                    </a>*/}
                                {/*                )}*/}
                                {/*            </Menu.Item>*/}
                                {/*        </Menu.Items>*/}
                                {/*    </Transition>*/}
                                {/*</Menu>*/}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                                <form>
                                    <label htmlFor="default-search"
                                           className="mb-2 font-medium text-gray-900 sr-only dark:text-white">ស្វែងរក</label>
                                    <div className="relative flex h-14 items-center" >
                                        <div
                                            className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        </div>
                                        <input type="search" id="default-search"
                                               className="block w-full h-10 pl-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="ស្វែងរកឈ្មោះសាកលវិទ្យាល័យ"/>
                                        <button type="submit"
                                                className="text-white absolute right-0.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-700 dark:hover:bg-orange-800 dark:focus:bg-orange-800">
                                            <svg aria-hidden="true" className="w-5 h-5 dark:text-gray-400"
                                                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        (router.pathname === item.href) ? 'underline decoration-sky-500 text-white' : 'text-gray-300 hover:underline hover:decoration-sky-500 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={(router.pathname === item.href) ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
