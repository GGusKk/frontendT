import Image from 'next/image';
import Link from 'next/link';

export default function Service() {
  return (
    <>
      <br /><br /><br />
      <div style={{ backgroundColor: '#e8f0f2', padding: '40px 20px' }}>
        <div className="container">
          <h1 className="text-center mb-4" style={{ color: '#003c8f' }}>Our Services for Phantasy Star Online 2</h1>

          <div className="row mb-4">
            <div className="col-md-6 mb-4">
              <div className="card" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Image 
                  src="/assets/img/113.png" 
                  alt="Feature 1" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                  className="card-img-top"
                />
                <div className="card-body" style={{ backgroundColor: '#fff', color: '#000' }}>
                  <h5 className="card-title">Feature 1: Epic Quests</h5>
                  <p className="card-text">
                    Dive into epic quests in Phantasy Star Online 2. Experience thrilling adventures with a rich storyline and exciting gameplay.
                  </p>
                  <Link href="https://pso2.com/players/schedule/?bg=s_637">
                    Learn More
                  </Link>
                  <br />
                  <Link href="https://pso2.com/players/news/">
                    Latest News
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="card" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Image 
                  src="/assets/img/103.png" 
                  alt="Feature 2" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                  className="card-img-top"
                />
                <div className="card-body" style={{ backgroundColor: '#fff', color: '#000' }}>
                  <h5 className="card-title">Feature 2: Customization</h5>
                  <p className="card-text">
                    Customize your character with an extensive range of options. From appearance to gear, make your character truly unique.
                  </p>
                  <Link href="https://pso2.com/players/about/world/">
                    Learn More
                  </Link>
                  <br />
                  <Link href="https://pso2.com/players/news/event/">
                    Upcoming Events
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <Image 
                  src="/assets/img/114.png" 
                  alt="Feature 3" 
                  width={1200} 
                  height={600} 
                  layout="responsive"
                  className="card-img-top"
                />
                <div className="card-body" style={{ backgroundColor: '#fff', color: '#000' }}>
                  <h5 className="card-title">Feature 3: Community Events</h5>
                  <p className="card-text">
                    Join the vibrant PSO2 community and participate in various events and activities. Connect with other players and take part in exciting in-game events.
                  </p>
                  <Link href="https://pso2.com/players/news/event/">
                    Explore Events
                  </Link>
                  <br />
                  <Link href="https://pso2.com/players/news/FieryDunesRetemPack1215/">
                    Latest News
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="mb-4">Get Started Today!</h2>
              <p>
                Ready to embark on your PSO2 adventure? Download the game, join the community, and start exploring the vast universe of Phantasy Star Online 2.
              </p>
              <a href="https://pso2.com/download" className="btn btn-success">Download Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
