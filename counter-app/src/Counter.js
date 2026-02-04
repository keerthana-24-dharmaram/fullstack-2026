import React, { useState } from "react";

function Counter() {
  // 1️⃣ State for counter value
  const [count, setCount] = useState(0);

  // 2️⃣ State for message display
  const [message, setMessage] = useState("");

  // 3️⃣ Increment function
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount === 10) {
      setMessage("🎉 Congratulations! You reached 10");
    } else {
      setMessage("");
    }
  };

  // 4️⃣ Decrement function (prevent below zero)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage("");
    }
  };

  // 5️⃣ Reset function
  const reset = () => {
    setCount(0);
    setMessage("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "340px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Counter Application
        </h2>

        <h1 style={{ fontSize: "48px", color: "#4a47a3" }}>{count}</h1>

        {message && (
          <p
            style={{
              color: "#28a745",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            {message}
          </p>
        )}

        <button
          onClick={increment}
          style={{
            padding: "10px 18px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>

        <button
          onClick={decrement}
          disabled={count === 0}
          style={{
            padding: "10px 18px",
            fontSize: "16px",
            backgroundColor: count === 0 ? "#ccc" : "#dc3545",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: count === 0 ? "not-allowed" : "pointer",
            margin: "0 10px",
          }}
        >
          Decrement
        </button>

        <br />

        <button
          onClick={reset}
          style={{
            padding: "10px 18px",
            fontSize: "16px",
            backgroundColor: "#6c757d",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
