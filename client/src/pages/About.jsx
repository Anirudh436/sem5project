import React from 'react';
import profileimage from './profileimage.jpg';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl font-bold mb-4 text-slate-800'>About Anirudh's Estate</h1>
          <p className='mb-4 text-slate-700'>
            Welcome to Anirudh's Estate, your trusted real estate marketplace. We specialize in helping you buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is committed to providing exceptional service and making the process as smooth as possible.
          </p>
          <p className='mb-4 text-slate-700'>
            With deep knowledge of the local market, we ensure that our clients achieve their real estate goals, whether you’re looking for your dream home or selling your property.
          </p>
        </div>
        
      </div>

      <div className='mt-12'>
        <h2 className='text-2xl font-semibold mb-4 text-slate-800'>Our Mission</h2>
        <p className='mb-4 text-slate-700'>
          Our mission is to provide expert advice, personalized service, and unparalleled support throughout your real estate journey. Whether you’re buying, selling, or renting, we’re here to help you every step of the way.
        </p>
        <p className='mb-4 text-slate-700'>
          Our goal is to make your experience exciting and rewarding. We believe in creating long-lasting relationships with our clients by delivering exceptional results.
        </p>
      </div>

      

      {/* Contact Details */}
      <div className='mt-12 bg-slate-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold mb-4 text-slate-800'>Contact Us</h2>
        <p className='mb-2 text-slate-700'>Phone: <a href='tel:+919766441452' className='text-blue-600 hover:underline'>+91 9766441452</a></p>
        <p className='mb-2 text-slate-700'>Email: <a href='mailto:info@anirudhsestate.com' className='text-blue-600 hover:underline'>info@anirudhsestate.com</a></p>
        <p className='mb-4 text-slate-700'>Address: Manvelpada Road, Virar, India</p>

        {/* Add social media or other links */}
        <div className='flex space-x-4'>
          <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
            LinkedIn
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
