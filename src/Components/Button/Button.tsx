interface ButtonProps {
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const { onClick } = props;
  return <button onClick={onClick}>Add ToDo Item</button>;
};

export default Button;
