import React, { useEffect } from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContent">
            <h3 className="fontSize" data-aos="fade-right">
              {val.text}
            </h3>
            <h1>
              {val.name}
              <Typewriter
                options={{
                  strings: [`${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
};
