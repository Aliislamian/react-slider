
import data from '../data/data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';

function Slider1() {
  const myData = data;
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlide(myData.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const nextSliderHandler = (id) => {
    if (id === myData.length) {
      setActiveSlide(1);
    } else if (id < myData.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  return (
    <div className='m-6'>
      {myData.map((item) => {
        const { id, image, title, random } = item;
        return (
          <div
            key={id}
            className={
              activeSlide === id
                ? 'flex justify-between items-center'
                : 'hidden'
            }
          >
            <button
              className='text-6xl border-2 border-black'
              onClick={() => prevSliderHandler(id)}
            >
              <FiChevronLeft />
            </button>

            <div class="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
        <a href="#" class="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src={image} alt={title} class="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"/>
            
          <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div class="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div class="h-1/2 relative">
              <div class="absolute bottom-0">
                <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">{title}</h2>
              </div>
            </div>
            <div class="h-1/2">
              <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">{random}</p>
              <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
            </div>
          </div>
        </a>
      </div>
            {/* <div className='flex flex-col items-center'>
              <img src={image} alt={title} />
              <h2 className='text-2xl font-bold my-6'>{id}</h2>
              <h3 className='text-xl'>{title}</h3>
              <p>{random}</p>
            </div> */}
            <button
              className='text-6xl border-2 border-black'
              onClick={() => nextSliderHandler(id)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider1;
