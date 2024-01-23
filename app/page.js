import BlogFeature from "@/components/BlogFeature";
import "./home.css"
import Featured from "@/components/Featured";
import {  Abril_Fatface } from 'next/font/google'
 
const af = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
})
 
export default function Home() {
  return (
    <main className="background flex w-100 min-h-screen flex-col items-center justify-between">
      <video autoPlay muted loop className="video">         
          <source src="videos/bg1.mp4" type="video/mp4"/>       
      </video>
      
      <div className={`w-full h-screen bg-gray-200 bg-opacity-10 flex justify-center items-center ${af.className}`}>
        <h1 className="culture text-slate-100">3rd Culture Kids</h1>
      </div>
      <Featured/>
      <BlogFeature/>
      <div className="w-full h-[50vh] background bg-orange-600">

      </div>
    </main>
  );
}
