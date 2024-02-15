/* eslint-disable react/prop-types */
export default function RightTopNews({rightTopNews}) {
    const publishedAt = new Date(rightTopNews?.publishedAt);

// Get the date, month, and year
const date = publishedAt.getDate();
const month = publishedAt.toLocaleString('default', { month: 'long' });
const year = publishedAt.getFullYear();
  return (
    <>
      <img className="w-[200px]" src={rightTopNews?.urlToImage} alt="thumfb" />
      {/* --- info ----*/}
      <div className="col-span-12 mt-6 md:col-span-4">
        <a href="#">
          <h3 className="mb-2.5 text-xl font-bold lg:text-[20px] hover:text-green-500">
            {rightTopNews?.title}
          </h3>
        </a>
        <p className="text-base text-[#292219]">
          {rightTopNews?.description}
        </p>
        <p className="mt-5 text-base text-[#94908C]">{date}/{month} /{year}</p>
      </div>
    </>
  );
}
