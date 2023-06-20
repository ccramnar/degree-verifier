'use client'
import {ChangeEvent, useState} from 'react'

export default function Upload() {
    const [file, setFile] = useState<File>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files){
            setFile(e.target.files[0]);
        }
    }

    console.log({file})

    return (
    <div className='flex flex-col gap-2 '>
        <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-6 pb-6">
                    <svg aria-hidden="true" className="w-8 h-8 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">PDF only</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" accept="application/pdf" onChange={handleFileChange}  />
            </label>
        </div> 
        {file && <div className="col-span-1 flex rounded-md shadow-sm">
        <div
            className=
            'bg-blue-300 flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
        >
            PDF
        </div>
        <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
            <a  className="font-medium text-gray-900 hover:text-gray-600">
                {file.name}
            </a>
            </div>
        </div></div>
        }
    </div>
    )
}