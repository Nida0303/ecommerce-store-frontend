// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

function Button({ children, onClick, variant = 'contained', color = 'primary', ...props }) {
    return (
        <MuiButton variant={variant} color={color} onClick={onClick} {...props}>
            {children}
        </MuiButton>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.string,
    color: PropTypes.string
};

export default Button;
