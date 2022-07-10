import React from 'react'

const Main = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[91vh] border-2'>
      <h1 className='ml-[-50px]'>Welcome</h1>
      <h1 className='ml-[50px]'><strong>humans...</strong></h1>
      <div
        className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
      >
        <div
          className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div className="absolute backface-hidden border-2 w-full h-full">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20081229142345%2Ffallout%2Fimages%2F2%2F2a%2FFallout2front.jpg&f=1&nofb=1" className="w-full h-full" />
          </div>
          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden shadow-lg shadow-gray-400"
          >
            <div
              className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24 "
            >
              <h1 className="text-3xl font-semibold">Fallout 2</h1>
              <p className="my-2">Old school top rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
              <button
                className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main