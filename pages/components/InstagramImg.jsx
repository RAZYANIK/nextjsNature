import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramImg = ({ socialImg }) => {
    return (
        <div className='relative'>
            {/* <PhotoProvider>
                <div className="foo">
                    <PhotoView src={IgImg1}> */}
            <Image
                src={socialImg}
                alt='/'
                className='w-full h-full'
                layout="responsive"
            />
            {/* </PhotoView>
                </div>
            </PhotoProvider> */}

            {/* Overlay */}
            <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
                <Link href='https://www.instagram.com/nature/' target='_blank' className='text-gray-300 hidden group-hover:block'>
                    <FaInstagram size={30} className='z-10' />
                </Link>
            </div>
        </div>
    );
};

export default InstagramImg;