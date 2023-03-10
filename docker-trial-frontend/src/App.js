import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [payload, setPayload] = useState();
  const backendUrl = "http://localhost:3001/";

  useEffect(() => {
    (async () => {
      fetch(backendUrl)
        .then((response) => response.json())
        .then((data) => setPayload(data));
    })();
  }, []);

  return <div className="App">here:{payload}</div>;
}

export default App;
