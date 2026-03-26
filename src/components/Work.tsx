import { useEffect, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Explicitly kill any existing Work triggers to prevent double-pinning
    ScrollTrigger.getAll().forEach(st => {
      if (st.vars.trigger === ".work-section" || st.vars.id === "work") {
        st.kill();
      }
    });

    let ctx = gsap.context(() => {
      const box = gsap.utils.toArray<HTMLElement>(".work-box");
      const workSection = container.current;
      const workContainer = workSection?.querySelector(".work-container");

      if (!workSection || !workContainer || box.length === 0) return;

      const getTranslateX = () => {
        const rectLeft = workContainer.getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        let padding: number = parseInt(window.getComputedStyle(box[0]).padding) / 2;
        return (rect.width * box.length) - (rectLeft + parentWidth) + padding;
      };

      gsap.timeline({
        scrollTrigger: {
          trigger: workSection,
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })
      .to(".work-flex", {
        x: () => -getTranslateX(),
        ease: "none",
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work" ref={container}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[...Array(6)].map((_value, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>Project Name</h4>
                    <p>Category</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React, Threejs</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
