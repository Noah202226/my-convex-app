"use client";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

export default function Home() {
  const messages = useQuery(api.myFunctions.list);
  const sendMessage = useMutation(api.myFunctions.send);
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendMessage({ body: text, author: "Me" });
    setText(""); // Clear input
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Convex Hello World</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send to Database</button>
      </form>

      <ul>
        {messages?.map((msg) => (
          <li key={msg._id}>
            <strong>{msg.author}:</strong> {msg.body}
          </li>
        ))}
      </ul>
    </main>
  );
}
