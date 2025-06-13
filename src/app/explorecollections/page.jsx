"use client";
import { useState } from "react";
import Featured1 from '../../../public/Image/Featured1.jpg';
import Featured2 from '../../../public/Image/Featured2.jpg';
import Featured3 from '../../../public/Image/Featured3.jpg';

// Use your actual collection data and images
const collections = [
    {
        id: "1",
        title: "Traditional Beadwork Collection",
        shortDesc: "Vibrant beadwork and textiles from Igbo culture.",
        image: Featured1,
    },
    {
        id: "2",
        title: "Royal Textile Collection",
        shortDesc: "Vibrant beadwork and textiles from Yoruba culture.",
        image: Featured2,
    },
    {
        id: "3",
        title: "Warrior Adornments",
        shortDesc: "Vibrant beadwork and textiles from Maasai culture.",
        image: Featured3,
    },
    {
        id: "4",
        title: "Ceremonial Artifacts",
        shortDesc: "Vibrant beadwork and textiles from Maasai culture.",
        image: Featured2,
    },
];

export default function ExploreCollectionsPage() {
    const [activeTab, setActiveTab] = useState("collection");
    const userCollected = []; // Replace with actual user data
    const userActivity = []; // Replace with actual user data

    return (
        <div className="explore-collections-root">
            <h1 className="main-heading">Collections</h1>
            <p className="subheading">
                Browse and discover our curated range of art collections.
            </p>
            <div className="tabs-row">
                {["collection", "collected", "activity"].map((tab) => (
                    <button
                        key={tab}
                        className={`tab-btn${activeTab === tab ? " active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            <div className="tab-content">
                {activeTab === "collection" && (
                    <div className="collection-grid">
                        {collections.map((col) => (
                            <div
                                key={col.id}
                                className="collection-card"
                                onClick={() => window.location.href = `/collection/${col.id}`}
                            >
                                <img src={col.image.src} alt={col.title} className="collection-img" />
                                <div className="collection-title">{col.title}</div>
                                <div className="collection-desc">{col.shortDesc}</div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "collected" && (
                    userCollected.length > 0 ? (
                        <div className="collection-grid">
                            {userCollected.map((col) => (
                                <div
                                    key={col.id}
                                    className="collection-card"
                                    onClick={() => window.location.href = `/collection/${col.id}`}
                                >
                                    <img src={col.image.src} alt={col.title} className="collection-img" />
                                    <div className="collection-title">{col.title}</div>
                                    <div className="collection-desc">{col.shortDesc}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <span role="img" aria-label="empty" style={{ fontSize: "2.5rem" }}>🖼️</span>
                            <p>You haven't collected any items yet.</p>
                        </div>
                    )
                )}

                {activeTab === "activity" && (
                    userActivity.length > 0 ? (
                        <div className="activity-table-wrapper">
                            <table className="activity-table">
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Event</th>
                                        <th>Price</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userActivity.map((act, idx) => (
                                        <tr key={idx}>
                                            <td><img src={act.image.src} alt="" className="activity-img" /></td>
                                            <td>{act.event}</td>
                                            <td>{act.price}</td>
                                            <td>{act.from}</td>
                                            <td>{act.to}</td>
                                            <td>{act.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="empty-state">
                            <span role="img" aria-label="empty" style={{ fontSize: "2.5rem" }}>📄</span>
                            <p>No activity yet. Your transactions will appear here.</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
