import React from "react";
// import Msg from "./components/Msg";
import Person from "./components/Person";
import data from "./data";

function App() {
  return (
    <div>
      {data.map((person) => (
        <Person
          key={person.name} //! reactın DOM u sürekli güncellememesi için unique bir key verilmesi gerek
          name={person.name}
          img={person.img}
          tel={person.tel}
        />
      ))}
      {/* <Person name={data[0].name} img={data[0].img} tel={data[0].tel} />
      <Person name={data[1].name} img={data[1].img} tel={data[1].tel} />
      <Person name={data[2].name} img={data[2].img} tel={data[2].tel} /> */}
    </div>
  );
}

// const App = () => {
//   return <h1>Hello!</h1>;
// };

// class App extends React.Component {
//   hug(id) {
//     console.log("hugging " + id);
//   }

//   render() {
//     let name = "kitteh";
//     let button = <button onClick={(e) => this.hug(name, e)}>Hug Button</button>;

//     return button;
//   }
// }

export default App;
