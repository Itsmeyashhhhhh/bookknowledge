import { Button } from "antd"

function Hero() {
  return (
    <section className="py-16 bg-gray-100">
      <div className='text-center '>
        <h1 className="text-4xl mx-auto font-bold mb-2">Welcome to <span className="text-blue-700">BookKnowledge</span></h1>
        <p className="text-gray-700 mb-6 mx-auto max-w-3xl">Learn new skills, explore interesting courses, and build your knowledge at your own pace.Discover courses designed to help you learn, practice, and grow.</p>
        <Button type="primary" className="bg-blue-800">explore course</Button>
      </div>
    </section>
  )
}

export default Hero