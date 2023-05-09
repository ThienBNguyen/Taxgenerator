const customMiddleware = (store) => (next) => (action) => {
	// console.log('Current state:', store.getState());
	// console.log('Action:', action);

	// Call the next middleware or reducer with the action
	const result = next(action);

	console.log('Next state:', store.getState());

	return result;
};

export default customMiddleware;
