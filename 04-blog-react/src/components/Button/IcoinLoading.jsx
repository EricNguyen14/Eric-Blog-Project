function IcoinLoading() {
  return (
    <>
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="currentColor"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
        transform="rotate(120.057 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </>
  );
}
export default IcoinLoading;
