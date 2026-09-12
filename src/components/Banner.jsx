function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>
          Build Your Ideal 
          <span>Development Stack </span>
        </h1>
        <p>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project. </p>
        <div className="banner-buttons">
          <button className="explore">Explore Technologies</button>
          <button className="learn">Learn More</button>
        </div>
      </div>
      <img className="banner-img" src="/banner-stack.png" alt="Devlopment Stack" />
    </section>
  );
}
export default Banner;