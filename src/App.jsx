import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePostForm from "./components/CreatePostForm";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Profile");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar selectedTab={selectedTab} onTabClick={handleTabChange} />
      <div className="w-100">
        <Header />
        {selectedTab === "Home" && <PostList />}{" "}
        {selectedTab === "CreatePost" && <CreatePostForm />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
