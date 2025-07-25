import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePostForm from "./components/CreatePostForm";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/PostListProvider";
import CreatePostHome from "./components/CreatePostHome";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <PostListProvider>
      <div className="d-flex" style={{ height: "100vh" }}>
        <Sidebar selectedTab={selectedTab} onTabClick={handleTabChange} />
        <div className="w-100 overflow-y-auto">
          {/* <Header /> */}
          {<CreatePostHome />}
          {selectedTab === "Home" && <PostList />}{" "}
          {selectedTab === "CreatePost" && <CreatePostForm />}
          {/* <Footer /> */}
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
