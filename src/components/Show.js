import React from 'react';

import { FormattedMessage, FormattedDate, FormattedTime, FormattedRelative } from 'react-intl';

class Show extends React.Component {
	constructor() {
        super();
        this.currentDate = new Date()
    }

	render() {
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
					<FormattedRelative value={this.currentDate} updateInterval={1000}/>
				</div>
			</div>
		)
	}
}

export default Show;