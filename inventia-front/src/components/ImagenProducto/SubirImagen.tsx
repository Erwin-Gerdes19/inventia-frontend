// src/views/SubirImagen.tsx
import React, { useState } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { useRef } from 'react';

export default function SubirImagen(): JSX.Element {
  const [imagen, setImagen] = useState<File | null>(null);
  const [progreso, setProgreso] = useState(0);
  const [urlImagen, setUrlImagen] = useState('');
  const toast = useRef<Toast>(null);

  const handleSubirImagen = async () => {
    if (!imagen) {
      toast.current?.show({
        severity: 'warn',
        summary: 'Advertencia',
        detail: 'Por favor, selecciona una imagen.',
      });
      return;
    }

    const formData = new FormData();
    formData.append('imagen', imagen);

    try {
      const response = await fetch('/api/subir-imagen', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUrlImagen(data.url);
        toast.current?.show({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Imagen subida correctamente.',
        });
      } else {
        toast.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al subir la imagen.',
        });
      }
    } catch (error) {
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Error de conexión.',
      });
    }
  };

  return (
    <div className="p-4">
      <Toast ref={toast} />
      <h1 className="text-2xl font-bold mb-4">Subir Imagen del Producto</h1>

      {/* Componente FileUpload de PrimeReact */}
      <FileUpload
        mode="basic"
        name="imagen"
        accept="image/*"
        maxFileSize={1000000} // 1MB
        chooseLabel="Seleccionar Imagen"
        onSelect={(e) => setImagen(e.files[0])}
        onClear={() => setImagen(null)}
        auto
      />

      {/* Botón para subir la imagen */}
      <Button
        label="Subir Imagen"
        icon="pi pi-upload"
        className="mt-4"
        onClick={handleSubirImagen}
      />

      {/* Barra de progreso (opcional) */}
      {progreso > 0 && <ProgressBar value={progreso} className="mt-4" />}

      {/* Mostrar la imagen subida */}
      {urlImagen && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Imagen Subida:</h2>
          <img
            src={urlImagen}
            alt="Imagen del producto"
            className="mt-2 max-w-full h-auto"
          />
        </div>
      )}
    </div>
  );
}