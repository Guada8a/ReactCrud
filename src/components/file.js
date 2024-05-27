// FileComponent.js
'use client';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ItemFile from './itemFile';

const FileComponent = (props) => {
    const [acceptedFiles, setAcceptedFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: (files) => {
            setAcceptedFiles([...acceptedFiles, ...files]);
        }
    });

    const handleRemove = (fileToRemove) => {
        setAcceptedFiles(acceptedFiles.filter(file => file.path !== fileToRemove.path));
    };

    const files = acceptedFiles.map(file => (
        <ItemFile
            key={file.path}
            fileName={file.path}
            fileSize={file.size}
            onRemove={() => handleRemove(file)}
        />
    ));

    return (
        <section>
            <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 p-4 text-center">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <CloudUploadIcon color='inherit' fontSize='large' />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Arrastra y suelta</span> los archivos aquí o <span className="text-blue-500 dark:text-blue-400">selecciona uno</span> desde tu computadora
                    </p>
                </div>
            </div>
            <aside className="mt-4 text-sm text-dark">
                <h4 className='font-semibold'>Archivos seleccionados</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {files}
                </div>
            </aside>
        </section>
    );
};

export default FileComponent;
