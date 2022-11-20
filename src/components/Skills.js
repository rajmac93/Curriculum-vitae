import React, { Component } from 'react';

export default class Skills extends Component {
	render() {
		return (
			<div>
				<div className='card'>
					<div className='card-content'>
						<h6>
							<stron>UMIEJĘTNOŚCI</stron>
						</h6>
						<div className='row mt-top'>
							<div className='col s6'>
								<p>HTML</p>
								<div className='progress grey lighten-1'>
									<div
										className='determinate blue'
										style={{ width: '89%' }}
									></div>
								</div>
							</div>
							<div className='col s6'>
								<p>CSS</p>
								<div className='progress grey lighten-1'>
									<div
										className='determinate blue'
										style={{ width: '60%' }}
									></div>
								</div>
							</div>
							<div className='col s6'>
								<p>JavaScript</p>
								<div className='progress grey lighten-1'>
									<div
										className='determinate blue'
										style={{ width: '70%' }}
									></div>
								</div>
							</div>
							<div className='col s6'>
								<p>React</p>
								<div className='progress grey lighten-1'>
									<div
										className='determinate blue'
										style={{ width: '30%' }}
									></div>
								</div>
							</div>
							<div className='col s6'>
								<p>GIT</p>
								<div className='progress grey lighten-1'>
									<div
										className='determinate blue'
										style={{ width: '70%' }}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
