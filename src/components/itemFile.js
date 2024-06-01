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

const convertSize = (bytes) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

const ItemFile = (props) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        {extensionImg[props.fileName.split('.').pop()] || extensionImg.default}
                    </div>
                    {props.tag ? (
                        <Chip label={props.tag} size="small" className='ml-3' />
                    ) : (
                        <Chip label="Sin etiqueta" size="small" className='ml-3' />
                    )}
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{props.fileName}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 dark:text-gray-400">{convertSize(props.fileSize)}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <IconButton aria-label="edit" size="small" className='hover:bg-yellow-500' onClick={props.onEdit}>
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="small" onClick={props.onRemove} className='hover:bg-red-500'>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </td>
        </tr>
    );
};

export default ItemFile;
