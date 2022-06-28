import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (rec) => (
    <tr>
        <td>{rec.record.firstname}</td>
        <td>{rec.record.lastname}</td>
        <td>{rec.record.address}</td>
        <td>{rec.record.phone}</td>
        <td>{rec.record.email}</td>
        <td>{rec.record.profession}</td>
        <td>
            <div className="d-lg-flex justify-content-around align-items-lg-center">
                <Link to={`/edit/${rec.record._id}`}>Edit</Link>
                <button className="btn btn-link"
                    onClick={() => {
                        rec.deleteData(rec.record._id);
                    }}
                >
                    Delete
                </button>
            </div>
        </td>
    </tr>
);

export default function RecordList() {
    const [person, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch(`http://localhost:5000/record/`);

            if (!res.ok) {
                return;
            }

            const person = await res.json();
            setData(person);
        }

        getData();

        return;
    }, [person.length]);

    async function deleteData(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });

        const newData = person.filter((el) => el._id !== id);
        setData(newData);
    }

    function data() {
        return person.map((record) => {
            return (
                <Record
                    record={record}
                    deleteData={() => deleteData(record._id)}
                    key={record._id}
                />
            );
        });
    }
    return (
        <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
                <div className="col">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr className="table-primary">
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Profession</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>{data()}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}