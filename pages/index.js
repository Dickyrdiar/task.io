import React from "react";
// import '../styles/base.scss'
import BaseFeature from "./components/BaseFeature";
import BaseFooter from "./components/BaseFooter";
import BaseGraphic from "./components/BaseGraphic";
import BaseHero from "./components/BaseHero";
import BaseWork from "./components/BaseWork";
import NavigationBar from "./components/BaseNavbar";
// import styles from '../styles/navbar.module.scss'

const MyApp = () => {
    return (
			<>
				<NavigationBar/>
				<BaseHero />
				<BaseFeature />
				<BaseGraphic />
				<BaseWork />
				<BaseFooter />
			</>
    )
}

export default MyApp