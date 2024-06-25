import React from "react";
import Header from "../organisms/Header";
import PageHeader from "../molecules/PageHeader";
import DetailWrap from "../organisms/DetailWrap";
import data from "../../assets/data/portfoilodata";
import { useParams } from "react-router-dom";

function ProjectDetail() {
	const { name } = useParams()
	const portfolioInfo = data.portfolioList.filter((info, idx) => {
		if (info.name === name) return info;
	});

	return (
		<div>
			<Header />
			<main>
				<PageHeader titleBg="Works">
					It's <span className="point">{name}</span>
				</PageHeader>
				<section>
					<DetailWrap project={portfolioInfo[0]} />
				</section>
			</main>
		</div>
	);
}

export default ProjectDetail;
