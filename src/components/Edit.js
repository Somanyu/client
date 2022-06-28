import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
    const [updateData, setData] = useState({
        firstname: "",
        lastname: "",
        address: "",
        phone: "",
        email: "",
        profession: "",
        records: [],
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const res = await fetch(`https://mernserver3.herokuapp.com/record/${params.id.toString()}`);

            if (!res.ok) {
                return;
            }

            const record = await res.json();
            if (!record) {
                navigate("/");
                return;
            }

            setData(record);
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    function data(value) {
        return setData((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const update = {
            firstname: updateData.firstname,
            lastname: updateData.lastname,
            address: updateData.address,
            phone: updateData.phone,
            email: updateData.email,
            profession: updateData.profession,
        };

        await fetch(`https://mernserver3.herokuapp.com/update/${params.id}`, {
            method: "POST",
            body: JSON.stringify(update),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        console.log("Updated");

        navigate("/");
    }

    return (
        <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
                <div className="col-md-12 col-lg-10 offset-lg-1">
                    <h1>Edit a Record</h1>
                    <form method="POST" onSubmit={onSubmit}>
                        <div className="row">

                            <div className="col-sm-6">
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="firstName">First Name</label>
                                    <input className="form-control" type="text" name="firstName"
                                        value={updateData.firstname}
                                        onChange={(e) => data({ firstname: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="lastname">Last Name</label>
                                    <input className="form-control" type="text" name="lastname"
                                        value={updateData.lastname}
                                        onChange={(e) => data({ lastname: e.target.value })} />
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="address">Address Line</label>
                                    <input className="form-control" type="text" name="address"
                                        value={updateData.address}
                                        onChange={(e) => data({ address: e.target.value })} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="phone">Phone</label>
                                    <input className="form-control" type="text" name="phone"
                                        value={updateData.phone}
                                        onChange={(e) => data({ phone: e.target.value })} />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input className="form-control" type="text" name="email"
                                        value={updateData.email}
                                        onChange={(e) => data({ email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group mb-3">
                                    <label className="form-label" htmlFor="profession">Profession</label>
                                    <input className="form-control" type="text" name="profession"
                                        value={updateData.profession}
                                        onChange={(e) => data({ profession: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: "1.7rem" }}>
                            <div className="col-sm-12">
                                <div className="d-grid form-group mb-3"><button className="btn btn-primary" type="submit">Sumbit</button></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}