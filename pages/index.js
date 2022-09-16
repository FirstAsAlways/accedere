
import Navbar from "./componets/Navbar";
import Banner from "./componets/Banner";
import CountingSection from "./componets/CountingSection";
import HomeServices from "./componets/HomeServices";
import Whychoose from "./componets/Whychoose";
import CaseStudy from "./componets/CaseStudy";
import Testimonial from "./componets/Testimonial";
import Clientlogo from "./componets/Clientlogo";
import Footer from "./componets/Footer";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
    <Head>
        <title>Accedere - Home</title>
        <meta name="description" content="Schellman has helped the world's leading organizations accelerate and streamline their IT audit and attestation initiatives through our extensive experience and depth of services."/>
    </Head>
    <Navbar/>
    <Banner/>
    <div className='totals-body-part float-start w-100  comon-body-part'>
 
       <HomeServices/>
      <CountingSection/>

      <Whychoose/>

      <CaseStudy/>
       
      <Testimonial/>

      <Clientlogo/>

    </div>
    <Footer/>
        
    
    </div>
  )
}
