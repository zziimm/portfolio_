import React from "react";
import Header from "../components/organisms/Header";
import Preloader from "../components/molecules/Preloader";

function PageWrap(props) {
	const { children } = props;

	return (
		<div>
			<Header page={props.page} />
			<>{children}</>
			<Preloader />
		</div>
	);
}

export default PageWrap;
