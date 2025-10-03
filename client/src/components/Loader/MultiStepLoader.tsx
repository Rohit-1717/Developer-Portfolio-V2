import { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";

const loadingStates = [
  { text: "Initializing portfolio" },
  { text: "Loading projects" },
  { text: "Compiling experience" },
  { text: "Building interface" },
  { text: "Ready to explore" },
];

export function MultiStepLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("portfolioVisited");

    if (hasVisited) {
      setLoading(false);
    } else {
      setLoading(true);
      localStorage.setItem("portfolioVisited", "true");

      const totalDuration = loadingStates.length * 1200;
      setTimeout(() => {
        setLoading(false);
      }, totalDuration);
    }
  }, []);

  return (
    <Loader
      loadingStates={loadingStates}
      loading={loading}
      duration={1200}
      loop={false}
      logo="/public/android-chrome-192x192.png" 
    />
  );
}
