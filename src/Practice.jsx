// import React, { useState, useEffect } from "react";
// import "./Practice.css";

// export default function Practice() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://gorest.co.in/public/v2/users");
//         const dataa = await response.json();
//         setData(dataa);
//         console.log(data);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="tableMain">
//       <h1>Table Data</h1>
//       <div className="tableContainer">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Gender</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.gender}</td>
//                 {/* <td>{item.status}</td> */}
//                 <select>
//                   <option>{item.status}</option>
//                   {/* <option>inactive</option> */}
//                 </select>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
