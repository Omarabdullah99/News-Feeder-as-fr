/* eslint-disable react/prop-types */
export default function LeftTopNews({leftTopNews}) {
    console.log('topnes',leftTopNews[0]?.title)
  return (
    <>
      {/* --- info  ----*/}
      <div className="col-span-12 lg:col-span-4">
        <a href="#">
          <h3 className="mb-2.5  font-bold lg:text-[24px] hover:text-green-500">
          {leftTopNews[0]?.title}
          </h3>
        </a>
        <p className="text-base text-[#5C5955]">
        {leftTopNews[0]?.description}
        </p>
        <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
      </div>
      {/* --- thumb ----*/}
      <div className="col-span-12 lg:col-span-8">
        <img className="w-[500px]" src={leftTopNews[0]?.urlToImage} alt="thumb" />
        <p className="mt-5 text-base text-[#5C5955]">
          Illustration: {leftTopNews[0]?.author}
        </p>
      </div>
    </>
  );
}
