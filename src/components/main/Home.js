

function Home({restData, isLoaded, featuredImage}) {

  return (
    isLoaded ?
      <section className="home" id="home">
        <div className="home-content">
          <h1>{restData.title.rendered}</h1>
          {restData.featured_media !== 0 && restData._embedded['wp:featuredmedia'][0] &&
            <figure className="featured-image" dangerouslySetInnerHTML={featuredImage(restData._embedded['wp:featuredmedia'][0])}></figure>
          }
        </div>
      </section>
    : null
  );
}

export default Home;