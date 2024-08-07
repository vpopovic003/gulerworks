import ButtonLink from "components/atoms/Button/ButtonLink";
import LineDivider from "components/atoms/LineDivider";
import FeatureCard from "components/molecules/Card/FeatureCard";
import PageSentence from "components/molecules/PageSentence";
import PricingCard from "components/molecules/Card/PricingCard";
import ProjectCard from "components/molecules/Card/ProjectCard";
import SectionSentence from "components/molecules/SectionSentence";
import LogoList from "components/organisms/LogoList";
import TestimonialList from "components/organisms/TestimonialList";
import PageTemplate from "components/templates/PageTemplate";
import Image from "next/image";
import React from "react";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaCartArrowDown, FaShippingFast } from "react-icons/fa";
const Home = () => {
  return (
    <>
      <PageTemplate title="Gulerworks">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Leading the Way in eCommerce Excellence."
              description="Delivering quality products and exceptional service, every time."
              badge="CUSTOMER-DRIVEN"
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Learn More" href="/about" />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Order"
              description="Our streamlined online platform makes placing orders quick and effortless, ensuring a smooth start to your shopping experience."
              icon={<FaCartArrowDown />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Fulfill"
              description="Our dedicated team promptly fulfills it with precision and care, guaranteeing the highest quality in every package."
              icon={<FaBoxesPacking />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Ship"
              description=" Your products are shipped swiftly and securely, using trusted carriers to deliver right to your doorstep, meeting highest expectations."
              icon={<FaShippingFast />}
            />
          </div>
        </section>
        <LineDivider />
        {/* How we work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="w-full h-[400px] relative" data-aos="fade-right">
            <Image
              src={"/images/ecommerce.svg"}
              layout="fill"
              objectFit="fill"
              alt="Structured plan"
            />
          </aside>
          <aside
            className="text-center sm:w-10/12 lg:text-left lg:w-full"
            data-aos="fade-left"
          >
            <SectionSentence
              title="Everything is well planned, expertly designed, and passionately developed to enhance your shopping experience."
              paragraph="At Gulerworks LTD, we excel in the world of eCommerce, offering an extensive range of quality products and exceptional service to our customers."
              badge="HOW WE WORK"
            />
          </aside>
        </section>

        {/* Our Brands */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="Discover the Excellence Behind Our Trusted Brands"
              badge="OUR BRANDS"
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />

        {/* Our Team */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="We're a team of product managers, developers and marketing specialists."
                paragraph="At Gulerworks LTD, our dedicated team is the backbone of our eCommerce success. Together, we work tirelessly to deliver excellence at every stage of your shopping journey."
                badge="OUR TEAM"
              />
              <ButtonLink
                value="See Our Team"
                href="/about"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={"/images/team.svg"}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />

        {/* How We Work */}
      </PageTemplate>
    </>
  );
};

export default Home;
