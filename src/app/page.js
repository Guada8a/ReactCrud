'use client';

import React, { useState } from 'react';
import FileComponent from "@/components/file";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import ItemFile from "@/components/itemFile";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
//Icons
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Save from '@mui/icons-material/Save';

const MySwal = withReactContent(Swal);

const Home = () => {
    const [acceptedFiles, setAcceptedFiles] = useState([]);

    const handleDrop = (files) => {
        setAcceptedFiles([...acceptedFiles, ...files]);
        MySwal.close();
    };

    const handleRemove = (fileToRemove) => {
        setAcceptedFiles(acceptedFiles.filter(file => file.path !== fileToRemove.path));
    };

    const handleEdit = (fileToEdit) => {
        //Agregar etiqueta
        MySwal.fire({
            title: 'Agregar etiqueta',
            input: 'text',
            inputLabel: 'Etiqueta',
            inputPlaceholder: 'Ejemplo: Documentos',
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: "#3B82F6",
            cancelButtonColor: "#EF4444",
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes agregar una etiqueta';
                }
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const files = acceptedFiles.map(file => {
                    if (file.path === fileToEdit.path) {
                        file.tag = result.value;
                    }
                    return file;
                });

                //Actualizar archivos
                setAcceptedFiles(files);
            }
        });
    };

    const alertMessage = () => {
        MySwal.fire({
            html: <FileComponent onDrop={handleDrop} />,
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#3B82F6",
            cancelButtonColor: "#EF4444",
        });
    };

    const files = acceptedFiles.map(file => (
        <ItemFile key={file.path} fileName={file.name} fileSize={file.size} onRemove={() => handleRemove(file)} onEdit={() => handleEdit(file)} />
    ));

    return (
        <div className="items-center justify-right w-full h-screen p-10 overflow-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-dark">Subir archivos</h1>

                <Button variant="contained" color="primary" onClick={alertMessage} id="btnUpload" startIcon={<CloudUploadIcon />}>
                    Subir archivos
                </Button>
            </div>
            {/* Mostrar listado */}
            <Card className="mt-5 backdrop-blur-2xl">
                <CardHeader title="Listado de archivos" />
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Archivo
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tamaño
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {files.length > 0 ? files : <tr className="text-center text-gray-500 dark:text-gray-400"><td colSpan="3" className='p-10'>No hay archivos</td></tr>}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

export default Home;
