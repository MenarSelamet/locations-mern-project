import React from "react";
import UserList from "../../Components/User/UserList/UserList";

const Home = () => {
  const ITEMS = [
    {
      id: "1",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 1,
    },
    {
      id: "2",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
    {
      id: "3",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];
  return (
    <div>
      <UserList items={ITEMS} />
    </div>
  );
};

export default Home;
