// import { getClientBuildManifest } from "next/dist/client/route-loader";
import { useState, useEffect, React } from "react";

export default function UserProfile() {
    const [top5, setTop5] = useState([]);
    var array =

        useEffect(() => {
            getTop5();
        }, []);

    function getTop5() {
        fetch("http://localhost:8080/api/v1/users/top5", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((users) => {
                setTop5(users);
                console.log(state);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <table className="table-auto min-w-full">
                <thead className="uppercase">
                    <tr>
                        <th className="py-3 px-6">🎖 Rank</th>
                        <th className="py-3 px-6">👤 User</th>
                        <th className="py-3 px-5">🌱 Carbon savings</th>
                    </tr>
                </thead>
                <tbody>
                    {top5.map((user) => (
                        <tr key={user.id} className="border-b-4">
                            <td className="p-5 text-center">{top5.indexOf(user) + 1}</td>
                            <td className="p-5 text-center">{user.username}</td>
                            <td className="p-5 text-center">{user.carbonsaved} cm<span id="super">3</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}