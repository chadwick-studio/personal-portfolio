const getHoverDirection = (e) => {
	const { width, height, top, left } = e.target.getBoundingClientRect();
	const l = e.pageX - (left + window.pageXOffset);
	const t = e.pageY - (top + window.pageYOffset);
	const x = l - (width / 2) * (width > height ? height / width : 1);
	const y = t - (height / 2) * (height > width ? width / height : 1);
	if (Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4 === 2) {
		return "auto auto 0 auto"; //bottom
	} else {
		return "0 auto auto auto"; //top
	}
};
