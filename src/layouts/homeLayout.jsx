import React, { useState, useEffect, useRef } from 'react';
import SideNav from '../Components/sideNav.jsx';
import { Outlet } from 'react-router-dom';

function useElementSize() {
    const ref = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const observeTarget = ref.current;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach(entry => {
                setSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            });
        });

        if (observeTarget) {
            resizeObserver.observe(observeTarget);
        }

        // Cleanup function to disconnect the observer
        return () => {
            if (observeTarget) {
                resizeObserver.disconnect();
            }
        };
    }, [ref.current]); // Dependencies ensure effect only runs when ref changes

    return [ref, size];
}

function HomeLayout() {
    const [ref, size] = useElementSize(); // Using the custom hook

    return (
        <div className='fadein homeLayout flex flex-row flex-1 w-[100%] h-full'>
            <div ref={ref} className='hidden md:flex sideLayout fixed top-0 left-0 overflow-hidden flex-1 max-w-[19%] z-10 h-full'>
                <SideNav/>
            </div>
            <div className='mainLayout w-[100%] h-full min-h-screen' style={{ marginLeft: `${size.width}px` }}>
                <Outlet/>
            </div>
        </div>
    );
}

export default HomeLayout;
