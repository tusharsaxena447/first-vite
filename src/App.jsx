import { useEffect, useState } from "react";
import Form from "./Form";
import Card from "./Card.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import About from "./Routes/About.jsx";
import Contact from "./Routes/Contact.jsx";
import Temperature from "./Temperature";
import Task from "./Task.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  const [card, setCard] = useState([]);
  const [state, setState] = useState(false);

  async function fetchData() {
    setState(true);
    const resp = await fetch("https://dummyjson.com/products");
    var data = await resp.json();
    setCard(data.products);
    setState(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {/* <img src='https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif' alt='' /> */}
      {state ? (
        <div className="flex items-center justify-center">
          <img
            src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/221d6bfc1960ab98a7585fcc2a4d0181.gif"
            alt=""
          />
        </div>
      ) : (
        ""
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div className="containe">
              {card.map((list) => (
                <Card
                  key={list.id}
                  title={list.title}
                  body={list.description}
                  image={list.thumbnail}
                />
              ))}
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </>
  );
}

export default App;
