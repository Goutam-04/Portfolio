'use client';
import React from 'react';
import { Menu } from 'lucide-react';
import { useMenu } from '../../provider/Provider';

const Navbar = ({}) => {
    const { showMenu, showMenuVisibility } = useMenu();
    return (
        <nav className="flex sticky  top-0 z-1 bg-body p-5 text-info justify-between">
            {/* <SearchBar /> */}
            <div>{/* Place holder for search bar */}</div>
            <div className="flex items-center gap-5">
                <button
                    onClick={() => showMenuVisibility(!showMenu)}
                    type="button"
                >
                    <Menu className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
