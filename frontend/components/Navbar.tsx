import React from "react";

const Navbar = () => {
    return (
        <div className="h-130 max-md:h-[31.25rem]">
            <nav className="navbar shadow-base-300/20 shadow-sm">
                <div className="navbar-start">
                <a className="link text-base-content link-neutral text-xl font-bold no-underline" href="#">
                    FlyonUI
                </a>
                </div>
                <div className="navbar-center max-md:hidden">
                <label className="swap swap-rotate">
                    <input type="checkbox" value="dark" className="theme-controller" />
                    <span className="swap-off icon-[tabler--sun] size-7"></span>
                    <span className="swap-on icon-[tabler--moon] size-7"></span>
                </label>
                </div>
                <div className="navbar-end items-center gap-4">
                <div className="max-md:hidden">
                <ul className="menu menu-horizontal gap-2 p-0 text-base rtl:ml-20">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9]">
                    <button id="dropdown-end" type="button" className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content max-md:px-2" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        Products
                        <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown">
                        <li><a className="dropdown-item" href="#">Templates</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
                <div className="dropdown relative inline-flex [--placement:bottom] md:hidden">
                    <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-text btn-secondary btn-square" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
                    <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li className="dropdown relative [--auto-close:inside] [--offset:9] [--placement:bottom]">
                        <button id="dropdown-end-2" className="dropdown-toggle dropdown-item dropdown-open:bg-base-content/10 dropdown-open:text-base-content justify-between" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        Products
                        <span className="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-open:opacity-100 hidden w-48" role="menu" aria-orientation="vertical" aria-labelledby="nested-dropdown">
                        <li><a className="dropdown-item" href="#">Templates</a></li>
                        </ul>
                    </li>
                    <li><a className="dropdown-item" href="#">Gallery</a></li>
                    <li><a className="dropdown-item" href="#">Contact</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;