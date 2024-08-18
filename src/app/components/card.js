import Image from "next/image";

export default function Card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://pso2.com/lp/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/img/img1N.png"
                layout="responsive"
                width={500}
                height={300}
                alt="Phantasy Star Online 2 Landing Page"
                className="card-img-top"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Phantasy Star Online 2</h5>
              <p className="card-text">
                Visit the official landing page for Phantasy Star Online 2. Get the latest updates, news, and event information about this popular online RPG.
              </p>
              <a href="https://pso2.com/lp/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/img/01.png"
                layout="responsive"
                width={500}
                height={300}
                alt="Phantasy Star Online 2 New Genesis Steam"
                className="card-img-top"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Phantasy Star Online 2: New Genesis</h5>
              <p className="card-text">
                Discover Phantasy Star Online 2: New Genesis on Steam. Experience the latest chapter of this beloved MMORPG with enhanced graphics and new gameplay features.
              </p>
              <a href="https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Play Now
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <a href="https://store.epicgames.com/th/p/phantasy-star-online-2" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/img/02.png"
                layout="responsive"
                width={500}
                height={300}
                alt="Phantasy Star Online 2 Epic Games"
                className="card-img-top"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">Phantasy Star Online 2 on Epic Games</h5>
              <p className="card-text">
                Get Phantasy Star Online 2 on Epic Games Store. Join millions of players in this expansive MMORPG with exclusive content and deals.
              </p>
              <a href="https://store.epicgames.com/th/p/phantasy-star-online-2" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Get It Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
