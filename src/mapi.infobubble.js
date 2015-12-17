var $ = require('jquery'),
	_ = require('underscore');

require('js-info-bubble');

let MapInfoBubble = {
	infoBubble: InfoBubble,
	addInfoBubble({
		className = 'infobubble', 
		id = _.uniqueId('infobubble'), 
		content,
		shadowStyle = 0,
		padding = 5,
		borderRadius = 10,
		borderWidth = 2,
		borderColor = '#2c2c2c',
		hideCloseButton = false,
		maxHeight = 140,
		maxWidth = 200,
		disableAutoPan = true,
		divToPlot = '', 
		...options
	}) {
		options = {
			className , 
			id , 
			content,
			shadowStyle,
			padding,
			borderRadius,
			borderWidth,
			borderColor,
			hideCloseButton,
			maxHeight,
			maxWidth,
			disableAutoPan,
			divToPlot, 
			...options
		}

		options.map = this.map;

		if (options.lat && options.lng) {
			options.position = new google.maps.LatLng(options.lat, options.lng);
		}

		var obj;
		obj = new this.infoBubble(options);
		
		obj.open();

		this.addObject(className, id, obj);

		return obj;
	}
}
InfoBubble = null;
module.exports = MapInfoBubble;