export default function SwiperNavigation({ onPrev, onNext, movePos = 0 }) {
  return (
    <>
      <button
        onClick={onPrev}
        className="circle-nav-btn left"
        aria-label="Previous"
        style={{ left: `${movePos * -1}px` }}
      >
        {"<"}
      </button>
      <button
        onClick={onNext}
        className="circle-nav-btn right"
        aria-label="Next"
        style={{ right: `${movePos * -1}px` }}
      >
        {">"}
      </button>
    </>
  );
}
