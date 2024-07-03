// SideBarLink.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'; // A simple JavaScript utility for conditionally joining classNames together.
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const SidebarLink = ({ link, linkClass }) => {

    // Get the current path
    const { pathname } = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <Link
                to={link.path}
                className={classNames(
                    pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',
                    linkClass,
                    link.children && 'cursor-pointer'
                )}
                onClick={link.children ? handleExpanded : undefined}
            >
                <span className="text-xl">{link.icon}</span>
                {link.label}
                {link.children ? (<span className="ml-auto text-xl">{isExpanded ? <FaChevronUp /> : <FaChevronDown />}</span>) : null}
            </Link>

            {
                link.children && isExpanded && (
                    <div className='flex flex-1 flex-col gap-0.5 pl-4 my-1'>
                        {
                            link.children.map((childLink) => (
                                <Link
                                    key={childLink.key}
                                    to={childLink.path}
                                    className={classNames(
                                        pathname === childLink.path ? 'bg-neutral-600 text-white' : 'text-neutral-300',
                                        linkClass,
                                        'block'
                                    )}
                                >
                                    <span className="text-xl">{childLink.icon}</span>
                                    {childLink.label}
                                </Link>
                            ))
                        }
                    </div>
                )
            }

        </div>

    )
}

export default SidebarLink;