"use client";

import DefaultAvatar from '../../../public/Image/Avatar.png';

export const team = [
    {
        name: "Anayo.sui",
        role: "Co-Founder",
        image: DefaultAvatar,
    },
    {
        name: "Mykel.sui",
        role: "Co-Founder",
        image: DefaultAvatar,
    },
    {
        name: "Fortified💧",
        role: "Co-Founder",
        image: DefaultAvatar,
    },
    {
        name: "Ngbes.sui",
        role: "Co-Founder",
        image: DefaultAvatar,
    },
    {
        name: "Not.priest",
        role: "Artist",
        image: DefaultAvatar,
    },
];

export default function AboutPage() {
    return (
        <div className="about-root">
            <h1 className="about-title">About Afri Mosaic</h1>
            <p className="about-desc">
                AfriArt is a digital platform dedicated to showcasing and celebrating the rich tapestry of African art and culture through non-fungible tokens (NFTs). Our mission is to empower African artists, preserve cultural heritage, and connect collectors with unique, authentic digital artworks.
            </p>
            <h2 className="about-section-title">Our Vision</h2>
            <p className="about-desc">
                We envision a world where African art is globally recognized and valued, where artists have the tools and resources to thrive, and where collectors can engage with and support the vibrant artistic traditions of the continent.
            </p>
            <h2 className="about-section-title">Meet the Team</h2>
            <div className="team-grid">
                {team.map((member, idx) => (
                    <div className="team-card" key={idx}>
                        <div className="team-avatar-wrapper">
                            <img
                                src={member.image.src}
                                alt={member.name}
                                className="team-avatar"
                            // onError={e => { e.target.src = DefaultAvatar.src; }}
                            />
                        </div>
                        <div className="team-name">{member.name}</div>
                        <div className="team-role">{member.role}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
