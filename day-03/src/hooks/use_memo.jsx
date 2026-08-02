import { useMemo, useState } from "react"

export default function MemoDemo() {

    const [count, setCount] = useState(0)
    const [dark, setDark] = useState(false)

    const heayCalculation = (num) => {
        console.log("System Lagged .............");
        let result = 0
        for (let i = 0; i < 100000000000; i++) {
            result += num * 2;
            return result
        }
    }
    const memorize = useMemo(() => {
        return heayCalculation(count)

    }, [count])


    const themeStyle = {
        backgroundColor: dark ? '#222' : '#fff',
        color: dark ? '#fff' : '#222',
        padding: '20px',
        borderRadius: '8px'
    };

    return (
        <>
            <div style={themeStyle}>
                <h2>useMemo Practical Demo</h2>

                {/* Count Button */}
                <button onClick={() => setCount(count + 1)}>
                    Increment Count: {count}
                </button>

                {/* Theme Toggle Button (Yeh poora component re-render karega) */}
                <br /><br />
                <button onClick={() => setDark(!dark)}>
                    Toggle Theme (Dark: {dark.toString()})
                </button>

                <h3>Result: {memorize}</h3>
            </div>



        </>
    )

}