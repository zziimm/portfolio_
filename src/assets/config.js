import mainSrc from "../images/home2.jpg";

const size = {
	mobile: "720px",
	tablet: "1024px",
	laptop: "1280px",
};

const config = {
	mainColor: "#00b890",

	mobile: `(max-width: ${size.mobile})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,

	mainSrc: mainSrc,
};

export default config;
