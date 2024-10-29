// import "./App.css";
// import Homepage from "./Pages/HomePage";
// import { Route } from "react-router-dom";
// import Chatpage from "./Pages/ChatPage";
// import error from "./Pages/error";

// function App() {
//   return (
//     <div className="App">
//       <Route path="/" component={Homepage} />
//       <Route path="/chats" component={Chatpage} />
//       <Route path='*' component={error}></Route>
//     </div>
//   );
// }

// export default App;


import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Chatpage from "./Pages/ChatPage";
import Error from "./Pages/error"; // Make sure to capitalize the import
import bgVid from './assest/bg_vid.mp4';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="video-bg">
          <source src={bgVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Routes */}
        <Route path="/" exact component={Homepage} />
        <Route path="/chats" component={Chatpage} />
        <Route path="*" component={Error} />
      </div>
    </Router>
  );
}

export default App;

