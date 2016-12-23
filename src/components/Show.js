import React from 'react';

import { FormattedMessage, FormattedDate, FormattedTime, FormattedRelative } from 'react-intl';

class Show extends React.Component {
	constructor() {
        super();

        this.currentDate = new Date();
        this.targetDate = new Date(
        	this.currentDate.getFullYear(),
        	this.currentDate.getMonth(),
        	this.currentDate.getDate(),
        	this.currentDate.getHours(),
        	this.currentDate.getMinutes() + 2,
        	this.currentDate.getSeconds()
        );
    }

	render() {

        // https://github.com/yahoo/react-intl/wiki/Components#formattedrelative
		const options_FormattedRelative1 = {
			style: 'numeric', // 看不出來設numeric跟best fit有什麼差別
			units: 'second'
		};

		const options_FormattedRelative2 = {
			style: 'best fit', // 看不出來設numeric跟best fit有什麼差別
			units: 'second'
		};

		return (
			<div>
				<div>
					<FormattedMessage
						id='hello'
						description='say hello to David.'
						defaultMessage='Hello, David'
					/>
				</div>
				<div>
					<FormattedDate
						value={this.currentDate}
						year='numeric'
						month='long'
						day='2-digit'
					/>
				</div>
				<div>
					<FormattedTime value={this.currentDate}/>
				</div>
				<div>
					<FormattedRelative
						value={this.targetDate}
						initialNow={this.currentDate}
						updateInterval={1000}
					/>
				</div>
				<div>
					<FormattedRelative
						value={this.targetDate}
						initialNow={this.currentDate}
						updateInterval={1000}
						{...options_FormattedRelative1}
					/>
				</div>
				<div>
					<FormattedRelative
						value={this.targetDate}
						initialNow={this.currentDate}
						updateInterval={1000}
						{...options_FormattedRelative2}
					/>
				</div>
			</div>
		)
	}
}

export default Show;