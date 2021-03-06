import React, { Component } from "react";
// Table from react-bootstrap
import { Table } from "react-bootstrap";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// To make rows collapsible
import "bootstrap/js/src/collapse.js";

export class App extends Component {
    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse1"
                            aria-controls="multiCollapseExample1"
                        >
                            <td>1</td>
                            <td>TEST 123</td>
                            <td>test123@test.com</td>
                        </tr>
                        <tr class="collapse multi-collapse1" id="multiCollapseExample1">
                            <td>Child col 1</td>
                            <td>Child col 2</td>
                            <td>Child col 3</td>
                        </tr>
                        <tr
                            data-toggle="collapse"
                            data-target=".multi-collapse2"
                            aria-controls="multiCollapseExample2"
                        >
                            <td>2</td>
                            <td>TEST 456</td>
                            <td>test456@test.com</td>
                        </tr>
                        <tr class="collapse multi-collapse2" id="multiCollapseExample2">
                            <td>Child col 1</td>
                            <td>Child col 2</td>
                            <td>Child col 3</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

export default App;