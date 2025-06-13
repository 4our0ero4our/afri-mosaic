'use client';
import { useParams } from 'next/navigation';
// import { cultures } from './data';
import RelatedImage1 from '../../../../public/Image/Featured2.jpg'

export default function CultureDetailPage() {
    const cultures = [
        {
            id: 'masai',
            title: 'Masai Culture',
            summary: 'The Maasai are a semi-nomadic Nilotic ethnic group inhabiting southern Kenya and northern Tanzania. They are renowned for their distinctive customs and dress, particularly the vibrant red shuka they wear, and their deep-rooted pastoralist lifestyle. Their society is organized around a strong patriarchal structure and a deep connection to their cattle, which are their primary source of wealth and sustenance.',
            history: 'Originating from the lower Nile valley north of Lake Turkana, the Maasai began migrating south in the 15th century, eventually settling in the Great Rift Valley and the surrounding lands by the 17th and 18th centuries. Their history is marked by a fierce independence and a period of significant territorial expansion, followed by challenges during the colonial era which led to land dispossession and the establishment of national parks on their ancestral grazing grounds.',
            traditions: 'Maasai traditions are rich and varied, encompassing elaborate beadwork which signifies social status and beauty, and the famous "adumu" or jumping dance performed by warriors to display their strength and agility. A key rite of passage for young men is the "Eunoto" ceremony, marking their transition from warriors (morans) to senior warriors. Their diet traditionally revolves around milk, blood, and meat from their cattle, and they live in enclosures called "Enkangs," consisting of loaf-shaped houses made from mud, sticks, grass, and cow dung.',
            significance: 'The Maasai are a powerful symbol of Kenyan and Tanzanian cultural heritage, maintaining their traditional way of life in the face of modernization. Their resilience, distinctive cultural practices, and close relationship with the wildlife of the East African savanna have made them one of the most well-known and iconic ethnic groups in Africa, drawing global interest and contributing significantly to tourism.',
            nfts: [
                { name: 'Masai Warrior', image: '/Image/Featured1.jpg' },
                { name: 'Beaded Necklace', image: '/Image/Featured2.jpg' },
            ],
            image: '/Image/Featured1.jpg',
        },
        {
            id: 'zulu',
            title: 'Zulu Heritage',
            summary: 'The Zulu are the largest ethnic group in South Africa, predominantly residing in the province of KwaZulu-Natal. They are celebrated for their formidable history as a sovereign nation, their vibrant and energetic cultural expressions, and their significant influence on the socio-political landscape of the region.',
            history: 'The Zulu Kingdom rose to prominence in the early 19th century under the visionary leadership of Shaka Zulu. Through military innovations, including the development of the "iklwa" stabbing spear and the "buffalo horns" formation, Shaka united various Nguni clans into a centralized and powerful state. The kingdom fiercely resisted colonial expansion, most notably during the Anglo-Zulu War of 1879, which included the historic Zulu victory at the Battle of Isandlwana.',
            traditions: 'Zulu culture is renowned for its intricate beadwork, which serves as a form of communication, conveying messages about social status, identity, and relationships. Traditional ceremonies remain vital, with the annual Reed Dance (Umkhosi woMhlanga) being a significant cultural event where thousands of Zulu maidens present reeds to the king. Music and dance are integral to Zulu life, characterized by powerful vocals, rhythmic drumming, and energetic, story-driven performances.',
            significance: 'The Zulu people have played a pivotal role in the history of South Africa, from their military prowess in the 19th century to their cultural and political influence in the modern era. Their strong sense of identity and rich cultural heritage continue to be a source of national pride and have a profound impact on contemporary South African art, music, and society.',
            nfts: [
                { name: 'Zulu Shield', image: '/Image/Featured2.jpg' },
                { name: 'Reed Dance', image: '/Image/Featured3.jpg' },
            ],
            image: '/Image/Featured2.jpg',
        },
        {
            id: 'yoruba',
            title: 'Yoruba Traditions',
            summary: 'The Yoruba are one of the largest and most influential ethnic groups in West Africa, with a significant population in Nigeria, Benin, and Togo, and a substantial diaspora worldwide. They are known for their ancient and sophisticated urban centers, their complex religious and divination systems, and their highly developed artistic traditions.',
            history: 'The Yoruba have a rich history of state-formation, with powerful city-states and kingdoms such as Ife, considered the cradle of Yoruba civilization, and the Oyo Empire, which dominated a large part of West Africa for centuries. Their history is deeply intertwined with their mythology, which traces their origins to a divine act of creation in Ile-Ife. The transatlantic slave trade led to a significant Yoruba diaspora, particularly in the Americas, where their cultural and religious traditions have been preserved and transformed.',
            traditions: 'Yoruba tradition is characterized by a complex pantheon of deities known as Orishas, each governing a specific aspect of life and nature. Divination, particularly through the Ifá oracle, plays a central role in their spiritual life. The arts are highly valued, with a strong tradition of sculpture in bronze, terracotta, and wood, as well as intricate beadwork and textiles like Aso-Oke. Festivals are a vibrant part of their culture, often featuring elaborate masquerades (Egungun) and energetic drumming.',
            significance: 'Yoruba culture has had a profound and lasting impact on the world, particularly in the areas of religion, art, and music. The Yoruba religious tradition has spread globally, forming the basis of spiritual practices like Santería in Cuba and Candomblé in Brazil. Their artistic legacy, especially the naturalistic sculptures of Ife and the stylized bronzes of Oyo, is celebrated for its sophistication and beauty and has influenced modern and contemporary artists worldwide.',
            nfts: [
                { name: 'Orisha Mask', image: '/Image/Featured3.jpg' },
                { name: 'Yoruba Drums', image: '/Image/Featured1.jpg' },
            ],
            image: '/Image/Featured3.jpg',
        },
        {
            id: 'ashanti',
            title: 'Ashanti Legacy',
            summary: 'The Ashanti are a major ethnic group of the Akan peoples, native to the Ashanti Region of modern-day Ghana. They are renowned for their powerful and wealthy empire, their sophisticated political and social structures, and their stunning craftsmanship, particularly in gold and textiles.',
            history: "The Ashanti Empire emerged as a dominant force in West Africa in the late 17th century under the leadership of Osei Tutu, who unified several Akan states. The empire's wealth was built on the region's vast gold deposits and its strategic control of trade routes. The Ashanti fiercely resisted British colonial encroachment in a series of conflicts known as the Anglo-Ashanti Wars, demonstrating their military prowess and determination to maintain their sovereignty.",
            traditions: "A central element of Ashanti tradition is the Golden Stool(Sika Dwa Kofi), which is believed to have descended from the heavens and to embody the soul of the Ashanti nation.Their society is matrilineal, with lineage and inheritance traced through the mother's side. The Ashanti are masters of weaving, creating the famous Kente cloth, a vibrant and symbolic textile once reserved for royalty. Adinkra symbols, which represent concepts or aphorisms, are also a prominent feature of their visual culture, used in textiles, pottery, and architecture.",
            significance: "The Ashanti Kingdom stands as a testament to the advanced social and political organization of pre-colonial African societies. Their art, particularly their goldwork and Kente cloth, is celebrated globally for its beauty and symbolic depth. The legacy of the Ashanti continues to be a source of immense pride and cultural identity for the people of Ghana and has contributed significantly to the country's rich cultural heritage.",
            nfts: [
                { name: 'Golden Stool', image: '/Image/Featured2.jpg' },
                { name: 'Kente Cloth', image: '/Image/Featured3.jpg' },
            ],
            image: '/Image/Featured2.jpg',
        },
        {
            id: 'benin',
            title: 'Benin Kingdom',
            summary: 'The Benin Kingdom, located in what is now southern Nigeria, was a highly centralized state renowned for its exceptional artistic heritage, particularly its masterfully crafted bronze and ivory sculptures. The kingdom was a major power in West Africa from the 13th to the 19th century, with a complex political and social structure.',
            history: 'The Benin Kingdom was founded by the Edo people and was ruled by a succession of powerful Obas (kings). The kingdom reached its zenith from the 15th to the 17th centuries, expanding its territory and establishing trade relations with European powers, initially the Portuguese. The capital, Benin City, was a large and well-organized urban center with impressive earthen walls. In 1897, the kingdom was conquered by a British punitive expedition, which resulted in the looting of thousands of its famous bronze plaques and sculptures.',
            traditions: 'The artistic traditions of the Benin Kingdom were central to its courtly life and religious practices. Skilled artisans, organized into guilds, produced a wide array of artworks for the Oba, including bronze heads of past rulers, intricate ivory carvings, and bronze plaques that adorned the pillars of the royal palace, depicting historical events and courtly life. These artworks served to glorify the Oba and document the history of the kingdom. Elaborate court rituals and ceremonies were also a key feature of Benin tradition.',
            significance: 'The Benin Bronzes are considered masterpieces of world art and are a powerful symbol of the artistic and cultural achievements of pre-colonial Africa. The history of their creation and subsequent looting has sparked a global conversation about the restitution of cultural artifacts. The legacy of the Benin Kingdom continues to be a source of immense pride for the Edo people and has had a lasting influence on Nigerian art and culture.',
            nfts: [
                { name: 'Benin Bronze', image: '/Image/Featured3.jpg' },
                { name: 'Ivory Mask', image: '/Image/Featured1.jpg' },
            ],
            image: '/Image/Featured3.jpg',
        },
        {
            id: 'ethiopian',
            title: 'Ethiopian Art & Culture',
            summary: 'Ethiopia, located in the Horn of Africa, is a country with an ancient and unique cultural heritage, distinguished by its long history of independence, its early adoption of Christianity, and its distinct artistic and culinary traditions. It is a land of diverse landscapes and peoples, with a rich tapestry of cultural expressions.',
            history: 'Ethiopia boasts one of the oldest civilizations in the world, with its roots in the ancient Kingdom of Aksum, which rose to prominence in the 1st century AD. Aksum was a major trading power and was one of the first empires to adopt Christianity in the 4th century. This long Christian tradition has profoundly shaped Ethiopian history, art, and culture. Ethiopia is also unique among African nations for successfully resisting European colonialism during the "Scramble for Africa" in the late 19th century.',
            traditions: 'A cornerstone of Ethiopian tradition is the Ethiopian Orthodox Tewahedo Church, with its elaborate festivals like Timkat (Epiphany) and Meskel (the Finding of the True Cross). The country is renowned for its rock-hewn churches, most notably those in Lalibela, which are carved out of solid rock. The traditional coffee ceremony is a vital part of social life, involving the roasting, grinding, and brewing of coffee in a ritualized manner. Ethiopian cuisine is distinctive, characterized by the spongy flatbread called injera, which is served with a variety of flavorful stews (wats).',
            significance: "Ethiopia's unique cultural heritage has made a significant contribution to the world's cultural diversity. Its ancient Christian traditions, rock-hewn architecture, and distinct artistic styles stand as a testament to its long and storied history. The country's ability to maintain its independence for most of its history has also made it a symbol of African pride and resilience. Ethiopian art and music continue to evolve, blending traditional forms with contemporary influences.",
            nfts: [
                { name: 'Lalibela Church', image: '/Image/Featured1.jpg' },
                { name: 'Coffee Ceremony', image: '/Image/Featured2.jpg' },
            ],
            image: '/Image/Featured1.jpg',
        },
        {
            id: 'kongo',
            title: 'Kongo Art & Culture',
            summary: 'The Kongo Kingdom, located in what is now the Democratic Republic of Congo, was a powerful and influential state in Central Africa from the 15th to the 19th century. It was known for its rich artistic traditions, particularly its bronze sculptures and masks.',
            history: 'The Kongo Kingdom was founded by the Luba people and was ruled by a succession of powerful kings. The kingdom reached its zenith from the 15th to the 17th centuries, expanding its territory and establishing trade relations with European powers, initially the Portuguese. The capital, Kinshasa, was a large and well-organized urban center with impressive earthen walls.',
            traditions: 'A central element of Kongo tradition is the use of masks, which are used in ceremonies and rituals to communicate with the spirit world. The Kongo are also known for their bronze sculptures, which are often used to represent their kings and rulers. The Kongo are also known for their unique art of wood carving.',
            significance: 'The Kongo Kingdom is a powerful symbol of the artistic and cultural achievements of pre-colonial Africa. The legacy of the Kongo continues to be a source of immense pride for the people of the Democratic Republic of Congo and has had a lasting influence on the country\'s rich cultural heritage.',
            nfts: [
                { name: 'Kongo Mask', image: '/Image/Featured2.jpg' },
                { name: 'Kongo Bronze', image: '/Image/Featured3.jpg' },
            ],
            image: '/Image/Featured3.jpg',
        },
        {
            id: 'hausa',
            title: 'Hausa Art & Culture',
            summary: 'The Hausa are a major ethnic group in West Africa, primarily residing in Nigeria and Niger. They are known for their rich cultural traditions, including their unique art of wood carving and their distinctive architecture.',
            history: 'The Hausa Kingdom was founded by the Hausa people and was ruled by a succession of powerful kings. The kingdom reached its zenith from the 15th to the 17th centuries, expanding its territory and establishing trade relations with European powers, initially the Portuguese. The capital, Kinshasa, was a large and well-organized urban center with impressive earthen walls.',
            traditions: 'A central element of Kongo tradition is the use of masks, which are used in ceremonies and rituals to communicate with the spirit world. The Kongo are also known for their bronze sculptures, which are often used to represent their kings and rulers. The Kongo are also known for their unique art of wood carving.',
            significance: 'The Kongo Kingdom is a powerful symbol of the artistic and cultural achievements of pre-colonial Africa. The legacy of the Kongo continues to be a source of immense pride for the people of the Democratic Republic of Congo and has had a lasting influence on the country\'s rich cultural heritage.',
            nfts: [
                { name: 'Hausa Mask', image: '/Image/Featured2.jpg' },
                { name: 'Hausa Bronze', image: '/Image/Featured3.jpg' },
            ],
            image: '/Image/Featured2.jpg',
        },
        {
            id: 'igbo',
            title: 'Igbo Culture',
            summary: 'The Igbo are a major ethnic group in West Africa, primarily residing in Nigeria and Niger. They are known for their rich cultural traditions, including their unique art of wood carving and their distinctive architecture.',
            history: 'The Igbo Kingdom was founded by the Igbo people and was ruled by a succession of powerful kings. The kingdom reached its zenith from the 15th to the 17th centuries, expanding its territory and establishing trade relations with European powers, initially the Portuguese. The capital, Kinshasa, was a large and well-organized urban center with impressive earthen walls.',
            traditions: 'A central element of Kongo tradition is the use of masks, which are used in ceremonies and rituals to communicate with the spirit world. The Kongo are also known for their bronze sculptures, which are often used to represent their kings and rulers. The Kongo are also known for their unique art of wood carving.',
            significance: 'The Kongo Kingdom is a powerful symbol of the artistic and cultural achievements of pre-colonial Africa. The legacy of the Kongo continues to be a source of immense pride for the people of the Democratic Republic of Congo and has had a lasting influence on the country\'s rich cultural heritage.',
            nfts: [
                { name: 'Igbo Mask', image: '/Image/Featured2.jpg' },
                { name: 'Igbo Bronze', image: '/Image/Featured3.jpg' },
            ],
            image: '/Image/Featured3.jpg',
        }
    ];
    const { id } = useParams();
    const culture = cultures.find(c => c.id === id);

    if (!culture) {
        return <div style={{ color: '#000', padding: '2rem' }}>Culture not found.</div>;
    }

    return (
        <main className="culture-main">
            <div className="culture-container">
                <nav className="culture-breadcrumb">
                    <a href="/explorecultures">Explore</a>
                    <span> / </span>
                    <span style={{ color: '#fff', fontWeight: 600 }}>{culture.title.split(' ')[0]}</span>
                </nav>
                <h1 className="culture-title">{culture.title}</h1>
                <p className="culture-summary">{culture.summary}</p>
                <section className="culture-section">
                    <h2 className="culture-section-title">History</h2>
                    <p className="culture-section-text">{culture.history}</p>
                </section>
                <section className="culture-section">
                    <h2 className="culture-section-title">Traditions</h2>
                    <p className="culture-section-text">{culture.traditions}</p>
                </section>
                <section className="culture-section">
                    <h2 className="culture-section-title">Significance</h2>
                    <p className="culture-section-text">{culture.significance}</p>
                </section>
                <section>
                    <h2 className="culture-nfts-title">Related NFTs</h2>
                    <div className="culture-nfts-grid">
                        {culture.nfts.map((nft, idx) => (
                            <div key={idx} className="culture-nft-card">
                                <img src={nft.image} alt={nft.name} className="culture-nft-img" />
                                <div className="culture-nft-info">
                                    <div className="culture-nft-title">{nft.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
