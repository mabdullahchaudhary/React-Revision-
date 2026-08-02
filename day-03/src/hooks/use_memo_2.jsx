import { useState, useCallback, memo } from 'react';

// Child Component: `memo` lagane se yeh tabhi re-render hota hai jab iske PROPS change hon!
const ChildButton = memo(({ onClick }) => {
  console.log("ChildButton re-rendered!");
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', background: 'orange' }}>
      Click Child Button
    </button>
  );
});

export default function CallbackDemo() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // 1. useCallback ka magic:
  // Yeh function ka memory reference lock kar deta hai.
  const handleClick = useCallback(() => {
    console.log("Child button clicked!");
  }, []); // Empty array matlab yeh function poori lifecycle mein dobara nahi banega!

  return (
    <div style={{ padding: '20px' }}>
      <h2>useCallback Practical Demo</h2>
      
      {/* Parent State Button */}
      <button onClick={() => setCount(count + 1)}>
        Parent Count: {count}
      </button>

      {/* Toggle State Button (Yeh parent ko re-render karega) */}
      <br /><br />
      <button onClick={() => setToggle(!toggle)}>
        Toggle State: {toggle ? "TRUE" : "FALSE"}
      </button>

      <br /><br />
      {/* Child Component ko memoized function pass kiya */}
      <ChildButton onClick={handleClick} />
    </div>
  );
}