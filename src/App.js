import { useState } from "react";
import "./styles.css";

const foodDictionary = {
  Italian: [
    ["Lasagna", "5/5"],
    ["Panzanella", "4.5/5"],
    ["Focaccia ", "4/5"],
    ["Bruschetta", "4.5/5"]
  ],
  Mexican: [
    ["Chilaquiles", "3/5"],
    ["Enchilada Casser-Ole!", "4/5"],
    ["Quesadillas", "4.5/5"],
    ["Tacos", "5/5"],
    ["Burrito", "4.5/5"]
  ],
  Asian: [
    ["Momos", "4/5"],
    ["Roti Prata", "4.5/5"],
    ["Sushi", "4/5"],
    ["Masala dosa", "5/5"],
    ["Khaman-Dhokla", "5/5"]
  ],
  European: [
    ["Arancini", "4/5"],
    ["Cheese fondue", "4.5/5"],
    ["Potica", "4/5"],
    ["Polish Pierogi", "5/5"]
  ],
  American: [
    ["Apple Pie", "4/5"],
    ["Hamburger", "5/5"],
    ["Tater tots", "4.5/5"],
    ["Cornbread", "4/5"]
  ]
};

var foodList = Object.keys(foodDictionary);

export default function App() {
  var [output, setOutput] = useState("");

  function foodClickHandler(food) {
    var subList = foodDictionary[food];
    setOutput(subList);
  }

  return (
    <div className="App">
      <h1>🍽️ Cuisine Culture</h1>
      <p className="para">
        {" "}
        Hello! there 👋, Here I have listed some dishes from around the world
        which I found delicious and savory.I have used react JS as a part of
        learning which removes the refreshing of web page and shows the output
        immediately.
      </p>
      <div className="genreList">
        {foodList.map((food) => {
          return (
            <button
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem",
                display: "inline-block"
              }}
            >
              {" "}
              <span onClick={() => foodClickHandler(food)}>{food}</span>
            </button>
          );
        })}
      </div>
      <hr />
      <div className="foodShow">
        <ul>
          {Array.from(output).map((item) => {
            return (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  width: "50%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem",
                  border: "1px solid gray",
                  display: "inline-block",
                  textAlign: "left"
                }}
              >
                Name: {item[0]}
                <br />
                <span className="rating">Rating: {item[1]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
