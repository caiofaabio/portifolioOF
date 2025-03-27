import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import Perfil from "../components/perfil";
import ABout from "../components/about";
import Skills from "../components/skils";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Header from "../components/header";
import Main from "../components/main";
import Loading from "../components/loading";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isLoading, setIsLoading] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [theme]);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      toast("Email copied to clipboard!", {
        type: "success",
        style: {
          background: "#1f2937 ",
          color: "#fff",
          border: "3px solid #fff",
        },
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      toast("Phone number copied to clipboard!", {
        type: "success",
        style: {
          background: "#1f2937 ",
          color: "#fff",
          border: "3px solid #fff",
        },
      });
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header theme={theme} setTheme={setTheme} />

      <Main>
        <Perfil />
        <ABout />
        <Skills hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
        <Projects />

        <Contact
          copiedEmail={copiedEmail}
          copiedPhone={copiedPhone}
          handleCopy={handleCopy}
        />
      </Main>
    </div>
  );
}

export default App;
