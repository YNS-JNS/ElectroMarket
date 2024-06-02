import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames'; // A simple JavaScript utility for conditionally joining classNames together.

const SidebarLink = ({ link, linkClass }) => {

    // Get the current path
    const { pathname } = useLocation();

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    )
}

export default SidebarLink