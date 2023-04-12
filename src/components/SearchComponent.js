// import React, { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";

// const SearchComponent = () => {
//   //set de hooks useState

//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

//   // funcion para traer datos de la api

//   const URL = `${process.env.REACT_APP_API_BASE_URL}/products`;

//   const showData = async () => {
//     const response = await fetch(URL);
//     const data = await response.json();
//     console.log(data);
//     setProducts(data);
//   };

//   //funcion de busqueda

//   const searcher = (e) => {
//     setSearch(e.target.value);
//     console.log(e.target.value);
//   };

//   //metodo de filtrado
//   let results = [];
//   if (!search) {
//     results = products;
//   } else {
//     results = products.filter((dato) =>
//       dato.title.toLowerCase().includes(search.toLocaleLowerCase()),
//     );
//   }

//   useEffect(() => {
//     showData();
//   }, []);

//   //renderizar

//   return (
//     <div className="container-fliod">
//       <input
//         value={search}
//         onChange={searcher}
//         type="text"
//         placeholder="Search"
//         className="form-control"
//       ></input>
//       <Table className="table table-stripped table-hover mt-5 shadow-lg ">
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Titulo</th>
//             <th>Descripcion</th>
//           </tr>
//         </thead>
//         <tbody>
//           {results.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.title}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default SearchComponent;
