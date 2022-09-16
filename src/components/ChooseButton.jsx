import Image from "next/image";

export function Button({ buttonProps, nextStep, id, name, icon, ...rest }) {
  function handleNextStep(selectedName) {
    nextStep(selectedName);
  }

  return (
    <button
      onClick={() => handleNextStep(name)}
      style={buttonProps.style}
      {...rest}
    >
      {icon && <Image src={icon} alt="Icon" width={15} height={15} />}
      {name ? name : buttonProps.value}
    </button>
  );
}
