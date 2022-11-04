import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState("");

  const getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  //   fetch("https://randomuser.me/api/")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));

  useEffect(() => {
    //? componentDidMount
    getUser();
  }, []);

  console.log(user);

  const { name, dob, email, picture } = user;

  return (
    <div>
      <h1>
        {/* optional chaning */}
        {/* {name?.first.second} */}
        {name?.first} {name?.last}
      </h1>
      <img className="rounded-circle" src={picture?.large} alt="image" />
      <p>{email}</p>
      <h5>{new Date(dob?.date).toLocaleDateString("tr-TR")}</h5>
      <button className="btn btn-danger" onClick={getUser}>
        Get User
      </button>
    </div>
  );
};

export default User;
