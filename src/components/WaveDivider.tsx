const WaveDivider = () => {
  return (
    <div className="wave-divider" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="wave-divider-svg"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="var(--background-secondary)"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
