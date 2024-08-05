import {useState} from "react";

// eslint-disable-next-line react/prop-types
export function Acordion({ title, isOpen, children }) {
    const [isCollapsed, setIsCollapsed] = useState(!isOpen);

    return (
        <div>
            <button onClick={() => setIsCollapsed(!isCollapsed)}>
                {title}
            </button>
            {!isCollapsed && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}