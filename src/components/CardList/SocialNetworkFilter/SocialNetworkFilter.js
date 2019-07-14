import React, { Component } from "react";
import "./social-network-filter.scss";
import { connect } from "react-redux";
import { filterMediaData } from "../../../modules/media/actions";
import { setSocialSearchType } from "../../../modules/filterInput/actions";

class SocialNetworkFilter extends Component {
	handleSocialFilterButtonClicked = (event) => {
		const type = event.target.getAttribute("data-filter");
		this.props.setSocialSearchType(type);
		this.props.filterMediaData();
	};

	render() {
		const { socialSearchType } = this.props;
		return (
			<div className="network-tabs-wrapper">
				<button
					onClick={this.handleSocialFilterButtonClicked}
					className={socialSearchType === "All" ? "active" : ""}
					data-filter="All">All
				</button>
				<button
					onClick={this.handleSocialFilterButtonClicked}
					className={socialSearchType === "Instagram" ? "active" : ""}
					data-filter="Instagram">Instagram
				</button>
				<button
					onClick={this.handleSocialFilterButtonClicked}
					className={socialSearchType === "Youtube" ? "active" : ""}
					data-filter="Youtube">Youtube
				</button>
				<button
					onClick={this.handleSocialFilterButtonClicked}
					className={socialSearchType === "Facebook" ? "active" : ""}
					data-filter="Facebook">Facebook
				</button>
				<button
					onClick={this.handleSocialFilterButtonClicked}
					className={socialSearchType === "Twitter" ? "active" : ""}
					data-filter="Twitter">Twitter
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		socialSearchType: state.searchData.socialSearchType
	};
};

export default connect(mapStateToProps, { setSocialSearchType, filterMediaData })(SocialNetworkFilter);
