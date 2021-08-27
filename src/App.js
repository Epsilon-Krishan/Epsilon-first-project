import Crouselpart from './components/Crouselpart';
import React, { useState, useEffect } from 'react';
import './App.css';
import Cameras from './components/Cameras';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  const [items, setitem] = useState([]);
  useEffect(() => {
    fetch('https://eps-gigya.herokuapp.com/rewardProducts')
      .then((res) => { return res.json() })
      .then((data) => { setitem(data) })
  }, [])
  return (
    <div className="App ">
      <Header />
      <Cameras />
      <div className="container">
        <div className="d-flex  justify-content-center ">
          <h5 className="mr-2 font-weight-bold" style={{ color: "#555555" }}>More Filters</h5>
          <div className="plusIcon" style={{"border":"1px solid black", "border-radius":"50%", "margin-left":"3px", "padding":"0px 5px" ,"color":"white","background":"red","fontSize":"20px" }}>+</div>
          {/* <div className="text-center" style={{ "background": "#D833B48", "width": "30px", "borderRadius": "50%" }}>
            <h5 className="text-white text-center " style={{ "fontSize": "20px", "fontWeight": "bold" }} >+</h5>
          </div> */}
        </div>
      </div>
      <div className=" container text-center p-2 " style={{ "backgroundColor": "#EEF7FB" }}>
        <input type="text" placeholder="Sort By: Placeholder" className="p-2 " style={{ "width": "50%", "borderRadius": "7px" }} />
      </div>
      <br />

      <Cards items={items} />
      <br />
      <hr />
      <Footer />
    </div>
  );
}
export default App;
