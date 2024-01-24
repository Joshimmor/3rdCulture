import BlogFeature from "@/components/BlogFeature";
import "./home.css"
import Featured from "@/components/Featured";
import {  Abril_Fatface } from 'next/font/google'
import { ArtistCarousel } from "@/components/ArtistsFeature";
 
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
      <ArtistCarousel/>
      <div className="flex justify-center items-center w-full h-[80vh] bg-orange-600">
        <div className="w-1/2 h-1/2 bg-slate-100 flex flex-row flex-grid-2">
          <div className="w-1/2 h-full bg-slate-900"
            style={{
              backgroundImage:'url(ab2.jpg)',
              backgroundSize:"cover"
            }}
          />
          <div className="flex flex-col justify-center items-center">
              <h1 className="text-slate-400 font-bold text-2xl mb-10">Join the culture</h1>
              <p className="text-center text-slate-400 font-bold text-lg mb-10">
              Join the 3rd Culture Kids&apos;s newsletter to get the latest releases and artist news delivered straight to your inbox.
              </p>
              <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-10 bg-gray-600 flex flex-row   justify-end items-center">
            <div className="flex flex-col mx-5 footer">
              <h3 className="text-gray-100 font-bold text-2xl">ARTISTS</h3>
              <h3 className="text-gray-100 font-bold text-2xl">PRESS</h3>
            </div>
            <div className="flex flex-col mx-5 footer">
              <h3 className="text-gray-100 font-bold text-2xl">STORE</h3>
              <h3 className="text-gray-100 font-bold text-2xl">TOURS</h3>
            </div>
      </div>
    </main>
  );
}
