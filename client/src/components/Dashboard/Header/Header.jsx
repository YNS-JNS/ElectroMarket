import React, { Fragment } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Menu, Popover, Transition, PopoverButton, PopoverPanel, MenuButton, MenuItems, MenuItem } from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  const links = [
    { href: '/settings', label: 'Settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
  ]

  return (
    <div className='h-16 bg-white flex items-center justify-between px-4 border-b border-neutral-200'>

      {/* left section: search bar  */}
      <div className='relative'>
        <HiOutlineSearch fontSize={20} className='absolute text-gray-400 top-1/2 -translate-y-1/2 left-3' />
        <input
          type="search"
          placeholder="Search..."
          className='h-10 w-[24rem] rounded-sm pl-10 pr-4 text-sm border border-gray-300 focus:outline-none active:outline-none bg-white text-gray-800' />
      </div>

      {/* right section buttons */}
      <div className='flex items-center gap-2 mr-2'>

        {/* ------------- Message section ------------- */}
        <Popover className="relative">
          {({ open }) => (
            <>
              {/* Button */}
              <PopoverButton
                className={classNames(
                  open && 'bg-gray-100',
                  'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </PopoverButton>

              {/* Popup */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-lg text-gray-700 font-medium">Messages</strong>
                    <div className="mt-2 py-1 text-sm text-gray-600">This is messages panel.</div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
        {/* ------------------------------------------- */}

        {/* ------------- Notifications section ------- */}
        <Popover className="relative">
          {({ open }) => (
            <>
              {/* Button */}
              <PopoverButton
                className={classNames(
                  open && 'bg-gray-100',
                  'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                )}
              >
                <HiOutlineBell fontSize={24} />
              </PopoverButton>

              {/* Popup */}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <PopoverPanel className="absolute right-0 z-10 mt-2.5 transform w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-lg text-gray-700 font-medium">Notifications</strong>
                    <div className="mt-2 py-1 text-sm text-gray-600">This is notification panel.</div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
        {/* ------------------------------------------- */}

        {/* ---------------- Menu section ------------- */}
        <Menu as="div" className="relative">
          <div>
            <MenuButton className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Open user menu</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: 'url("https://img.freepik.com/photos-gratuite/close-up-portrait-of-bel-homme-mal-rase-barbe-epaisse-moustache-cheveux-noirs-regarde-serieusement_273609-16755.jpg?t=st=1718829593~exp=1718833193~hmac=b53c17176442ce0b018cf888e71ad4f25484feb9c06942f0caf78bb02d672b66&w=740")' }}
              >
                <span className="sr-only">Marc Backes</span>
              </div>
            </MenuButton>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                <div
                  onClick={() => navigate('/profile')}
                  className='data-[focus]:bg-gray-100 text-sm active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                >
                  Your Profile
                </div>
              </MenuItem>
              <MenuItem>
                <div
                  onClick={() => navigate('/settings')}
                  className='data-[focus]:bg-gray-100 text-sm active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                >
                  Settings
                </div>
              </MenuItem>
              <MenuItem>
                <div
                  className='data-[focus]:bg-gray-100 text-sm active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                >
                  Sign out
                </div>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>

    </div>
  )
}

export default Header;