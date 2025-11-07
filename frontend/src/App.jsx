import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import { useAuth } from '@clerk/clerk-react';
import { Toaster } from "react-hot-toast";

function App() {
  const { userId, isLoaded } = useAuth();

  // Don't render routes until auth is loaded
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (<div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/problems"
        element={userId ? <ProblemPage /> : <Navigate to="/" replace />}
      />
    </Routes>
    <Toaster /></div>
  )
}

export default App