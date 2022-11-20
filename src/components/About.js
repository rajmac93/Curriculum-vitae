import React, { Component } from 'react';

export default class About extends Component {
	render() {
		return (
			<div>
				<div className='card'>
					<div className='card-content'>
						<h6 className='mt-bottom'>
							<strong>O MNIE</strong>
						</h6>
						<p className='grey-text'>
							Programowanie to moja największa pasja. Od
							ponad roku nieustannie ją rozwijam,
							samodzielnie ucząc się w domu. Swoje "domowe"
							doświadczenie, chciałbym rozwinąć w Państwa
							firmie
						</p>
					</div>
					<div className='card-action'>
						<h6>
							<strong>DANE OSOBOWE</strong>
						</h6>
						<div className='row mt'>
							<div className='col s12 m6 l6 xl6'>
								<p>
									<strong>Adres:</strong> Rzeszów, ul.
									Lewakowskiego 3B
								</p>
								<p>
									<strong>Email:</strong> rajmac93@gmail.com
								</p>
								<p>
									<strong>Telefon:</strong> 726 517 950
								</p>
							</div>
							<div className='col s12 m6 l6 xl6'>
								<p>
									<strong>język ojczysty:</strong> Polski
								</p>
								<p>
									<strong>język obcy:</strong> Angielski
									(B2)
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
