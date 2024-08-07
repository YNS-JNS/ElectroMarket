import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ label, icon: Icon, onClick, className = '', disabled = false }) => {
    return (
        <button
            className={`flex items-center gap-2 rounded-lg bg-gradient-to-tl from-gray-900 to-slate-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85 disabled:pointer-events-none disabled:opacity-50 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && <Icon className="text-xl" />}
            <span>{label}</span>
        </button>
    );
};

ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

export default ButtonPrimary;
