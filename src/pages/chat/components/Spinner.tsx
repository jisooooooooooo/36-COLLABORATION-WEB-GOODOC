const Spinner = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`w-[1.5rem] h-[1.5rem] aspect-square mb-[1.12rem] ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transformOrigin: 'center center',
          animation: 'spin 2s linear infinite',
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          const rotate = i * 30;
          const opacity = (i + 1) / 12;
          return (
            <rect
              key={i}
              x="23.5"
              y="4"
              width="4"
              height="9"
              rx="1.5"
              fill="#0073F9"
              opacity={opacity}
              transform={`rotate(${rotate} 25 25)`}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Spinner;
