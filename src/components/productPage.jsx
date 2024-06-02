// import React, { useState, useEffect } from 'react';
// import Searchbar from './Searchbar';
// import Gallery from '../pages/Gallery';

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://car-data.p.rapidapi.com/cars', {
//           method: 'GET',
//           headers: {
//             'X-RapidAPI-Key': 'b622df426fmsha6933a7669ba1bfp1b7cb6jsnbc928321d3b1',
//             'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
//           }
//         });

//         if (!response.ok) {
//           throw new Error(`${response.status}: ${response.statusText}`);
//         }

//         const data = await response.json();
//         const placeholderImages = [
//           "https://th.bing.com/th/id/OIP.2theWd_f_geuAarMt4KaoAAAAA?rs=1&pid=ImgDetMain",
//           "https://www.carscoops.com/wp-content/uploads/2020/01/Mini-Convertible-Sidewalk-1-1.jpg",
//           "https://media.autoexpress.co.uk/image/private/s--mMjjiETe--/v1579701769/autoexpress/2019/06/01_60.jpg",
//           "https://th.bing.com/th/id/R.d50d8644e1d239f7b28e43793628761f?rik=gYNqREXj0m8FdA&riu=http%3a%2f%2fwww.dragtimes.com%2fimages%2f31493-2013-Ford-Taurus.jpg&ehk=llQR8r3%2bvRVpvGs%2fv4hPr4tFqT20Depzn4g6x4UpiYI%3d&risl=&pid=ImgRaw&r=0",
//           "https://s3.caradvice.com.au/wp-content/uploads/2017/03/2018_volvo_xc60_55.jpg",
//           "https://rmsothebys-cache.azureedge.net/4/8/b/9/3/5/48b935db27c1ef7242a4752b8bfe75ff183bb79c.jpg",
//           "https://th.bing.com/th/id/OIP.J3He275SWLcgMkXj-UPmzwAAAA?rs=1&pid=ImgDetMain",
//           "https://media.ed.edmunds-media.com/gmc/canyon/2016/oem/2016_gmc_canyon_crew-cab-pickup_slt_fq_oem_1_1280.jpg",
//           "https://i.redd.it/pti82qc47rf91.jpg",
//           "https://th.bing.com/th/id/OIP.uqSQP3tKuz-CZY8LhqPQdQHaE8?rs=1&pid=ImgDetMain"
//         ];

//         const productsWithImages = data.map((product, index) => ({
//           ...product,
//           image: placeholderImages[index % placeholderImages.length]
//         }));

//         setProducts(productsWithImages);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   const filteredProducts = products.filter(product => 
//     product.make.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     product.model.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <Searchbar onSearch={handleSearch} />
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       <Gallery products={filteredProducts} />
//     </div>
//   );
// };

// export default ProductPage;
