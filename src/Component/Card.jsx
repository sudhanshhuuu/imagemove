import React from 'react'
import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"

const Card = ({ data,refrence }) => {
    return (
        <motion.div dragConstraints={refrence} whileDrag={{scale:1.2}} drag dragElastic={.1} className=' relative flex-shrink-0 w-52 h-60 rounded-[40px] bg-zinc-900/100 text-white p-5 overflow-hidden'>
            <FaRegFileAlt />
            <p className='mt-5 leading-tight font-semibold text-sm'>{data.desc}</p>
            <div className='footer absolute bottom-0 left-0 w-full   '>
                <div className=' flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-5 h-5 flex justify-center items-center bg-zinc-200 rounded-full'>
                        {data.close ? <IoClose size='.8em' color='#000' /> : <LuDownload size='.8em' color='#000' />}
                    </span>
                </div>

                {
                    data.tag.isOpen ? <div className={`tag w-full py-4 ${data.tag.tagColor} flex justify-center items-center`}>
                        <h5 className='text-sm font-semibold'>{data.tag.tagTitle}</h5>
                    </div> : null
                }

            </div>
        </motion.div>
    )
}

export default Card