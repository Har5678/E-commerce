import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium adipisci quis sunt libero magni ipsum fuga non, laboriosam debitis officia excepturi quibusdam itaque eaque fugit explicabo eligendi est. Voluptatibus!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus suscipit deleniti illum corporis nobis libero eum, porro illo impedit voluptate non voluptas possimus, ullam eveniet aspernatur nostrum deserunt, reiciendis dolorem.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur fugit omnis cum. Deleniti dignissimos sunt sit vero eaque provident! Maiores, vitae? Veniam nostrum soluta sit temporibus nesciunt sed numquam illo!</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py2- flex flex-col gap-5'>
          <b className='text-xl'>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore maxime voluptatem eligendi harum itaque doloribus rem impedit placeat nemo laborum voluptatibus pariatur totam inventore, possimus eos excepturi cum rerum assumenda?
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py2- flex flex-col gap-5'>
          <b className='text-xl'>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore maxime voluptatem eligendi harum itaque doloribus rem impedit placeat nemo laborum voluptatibus pariatur totam inventore, possimus eos excepturi cum rerum assumenda?
          </p>
        </div> 
        <div className='border px-10 md:px-16 py-8 sm:py2- flex flex-col gap-5'>
          <b className='text-xl'>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore maxime voluptatem eligendi harum itaque doloribus rem impedit placeat nemo laborum voluptatibus pariatur totam inventore, possimus eos excepturi cum rerum assumenda?
          </p>
        </div>
      </div>

      <Newsletter/>
    </div>
  )
}

export default About