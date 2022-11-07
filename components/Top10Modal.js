// import { getClientBuildManifest } from "next/dist/client/route-loader";
import { useState, useEffect, React } from "react";

export default function UserProfile() {
    const [top10, setTop10] = useState([]);
    var array =

        useEffect(() => {
            getTop10();
        }, []);

    function getTop10() {
        fetch("https://9gbljis7zg.execute-api.ap-southeast-1.amazonaws.com/green/api/v1/users/top10", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((users) => {
                setTop10(users);
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
                        <th className="py-3 px-6">Rank</th>
                        <th className="py-3 px-6">Username</th>
                        <th className="py-3 px-6">Carbon savings</th>
                    </tr>
                </thead>
                <tbody>
                    {top10.map((user) => (
                        <tr key={user.id} className="border-b-4">
                            <td className="p-5 text-center">{top10.indexOf(user) + 1}</td>
                            <td className="p-5 text-center">{user.username}</td>
                            <td className="p-5 text-center">{user.carbonsaved}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}