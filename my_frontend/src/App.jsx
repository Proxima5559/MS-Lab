import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { themes } from "./lib/theme";
import LabPage from "./pages/LabPage";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import CapabilitiesPage from "./pages/CapabilitiesPage";
import { Actions } from "./components/ui/Actions";
import ProjectsPage from "./pages/ProjectsPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import AdminLogin from "./components/ui/AdminLogin";

export default function App() {
  const [mode, setMode] = useState(() => {
  // This runs only once when the app starts
    const savedMode = localStorage.getItem("henk-lab-theme");
    return savedMode ? savedMode : "dark"; 
  });
  // const [mode, setMode] = useState("dark");
  const t = useMemo(() => themes[mode], [mode]);
  useEffect(() => {
    localStorage.setItem("henk-lab-theme", mode);
  }, [mode]);
  const dark = mode === "dark";

  return (
    <BrowserRouter>
      <Header dark={dark} setMode={setMode} t={t} />
      <div className="min-h-screen flex flex-col">
        <main className="grow">
          <Routes>
            <Route
              path="/"
              element={<LabPage mode={mode} setMode={setMode} t={t} dark={dark} />}
            />
            <Route
              path="/capabilities"
              element={<CapabilitiesPage mode={mode} t={t} dark={dark} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage mode={mode} t={t} dark={dark} />}
            />
            <Route
              path="/process"
              element={<ProcessPage mode={mode} t={t} dark={dark} />}
            />
            <Route
              path="/contact"
              element={<ContactPage mode={mode} t={t} dark={dark} />}
            />
            <Route 
              path="/auth-terminal" 
              element={<AdminLogin dark={true} />} 
            />
          </Routes>
        </main>

        <Actions dark={dark} t={t} />
        <Footer dark={dark} t={t} />

      </div>
    </BrowserRouter>
  );
}