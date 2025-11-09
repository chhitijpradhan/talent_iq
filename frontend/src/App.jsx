import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import { useAuth, useUser } from '@clerk/clerk-react';
import { Toaster } from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage.jsx";

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
        element={ <ProblemPage  />}
      />
    </Routes>
    <Toaster /></div>
  )
}

export default App