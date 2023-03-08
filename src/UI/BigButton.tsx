import React from 'react';
import Button from 'react-bootstrap/Button';

interface BigButtonProps {
    text: string
}

const BigButton:React.FC<BigButtonProps> = ({text}) => {
    return (
        <Button variant="primary">
            {text}
        </Button>
    );
};

export default BigButton;