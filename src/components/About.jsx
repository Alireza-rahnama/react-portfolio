import { motion } from "framer-motion"

function About() {
  return (
    <div className="h-screen flex flex-col relative text-center
    max-w-3xl px-10 justify-center items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] pl-8">About</h3>
      <motion.h4
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="text-lg">
        <div>
          Hi, I am Ali. I am a <span className="font-bold text-blue-500 text-xl">Software Developer</span>. I am familiar with full-stack development
          and my professional experience as a <span className="font-bold text-blue-500 text-xl">Back-End Software Engineer </span>
          at Nasdaq Anti-Financial Crime Division and <span className="font-bold text-blue-500 text-xl">Data Scientist </span>at Hibernia EOR Group has solidified my passion for back-end development's unique challenges.
          I am excited to take on new challenges in this field and continue to grow.
        </div>
        <div>I have  experience in developing and maintaining software solutions across all stages of the
          software development lifecycle, using agile methodologies and languages such as Java, Python, SQL, and JavaScript.
          I also have experience with big data technologies like Spark SQL and a solid understanding of Artificial Intelligence and distributed computing systems such as AWS.
          I strive to apply clean code principles and design patterns to deliver effective solutions in a timely manner.
        </div>
        <div>As a lifelong learner, I am committed to staying up-to-date with the latest industry trends and technologies.
          With my engineering and management background, I have a unique perspective on problem-solving and teamwork.
          Let's connect and work together to bring your project to the next level.
        </div>
      </motion.h4>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="relative top-20">
        <div className="absolute inset-0 bg-blue-600 blur rounded-lg"></div>
        <button
          className="relative bg-[#12010f] text-[#d2d1d1] hover:text-white px-5 py-2 rounded-full"><a target="_blank" href="https://drive.google.com/file/d/11ulDlyOlTiVUByuVvUXkYQjpe2vn0Pxe/view?usp=sharing">Resume</a>
        </button>
      </motion.div>
    </div>
  )
}

export default About