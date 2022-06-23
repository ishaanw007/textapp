import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
let name = "Harry";
function App() {
  return (
    <>
      {/* these are props */}
      <Navbar title="TextUtils" />
      <div className="container">
        <TextForm heading="Magic Box" />
      </div>
    </>
  );
}

export default App;
