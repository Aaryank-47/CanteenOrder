// import Link from 'react-router-dom';
const Home = () => {
    return (
        <>
        
            <div className='frontpg'>
                <img src="src\assets\cantene bgimg.jpg" alt="img" />
                <div className="overlay">
                    <p>Fueling Campus Life with Affordable, Fresh, and Tasty Bites</p>
                    <br />
                    <h1>Eat! <br /> Enjoy!<br /> Energize!</h1>
                    <button> Order Snacks </button>
                </div>
                <div className="showcase">
                    <div className="showcase-item-1">
                        <img src="src\assets\chilli-paneer.jpg" alt="paneerchilli" />
                        <div className="abtFood" id="abtPC">
                            <h1>Crispy Paneer Chilli Sensation</h1>
                            <p>Dive into the delicious flavors of our Paneer Chilli, where every bite is a burst of tangy delight.</p>
                        </div>
                    </div>
                    <div className="showcase-item-2">
                        <img src="src\assets\dosa.png" alt="dosa" />
                        <div className="abtFood" id="abtDOSA">
                            <h1>Ultimate Dosa Feast</h1>
                            <p>Enjoy the classic taste of our Dosa, a delightful dish that brings the essence of South Indian cuisine to your plate.</p>
                        </div>
                    </div>
                    <div className="showcase-item-1">
                        <img src="src\assets\burger.jpeg" alt="dosa" />
                        <div className="abtFood" id="abtBG">
                            <h1>Bigger, Better, Bolder Burgers</h1>
                            <p>Why settle for ordinary when you can have extraordinary? Our burgers are packed with bold flavors, fresh ingredients, and love in every bite!</p>
                        </div>
                    </div>
                    <div className="showcase-item-2">
                        <img src="src\assets\paneerFriedrice.jpeg" alt="dosa" />
                        <div className="abtFood" id="abtPFR">
                            <h1>Spice Up Your Day with Paneer Fried Rice!</h1>
                            <p>Savor the rich, savory goodness of Paneer Fried Rice—packed with aromatic spices and bursting with flavor! Freshly made for the ultimate comfort in every bite!</p>
                        </div>
                    </div>
                </div>
                <div className="line-text-line"><hr className="line" /><a href="/menu" className="text">SEE MORE OPTIONS</a><hr className="line" /></div>
            </div>
        </>
    );
};
export default Home;