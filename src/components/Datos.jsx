import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../styles/formulario.css";

const Cont = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
   width: 90%;
   margin: auto;
   justify-content: center;
   align-content: center;
   align-items: center;
   padding: 20px;
   margin-top: 20px;
   box-shadow: -3px 5px 15px 5px rgba(255, 255, 255, 0.41);
   background-color: white;
   border-radius: 10px;
`;

const Button = styled.button`
   justify-content: center;
   width: 50%;
   margin: auto;
   color: white;
   background-color: #d10505;
   border: none;
   padding: 10px;
   border-radius: 5px;
   cursor: pointer;
`;

const Datos = () => {
   const url = "https://bd-simulacro-11febrero.herokuapp.com/canciones/";

   const [lista, setLista] = useState([]);

   const getData = () => {
      axios
         .get(url)
         .then((response) => {
            setLista(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const deleteData = (id) => {
      axios
         .delete(url + id)
         .then((response) => {
            getData();
            console.log(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <div>
         {lista.map((u) => (
            <Cont key={u.id}>
               <div>{u.titulo}</div>
               <div>{u.artista}</div>
               <div>{u.album}</div>
               <div>{u.year}</div>
               <div>
                  <iframe
                     width="300"
                     height="190"
                     src={u.video}
                     title="YouTube video player"
                     frameborder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowfullscreen
                  ></iframe>
               </div>
               <Button onClick={() => deleteData(u.id)}>Eliminar</Button>
            </Cont>
         ))}
      </div>
   );
};

export default Datos;
