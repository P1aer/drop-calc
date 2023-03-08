import React, {ReactNode} from 'react';

interface SwitchElementProps {
    children: ReactNode
    active?: boolean
}
const SwitchElement:React.FC<SwitchElementProps> = ({children, active=false}) => {
    const className = active ? 'switch-element is-active' : 'switch-element'
    return (
        <button className={className}>
            {children}
        </button>
    );
};

export default SwitchElement;