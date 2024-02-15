/* eslint-disable react/prop-types */


export default function RightGeneralNews({rightGeneral}) {
    
  return (
    <div className="grid grid-cols-1 gap-1">
        {rightGeneral?.map((singleNews) => (
          <div key={singleNews?.title} className="">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl hover:text-green-500">
                {singleNews?.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">
              {singleNews?.description}
            </p>
            <p className="mt-5 text-base text-[#94908C]">25 Feb 2021</p>
            <hr  className='pb-1 bg-gray-400'/>
          </div>
        ))}
      </div>
  )
}
