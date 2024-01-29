import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      // accord PORT consequently 👇
      const response = await fetch("http://localhost:3000/api/basicRoutes");

      const json = await response.json();

      if (response.ok) {
        console.info(json);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <h2>Home</h2>
    </div>
  );
}

export default Home;
