import React from 'react'
import './testimonials.css'
import AVTR1 from "../../Assets/guilherme-souza.jpeg"
import AVTR2 from "../../Assets/lucas-r-avatar.jpeg"
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Guilheme Souza",
    review: 'Maria Vitória is an avid researcher with a constant thirst for knowledge, and her empathetic vision allows her to understand users exceptionally well. I\'ve had the opportunity to witness her work in various groups, and I\'ve seen how she brings creativity, expertise in diverse areas, and above all, using a proactive and dedicated approach. With her background in Psychology, Maria Vitória possesses a remarkable sensitivity toward User Experience, skillfully assessing and comprehending the various issues involving different target audiences. She is an essential asset in the conception and development of products. Moreover, her background in IT showcases her programming abilities, which I\'ve had the chance to observe firsthand. Sitting down and learning alongside her, I experienced her warm and inclusive teaching style. Lastly, I consider Maria Vitória an inspiration, both personally and professionally, and I firmly believe she will achieve tremendous success in life.',
  },
  {
    avatar: AVTR2,
    name: "Lucas Rodrigues",
    review: 'I had the opportunity to work with Vitória on a project at the Apple Developer Academy, where we collaborated on a menstrual health application. From the ideation phase to the development and construction of the app\'s algorithms, blending her skills in humanities with STEM and development, Vitória was pivotal to the project\'s progress. An outstanding developer!',
  },
  {
    avatar: AVTR1,
    name: "João Pedro Barreto",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta odio accusantium enim nam labore quidem, voluptas, consequuntur veritatis ipsa molestiae non consectetur minima repudiandae aperiam esse fuga. Unde, perferendis?',
  },
  {
    avatar: AVTR1,
    name: "Livia Lopes",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta odio accusantium enim nam labore quidem, voluptas, consequuntur veritatis ipsa molestiae non consectetur minima repudiandae aperiam esse fuga. Unde, perferendis?',
  },
  {
    avatar: AVTR1,
    name: "Bianca Lima",
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dicta odio accusantium enim nam labore quidem, voluptas, consequuntur veritatis ipsa molestiae non consectetur minima repudiandae aperiam esse fuga. Unde, perferendis?',
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from colleagues</h5>
      <h2>Feedbacks</h2>
      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

      >
       {
         data.map(({avatar, name, review}, index) => {
           return (
            <SwiperSlide key={index} className='feedback'>
            <div className="avatar">
              <img src={avatar} alt=''/>
            </div>
            <h5 className='name'>{name}</h5>
            <small className='review'>{review}</small>
          </SwiperSlide>
           )
         })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials