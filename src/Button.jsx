export const Button = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} style={{ backgroundColor: "rebeccapurple" }}>
      {children}
    </button>
  );
};
