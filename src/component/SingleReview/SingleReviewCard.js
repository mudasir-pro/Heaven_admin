import React, { useState } from 'react'
import { CiStar } from 'react-icons/ci';
import { MdOutlineSpeed } from "react-icons/md";
import { GoCodespaces } from "react-icons/go";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { RiPrinterCloudFill } from "react-icons/ri";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SingleReviewCard = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const names = [
        {

            element: 'Preis',
        },
        {

            element: 'Innovation',
        },
        {

            element: 'Software',
        },
        {

            element: 'Kundenservice',
        },
        {

            element: 'Verarbeitungen'
        }
    ]

     const navigate =useNavigate();

    return (
        <div className='lg:grid lg:grid-cols-7'>
            <div className='lg:flex items-center justify-center lg:col-span-5 pr-4 bg-slate-200'>
                <div className='flex mt-20 items-center lg:flex-col'>
                    <div className='pl-4 pr-4'>
                        <img src="https://static.wixstatic.com/media/5d104f_67ee508823b24198b6122f43e47d5b08~mv2.jpg/v1/crop/x_66,y_0,w_1852,h_1125/fill/w_443,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg" alt="" />
                    </div>
                    <div className='lg:flex items-center justify-center py-8' >
                        <div className='w-20 h-20 gap-x-4'>
                            <img src="https://static.wixstatic.com/media/5d104f_a809b58f7dd640c09a3263e0f36a3bb5~mv2.jpg/v1/crop/x_144,y_0,w_1856,h_1125/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Titelbild.jpg" alt="" />
                        </div>
                        <div className='w-20 h-20 gap-x-4'>
                            <img src="https://static.wixstatic.com/media/5d104f_eac9e31f29b6464f89fa2cf860552b99~mv2.jpg/v1/crop/x_71,y_0,w_1859,h_1125/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20Ender-5%20S1-2.jpg" alt="" />
                        </div>
                        <div className='w-20 h-20 gap-x-4'>
                            <img src="https://static.wixstatic.com/media/5d104f_1aa9f52a94d847f0a03803c46f26fa23~mv2.jpg/v1/crop/x_26,y_0,w_2325,h_1407/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/%20Anycubic%20Vyper%20Gesamtansicht.jpg" alt="" />
                        </div>
                        <div className='w-20 h-20 gap-x-4'>
                            <img src="https://static.wixstatic.com/media/5d104f_942ed39e2eb04f3690ce73118799546d~mv2.jpg/v1/crop/x_42,y_0,w_1115,h_675/fill/w_448,h_268,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Creality%20K1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className=' lg:px-4 px-8'>
                    <h1 className='py-8 text-neutral-800 text-2xl font-semibold font-[Avenir]'>Creality Ender 3 S1</h1>
                    <p className='pb-8'>Der Ender 3 S1 ist die dritte Generation des erfolgreichen Creality Ender. <br />
                        Dieser 3D Drucker ist durch jahrelange Weiterentwicklung erprobt und <br />
                        bietet zahlreiche Erweiterungsmöglichkeiten.</p>
                    <div className='flex items-center'>
                        <h1 className='text-xl font-semibold'>4.5</h1>

                        {[...Array(5)].map((_, index) => (

                            <CiStar key={index} size={30} className='text-yellow-400' />

                        ))}
                    </div>
                    <div>
                        {[...Array(5)].map((_, index2) => (

                            <div key={index2} className='flex items-center'>

                                <div className='h-2 w-60 relative bg-[#EEEEEE] rounded-lg '>
                                    <div className='absolute w-40 h-2 bg-[#00CED1]' />
                                </div>
                                <h1 key={index2} className='pl-4'>
                                    {names[index2].element}
                                </h1>
                            </div>


                        ))}

                    </div>
                </div>
            </div>

            <div className='lg:col-span-2 lg:z-10 lg:bg-white lg:h-screen lg:mt-8 lg:shadow-2xl lg:shadow-slate-600' />
            <>
                {
                    isDesktop ? (
                        <div onClick={navigate('/')} className='bg-[#C2DCF0] w-screen flex flex-col  '>
                            <div className='flex items-center justify-evenly pt-8 pb-4'>
                                <div className='flex items-center'>
                                    <MdOutlineSpeed size={80} />
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>Geschwindigkeit</h1>
                                        <h3 className='font-extralight'>150 mm/s</h3>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <GoCodespaces size={80} />
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>Geschwindigkeit</h1>
                                        <h3 className='font-extralight'>150 mm/s</h3>
                                    </div>
                                </div>

                            </div>
                            <div className='flex items-center justify-evenly pb-8 pt-4'>
                                <div className='flex items-center'>
                                    <FaTemperatureThreeQuarters size={80} />
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>Geschwindigkeit</h1>
                                        <h3 className='font-extralight'>150 mm/s</h3>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <RiPrinterCloudFill size={80} />
                                    <div className='px-4'>
                                        <h1 className='font-semibold text-lg'>Geschwindigkeit</h1>
                                        <h3 className='font-extralight'>150 mm/s</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )
                }

            </>
        </div>
    )
}

export default SingleReviewCard