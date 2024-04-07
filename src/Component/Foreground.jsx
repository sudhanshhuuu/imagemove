import React, { useRef } from 'react'

import Card from './Card'

const Foreground = () => {

    const ref =  useRef(null)

    const data = [
        {
            id: '1',
            desc: "Hlo my name is Sudhanshu kaushik , I like coding , etc.....",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-700" }
        },
        {
            id: '2',
            desc: "Hlo my name is Sudhanshu kaushik , I like coding , etc.....",
            filesize: ".7mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-blue-700" }
        },
        {
            id: '3',
            desc: "Hlo my name is Sudhanshu kaushik , I like coding , etc.....",
            filesize: ".2mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-red-700" }
        },

    ];
    return (
        <>
            <div ref={ref} className=' fixed top-0 left-0 w-full h-screen z-[3] flex gap-5 flex-wrap p-5'>
                {
                    data.map((item, index) => (
                    <Card data={item} refrence={ref}/>
                    ))}
            </div>
        </>
    )
}

export default Foreground