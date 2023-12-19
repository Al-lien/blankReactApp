import { useEffect, useState } from "react";

function Home() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoaded(false);
            const response = await fetch("http://localhost:3000/api/basicRoutes");

            const json = await response.json();

            if (response.ok) {
                setData(json);
                setLoaded(true)
            }

        }
        fetchData();
    }, [])

    { data && console.log(data) }

    return (
        <div className="home">
            <h2>Home</h2>
        </div>
    );
}

export default Home;