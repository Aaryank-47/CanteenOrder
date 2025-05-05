import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigateToMenu = useNavigate();

    return (
        <>
        
            <div className='frontpg'>
                <img src="https://media.licdn.com/dms/image/v2/D4D12AQE8CRxbxq8tzQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682579035972?e=2147483647&v=beta&t=HB6oZhY_WV2u0_kYQ8yraUPfcx7Hc6FHsfGkePlmyvc" alt="img" />
                <div className="overlay">
                    <p>Fueling Campus Life with Affordable, Fresh, and Tasty Bites...</p>
                    <br />
                    <h1>Eat! <br /> Enjoy!<br /> Energize!</h1>
                    <button onClick={()=>navigateToMenu("/menu")}> Order Snacks </button>
                </div>

                <div className="showcase">
                    <div className="showcase-item-1">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgpDiULJful033Wh-oYuh3gwOrwFfggxpg9A&s" alt="paneerchilli" />
                        <div className="abtFood" id="abtPC">
                            <h1>Crispy Paneer Chilli Sensation</h1>
                            <p>Dive into the delicious flavors of our Paneer Chilli, where every bite is a burst of tangy delight.</p>
                        </div>
                    </div>
                    <div className="showcase-item-2">
                        <img src="https://sukhis.com/app/uploads/2020/01/image4-1024x744.jpg" alt="dosa" />
                        <div className="abtFood" id="abtDOSA">
                            <h1>Ultimate Dosa Feast</h1>
                            <p>Enjoy the classic taste of our Dosa, a delightful dish that brings the essence of South Indian cuisine to your plate.</p>
                        </div>
                    </div>

                    <div className="showcase-item-1">
                        <img src="https://content.jdmagicbox.com/comp/ramanagara/k1/9999pxx80.xx80.191011212934.j5k1/catalogue/burger-it-up-kanakapura-ramanagara-restaurants-with-offers-1brgkjernd.jpg" alt="dosa" />
                        <div className="abtFood" id="abtBG">
                            <h1>Bigger, Better, Bolder Burgers</h1>
                            <p>Why settle for ordinary when you can have extraordinary? Our burgers are packed with bold flavors, fresh ingredients, and love in every bite!</p>
                        </div>
                    </div>

                    <div className="showcase-item-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkTRWG56HFqs9J3-472XnC797A8CYm0tQVxQ&s" alt="dosa" />
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