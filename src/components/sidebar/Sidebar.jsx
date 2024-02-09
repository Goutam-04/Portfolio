'use client';
import React, { useState } from 'react';
import Menu from './Menu';
import { useMenu } from '../../provider/Provider';

const SideBar = ({}) => {
    const { showMenu } = useMenu();
    return (
        <aside
            className={`${showMenu ? 'flex' : 'hidden'} lg:flex h-screen fixed w-screen sm:w-[300px] z-30`}
        >
            {/* Sidebar Container */}
            <div className="toggle flex flex-col lg:m-5 w-full">
                <Menu />
            </div>
        </aside>
    );
};

export default SideBar;
