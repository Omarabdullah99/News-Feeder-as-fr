/* eslint-disable react/prop-types */
export default function LeftPopularNews({ leftPopularNews }) {
  return (
    <>
      {/* --- info ----*/}
      <div className="col-span-12 md:col-span-6">
        <a href="">
          <h3 className=" text-xl font-bold lg:text-[24px] hover:text-green-500">
            {leftPopularNews?.title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">
          {leftPopularNews?.description}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
      </div>
      {/* ---thumb ----*/}
      <div className="col-span-12 md:col-span-6">
        <img
          className="w-[350px]"
          src={leftPopularNews?.urlToImage}
          alt="thumb"
        />
      </div>
    </>
  );
}
