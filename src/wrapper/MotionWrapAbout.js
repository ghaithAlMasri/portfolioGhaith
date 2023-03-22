import React from 'react'
import { motion } from 'framer-motion'


const MotionWrapAbout = (Component, className) => function HOC() {
    return (
        <motion.div
            whileInView={{ opacity: [0, 0, 1] }}
            transition={{
                ease: "easeIn"
            }}
            className={className}>
            <Component />
        </motion.div>
    )
}

export default MotionWrapAbout