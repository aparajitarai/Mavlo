"use client";

import { useQuery } from "@tanstack/react-query";
import { User } from "@/lib/schemas";

async function fetchUser(): Promise<User> {
  const res = await fetch("/api/me");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

export default function DashboardPage() {
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome, {user?.name}!</h1>
      <p>Your role is: {user?.role}</p>
    </div>
  );
}
