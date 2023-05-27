import {motion} from 'framer-motion'

function BackgroundSquares() {
  return (
    <motion.div initial={{
      opacity: 0,
    }}
    animate={{
      opacity: [0.5, 0.6, 0.7, 0.8, 1],
      scale: [1,0.8,3,0.8,1],
    }}
    transition={{
      duration: 3
    }}
    className='relative flex justify-center items-center '>
      {/* Positioning them relative to relative div */}
        <div className='absolute border border-[#767676] rounded-full h-[250px] w-[250px] mt-72
        animate-ping'/>
        <div className='absolute border border-[#2e2e2e] rounded-full h-[500px] w-[500px] mt-72'/>
        <div className='absolute border border-[#5613b4] rounded-full h-[650px] w-[650px] mt-72
        opacity-80 animate-pulse'/>

    </motion.div>
  )
}

export default BackgroundSquares