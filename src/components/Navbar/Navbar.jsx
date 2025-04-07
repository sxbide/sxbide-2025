import { useEffect, useState } from 'react';
import './Navbar.css';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isDark, setIsDark] = useState(true);

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
    ];

    useEffect(() => {
        const currentPath = window.location.pathname;
        const matchedIndex = menuItems.findIndex(item => item.href === currentPath);
        if (matchedIndex !== -1) {
            setSelectedIndex(matchedIndex);
        }
    }, [window.location.pathname]);

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
                <Link to='/'>Sebi</Link>
            </div>

            <ul className="items">
                {menuItems.map((item, index) => (
                    <li
                        key={item.label}
                        className={selectedIndex === index ? 'selected' : 'nav-item'}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Link to={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
