import React, { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        const speed = 0.1;

        const handleMouseMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const animate = () => {
            currentX += (targetX - currentX) * speed;
            currentY += (targetY - currentY) * speed;

            cursor.style.transform = `translate3d(${currentX - 10}px, ${currentY - 10}px, 0)`;
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div ref={cursorRef} className="cursor"></div>;
}
