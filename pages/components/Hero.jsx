import React from 'react';

const Hero = ({ heading, message }) => {
    return (
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
            {/* Overlay */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
            <div className='p-5 text-white z-[2] mt-[-10rem]'>
                <h2 className='text-5xl font-bold'>{heading}</h2>
                <p className='py-5 text-xl'>{message}</p>
                <div>
                    <label htmlFor="my-modal-3" className='px-8 py-2 border'>Book</label>
                    {/* The button to open modal */}


                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold text-black">Thank you for your Interest</h3>
                            <p className="py-4 text-black">Sorry! Right now we do not have any available free schedule. You can fill the contact form for further queries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;