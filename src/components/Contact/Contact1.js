import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



export default function Example() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ywhccsq', 'template_kg9ksug', e.target, 'user_XePF2yIsTmWj2b85wjl16')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };



  return (
    <div className='bg-gray-800'>
     
    </div>
  )
}
