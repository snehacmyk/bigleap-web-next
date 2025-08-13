import React from 'react';

export default function SwiperNavButton({ direction, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`circle-nav-btn ${direction === 'prev' ? 'left' : 'right'}`}
            aria-label={direction === 'prev' ? 'Previous' : 'Next'}
        >
            {direction === 'prev' ? '<' : '>'}
        </button>
    );
}
