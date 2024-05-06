"use client"
import React from 'react';
import toast from 'react-hot-toast';
import { ToastStyles } from '../data';

const CopytextP = ({text}:{text:string}) => {
    const copyTextToClipboard = async (text:string) => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('Text copied',ToastStyles);
            return true;
        } catch (error) {
            toast.error('Failed to copy',ToastStyles);
            console.error('Failed to copy: ', error);
            return null;
        }
    };
  return (
    <p onClick={()=>copyTextToClipboard(text)} className=' cursor-copy font-[600] hover:underline hover:underline-offset-4 decoration-lime-400'>{text}</p>
  );
}

export default CopytextP;
