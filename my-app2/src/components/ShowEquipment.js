import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Table } from "react-bootstrap";
import axios from "axios";



export default function ShowUser() {

    const [equipment, setEquipment] = useState(null);

    const [err, setError] = useState(false);

    useEffect(() => {
        fetchedEquipment();
    }, []);

    async function fetchedEquipment() {
        try {
            const response = await fetch(
                "http://localhost:8080/equipment",
                {
                    method: "GET",
                    headers: {
                        'Accept': 'application/json',
                        "Content-Type": "application/json",
                    },
                    redirect: "follow",
                }
            );
            let fetchedEquipment = await response.json();
            JSON.parse(JSON.stringify(fetchedEquipment))
            setEquipment(fetchedEquipment)
            // setLoading(false);
            console.log("elo" + equipment);
        } catch (err) {
            console.log(err);
            setError(err);
        }
    }

    return (
        <Container fluid>
            <Row className="d-flex align-items-center justify-content-start pt-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nazwa</th>
                            <th>Numer seryjny</th>
                            <th>Cena za godzinę</th>
                            <th>Informacje o awarii</th>
                            <th>Dostępność</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipment && equipment.map((equipment, index) => {
                            return (
                                <tr>
                                <td>{equipment.id}</td>
                                <td>{equipment.name}</td>
                                <td>{equipment.serialNumber}</td>
                                <td>{equipment.pricePerHour}</td>
                                <td>{equipment.failureInformation}</td>
                                <td>{equipment.availabilityStatus}</td>
                              </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

