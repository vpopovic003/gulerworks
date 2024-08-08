import NavBrand from "components/atoms/NavBrand";
import NavLink from "components/atoms/NavLink";
import Text from "components/atoms/Text";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-32 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-20">
          <div className="space-y-5">
            <NavBrand />
            <div className="">
              {/* <Text
                value={`71-75 Shelton Street, Covent Garden, WC2H 9JQ`}
                textStyle="SectionParagraph"
              />
              <Text
                value={`London, United Kingdom`}
                textStyle="SectionParagraph"
              />
              <Text value={`+44-742-993-5571`} textStyle="SectionParagraph" /> */}
              <Text
                value={`Copyright © ${new Date().getFullYear()}`}
                textStyle="SectionParagraph"
              />
              <Text value={`Design By Collosal`} textStyle="SectionParagraph" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 xl:gap-20">
            <div className="space-y-5">
              <Text value="SHOPS" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="Luxemood" href="https://luxemoodshop.com/" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="COMPANY" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="About" href="/about" />
                <NavLink value="Contact" href="/contact" />
              </div>
            </div>
            <div className="space-y-5">
              <Text value="LEGAL" textStyle="FooterLinkGroupTitle" />
              <div className="space-y-[10px]">
                <NavLink value="Privacy Policy" href="/privacy-policy" />
                <NavLink value="Term of Service" href="/term-of-service" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
