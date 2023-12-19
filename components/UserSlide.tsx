import React from 'react'
import Image from 'next/image'

export default function UserSlide() {
    return (
        <>
            <div className="w-full h-full p-6 xl:max-w-md">
                <div className=' shadow-xl rounded-md flex flex-col justify-center items-center p-8 gap-2'>
                    <Image
                        className="rounded-full shadow-xl"
                        src="/avatar-img.jpg"
                        width={120}
                        height={120}
                        alt="avatar"
                        priority
                        loading="eager"
                    />
                    <div className=' p-3 rounded-md text-2xl sm:text-4xl'>pakin suandee</div>
                    <div className=' p-3 rounded-md text-base'>Lorem ipsum dolor sit amet.</div>
                    <div className=' p-3 rounded-md text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, consequatur mollitia. Recusandae id voluptatum inventore minus? Odio, fugit ea optio distinctio culpa provident fugiat dolor in earum iure dolorum fuga.</div>
                    <div className=' p-3 rounded-md text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore culpa facilis mollitia perferendis et.</div>
                    <div className=' p-3 rounded-md text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore culpa facilis mollitia perferendis et.</div>

                </div>
            </div>
        </>
    )
}
