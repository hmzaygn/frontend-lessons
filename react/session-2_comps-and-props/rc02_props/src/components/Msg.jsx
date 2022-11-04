const Msg = ({ name }) => {
  //   console.log(props);
  //! Destructuring
  //   const { name, age } = props;
  return (
    <div>
      {/* <h3>Merhaba {props.name}</h3> */}
      <h3>Merhaba {name}</h3>
    </div>
  );
};

export default Msg;
