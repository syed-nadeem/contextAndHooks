import React, { useState, useEffect } from "react";

function Uecomponent() {
  const [resourecType, setResourecType] = useState("posts");
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("resource type");
    fetch(`https://jsonplaceholder.typicode.com/${resourecType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    return () => {
      console.log("return resource type");
    };
  }, [resourecType]);

  return (
    <>
      <button className="mr-2" onClick={() => setResourecType("posts")}>
        Posts
      </button>
      <button className="ml-2" onClick={() => setResourecType("comments")}>
        Comment
      </button>
      <button onClick={() => setResourecType("users")}>Users</button>
      <h2> {resourecType}</h2>
      {items.map((item) => (
        <pre key={item.id}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
}
export default Uecomponent;
