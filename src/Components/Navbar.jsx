import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router';





const Navbar = () => {
    const activeClass = "btn btn-soft btn-accent"; // change to your style
    const defaultClass = "btn  btn-dash btn-secondary";

    const NavLinks = (
        <>
            <li>
                <NavLink className={({ isActive }) => isActive ? activeClass : defaultClass}>
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) => isActive ? activeClass : defaultClass}>
                    All Plants
                </NavLink>
            </li>

            <li>
                <NavLink className={({ isActive }) => isActive ? activeClass : defaultClass}>
                    My Plants
                </NavLink>
            </li>
            
            <li>
                <NavLink className={({ isActive }) => isActive ? activeClass : defaultClass}>
                    Add Plants
                </NavLink>
            </li>

        </>
    )

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2">
                        {
                            NavLinks
                        }
                    </ul>
                </div>
                <div className="flex items-center gap-2 btn btn-ghost px-2">
                    <img src={logo} alt="Plant Heaven" className="w-10 h-10" />
                    <h2 className="font-bold text-xl">PLANT HEAVEN</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {
                        NavLinks
                    }
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <label className="toggle text-base-content">
                    <input type="checkbox" value="plant-dark" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;