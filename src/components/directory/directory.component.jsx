import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map((section) => (
			<MenuItem {...section} key={section.id} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
