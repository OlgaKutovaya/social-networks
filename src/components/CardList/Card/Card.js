import React, { Component } from "react";
import "./card.scss";
import { connect } from "react-redux";
import { changeCardStatus } from "../../../modules/media/actions";

class Card extends Component {

	handleStatusChange = (event) => {
		const { id, changeCardStatus } = this.props;
		const action = event.target.getAttribute("data-action");
		changeCardStatus(id, action);
	};

	render() {
		const {
			author_pic, author_username, link,
			social_network, pic, caption,
			likes_number, comments_number,
			status
		} = this.props;

		return (
			<div className='card'>
				{/*HEADER*/}
				<div className="card-heading">
					<div className="user-img">
						<img src={author_pic} alt="" />
					</div>
					<div className="card-heading-inner-wrapper">
						<p>{author_username}</p>
						<p><a href={link}>
							{social_network}
						</a></p>
					</div>
				</div>
				{/*IMAGE*/}
				<div className="image-card-wrapper">
					<img src={pic} alt="" />
					<div className="mask-img">
						<div className="mask-text-wrapper">
							<h2>last photo with black hair</h2>
							<p>#Thinkpink</p>
						</div>
					</div>
					<div className="block-mask-hover">
						<p>{caption}</p>
					</div>
				</div>
				{/*LIKES & COMMENTS*/}
				<div className="like-comments-wrapper">
					<div className="likes-block">
						<h5>likes</h5>
						<p>{likes_number}</p>
					</div>
					<div className="comments-block">
						<h5>comments</h5>
						<p>{comments_number}</p>
					</div>
				</div>
				{/*BUTTONS*/}
				<div className="buttons-wrapper">
					{(status !== "Rejected") ?
						<button onClick={this.handleStatusChange} data-action="Rejected">reject</button> : null}
					{(status !== "Approved") ?
						<button onClick={this.handleStatusChange} data-action="Approved">approve</button> : null}
				</div>
			</div>
		);
	}
}

export default connect(null, { changeCardStatus })(Card);
