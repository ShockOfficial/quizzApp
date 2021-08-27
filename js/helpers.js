export const wait = async function (ms) {
	let timeoutId;

	const waitPromise = new Promise((resolve) => {
		timeoutId = setTimeout(() => {
			resolve();
		}, ms);
	});

	return {
		promise: Promise.race([waitPromise]),
		timeoutId,
	};
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
