import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function ShowUser() {



    const [users, setUsers] = useState(null);

    const [err, setError] = useState(false);

    useEffect(() => {
        fetchedUsers();
    }, []);

    async function fetchedUsers() {
        try {
            const response = await fetch(
                "http://localhost:8080/clients",
                {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                    },
                    redirect: "follow",
                }
            );
            let fetchedUsers = await response.json();
            JSON.parse(JSON.stringify(fetchedUsers))
            setUsers(fetchedUsers)
            // setLoading(false);
            console.log("elo" + users);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    let query = useQuery();

    return (
        <Container fluid>
            <Row className="d-flex align-items-center justify-content-start pt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Id dokumentu</th>
                            <th>Nr telefonu</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user, index) => {
                            return (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.idDocument}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

