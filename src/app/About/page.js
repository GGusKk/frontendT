import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <br /><br /><br />
      <div style={{ backgroundColor: '#f0f4f8', padding: '40px 20px' }}>
        <div className="container">
          <h1 className="text-center mb-4" style={{ color: '#0078d4' }}>Phantasy Star Online 2 Updates</h1>

          {/* Video Section */}
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="card">
                <iframe 
                  className="card-img-top"
                  src="https://www.youtube.com/embed/2CkVii3EtKY"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ height: '500px', width: '100%' }}
                ></iframe>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#000' }}>New Game Trailer</h5>
                  <p className="card-text" style={{ color: '#000' }}>
                    Check out the latest trailer for Phantasy Star Online 2, showcasing exciting new features and gameplay.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <Link href="https://pso2.com/lp" passHref>
                  <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image 
                      src="/assets/img/107.png" 
                      alt="Phantasy Star Online 2 Image 1" 
                      layout="fill" 
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#000' }}>Explore the World</h5>
                  <p className="card-text" style={{ color: '#000' }}>
                    Dive into the immersive universe of Phantasy Star Online 2 and discover a vast, detailed world waiting for you.
                  </p>
                  <Link href="https://pso2.com/lp" passHref>
                    <button className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <Link href="https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/" passHref>
                  <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image 
                      src="/assets/img/108.png" 
                      alt="Phantasy Star Online 2 Image 2" 
                      layout="fill" 
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#000' }}>New Genesis</h5>
                  <p className="card-text" style={{ color: '#000' }}>
                    Experience the next generation of Phantasy Star Online 2 with exciting new updates and features.
                  </p>
                  <Link href="https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/" passHref>
                    <button className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <Link href="https://store.epicgames.com/th/p/phantasy-star-online-2" passHref>
                  <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image 
                      src="/assets/img/109.png" 
                      alt="Phantasy Star Online 2 Image 3" 
                      layout="fill" 
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#000' }}>Available on Epic Games</h5>
                  <p className="card-text" style={{ color: '#000' }}>
                    Play Phantasy Star Online 2 on Epic Games and enjoy exclusive content and updates.
                  </p>
                  <Link href="https://store.epicgames.com/th/p/phantasy-star-online-2" passHref>
                    <button className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Get it on Epic Games
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Image Section */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <Link href="https://pso2.com/players/update/2024-08/?bg=s_628" passHref>
                  <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image 
                      src="/assets/img/104.png" 
                      alt="New Image 1" 
                      layout="fill" 
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#000' }}>Update August 2024</h5>
                  <p className="card-text" style={{ color: '#000' }}>
                    Check out the latest updates for August 2024 and what's new in the game.
                  </p>
                  <Link href="https://pso2.com/players/update/2024-08/?bg=s_628" passHref>
                    <button className="btn btn-primary">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <Link href="https://pso2.com/players/fashionitems/20240807/index.html?bg=s_633" passHref>
                  <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image 
                      src="/assets/img/105.png" 
                      alt="New Image 2" 
                      layout="fill" 
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#000' }}>Fashion Items August 2024</h5>
                  <p className="card-text" style={{ color: '#000' }}>
                    Discover the latest fashion items added to the game in August 2024.
                  </p>
                  <Link href="https://pso2.com/players/fashionitems/20240807/index.html?bg=s_633" passHref>
                    <button className="btn btn-primary">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <Link href="https://pso2.com/players/fashionitems/20240717/index.html?bg=s_622" passHref>
                  <div style={{ position: 'relative', width: '100%', height: '300px' }}>
                    <Image 
                      src="/assets/img/101.png" 
                      alt="New Image 3" 
                      layout="fill" 
                      objectFit="cover"
                      className="card-img-top"
                    />
                  </div>
                </Link>
                <div className="card-body">
                  <h5 className="card-title" style={{ color: '#000' }}>Fashion Items July 2024</h5>
                  <p className="card-text" style={{ color: '#000' }}>
                    Check out the new fashion items released in July 2024.
                  </p>
                  <Link href="https://pso2.com/players/fashionitems/20240717/index.html?bg=s_622" passHref>
                    <button className="btn btn-primary">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
