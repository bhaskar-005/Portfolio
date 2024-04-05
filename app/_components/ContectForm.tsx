"use client";
import { mailSend } from "@/utils/NodeMailer";
import React, { useState } from "react";
import Button2 from "./button/Button2";
import toast from "react-hot-toast";
import { ToastStyles } from "../data";
import { MailSender } from "@/utils/MailSenderServer";
import { MailReceiv } from "../mailTemplate/MailReceiv";

const ContectForm = () => {
  const [mail, setmail] = useState<string>('');
  const [Text, setText] = useState<string>('');

  const onclickHandler =async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if (!mail) {
      toast.error('please Enter Your Email',ToastStyles);
      return null;
    }
    if (!Text) {
      toast.error('Your textarea is empty.',ToastStyles);
      return null;
    }
   const toastId = toast.loading('Sanding..',ToastStyles);
   try {
    const res= await MailSender({
      userMail:mail!,
      Html:MailReceiv(mail,Text),
     })
    if (res) {
      toast.success('Sent mail successfully.',ToastStyles);
      toast.dismiss(toastId);
      return
    }
    if(!res){
     toast.error('Mail not sand.Try again.',ToastStyles);
    }
   } catch (error) {
    toast.error('error while sending mail.',ToastStyles);
   }
   toast.dismiss(toastId);
  }


  return (
    <form
      onSubmit={(e) =>onclickHandler(e)}
      className=" flex gap-3 flex-col bg-slate-800 sm:px-8 px-6 py-16 rounded-xl card"
      
    >
      <label htmlFor="text">
        Your Message For Me <span className="text-red-600">*</span>
      </label>
      <textarea
        itemID="text"
        name=""
        className="bg-slate-800 focus:outline-none mb-6 border-b-2 border-b-green-400 text-xl border-b-rounded-full"
        id=""
        onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>setText(e.target.value)}
        cols={20}
        rows={5}
      />
      <label htmlFor="email">
        Your Email Address <span className="text-red-600">*</span>
      </label>
      <input
        id="email"
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setmail(e.target.value)
        }
        className="bg-slate-800 mb-10 focus:outline-none  border-b-2 border-b-green-400 text-xl p-2 "
      />
      <Button2 text="Submit" />
    </form>
  );
};

export default ContectForm;
