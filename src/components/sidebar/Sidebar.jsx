'use client';
import React, { useState } from 'react';
import Menu from './Menu';
import { useMenu } from '../../provider/Provider';

const SideBar = ({}) => {
    const { showMenu } = useMenu();
    return (
        <aside
            className={`${showMenu ? 'flex' : 'hidden'} lg:flex h-screen fixed w-screen sm:w-[200px] z-30`}
        >
            {/* Sidebar Container */}
            <div className="toggle flex flex-col lg:mx-auto lg:my-auto w-fit">
                <Menu />
            </div>
        </aside>
    );
};

export default SideBar;
