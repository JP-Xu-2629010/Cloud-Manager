import React from 'react';
interface DropdownProps {
    options: string[];
    show: boolean;
    className: string;
    selectedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
