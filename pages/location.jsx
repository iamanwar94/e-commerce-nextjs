import React, { useState } from 'react'
import Image from "next/image";
import locationImg from "./assets/fur18.jpg"
import location from "../styles/Location.module.scss"
import { MdLocationOn } from 'react-icons/md';
import { FaDirections } from 'react-icons/fa';


const Location = () => {

    // const data = {
    //     firstaddress : "" ,
    //     seconaddress: "",
    //     thirdaddress: "",
    //     fourthaddress: "",
    //     fifthaddress: "",
    //     sixaddress: "",
    //     sevenaddress: false,
    //     eightaddress: false,
    //   };

    // const [address, setaddress] = useState(data);

    const [data, setdata] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.474242617436!2d67.0945033!3d24.9499746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x389750e2ea7ec11d!2sRufi%20Bara%20Market!5e0!3m2!1sen!2s!4v1661251073358!5m2!1sen!2s");
    //  useState("https://www.google.com/maps/d/embed?mid=1usRkJzwkZLUjSCJV6O5NcyS4vco&ehbc=2E312F" )


    return (
        <div>
            <div className={location.location_wrapper}>
                <div className={location.heading}>
                    {/* <p>Everything On Sale With Thousand Of Items for Fast Delicery</p> */}
                    <h1>Furniture Mecca <br /> Store Location</h1>
                </div>
                <div className={location.img}>
                    <Image src={locationImg} alt="Loading..." objectFit="cover" layout='fill' />
                </div>
            </div>

            <div className={location.map_wrapper}>
                <div className={location.map_detail}>
                    {/* one */}
                    <div className={location.map_card} onClick={() => { setdata("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1810.1768474765413!2d67.00082835!3d24.851766750000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e02397359b5%3A0x1571e613538067fc!2sBolton%20Market%20Bunder%20Quarter%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1661327913777!5m2!1sen!2s") }}>
                        {/* left */}
                        <div className={location.img}>
                            <Image src={locationImg} alt="Loading..." objectFit="cover" layout='fill' />
                        </div>
                        {/* right */}
                        <div className={location.address}>
                            <h6>
                                101 E. Venango St. Philadelphia ,PA 19134 <br />
                                267-639-6801 meccavenango@gmail.com
                            </h6>
                        </div>
                    </div>

                    {/* two */}
                    <div className={location.map_card}>
                        {/* left */}
                        <div className={location.img}>
                            <Image src={locationImg} alt="Loading..." objectFit="cover" layout='fill' />
                        </div>
                        {/* right */}
                        <div className={location.address}>
                            <h6>
                                1430 W.Hunting Park Ave. Philadelphia ,PA 19140 <br />
                                267-297-6801 meccahuntingpark@gmail.com
                            </h6>
                        </div>
                    </div>

                    {/* three */}
                    <div className={location.map_card}>
                        {/* left */}
                        <div className={location.img}>
                            <Image src={locationImg} alt="Loading..." objectFit="cover" layout='fill' />
                        </div>
                        {/* right */}
                        <div className={location.address}>
                            <h6>
                                5648 Lancaster Ave. Philadelphia ,PA 19131  <br />
                                215-877-1200 meccalancaster@gmail.com
                            </h6>
                        </div>
                    </div>

                    {/* four */}
                    {/* <div className={location.map_card}>
                 
                        <div className={location.img}>
                            <Image src={locationImg} alt="Loading..." objectFit="cover" layout='fill' />
                        </div>
                   
                        <div className={location.address}>
                            <h6>
                                7936 Frankford Ave. Philadelphia ,PA 19136 <br />
                                215-821-2855 meccafrankford@gmail.com
                            </h6>
                        </div>
                    </div> */}

                    {/* five */}
                    {/* <div className={location.map_card}>
                   
                        <div className={location.img}>
                            <Image src={locationImg} alt="Loading..." objectFit="cover" layout='fill' />
                        </div>
                     
                        <div className={location.address}>
                            <h6>
                                501 S ,69th St,Upper  <br />
                                267-639-6801 meccavenango@gmail.com
                            </h6>
                        </div>
                    </div> */}

                    {/* six */}
                    {/* <div className={location.map_card}>
                  
                        <div className={location.img}>
                            <Image src={locationImg} alt="Loading..." objectFit="cover" layout='fill' />
                        </div>
                 
                        <div className={location.address}>
                            <h6>
                                101 E. Venango St. Philadelphia ,PA 19134 <br />
                                267-639-6801 meccavenango@gmail.com
                            </h6>
                        </div>
                    </div> */}


                </div>
                <div className={location.map}>
                    {/* <iframe id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="300"
                        height="200"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
                    </iframe> */}
                    <iframe
                        src={data}
                        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.474242617436!2d67.0945033!3d24.9499746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x389750e2ea7ec11d!2sRufi%20Bara%20Market!5e0!3m2!1sen!2s!4v1661251073358!5m2!1sen!2s"
                        width={200} height={200}
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default Location
