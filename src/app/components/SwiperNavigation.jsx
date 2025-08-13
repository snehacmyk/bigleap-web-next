export default function SwiperNavigation({ onPrev, onNext }) {
    return (
        <>
            <button
                onClick={onPrev}
                className="circle-nav-btn left"
                aria-label="Previous"
            >
                {'<'}
            </button>
            <button
                onClick={onNext}
                className="circle-nav-btn right"
                aria-label="Next"
            >
                {'>'}
            </button>
        </>
    );
}
