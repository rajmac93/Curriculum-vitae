import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div>
				<div className='card'>
					<div className='card-content'>
						<h6 className='mt-bottom'>
							<strong>ABOUT ME</strong>
						</h6>
						<p className='grey-text'>
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit. Donec dapibus ultrices dui.
							Duis finibus lobortis neque eu varius.
						</p>
					</div>
					<div className='card-action'>
						<h6>
							<strong>PERSONAL INFO</strong>
						</h6>
						<div className='row mt'>
							<div className='col s12 m6 l6 xl6'>
								<p>
									<strong>Address:</strong> 123 Lorem
								</p>
								<p>
									<strong>Email:</strong> asd@asd.com
								</p>
								<p>
									<strong>Phone:</strong> 123 456 789
								</p>
							</div>
							<div className='col s12 m6 l6 xl6'>
								<p>
									<strong>Main lenguage:</strong> Polish
								</p>
								<p>
									<strong>second lenguage:</strong> English
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
