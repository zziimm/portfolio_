import React from 'react';
import PageWrap from "../../templates/PageWrap";
import PageHeader from "../molecules/PageHeader";
import PortfolioMain from "../organisms/PortfolioMain";

function Project() {
  return (
    <PageWrap page="projects">
      <main>
        <PageHeader titleBg="Works">
          My <span className="point">Projects</span>
        </PageHeader>
        <section>
          <PortfolioMain />

        </section>
      </main>
    </PageWrap>
  );
}

export default Project;