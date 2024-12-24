import React, { useState } from "react";
import axios from "axios";

const GPTPlayground = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/api/gpt", { prompt });
    setResponse(res.data.response);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GPT Playground</h1>
      <textarea
        className="w-full border p-2 mb-4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
      {response && (
        <div className="mt-4 p-4 border bg-gray-100">
          <h2 className="font-bold">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GPTPlayground;
