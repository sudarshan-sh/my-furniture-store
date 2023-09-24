const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-2 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi
        possimus mollitia totam minima dolore labore culpa temporibus nam, est,
        ut molestias quia? Tempora praesentium error minima voluptate nulla,
        eveniet voluptatibus vitae consequuntur, inventore debitis ducimus
        voluptas distinctio rem. Provident?
      </p>
    </>
  );
};

export default About;
