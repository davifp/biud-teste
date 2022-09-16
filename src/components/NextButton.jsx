import Image from "next/image";

export function Button({ buttonProps, nextStep, disabled, name, ...rest }) {
  function handleNextStep() {
    nextStep();
  }

  const disabledStyle = {
    style: {
      borderRadius: "2rem",
      color: "var(--white)",
      backgroundColor: "#d3d3d3",
      fontSize: "1.6rem",
      fontWeight: "700",
      padding: "0.8rem",
    },
  };

  return (
    <button
      onClick={() => handleNextStep()}
      style={disabled ? disabledStyle.style : buttonProps.style}
      disabled={disabled}
      {...rest}
    >
      {buttonProps.icon && (
        <div style={{ maxWidth: "8rem", maxHeight: "8rem" }}>
          <Image width={80} height={80} src={buttonProps.icon} alt="Icon" />
        </div>
      )}
      {name ? name : buttonProps.value}
    </button>
  );
}
