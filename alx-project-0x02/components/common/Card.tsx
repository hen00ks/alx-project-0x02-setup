import React from "react";
import { type CardProps } from "@/interfaces";

export default function Card({ title, content, userId }: CardProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{content}</p>
      <p className="text-sm text-gray-500 mt-2">User ID: {userId}</p>
    </div>
  );
}
