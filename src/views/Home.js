import React, { useState } from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";

import ReactFullpage from "@fullpage/react-fullpage";
import * as classes from "./Home.module.css";

//images
import menu1 from "../assets/images/gourmandise/menu/menu1.jpg";
import menu2 from "../assets/images/gourmandise/menu/menu2.jpg";
import menu3 from "../assets/images/gourmandise/menu/menu3.webp";
import menu4 from "../assets/images/gourmandise/menu/menu4.webp";

import Slider from "../components/sections/FullPages/Slider";
import Footer from "../components/layout/Footer";
import { Card } from "antd";
const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;
const { Meta } = Card;

const Home = () => {
  const originalColors = [
    "#ffefd7",
    "#181613",
    "#ff5f45",
    "#181613",
    "#0798ec",
    "#fc6c7c",
    "#435b71",
    "orange",
    "blue",
    "purple",
    "yellow",
  ];

  const state = {
    sectionsColor: [...originalColors],
    fullpages: [
      {
        text: "Section 1",
      },
      {
        text: "Section 2",
      },
      {
        text: "Section 3",
      },
    ],
  };

  const sliderData = [
    {
      image: menu2,
      text: "some description 1",
      extra: null,
    },
    {
      image: menu1,
      text: "some description 2",
      extra: null,
    },
    {
      image: menu3,
      text: "some description 3",
      extra: null,
    },
    {
      image: menu4,
      text: "some description 4",
      extra: null,
    },
  ];

  const { fullpages } = state;
  if (!fullpages.length) {
    return null;
  }
  return (
    <>
      {/* <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Cta split /> */}
      <ReactFullpage
        debug /* Debug logging */
        // Required when using extensions
        // fullpage options
        licenseKey={"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"} // Get one from https://alvarotrigo.com/fullPage/pricing/
        navigation
        anchors={["firstPage", "secondPage", "thirdPage", "contact_us"]}
        sectionSelector={SECTION_SEL}
        sectionsColor={state.sectionsColor}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            <div
              align="center"
              key={"text"}
              className={SEL + " " + classes.sectionContainer}
            >
              <Slider images={sliderData} />
              <h1>qsdqsd</h1>
            </div>
            <div
              align="center"
              key={"text"}
              className={SEL + " " + classes.sectionContainer}
            >
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div
              align="center"
              key={"text"}
              className={SEL + " " + classes.sectionContainer}
            >
              <br></br>
              <FeaturesTiles />
            </div>
            <div
              align="center"
              key={"text"}
              className={SEL + " " + classes.sectionContainer}
            >
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

export default Home;
