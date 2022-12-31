import React from "react"

export default function Card(props) {
    return (
        <div className="hero">
            <div className="card">
                <img 
                    src={`public/${props.img}`} 
                    className="card--image" 
                />
                <div className="card--details">
                    <div className="location">
                        <div className="inside-content">
                            <img src="public/location-tag.png" className="card--tag" />
                            <p className="place-name">{props.location}</p>
                        </div>
                        <a href={`${props.googleMapsUrl}`} target="_blank" className="gps-link">View on Google Maps</a>
                    </div>
                    <div className="description">
                        <div className="title">
                            <p>{props.title}</p>
                        </div>
                        <div className="date">
                            <p>{props.startDate} - {props.endDate}</p>
                        </div>
                        <div className="content">
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}