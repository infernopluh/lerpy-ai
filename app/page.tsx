"use client";
import { useChat } from "ai/react";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="max-w-xl mx-auto p-4">
      {messages.map((m) => (
        <div key={m.id} className={m.role === "user" ? "text-blue-600" : "text-green-600"}>
          <strong>{m.role}:</strong> {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
        <input
          value={input}
          onChange={handleInputChange}
          className="flex-1 border p-2"
          placeholder="Say something..."
        />
        <button className="bg-black text-white px-4 py-2">Send</button>
      </form>
    </main>
  );
}
