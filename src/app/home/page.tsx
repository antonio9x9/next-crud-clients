'use client';

import React from 'react';
import './home.css';

export default function Home() {
    return (
        <div className="page-container">
            {/* Header */}
            <header className="header">
                <div className="logo">Logo</div>
                <nav className="nav">
                    <a href="/home" className="nav-link active">Home</a>
                    <a href="/books" className="nav-link">Books</a>
                </nav>
            </header>

            {/* Breadcrumb */}
            <div className="breadcrumb">
                <span>Home</span> &gt; <span>Clients</span>
            </div>

            {/* Search Box */}
            <div className="search-box">
                <input type="text" placeholder="Search for a client..." className="search-input" />
            </div>

            {/* Main Content */}
            <main className="main-content">
                <div className="content-header">
                    <h1>Clients</h1>
                    <button className="add-client-button">Add Client</button>
                </div>
                <div className="client-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Client ID</th>
                                <th>Client Type</th>
                                <th>Client Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Client 1</td>
                                <td>123</td>
                                <td>Type A</td>
                                <td>Active</td>
                            </tr>
                            <tr>
                                <td>Client 2</td>
                                <td>456</td>
                                <td>Type B</td>
                                <td>Inactive</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}