import React from "react";
import './Table.css';
import './style.scss';

export default function Table() {
    const data = [
        {id:1,name:"Domenic",point: "88,100",Team:"dcode"},
        {id:2,name:"Sally",point:"72,400",Team: "Student"},
        {id:3,name:"Nick",point:"52,400",Team: "dcode"},
    ]
    return (
        <div>
            <table>
                <tr className="header">
                    <td>ID</td>
                    <td>Name</td>
                    <td>Point</td>
                    <td>Team</td>
                </tr>
                {data.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.point}</td>
                        <td>{item.Team}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}