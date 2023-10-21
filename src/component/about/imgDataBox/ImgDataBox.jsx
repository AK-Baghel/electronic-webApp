import React from 'react'

function ImgDataBox({text,desc,img,reverse,blue}) {
    return (
        <div className={` ${reverse ? "reverseAboutQE" :''} ${blue ? "aboutQEBlue" :'aboutQE'}`}>
            <div className="aboutQEBox1 ">
                <div className={`${blue ? "aboutQEBlueText" :'aboutQEText'}`}>{text}</div>
                <div className="aboutTransLine "></div>
                <div className={`${blue ? "aboutQEBlueDesc" :'aboutQEDesc'}`}>{desc}</div>
            </div>
            <div className="aboutQEBox2"><img src={img} alt="" /></div>
        </div>
    )
}

export default ImgDataBox