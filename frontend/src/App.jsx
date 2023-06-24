import logo from "./assets/logo.svg";
import blob from "./assets/blob.svg";
import "./App.scss";
import ListCollection from "./component/ListCollection/ListCollection";
import TitleBox from "./component/TitleBox/TitleBox";
import InputBox from "./component/InputBox/InputBox";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="circle"></div>
        <div className="blob">
          <img src={blob} alt="blob" />
        </div>
        <div className="main-box">
          <TitleBox image={logo} title="to-do-list" />
          <InputBox />
          <ListCollection title="to-do's" />
        </div>
      </div>
    </div>
  );
}

export default App;
