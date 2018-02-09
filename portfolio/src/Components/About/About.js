import React from "react";
import "./About.css"

export default function About() {
    return (
        <div className="About_Main" id="about">
        <div className='About_Header'>
            <h1> Hello World, I'm Travis</h1>
        </div>
        <div className='About_Me'>
         <p>
            I am a web developer based in California.  My passion began when I talked to a family friend about his career and he showed and explained what he did, that was my first exposure to Web Development.
        </p>
            <p>
            I have since been able to embark on my own journey in the web developing world by attending DevMountain a 12 week immersive program. What I love about web development is the limitless creativity in the community, the challenges it can present and having to work through the problems. 
            </p>
            <p>
            My main goal is to work on projects that either help make peoples lives easier or to help improve the tech industry. If you have any questions feel free to contact me.
            </p>
        </div>
        </div>
    );
}