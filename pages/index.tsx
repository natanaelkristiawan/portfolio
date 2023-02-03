
import HomeStyle from '../styles/Home.module.scss'
import Image from 'next/image'
import ProfilePic from '@/public/head.png'

import logo from '@/public/logo.png'
export default function Home() {
  return (
    <>
      
      <header className='w-full fixed z-10'>
        <div className=' container mx-auto py-10 flex justify-between'>
          <div className='logo'>
            <Image src={logo} height={40} alt="natanaelkristiawan"></Image>
          </div>

          <div className={HomeStyle.navigation}>
            <nav>
              <ol className='flex'>
                <li><a href='#'><span>01</span>About</a></li>
                <li><a href='#'><span>02</span>Experience</a></li>
                <li><a href='#'><span>03</span>Work</a></li>
                <li><a href='#'><span>04</span>Contact</a></li>
                <li><a className='border-2 ml-3 rounded border-sky-600 hover:bg-sky-50' href='#'>Resume</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </header>

      <section id='section__herobanner' className='container mx-auto relative h-screen'>
        <div className={`absolute top-1/2 ${HomeStyle.section__herobanner_content}`}>
          <h3 className='text-base text-sky-600'>Hi, my name is</h3>
          <div className='text-7xl font-bold my-5 '>
            <h1 className='my-2 text-stone-800'>Natanael Kristiawan.</h1>
            <h2 className='my-2 text-stone-500'>I build things for the web.</h2>
          </div>
          <p className='w-1/2 text-stone-500'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href='https://maxsol.id' className='text-sky-600 hover:text-sky-900'>Maxsol.ID.</a></p>
        </div>
      </section>


      <section id='section_aboutus' className='container mx-auto'>
        <div>
            <div>
                <div className='title'>
                  <span>01</span>
                  <h2>About Me</h2>
                </div>

                <div className='description'>
                  <p>Hello! My name is Natan and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                  <p>Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                  <p>I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.</p>
                  <p>Here are a few technologies I've been working with recently:</p>
                  <ul>
                    <li>PHP</li>
                    <li>Wordpress</li>
                    <li>Laravel</li>
                    <li>Javascript</li>
                    <li>NodeJS</li>
                    <li>NestJS</li>
                    <li>ReactJS</li>
                    <li>VueJS</li>
                    <li>Mysql</li>
                    <li>Linux Server</li>
                  </ul>
                </div>
            </div>
            <div>
              <Image width={300} src={ProfilePic} alt="natanaelkristiawan"></Image>
            </div>
        </div>
      </section>

    </>
  )
}
