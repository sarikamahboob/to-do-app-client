import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddedTasks from "./Components/AddedTasks/AddedTasks";
import RequireAuth from "./Components/Authentication/RequireAuth";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Home from "./Components/Home";
import Header from "./Components/Shared/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/addedtasks"
          element={
            <RequireAuth>
              <AddedTasks />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
