import React, { Component } from "react";
import "./card-status.scss";
import { connect } from "react-redux";
import { setStatusSearchType } from "../../../modules/filterInput/actions";
import { filterMediaData } from "../../../modules/media/actions";

class CardStatus extends Component {

	handleStatusFilterButtonClicked = (event) => {
		const type = event.target.getAttribute("data-filter");
		this.props.setStatusSearchType(type);
		this.props.filterMediaData();
	};

	render() {
		const { statusSearchType } = this.props;

		return (
			<div className="card-status-wrapper" onClick={this.handleStatusFilterButtonClicked}>
				<button className={statusSearchType === "Pending" ? "active" : ""} data-filter="Pending">Pending</button>
				<button className={statusSearchType === "Approved" ? "active" : ""} data-filter="Approved">Approved</button>
				<button className={statusSearchType === "Rejected" ? "active" : ""} data-filter="Rejected">Rejected</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		statusSearchType: state.searchData.statusSearchType
	};
};

export default connect(mapStateToProps, { setStatusSearchType, filterMediaData })(CardStatus);
