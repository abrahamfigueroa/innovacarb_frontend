import React from 'react'
import PickUpImage from "../Assets/pick-up-image.png";
import TransformationImage from "../Assets/transformation-image.png";
import ResultImage from "../Assets/result-image.png";

const Process = () => {
const workInfoData = [
    {
        image: PickUpImage,
        title: "Recolectamos",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo enim, ullamcorper non felis aliquet, tempor scelerisque ante. Nullam metus. " 
    },
    {
        image: TransformationImage,
        title: "Procesamos",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo enim, ullamcorper non felis aliquet, tempor scelerisque ante. Nullam metus. " 
    },
    {
        image: ResultImage,
        title: "Convertimos",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur justo enim, ullamcorper non felis aliquet, tempor scelerisque ante. Nullam metus. " 
    },
]

  return (
    <div className='work-section-wrapper' id='Process'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Proceso</p>
            <h1 className='primary-heading'>Nuestro proceso</h1>
            <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((data) => (
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Process