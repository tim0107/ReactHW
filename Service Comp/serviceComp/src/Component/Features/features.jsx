import React from "react";
import image1 from '../../assets/figmaImg/image1.png'
import image2 from '../../assets/figmaImg/image2.png'
import image3 from '../../assets/figmaImg/image3.png'
import image4 from '../../assets/figmaImg/image4.png'
import './features.scss'

export default function Features() {
    return (
        <section className="features-section">
            <h2 className="features-title">Features</h2>
            <p className="features-subtitle">
                Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
            </p>
            <div className="features-grid">
                <div className="feature-card">
                    <img src={image1} alt="Search Data" />
                    <div className="feature-text">
                        <h3>Search Data</h3>
                        <p>
                            Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.
                        </p>
                        <a href="#">Learn more →</a>
                    </div>
                </div>

                <div className="feature-card">
                    <img src={image2} alt="24 Hours Access" />
                    <div className="feature-text">
                        <h3>24 Hours Access</h3>
                        <p>
                            Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.
                        </p>
                        <a href="#">Learn more →</a>
                    </div>
                </div>

                <div className="feature-card">
                    <img src={image3} alt="Print Out" />
                    <div className="feature-text">
                        <h3>Print Out</h3>
                        <p>
                            Print out service gives you convenience if someday you need print data, just edit it all and just print it.
                        </p>
                        <a href="#">Learn more →</a>
                    </div>
                </div>

                <div className="feature-card">
                    <img src={image4} alt="Security Code" />
                    <div className="feature-text">
                        <h3>Security Code</h3>
                        <p>
                            Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.
                        </p>
                        <a href="#">Learn more    →</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
