import { useState } from "react";

const Gallery = () =>{

    const url1="https://img.collegedekhocdn.com/media/img/news/10435940_525007947605103_716899236523028769_n.jpg?tr=h-315,w-600";
    const url2="https://5.imimg.com/data5/JP/EU/GLADMIN-13828851/lecture-hall-500x500.png";
    const url3="https://content3.jdmagicbox.com/comp/lucknow/y1/0522px522.x522.190517233043.a3y1/catalogue/bncet-bakshi-ka-talab-lucknow-engineering-colleges-jafdgcmdit.jpg?clr=2d2d39";
    const url4="https://pr0.nicelocal.in/Ye-Wdr7ISOAvBcw1_PllsA/640x404,q85/4px-BW84_n2aGZJPv2Q_uysuQlRKXWAtkzmuAfqDQIQuoWs6sH7y2SHPYdARnDsRX_j9AvX_BMLXc6mHXzDlAapbHEr7kl-bcGl1JD3H_F4kqPEtArNh_Wsv2XMeG3OnhfgycmLN96WcuB4iGNBCYJkpHRuxjVhXBvUzJmZuBlPmIxcPeXkSi42qBDswlA9usUBuLl_hSLvnmIFj6vC3BQ";
    const url5="https://img.studyclap.com/img/institute/college/original/3660/bncet-lucknow-auditorium-379f93.png";
    const url6="https://i.pinimg.com/originals/17/14/69/171469967dc686f46d4d3a63db7ba5d8.jpg";
    const url7="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yN0p7hz4XGRfzyAA8zX4DiKx3Mnm8cuVvw&usqp=CAU"
    const url8="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGufzUzhJbYXBQG_x_1YqtrMAl0vCuad1sDA&usqp=CAU";

    const [mainimg, setMainimg] = useState(url1)

    const changeImage = (imgurl) => {
         setMainimg(imgurl)
    }
    return(
        <div className="gall">
        <div className="container">
            
            
            <img className="img-fluid mt-5" src={mainimg} alt=""/>


            <div className="row mt-5">
                <div className="col-md-3">
                    <img onClick={ () =>{ changeImage(url1)}} className="img-fluid" src={url1} alt=""/>
                    {/* onclick andr event aise hi paas krte hai */}
                </div>

                <div className="col-md-3">
                    <img onClick={ () =>{ changeImage(url2)}} className="img-fluid" src={url2} alt=""/>
                </div>

                <div className="col-md-3">
                    <img onClick={ () =>{ changeImage(url3)}} className="img-fluid" src={url3} alt=""/>
                </div>

                <div className="col-md-3">
                    <img onClick={ () =>{ changeImage(url4)}} className="img-fluid" src={url4} alt=""/>
                </div>

                <div className="col-md-3">
                    <img onClick={ () =>{ changeImage(url5)}} className="img-fluid" src={url5} alt=""/>
                </div>

                <div className="col-md-3">
                    <img onClick={ () =>{ changeImage(url6)}}  className="img-fluid" src={url6} alt=""/>
                </div>

                <div className="col-md-3">
                    <img onClick={ () =>{ changeImage(url7)}} className="img-fluid" src={url7} alt=""/>
                </div>

                <div className="col-md-3">
                    <img onClick={ () =>{ changeImage(url8)}} className="img-fluid" src={url8} alt=""/>
                </div>

            </div>
        </div>
        </div>
    )
}
export default Gallery;