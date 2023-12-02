import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Project from "./project";
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="project" />} />
          <Route path="/project/*" element={<Project />} />
        </Routes>
      </div>

    </HashRouter>
  );
}
export default App;

