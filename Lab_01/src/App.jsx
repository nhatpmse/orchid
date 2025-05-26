
import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';


function App() {
  const data = [
    {

      "id": 1,
      "name": "Phalaenopsis amabilis",
      "origin": "Indonesia, Philippines",
      "color": "White",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.8,
      "numberOfLike": 1523,
      "category": "Phalaenopsis",
      "image": "https://www.nature-and-garden.com/gardening/white-orchid-varieties-5-immaculate-varieties.html"
    },
    {
      "id": 2,
      "name": "Cattleya labiata",
      "origin": "Brazil",
      "color": "Purple–Pink",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.7,
      "numberOfLike": 1340,
      "category": "Cattleya",
      "image": "https://example.com/images/cattleya_labiata.jpg"
    },
    {
      "id": 3,
      "name": "Dendrobium nobile",
      "origin": "Himalayas, Southeast Asia",
      "color": "White–Pink",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.5,
      "numberOfLike": 980,
      "category": "Dendrobium",
      "image": "https://example.com/images/dendrobium_nobile.jpg"
    },
    {
      "id": 4,
      "name": "Vanda coerulea",
      "origin": "India, Myanmar",
      "color": "Blue",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.6,
      "numberOfLike": 876,
      "category": "Vanda",
      "image": "https://example.com/images/vanda_coerulea.jpg"
    },
    {
      "id": 5,
      "name": "Paphiopedilum rothschildianum",
      "origin": "Malaysia",
      "color": "Yellow–Brown",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.9,
      "numberOfLike": 620,
      "category": "Paphiopedilum",
      "image": "https://example.com/images/paphiopedilum_rothschildianum.jpg"
    },
    {
      "id": 6,
      "name": "Miltoniopsis vexillaria",
      "origin": "Peru, Bolivia",
      "color": "Pink–White",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.5,
      "numberOfLike": 540,
      "category": "Miltoniopsis",
      "image": "https://example.com/images/miltoniopsis_vexillaria.jpg"
    },
    {
      "id": 7,
      "name": "Oncidium sphacelatum",
      "origin": "Mexico, Central America",
      "color": "Yellow",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.3,
      "numberOfLike": 430,
      "category": "Oncidium",
      "image": "https://example.com/images/oncidium_sphacelatum.jpg"
    },
    {
      "id": 8,
      "name": "Aerides odorata",
      "origin": "India, Southeast Asia",
      "color": "Light Pink–White",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.4,
      "numberOfLike": 390,
      "category": "Aerides",
      "image": "https://example.com/images/aerides_odorata.jpg"
    },
    {
      "id": 9,
      "name": "Cymbidium ensifolium",
      "origin": "China, Vietnam",
      "color": "Light Yellow",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.2,
      "numberOfLike": 350,
      "category": "Cymbidium",
      "image": "https://example.com/images/cymbidium_ensifolium.jpg"
    },
    {
      "id": 10,
      "name": "Vanda tricolor",
      "origin": "Indonesia",
      "color": "Blue–White–Purple",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.6,
      "numberOfLike": 780,
      "category": "Vanda",
      "image": "https://example.com/images/vanda_tricolor.jpg"
    },
    {
      "id": 11,
      "name": "Encyclia tampensis",
      "origin": "Florida, Caribbean",
      "color": "White–Yellow",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.1,
      "numberOfLike": 310,
      "category": "Encyclia",
      "image": "https://example.com/images/encyclia_tampensis.jpg"
    },
    {
      "id": 12,
      "name": "Brassavola cucullata",
      "origin": "Mexico, Central America",
      "color": "White",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.0,
      "numberOfLike": 280,
      "category": "Brassavola",
      "image": "https://example.com/images/brassavola_cucullata.jpg"
    },
    {
      "id": 13,
      "name": "Odontoglossum grande",
      "origin": "Andes (South America)",
      "color": "White–Reddish Brown",
      "isSpecial": false,
      "isNatural": true,
      "rating": 4.3,
      "numberOfLike": 410,
      "category": "Odontoglossum",
      "image": "https://example.com/images/odontoglossum_grande.jpg"
    },
    {
      "id": 14,
      "name": "Masdevallia coccinea",
      "origin": "Andes (South America)",
      "color": "Orange–Red",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.2,
      "numberOfLike": 260,
      "category": "Masdevallia",
      "image": "https://example.com/images/masdevallia_coccinea.jpg"
    },
    {
      "id": 15,
      "name": "Angraecum sesquipedale",
      "origin": "Madagascar",
      "color": "White",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.8,
      "numberOfLike": 430,
      "category": "Angraecum",
      "image": "https://example.com/images/angraecum_sesquipedale.jpg"
    },
    {
      "id": 16,
      "name": "Stanhopea tigrina",
      "origin": "Mexico",
      "color": "Orange–Pink",
      "isSpecial": true,
      "isNatural": true,
      "rating": 4.7,
      "numberOfLike": 370,
      "category": "Stanhopea",
      "image": "https://example.com/images/stanhopea_tigrina.jpg"
    }
  ];
  return (
    <>
      <Navbar />

      <div className='row'>

        {data.map((i) => (
          <Card key={i.id} pp={i} />
        ))}

      </div>
    </>
  );
}

export default App;

