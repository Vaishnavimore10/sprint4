"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const Logout = async () => {
    try {
      const response = await axios.get("/api/companies/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to Impactboard</h1>
      <hr />
      <hr />

      <button onClick={Logout} className="bg-blue-500 mt-4 rounded">
        Logout
      </button>
    </div>
  );
}
