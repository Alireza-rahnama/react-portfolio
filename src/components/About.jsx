import {motion} from "framer-motion"

function About() {
  return (
    <div className="h-screen flex flex-col relative text-center
    max-w-3xl px-10 justify-center items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] pl-8">About</h3>
      <motion.h4 
        initial={{ opacity: 0, y:300 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration: 1.5}}
        className="text-lg">
        <div>Hi, I am Ali. I am a <span className="underline">Software Developer.</span> While I am familiar with a wide range of full-stack development 
        technologies, my professional experience as a <span className="underline">Back-End Software Engineer</span>
        at Nasdaq Anti-Financial Crime Division and <span className="underline">Data Scientist </span>at Hibernia EOR Group has solidified my passion for back-end development's unique challenges. 
        I am excited to take on new challenges in this field and continue to grow as a skilled Software Engineer.</div>
        <div>I have experience in all stages of software development life cycle including developing and maintaining new and existing software solutions
        with respect to clean code principles and design patterns, leveraging Java, Python, SQL, JavaScript, Scala, and big data technologies such as
        Spark SQL.</div>
        <div>As a lifelong learner, I am committed to staying up-to-date with the latest industry trends and technologies. 
        With my engineering and management background, I have a unique perspective on problem-solving and teamwork. </div>
        <div>        If you have any projects or opportunities and would like to discuss it further, please don't hesitate to reach out.</div>
      </motion.h4>
      <motion.div 
        initial={{ opacity: 0, y:150 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{duration: 1.5}}
        className="relative top-20">
        <div className="absolute inset-0 bg-blue-600 blur rounded-lg"></div>
        <button className="relative bg-[#12010f] text-[#d2d1d1] hover:text-white px-5 py-2 rounded-full">
          <a href="src/assets/AlirezaRahnamaResume.pdf">Resume</a>
        </button>
      </motion.div>
    </div>
  )
}

export default About