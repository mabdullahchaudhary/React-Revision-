import { useEffect, useState } from "react"

const App = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [nextIndex, setNextIndex] = useState(0)


    useEffect(() => {

        const fetchData = async () => {
            const controller = new AbortController();
            try {

                loading(true);
                error(false)

                const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal });

                if (!response.ok)
                    throw new Error("There is error in API link.")

                const data = await response.json();
                setUser(data)


            } catch (error) {
                if (error.name !== "AbortError")
                    setError(error.message)
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }
        fetchData();
        return (() => {
            controller.aborted();
        })
    }, []);


    const handleNext = () => {
        setNextIndex((prev) => ((prev + 1) % user.length));
    }
    const handlePrev = () => {
        setNextIndex((prev) => (prev === 0 ? user.length - 1 : prev - 1))
    }

    return (
       <>

        
       
       </>
    )
}

export default App