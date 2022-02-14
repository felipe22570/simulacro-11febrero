import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
   padding: 15px;
   width: 40%;
   display: flex;
   flex-direction: column;
   gap: 10px;
   border: 1px solid black;
   background-color: white;
   padding: 30px;
`;

const Contenedor = styled.div`
   display: flex;
   justify-content: space-around;
   margin-top: 30px;
`;

const Button = styled.button`
   background-color: hsl(172, 19%, 62%);
   border: none;
   border-radius: 10px;
   padding: 15px;
   color: white;
   font-weight: bold;
   margin-top: 10px;
   cursor: pointer;
`;

const Input = styled.input`
   height: 25px;
`;

const Titulo = styled.div`
   font-size: 35px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 20px;
   width: 1fr;
   color: white;
   font-weight: bold;
`;

const Formulario = () => {
   const url = "https://bd-simulacro-11febrero.herokuapp.com/canciones";

   const [cancion, setCancion] = useState({
      id: "",
      titulo: "",
      artista: "",
      album: "",
      year: "",
      video: "",
   });

   const { id, titulo, artista, album, year, video } = cancion;

   const handleOnchange = ({ target }) => {
      setCancion({
         ...cancion,
         [target.name]: target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   const postData = () => {
      axios
         .post(url, cancion)
         .then((response) => {
            console.log(response.data);
            alert("Canción agregada correctamente!");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <Contenedor>
         <Titulo>
            Todas tus canciones favoritas <br /> en un sólo lugar!
         </Titulo>
         <StyledForm action="" onSubmit={handleSubmit}>
            <label>Título</label>
            <Input
               type="text"
               name="titulo"
               id="form-titulo"
               onChange={handleOnchange}
               value={titulo}
            />
            <label>Artista</label>
            <Input
               type="text"
               name="artista"
               id="artista"
               onChange={handleOnchange}
               value={artista}
            />
            <label>Album</label>
            <Input type="text" name="album" id="album" onChange={handleOnchange} value={album} />
            <label>Año de lanzamiento</label>
            <Input type="number" name="year" id="year" onChange={handleOnchange} value={year} />
            <label>Video</label>
            <Input type="text" name="video" id="video" onChange={handleOnchange} value={video} />
            <Button type="submit" onClick={postData}>
               Enviar
            </Button>
         </StyledForm>
      </Contenedor>
   );
};

export default Formulario;
