'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ContactContext = createContext({
    showForm: false,
    setFormVisibility: () => {},
});

export const ContactFormProvider = ({ children }) => {
    const [showForm, setShowForm] = useState(false);
    const setFormVisibility = () => {
        setShowForm(!showForm);
        !showForm
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    };
    return (
        <ContactContext.Provider value={{ showForm, setFormVisibility }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => useContext(ContactContext);

const MenuContext = createContext({
    showMenu: false,
    showMenuVisibility: (status) => {},
});

export const MenuProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        showMenu
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }, [showMenu]);

    const showMenuVisibility = (status) => {
        setShowMenu(status);
    };
    return (
        <MenuContext.Provider value={{ showMenu, showMenuVisibility }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => useContext(MenuContext);
