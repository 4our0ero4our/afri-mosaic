"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Collection1 from "../../../../public/Image/Featured1.jpg";
import Collection2 from "../../../../public/Image/Featured2.jpg";
import Collection3 from "../../../../public/Image/Featured3.jpg";

export default function CollectionDetailPage() {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);

    const collections = [
        {
            id: "1",
            title: "Traditional Beadwork Collection",
            image: Collection1,
            description:
                "This collection showcases vibrant beadwork and textiles from the Igbo culture, crafted with intricate patterns and rich colors.",
            culturalBackground:
                "Beadwork is a significant part of Igbo ceremonies and attire, symbolizing status and tradition.",
            inspiration:
                "Inspired by the artistry of Igbo ancestors, this collection celebrates their creativity and heritage.",
            minted: true,
        },
        {
            id: "2",
            title: "Royal Textile Collection",
            image: Collection2,
            description:
                "A collection of royal textiles from the Yoruba culture, featuring bold patterns and luxurious materials.",
            culturalBackground:
                "Yoruba textiles are used in royal ceremonies and are a symbol of wealth and power.",
            inspiration:
                "This collection honors the Yoruba tradition of weaving and textile design.",
            minted: false,
        },
        {
            id: "3",
            title: "Warrior Adornments",
            image: Collection3,
            description:
                "Adornments and regalia worn by Maasai warriors, crafted with beads and metals.",
            culturalBackground:
                "Maasai warriors use these adornments in rites of passage and celebrations.",
            inspiration:
                "The collection is inspired by the courage and traditions of the Maasai people.",
            minted: true,
        },
        {
            id: "4",
            title: "Ceremonial Artifacts",
            image: Collection2,
            description:
                "Artifacts used in Maasai ceremonies, each with unique cultural significance.",
            culturalBackground:
                "Ceremonial artifacts play a vital role in Maasai rituals and storytelling.",
            inspiration:
                "This collection preserves the stories and heritage of the Maasai through their ceremonial objects.",
            minted: false,
        },
    ];

    const collection = collections.find((col) => col.id === id);

    if (!collection) {
        return (
            <div className="collection-detail-root">
                <p>Collection not found.</p>
            </div>
        );
    }

    return (
        <div style={{ background: "#101820" }}>
            <div className="collection-detail-root">
                <div className="breadcrumb">
                    <a href="/explorecollections">Explore</a> / <span>Art</span>
                </div>
                <div className="collection-image-wrapper">
                    <img
                        src={collection.image.src}
                        alt={collection.title}
                        className="collection-detail-img"
                        onClick={() => setShowModal(true)}
                        style={{ cursor: "zoom-in" }}
                    />
                </div>
                <h2 className="collection-detail-title">{collection.title}</h2>
                <p className="collection-detail-desc">{collection.description}</p>

                <div className="collection-section">
                    <h4>Cultural Background</h4>
                    <p>{collection.culturalBackground}</p>
                </div>
                <div className="collection-section">
                    <h4>Inspiration</h4>
                    <p>{collection.inspiration}</p>
                </div>

                <button className="collection-action-btn">
                    {collection.minted ? "Place Bid" : "Mint"}
                </button>

                {/* Image Modal Overlay */}
                {showModal && (
                    <div
                        className="image-modal-overlay"
                        onClick={() => setShowModal(false)}
                    >
                        <div
                            className="image-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="image-modal-close"
                                onClick={() => setShowModal(false)}
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            <img
                                src={collection.image.src}
                                alt={collection.title}
                                className="image-modal-img"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
