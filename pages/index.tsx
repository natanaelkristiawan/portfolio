
import HomeStyle from '../styles/Home.module.scss'
import Image from 'next/image'
import ProfilePic from '@/public/head.png'

import logo from '@/public/logo.png'
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function Home() {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);
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
          <h3 className='text-base text-sky-600 font-mono'>Hi, my name is</h3>
          <div className='text-7xl font-bold my-5 '>
            <h1 className='my-2 text-stone-800'>Natanael Kristiawan.</h1>
            <h2 className='my-2 text-stone-500'>I build things for the web.</h2>
          </div>
          <p className='w-1/2 text-stone-500'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href='https://maxsol.id'>Maxsol.ID.</a></p>
        </div>
      </section>


      <section id='section_aboutus' className={`${HomeStyle.container__laptop} mx-auto my-28`}>
        <div className={HomeStyle.section__aboutus_content}>
            <div>
                <div className={HomeStyle.section__aboutus_title}>
                  <span>01.</span>
                  <h2>About Me</h2>
                </div>

                <div className={HomeStyle.section__aboutus_description}>

                  <p>Hello, My name Natanael Kristiawan. I&apos;m is a highly skilled programmer with over 13 years of experience. I&apos;m started my career in the field in 2009 and has been dedicated to my craft ever since. With a solid education from University Udayana Bali, I has a strong foundation in computer science and programming principles.</p>
                  <p>As a programmer, my main job is to ensure that software runs smoothly and with minimal bugs. I&apos;m uses my expertise in coding and problem-solving to tackle complex issues and deliver high-quality results. Whether it&apos;s finding and fixing bugs, optimizing software performance, or implementing new features, I&apos;m  committed to delivering the best possible outcome for my clients.</p>
                  <p>With my extensive experience and passion for programming, I&apos;m a valuable asset to any software development team. Whether my working on a large-scale project or a small task, I&apos;m approaches each challenge with a positive attitude and a drive to succeed</p>
                  <p>Here are a few technologies I&apos;ve been working with recently:</p>
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
              <div className={HomeStyle.section__aboutus_animation}>
                <div className={HomeStyle.section__aboutus_image}>
                  <Image width={400} src={ProfilePic} alt="natanaelkristiawan"></Image>
                </div>
              </div>
            </div>
        </div>
      </section>



      <section id='section_experience' className={`${HomeStyle.container__tablet} mx-auto my-28`}>
          <div>
            <div className={HomeStyle.section__aboutus_title}>
              <span>02.</span>
              <h2>Where I&apos;ve Worked</h2>
            </div>
            <Tabs>
              <TabList>
                <Tab>Maxsol.ID</Tab>
                <Tab>Silicon Bali Creative</Tab>
                <Tab>IGB Media</Tab>
              </TabList>

              <TabPanel>
                <h2 className='font-semibold text-lg'>Backend Programmer <a className="text-sky-600" rel="noreferrer" target="_blank" href="https://maxsol.id">@Maxsol.ID</a></h2>
                <p className='font-mono text-xs'>September 2015 - Present</p>
                <ul>
                  <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                  <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, VueJS, React, WordPress, Laravel, and Mysql</li>
                  <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <h2 className='font-semibold text-lg'>Freelance Programmer <a className="text-sky-600" rel="noreferrer" target="_blank" href="https://siliconbalicreative.com">@SiliconBaliCreative</a></h2>
                <p className='font-mono text-xs'>March 2022 - Present</p>
                <ul>
                  <li>Create a website with a modern look using wordpress and elementor</li>
                  <li>Ensure the website runs normally and without problems</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <h2 className='font-semibold text-lg'>Freelance Programmer <a className="text-sky-600" rel="noreferrer" target="_blank" href="https://igbmedia.com">@IGBMedia</a></h2>
                <p className='font-mono text-xs'>January 2021 - Present</p>
                <ul>
                  <li>Create a website with a modern look using wordpress and elementor</li>
                  <li>Ensure the website runs normally and without problems</li>
                </ul>
              </TabPanel>
            </Tabs>
          </div>
          <div>

          </div>
      </section>


      
      <section id='section_project' className={`${HomeStyle.container__laptop} mx-auto my-28`}>
        <div className={HomeStyle.section__project}>
          <div className={HomeStyle.section__aboutus_title}>
            <span>03.</span>
            <h2>Some Things I&apos;ve</h2>
          </div>

          <div className={HomeStyle.section__project_wrapper}>
            <div className='flex gap-8'>
              <div className='w-3/5'>
                <Image src={require('../public/igbmedia.png')} alt="igbmedia" ></Image>
              </div>
              <div className={`w-2/5 ${HomeStyle.section__project_wrapper_description}`}>
                <div className={HomeStyle['section__project_wrapper-heading']}>
                  <p>Featured Project</p>
                  <h2>IGB Media</h2>
                </div>
                <div className={HomeStyle['section__project_wrapper-description']}>
                  <p>IGBmedia.com is a professionally designed website built with WordPress and Elementor. The company profile showcases their expertise in digital media and offers creative solutions for businesses.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>


      </section>

    </>
  )
}
