import React, { Component } from 'react';
import ImgProfile from '../images/Maciej_Rajtar.jpg';
import { HashLink as Link } from 'react-router-hash-link';
export default class Profile extends Component {
	render() {
		return (
			<div>
				<div className='card'>
					<div className='card-image'>
						<img
							className='activator'
							src={ImgProfile}
							alt='Maciej Rajtar'
						/>
						<Link className='btn-floating halfway-fab waves-effect wave-light red'>
							<i className='material-icons activator'>
								more_vert
							</i>
						</Link>
					</div>
					<div className='card-content'>
						<span className='card-title activator grey-text text-darken-4'>
							Maciej Rajtar
						</span>
						<p>Frontend Developer</p>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>
							Follow
							<i className='material-icons right'>close</i>
						</span>
						<p className='flex-container'>
							<i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i>
							<i className='fab fa-twitter grey-text text-darken-4 social-style'></i>
							<i className='fab fa-google-plus-g grey-text text-darken-4 social-style'></i>
							<i className='fab fa-instagram grey-text text-darken-4 social-style'></i>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
