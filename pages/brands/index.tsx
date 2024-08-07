import Button from "components/atoms/Button";
import Select from "components/atoms/Form/Select";
import LineDivider from "components/atoms/LineDivider";
import PageSentence from "components/molecules/PageSentence";
import ProjectCard from "components/molecules/Card/ProjectCard";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";
import randomString from "utils/randomString";
import LogoList from "components/organisms/LogoList";

const Project = () => {
  interface Project {
    title: string;
    description: string;
  }
  const projectList: Project[] = [
    {
      title: "The Mobile App Landing Page",
      description: "A landing page for mobile app",
    },
  ];
  return (
    <PageTemplate title="Project - Collosal">
      <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <aside
          className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12"
          data-aos="fade-right"
        >
          <div className="text-center md:text-left">
            <PageSentence
              badge="OUR BRANDS"
              title="Discover the Excellence Behind Our Trusted Brands"
            />
          </div>
        </aside>
      </section>
      <LogoList />
    </PageTemplate>
  );
};

export default Project;
