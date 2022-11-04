import { useEffect, useState } from "react";
import LayoutAuthenticated from "../components/layout-authenticated";

export default function User() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    const res = await fetch("http://52.221.188.170:8080/api/auth/currentuser", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (res.ok) {
      const text = await res.text();
      setContent(text);
    }
    console.log("test2");
  }

  return (
    <LayoutAuthenticated>
      <div>
        <h1>User</h1>
        {content && <p>{content}</p>}
      </div>
    </LayoutAuthenticated>
  );
}
