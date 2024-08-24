export const getPrice = (condition, price) => {
	return condition ? `${price}/mo` : `${price * 10}/yr`;
};
