// FileComponent.js
'use client';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileComponent = ({ onDrop }) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop
    });

    return (
        <section>
            <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 p-4 text-center">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <CloudUploadIcon color='inherit' fontSize='large' />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Arrastra y suelta</span> los archivos aquí o <span className="text-blue-500 dark:text-blue-400">selecciona uno</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FileComponent;
