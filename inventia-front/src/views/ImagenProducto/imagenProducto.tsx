import React from "react";
import SubirImagen from "../../components/ImagenProducto/SubirImagen";

export default function ImagenProducto(): JSX.Element {
    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Imagen del Producto</h1>
        <p className="mb-4">
          Aquí puedes subir la imagen del producto que deseas agregar.
        </p>

        <SubirImagen />
      </div>
    );
}