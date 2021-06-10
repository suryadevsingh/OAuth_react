import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header";
import StreamCreate from "./Streams/streamCreate";
import StreamDelete from "./Streams/streamDelete";
import StreamEdit from "./Streams/streamEdit";
import StreamList from "./Streams/streamList";
import StreamShow from "./Streams/streamShow";
// we use link here to avoid addition reload (Link tag)
// 'History' sees updated URL, takes URL and sends it to BrowerRouter
// BrowserRouter communicates the URL to Route components
// const PageOne = () => {
//    return (
//       <div>
//          PageOne
//          <Link to="/pagetwo">Navigation to page two</Link>
//       </div>
//    );
// };

// const PageTwo = () => {
//    return (
//       <div>
//          PageTwo
//          <Link to="/">Navigation to page one</Link>
//       </div>
//    );
// };

const App = () => {
   return (
      <div className="ui container">
         <BrowserRouter>
            <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit" exact component={StreamEdit} />
            <Route path="/streams/delete" exact component={StreamDelete} />
            <Route path="/streams/show" exact component={StreamShow} />
         </BrowserRouter>
      </div>
   );
};

export default App;
