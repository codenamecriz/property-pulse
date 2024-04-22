"use client";
import React from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { id } = useParams();
  const name = searchParams.get("name");

  console.log("Property with Id Log");
  return (
    <div>
      Property with Id Page
      <h1 className="text-3xl">Hello!</h1>
      <button onClick={() => router.push("/")} className="bg-blue-500 p-2">
        Home {id}
      </button>
      <h2 className="text-2xl">You searched {name}</h2>
      <h3 className="text-xl">Path: {pathName}</h3>
    </div>
  );
};

export default PropertyPage;
