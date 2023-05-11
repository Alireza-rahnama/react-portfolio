import {motion} from 'framer-motion'

function BackgroundSquares() {
  return (
    <motion.div initial={{
      opacity: 0,
    }}
    animate={{
      opacity: [0.5, 0.6, 0.7, 0.8, 1],
      scale: [1,0.8,5,0.8,1],
    }}
    transition={{
      duration: 3
    }}
    className='relative flex justify-center items-center '>
      {/* Positioning them relative to relative div */}
        <div className='absolute border border-[#767676] rounded-lg h-[200px] w-[200px] mt-52
        animate-ping'/>
        <div className='absolute border border-[#2e2e2e] rounded-lg h-[500px] w-[500px] mt-52'/>
        <div className='absolute border border-[#5613b4] rounded-lg h-[650px] w-[650px] mt-52
        opacity-80 animate-pulse'/>

    </motion.div>
  )
}

export default BackgroundSquares