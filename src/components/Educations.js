import React, { Component } from 'react';

export default class Educations extends Component {
	render() {
		return (
			<div>
				<div className='card'>
					<div className='card-content'>
						<h6>
							<strong>WYKSZTAŁCENIE</strong>
						</h6>
						<table className='striped'>
							<thead>
								<tr>
									<th>Nazwa</th>
									<th>Data</th>
									<th>Specjalizacja</th>
									<th>Poziom Wykształcenia</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Uniwersytet Rzeszowski</td>
									<td>Październik 2013 – Luty 2019</td>
									<td>
										Inteligentne Systemy Wspomagania Decyzji
									</td>
									<td>Inżynier</td>
								</tr>
								<tr>
									<td>Zespół Szkół nr 3 w Sanoku</td>
									<td>Wrzesień 2009 – Maj 2013</td>
									<td>Grafik komputerowy</td>
									<td>Średnie</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
