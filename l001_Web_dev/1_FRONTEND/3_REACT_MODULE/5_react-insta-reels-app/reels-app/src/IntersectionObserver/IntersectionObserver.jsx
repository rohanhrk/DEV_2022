import React from 'react'
import video1 from "./galaxy.mp4";
import video2 from "./mountain_road.mp4";
import video3 from "./occean_beach.mp4";
import video4 from "./pigeon.mp4";
import { useEffect } from 'react';
import "./styles.css"

function IntersectionObserverDemo() {
    function callBack(entries) {
        entries.forEach((entry) => {
            let child = entry.target.children[0];
            // console.log(child.id);

            // play video => assysnc work
            // pause video => sync work
        })
    }

    useEffect(function fn() {
        let conditionObject = {
            root: null, // full UI
            threshold: "0.9" // 90% 
        }

        let observer = new IntersectionObserver(callBack, conditionObject);
        let elements = document.querySelectorAll(".video-container");
        elements.forEach((elem) => {
            observer.observe(elem);
        })
    }, []);
    return (
        <div>
            <div className="video-container">
                <Video
                    src={video1}
                    id="a"
                ></Video>
            </div>
            <div className="video-container">
                <Video
                    src={video2}
                    id="b"
                ></Video>
            </div>
            <div className="video-container">
                <Video
                    src={video3}
                    id="c"
                ></Video>
            </div>
            <div className="video-container">
                <Video
                    src={video4}
                    id="d"
                ></Video>
            </div>
        </div>
    )
}

export default IntersectionObserverDemo
function Video(props) {
    return (
        <video className="video-styles" controls muted="true" id={props.id}>
            <source src={props.src}
                type="video/mp4"
            ></source>
        </video>
    )
}

