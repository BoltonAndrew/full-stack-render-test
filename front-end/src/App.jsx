import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  async function createUser(e) {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API}user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          pass,
        }),
      });
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>{user ? user.username : "No User"}</h1>
      <h2>This form doesn't currently work, due to issues with SQLite in a production environment</h2>
      <form onSubmit={createUser}>
        <input onChange={({ target }) => setUsername(target.value)} />
        <input onChange={({ target }) => setPass(target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
