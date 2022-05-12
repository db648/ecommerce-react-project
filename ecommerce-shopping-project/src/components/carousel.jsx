
export const CarouselComponent = () => {
  return (
    <>
   
     <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-topbannercarousel-p2-aks-5070.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-topbannercarousel-p4-jeansshorts-min50.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-MHP-topbannercarousel-p2-johnplayers-upto66.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-topbannercarousel-p4-jeansshorts-min50.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};



// <div
// id="carouselExampleIndicators"
// className="carousel slide"
// data-ride="carousel"
// >
// <ol className="carousel-indicators">
//   <li
//     data-target="#carouselExampleIndicators"
//     data-slide-to="0"
//     className="active"
//   ></li>
//   <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//   <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
//   <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
// </ol>
// <div className="carousel-inner">
//   <div className="carousel-item active">
//     <img
//       className="d-block w-100"
//       src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-topbannercarousel-p2-aks-5070.jpg"
//       alt="First slide"
//     />
//   </div>
//   <div className="carousel-item">
//     <img
//       className="d-block w-100"
//       src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/7feef02b-0072-4c1b-b83d-4e46a5d93c6b1649530621162-Sangria_Desk_Banner.jpg"
//       alt="Second slide"
//     />
//   </div>
//   <div className="carousel-item">
//     <img
//       className="d-block w-100"
//       src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-KHP-topbannercarousel-p3-categoryday-brands-starting149.jpg"
//       alt="Third slide"
//     />
//   </div>
//   <div className="carousel-item">
//     <img
//       className="d-block w-100"
//       src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-MHP-topbannercarousel-p2-johnplayers-upto66.jpg"
//       alt="fourth slide"
//     />
//   </div>
//   <div className="carousel-item">
//     <img
//       className="d-block w-100"
//       src="https://assets.ajio.com/cms/AJIO/WEB/10052022-D-unisex-topbannercarousel-p4-jeansshorts-min50.jpg"
//       alt="fifth slide"
//     />
//   </div>
// </div>
// <a
//   className="carousel-control-prev"
//   href="#carouselExampleIndicators"
//   role="button"
//   data-slide="prev"
// >
//   <span
//     className="carousel-control-prev-icon"
//     aria-hidden="true"
//   ></span>
//   <span className="sr-only">Previous</span>
// </a>
// <a
//   className="carousel-control-next"
//   href="#carouselExampleIndicators"
//   role="button"
//   data-slide="next"
// >
//   <span
//     className="carousel-control-next-icon"
//     aria-hidden="true"
//   ></span>
//   <span className="sr-only">Next</span>
// </a>
// </div>    