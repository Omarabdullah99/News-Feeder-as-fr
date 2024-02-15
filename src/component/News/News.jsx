
import useNewsQuery from "../../hooks/useNewsQuery";

const News = () => {
  const news = useNewsQuery();
  const allNews=news
  console.log("allnews",allNews)
  if (allNews?.length === 0) {
    return <h1>No item show</h1>;
  }

  return (
    <div>
      <div className="grid grid-cols-3">
        {allNews?.map((singleNews) => (
          <div key={singleNews.title}>
            <h1>{singleNews.title}</h1>
            <p>{singleNews?.description}</p>
            <img src={singleNews?.urlToImage} alt="" className="w-32" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
