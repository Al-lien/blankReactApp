import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const fetchData = async () => {
      // accord PORT consequently 👇
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/basicRoutes`
      );

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
