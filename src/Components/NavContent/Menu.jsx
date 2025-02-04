import "./menu.css"

function Menu() {
  const menuItems = [
    { name: 'Samosa', price: 20 },
    { name: 'Paneer Chilli', price: 80 },
    { name: 'Veg Fried Rice', price: 60 },
    { name: 'Dosa', price: 50 },
    { name: 'Idli', price: 40 },
    { name: 'Chai', price: 5 },
    { name: 'Coffee', price: 10 },
    { name: 'Paneer Chilli Fried Rice', price: 120 },
    { name: 'Veg Chowmein', price: 40 },
    { name: 'Schezwan Chowmein', price: 50 },
    { name: 'Veg Burger', price: 40 },
    { name: 'Sandwich', price: 30 },
  ];

  return (
    <div>
      <div className="menuContainer">
        <h1>College Canteen Menu</h1>
        <ul className="menuList">
          {menuItems.map((item,index) =>(
            <li key={index} className="menuItem">
              <span className="itemName">{item.name}</span>
              <span className="itemPrice">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu
