import Hero from "./components/Hero"
import About from "./components/About"
import HowIWork from "./components/HowIWork"
import Testimonial from "./components/Testimonial"
import RecentBlog from "./components/RecentBlog"
import Subscribe from "./components/Subscribe"
import Team from "./components/Team"


export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg-pb:10" />
      <About className="py-20 lg:py-22 overflow-hidden bg-[#2f2e2e]"/>
      <HowIWork className="py-16 !pt-32 lg:py-32"/>
      {/* <Testimonial className="py-6 lg:py-32"/> */}
      <Team className="py-16 lg:py-22 overflow-hidden bg-[#2f2e2e]"/>
      <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32 bg-[#2f2e2e]"/>
    </>
  )
}
