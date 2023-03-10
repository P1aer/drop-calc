import React, {ReactNode} from 'react';

interface SwitchElementProps {
    children: ReactNode
    active?: boolean
    onClick?: () => void
}
const SwitchElement:React.FC<SwitchElementProps> = ({children, active=false , onClick}) => {
    const className = active ? 'switch-element is-active' : 'switch-element'
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default SwitchElement;