import { useState } from "react";
import "./menu.css";

function Menu() {
  const [counts, setCounts] = useState({}); 
  const [cart , setCart] = useState({});

  const menuItems = [
    { name: "Samosa", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPA5swSrmThV69LTi3C343RrthIMpj_BB7tQ&s" },
    { name: "Paneer Chilli", price: 80, image: "https://media.istockphoto.com/id/1389160681/photo/chilli-mushroom-indian-snack-food.jpg?s=612x612&w=0&k=20&c=YjI-qBxvYow2ExmwrEvxv63pEU4hRHu4sn4Dr_4a3to=" },
    { name: "Veg Fried Rice", price: 60, image: "https://www.ticklingpalates.com/wp-content/uploads/2020/05/fried-rice-using-veggies.jpg" },
    { name: "Dosa", price: 50, image: "https://lh3.googleusercontent.com/wEpLeI0biNmNzUuGaK7zoI3APR9YCASMWZI7DIuRldIi6XZsAhw7slmmdh6NeAHsRqoEPmveBqxdGqtHb8roHd4UBRQ=w1000" },
    { name: "Idli", price: 40, image: "https://images.healthshots.com/healthshots/en/uploads/2022/09/30115812/idli.jpg" },
    { name: "Chai", price: 5, image: "https://i.pinimg.com/736x/64/bf/54/64bf54da728e81199dd2999f2ce136eb.jpg" },
    { name: "Coffee", price: 10, image: "https://t4.ftcdn.net/jpg/01/16/61/93/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg" },
    { name: "Cold-Coffee", price: 60, image: "https://i.ytimg.com/vi/NZsJl1yFM4Q/maxresdefault.jpg" },
    { name: "Paneer Chilli Fried Rice", price: 120, image: "https://i.pinimg.com/originals/cb/ff/a9/cbffa9edd5b04a519da47d7fd38c1b49.jpg" },
    { name: "Veg Chowmein", price: 40, image: "https://i2.wp.com/thefoodsamaritan.com/wp-content/uploads/2018/06/IMG_5213.jpg?fit=4925%2C3262" },
    { name: "Schezwan Chowmein", price: 50, image: "https://www.seasonedpioneers.com/wp-content/uploads/2015/11/Szechuan-Style-Chow-Mein-Noodles-1.jpg" },
    { name: "Veg Burger", price: 40, image: "https://img2.thejournal.ie/article/4555260/river/?height=400&version=4555327" },
    { name: "Sandwich", price: 30, image: "https://th.bing.com/th/id/OIP.qzmVVcB8cZZhOy0fxhim9AHaEo?rs=1&pid=ImgDetMain" },
  ];

  // Function to handle adding/removing items
  const updateCount = (index, value) => {
    setCounts((prevCounts) => {
      const newCount = (prevCounts[index] || 0) + value;
      return newCount < 0 ? prevCounts : { ...prevCounts, [index]: newCount };
    });
  };

  const updateCart = (index,item, value) => {
    setCart((prevCart) => {
      const newQuantity = (prevCart[index] || 0) + value;

      if (newQuantity < 0) {
        const{[index]:_, ...rest} = prevCart;
        return rest;
      }
      return {
        ...prevCart,
        [index]: newQuantity,
      };
    });
  };

  const handlecheckout = () =>{
    console.log("Checkout", cart);
  }

  return (
    <div>
      <div className="menuContainer">
        <h1>College Canteen Menu</h1>

        <ul className="menuList">
          {menuItems.map((item, index) => (
            <li key={index} className="menuItem">
              <img src={item.image} alt={item.name} className="itemImage" />

              <button className="order-btn" onClick={(e) => e.stopPropagation()}>
                {counts[index] > 0 ? (
                  <span>
                    <button className="stepper" onClick={() => updateCount(index, -1)}>-</button>
                    <span>{counts[index]}</span>
                    <button className="stepper" onClick={() => updateCount(index, 1)}>+</button>
                  </span>
                ) : (
                  <span onClick={() => updateCount(index, 1)}>Add</span>
                )}
              </button>

              <span className="itemName">{item.name}</span>
              <span className="itemPrice">{`₹${item.price}`}</span>
            </li>
          ))}
        </ul>
      </div>

      {Object.keys(cart).length > 0 && (
        <button className="checkout-btn" onClick={handlecheckout}>
          Proceed to checkout ({Object.values(cart).length} items)
        </button>
      )}

    </div>
  );
}

export default Menu;