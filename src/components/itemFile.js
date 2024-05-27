// ItemFile.js
'use client';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';

// Imágenes de las extensiones de archivo desde la web
const extensionImg = {
    pdf: '/assets/pdf.svg',
    doc: '/assets/doc.svg',
    docx: '/assets/doc.svg',
    xls: '/assets/xls.svg',
    xlsx: '/assets/xls.svg',
    ppt: '/assets/ppt.svg',
    pptx: '/assets/ppt.svg',
    jpg: '/assets/jpg.svg',
    jpeg: '/assets/jpg.svg',
    png: '/assets/png.svg',
    gif: '/assets/gif.svg',
    zip: '/assets/zip.svg',
    rar: '/assets/zip.svg',
    default: '/assets/file.svg'
};

const ItemFile = (props) => {
    return (
        <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
            <Image
                src={extensionImg[props.fileName.split('.').pop()] || extensionImg.default}
                alt="file"
                width={24}
                height={24}
            />
            <div className="flex flex-col ml-2">
                <p className="text-start text-sm font-semibold text-gray-800">{props.fileName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{props.fileSize} bytes</p>
            </div>
            <IconButton aria-label="delete" size="small" onClick={props.onRemove}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </div>
    );
};

export default ItemFile;
