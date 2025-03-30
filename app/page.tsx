import Achievements from "@/components/Achievements";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Primary from "@/components/Primary";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center
    items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Primary/>
        <Grid/>
        <MySkills/>
        <RecentProjects/>
        <Achievements/>        
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
