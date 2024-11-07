import './App.css';
import {Carousel} from "./component/Carousel";
import {data} from "./data/carouselData";





function App() {
  return (
    <div className="App">
      <Carousel data={data}/>
    </div>
  );
}

export default App;
