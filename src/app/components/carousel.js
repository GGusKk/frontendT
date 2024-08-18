import Image from "next/image"

export default function Carousel(){
    return(
        <>
        <br /><br /><br />
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1500">
            <img src="/assets/img/img11.png" layout="responsive" className="d-block w-2000" width={1920} height={960} alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="1500">
            <img src="/assets/img/101.png" layout="responsive" className="d-block w-2000" width={1920} height={960} alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="1500">
            <img src="/assets/img/102.png" layout="responsive" className="d-block w-2000" width={1920} height={960} alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        
        
        </>
    
    )
}