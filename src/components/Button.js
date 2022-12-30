const Button = (props) => {
  const change = () => {
//    props.color = 'red'
    console.log("clicked")
  };

  return (
    <button
      onMouseOver={change}
      style={{ backgroundColor: props.color ,color:'blue', fontSize :props.fontSize, borderRadius:'6px'}}
      className="btn1"
    >
      Add
    </button>
  );
};
export default Button;
