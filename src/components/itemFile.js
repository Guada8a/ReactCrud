// ItemFile.js
'use client';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';
import IconFilePdf from '@/assets/pdfIcon';
import IconMicrosoftword from '@/assets/wordIcon';
import IconMp4 from '@/assets/mp4';
import IconMicrosoftexcel from '@/assets/excelIcon';
import IconImage from '@/assets/jpgIcon';
import IconMicrosoftpowerpoint from '@/assets/powerIcon';
import IconFileZip16 from '@/assets/zipIcon';
import IconFilePngBox from '@/assets/pngIcon';
import IconBxFileBlank from '@/assets/defaultIcon';

const extensionImg = {
    pdf: <IconFilePdf />,
    doc: <IconMicrosoftword />, docx: <IconMicrosoftword />,
    mp4: <IconMp4 />,
    xls: <IconMicrosoftexcel />, xlsx: <IconMicrosoftexcel />,
    ppt: <IconMicrosoftpowerpoint />, pptx: <IconMicrosoftpowerpoint />,
    jpg: <IconImage />, jpeg: <IconImage />,
    png: <IconFilePngBox />,
    gif: '/assets/gif.svg',
    zip: <IconFileZip16 />,
    rar: <IconFileZip16 />,
    default: <IconBxFileBlank />,
};

const ItemFile = (props) => {
    return (
        <li className="flex py-4 first:pt-0 last:pb-0">
            {extensionImg[props.fileName.split('.').pop()] || extensionImg.default}
            {props.tag ? (
                <Chip label={props.tag} size="small" className='ml-3' />
            ) : (
                <Chip label="Sin etiqueta" size="small" className='ml-3' />
            )}

            <div className="ml-3 overflow-hidden">
                <p className="text-start text-medium font-semibold text-gray-800">{props.fileName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{props.fileSize} bytes</p>
            </div>
            {/* Area Icons */}
            <div className="ml-auto flex items-center">
                <IconButton aria-label="edit" size="small" className='hover:bg-yellow-500' onClick={props.onEdit}>
                    <EditIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="delete" size="small" onClick={props.onRemove} className='hover:bg-red-500'>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
        </li>
    );
};

export default ItemFile;
