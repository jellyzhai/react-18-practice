import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import NeedAuth from "./components/NeedAuth";
import { useAutoLogout } from "./hooks/useAutoLogout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import StudentPage from "./pages/StudentPage";

function App() {
  useAutoLogout();

  return (
    <div style={{ border: "1px solid pink", padding: "10px", margin: "10px" }}>
      <Layout>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="profile"
          element={
            <NeedAuth>
              <ProfilePage />
            </NeedAuth>
          }
        ></Route>
        <Route path="auth-form" element={<AuthPage />}></Route>
        <Route
          path="student"
          element={
            <NeedAuth>
              <StudentPage />
            </NeedAuth>
          }
        ></Route>
      </Layout>
    </div>
  );
}

export default App;
