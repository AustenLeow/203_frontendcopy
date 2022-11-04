import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function LayoutAuthenticated(props) {
  const [profile, setProfile] = useState();
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const res = await fetch("http://52.221.210.169:443/api/auth/currentuser", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (res.ok) {
      const json = await res.json();
      setProfile(json);
    } else {
      router.push("/signin");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <div>
      <div>
        <p>Signed in as: {profile && profile.username}</p>
        <p>
          <button onClick={logout}>Log out</button>
        </p>
      </div>
      {props.children}
    </div>
  );
}
