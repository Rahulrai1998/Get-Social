import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePostForm from "./components/CreatePostForm";

function App() {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar />
      <div className="w-100">
        <Header />
        <CreatePostForm/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
