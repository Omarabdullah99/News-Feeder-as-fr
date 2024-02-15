import useNewsQuery from "../../hooks/useNewsQuery";
import LeftGeneralNews from "./left/LeftGeneralNews";
import LeftPopularNews from "./left/LeftPopularNews";
import LeftTopNews from "./left/LeftTopNews";
import RightGeneralNews from "./right/RightGeneralNews";
import RightTopNews from "./right/RightTopNews";

export default function NewsCopy() {
  const news = useNewsQuery();
  const allNews = news;
  // console.log("allnews", allNews);
  if (allNews?.length === 0) {
    return (
      <h1 className="text-center py-5 text-red-500 font-bold text-3xl">
        No news match
      </h1>
    );
  }
  const leftTopNews = allNews.slice(2, 3);
  console.log("slicetop", leftTopNews);
  const leftPopularNews = allNews.slice(3, 4);
  const rightTopNews = allNews.slice(4, 5);

  const restData = allNews.slice(5);
  //   console.log("rest", restData);

  const nn = restData.length / 2;
  console.log("nn", nn);
  const leftGeneral = restData.slice(0, parseInt(nn));
  const rightGeneral = restData.slice(parseInt(nn));

  //   console.log("left", leftGeneral);
  //   console.log("right", rightGeneral);
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto flex gap-8">
        {/*-- left -- */}
        <div className="w-[70%]">
          {/* --  ----1st news item called Top news --*/}
          <div className="col-span-12 grid grid-cols-12 gap-4">
            <LeftTopNews leftTopNews={leftTopNews} />
          </div>
          {/* ---Top news item ends ----*/}

          {/* ---2nd Popular news item ----*/}
          <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
            <LeftPopularNews leftPopularNews={leftPopularNews[0]} />
          </div>
          {/* --- Popular news item end ----*/}

          {/* ---general news  ----*/}
          <LeftGeneralNews leftGeneral={leftGeneral} />
        </div>

        {/*-- right -- */}
        <div className="w-[30%]">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {/* --- right top ----*/}
            <div className="col-span-12 mb-6 md:col-span-8">
              <RightTopNews rightTopNews={rightTopNews[0]} />
            </div>
            {/* ---right top end  ----*/}

            {/* ---General news  ----*/}
            <RightGeneralNews rightGeneral={rightGeneral} />
          </div>
        </div>
      </div>
    </main>
  );
}
