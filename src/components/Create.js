import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function Create() {
    const [updateData, setData] = useState({
        firstname: "",
        lastname: "",
        address: "",
        phone: "",
        email: "",
        profession: "",
    });

    const params = useParams();
    const navigate = useNavigate();

    function data(value) {
        return setData((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const record = { ...updateData };

        await fetch("http://localhost:5000/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(record),
        })
            .catch(error => {
                return;
            });

        setData({ firstname: "", lastname: "", address: "", phone: "", email: "", profession: "" });
        navigate("/");
    }

    return (
        <div className="container" style={{ marginTop: "3rem" }}>
            <div className="row">
                <div className="col-md-12 col-lg-10 offset-lg-1">
                    <h1>Create a Record</h1>
                    <form onSubmit={onSubmit}>
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
                                    <label className="form-label" htmlFor="lastName">Last Name</label>
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
                                    <label className="form-label">Phone</label>
                                    <input className="form-control" type="text" name="phone"
                                        value={updateData.phone}
                                        onChange={(e) => data({ phone: e.target.value })} />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group mb-3">
                                    <label className="form-label">Email</label>
                                    <input className="form-control" type="text" name="email"
                                        value={updateData.email}
                                        onChange={(e) => data({ email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group mb-3">
                                    <label className="form-label">Profession</label>
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