import LineDivider from "components/atoms/LineDivider";
import TeamCard from "components/molecules/Card/TeamCard";
import PageSentence from "components/molecules/PageSentence";
import SectionSentence from "components/molecules/SectionSentence";
import LogoList from "components/organisms/LogoList";
import StatisticList from "components/organisms/StatisticList";
import PageTemplate from "components/templates/PageTemplate";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <PageTemplate title="About - Collosal">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="fade-down-right">
          <div className="w-full h-[480px] relative">
            <Image
              src={"/images/about-illustration.webp"}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        >
          <PageSentence
            badge="ABOUT"
            title="We are creative, smart and hardworking people"
            description={`At Gulerworks LTD, our team is a dynamic group of professionals committed to excellence and innovation in eCommerce. Together, our team works cohesively to create a superior shopping experience and uphold the high standards that define Gulerworks LTD.`}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="OUR TEAM"
            title="Meet the team! All creative people are here"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/atakan.jpg"
              job="Founder/Director"
              name="Atakan Guler"
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default About;
