'use client'
import Link from 'next/link';
import React from 'react';

const Button1 = ({ text, fileUrl, icon, href }: { text: string, fileUrl?: string, icon?: React.ReactNode, href?: string }) => {

    return (
        <>
            {fileUrl ? (
                 <a href={fileUrl} target="_blank" rel="noopener noreferrer" download className='border-2 border-green-400 px-4 py-2 rounded-md text-green-400 font-[500] flex flex-row items-center gap-2'>
                    {icon}{text}
                </a>
            ) : (
                <Link href={href ? href : '#'} target="_blank" className='border-2 border-green-400 px-4 py-2 rounded-md text-green-400 font-[500] flex flex-row items-center gap-2'>
                    {icon}{text}
                </Link>
            )}
        </>
    );
}

export default Button1;
