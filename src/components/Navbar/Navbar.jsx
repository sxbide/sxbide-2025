import { useState } from 'react';
import './Navbar.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useMediaQuery } from "react-responsive";


export default function Navbar() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isDark, setIsDark] = useState(true);

    const menuItems = ['Home'];

    function handleSelected(index) {
        setSelectedIndex(index);
    }


    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (isSystemDark) => setIsDark(isSystemDark)
    );

    return (
        <nav className="navigation">
            <div className="signature">
                <a href='/'>Sebi</a>
            </div>

            <ul className="items">
                {menuItems.map((item, index) => (
                    <li
                        key={item}
                        className={selectedIndex === index ? 'selected' : 'nav-item'}
                        onClick={() => handleSelected(index)}
                    >
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
