"use client";
import React from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  const { paramId } = useParams();

  console.log("Home Log");
  return (
    <div>
      Home Page
      <h1 className="text-3xl">Welcome!</h1>
      <Link href="/properties">Show Properties</Link>
      <button
        onClick={() => router.push("/properties")}
        className="bg-blue-500 p-2"
      >
        Properties
      </button>
    </div>
  );
};

export default HomePage;
