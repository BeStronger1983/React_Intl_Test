import React from 'react';

import { FormattedMessage, FormattedDate, FormattedTime } from 'react-intl';

class Show extends React.Component {
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
						value={new Date()}
						year='numeric'
						month='long'
						day='2-digit'
					/>
				</div>
				<div>
					<FormattedTime
						value={new Date()}
					/>
				</div>
			</div>
		)
	}
}

export default Show;