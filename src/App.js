import React, { useEffect, useState } from "react";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tour, settour] = useState([]);

  return (
    <>
      <main>
        <Tours />
      </main>
    </>
  );
}

export default App;
