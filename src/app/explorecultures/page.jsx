import Link from 'next/link';
import Featured1 from '../../../public/Image/Featured1.jpg';
import Featured2 from '../../../public/Image/Featured2.jpg';
import Featured3 from '../../../public/Image/Featured3.jpg';

const cultures = [
    {
        id: 'masai',
        title: 'Masai Culture',
        desc: 'Discover the vibrant traditions of the Masai people.',
        image: Featured1,
    },
    {
        id: 'igbo',
        title: 'Igbo Culture',
        desc: 'Explore the rich history and artistry of the Igbo people.',
        image: Featured2,
    },
    {
        id: 'zulu',
        title: 'Zulu Heritage',
        desc: 'Explore the rich history and artistry of the Zulu nation.',
        image: Featured2,
    },
    {
        id: 'yoruba',
        title: 'Yoruba Traditions',
        desc: 'Uncover the spiritual and artistic expressions of the Yoruba culture.',
        image: Featured3,
    },
    {
        id: 'ashanti',
        title: 'Ashanti Legacy',
        desc: 'Learn about the golden heritage and craftsmanship of the Ashanti.',
        image: Featured2,
    },
    {
        id: 'benin',
        title: 'Benin Kingdom',
        desc: 'Delve into the ancient artistry and history of the Benin Kingdom.',
        image: Featured3,
    },
    {
        id: 'ethiopian',
        title: 'Ethiopian Art',
        desc: 'Experience the unique artistic heritage of Ethiopia.',
        image: Featured1,
    },
    {
        id: 'kongo',
        title: 'Kongo Kingdom',
        desc: 'Explore the rich history and artistry of the Kongo Kingdom.',
        image: Featured2,
    },
    {
        id: 'hausa',
        title: 'Hausa Art & Culture',
        desc: 'Discover the rich art and culture of the Hausa people.',
        image: Featured3,
    },

];

export default function ExploreCultures() {
    return (
        <section style={{ background: '#19212b', padding: '2rem 0' }}>
            <h2 className="section-title" style={{ color: '#fff' }}>
                Explore African Cultures
            </h2>
            <div className="explore-grid">
                {cultures.map((culture) => (
                    <Link
                        key={culture.id}
                        href={`/culture/${culture.id}`}
                        className="explore-card"
                        style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}
                    >
                        <img src={culture.image.src} alt={culture.title} className="explore-img" />
                        <div className="explore-info">
                            <h3>{culture.title}</h3>
                            <p>{culture.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
} 