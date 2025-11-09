import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import { useAuth, useUser } from '@clerk/clerk-react';
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage.jsx";
import ProblemsPage from "./pages/ProblemsPage.jsx";

function App() {
  const { isSignedIn, isLoaded } = useUser();


  // Don't render routes until auth is loaded
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (<div>
    <Routes>
      <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
      <Route path="/dashboard" element={isSignedIn ? <DashboardPage /> : <Navigate to={"/"} />} />
      <Route
        path="/problems"
        element={ <ProblemsPage  />}
      />
    </Routes>
    <Toaster /></div>
  )
}

export default App