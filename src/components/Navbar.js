import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <section class="py-4 py-xl-5">
                        <div class="container">
                            <div class="bg-light border rounded border-0 border-light d-flex flex-column justify-content-between flex-lg-row p-4 p-md-5" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                <div class="pb-2 pb-lg-1">
                                    <h2 class="fw-bold mb-2">Create a Person data using Fetch API into MongoDB.</h2>
                                </div>
                                <div class="my-2">
                                <NavLink to="/create" style={{background: "var(--bs-blue)",textDecoration: "none",color: "#fff",padding: "8px",paddingRight: "16px",paddingLeft: "16px",borderRadius: "3px",fontSize: "18px"}}>Create</NavLink>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}