import React from 'react';
import { motion } from "framer-motion"

const Experiment = () => {
    return (
        <>
            <motion.div
                animate={{ x: 100 }}
                className='bg-blue-500 h-20 w-20'
            />
            <div>gfdh</div>
        </>
    )
}
export default Experiment;