const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[60vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/Nsn0Qbq/Rectangle-4281.png)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <p className="text-black text-4xl font-bold mb-5">I Grow By Helping People In Need</p>
            <div className="">
              <div className="">
                <input
                  type="text"
                  placeholder="Search…"
                  className="input text-black"
                />
                <button className="btn btn-error">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
