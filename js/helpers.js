export const wait = async function (ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

export const timeout = async function (ms) {
	return new Promise((_, reject) => {
		setTimeout(function () {
			reject(
				new Error(`Request took too long! Timeout after ${ms / 1000} seconds`),
			);
		}, ms);
	});
};
