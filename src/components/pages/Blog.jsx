import React from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";

export const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading title="Grap-It" />
          <div className="content grid3">
            {blog.map((item) => (
              <div className="box" data-aos="flip-left">
                <div className="text">
                  <h3 data-aos="fade-right">{item.title}</h3>
                  <label data-aos="fade-left">
                    {item.author} {item.date}
                  </label>
                  <p data-aos="fade-up-right">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
