interface IAuthToken {
	token?: string;
	user?: any;
}

const tokenName = 'offramp.user-auth';

export const retrieveToken = () => {
	const data = localStorage.getItem(tokenName);
	return data ? JSON.parse(data) : null;
};

export const saveToken = (data: IAuthToken) => {
	localStorage.setItem(tokenName, JSON.stringify(data));
};

export const deleteToken = () => {
	localStorage.removeItem(tokenName);
};

export const isAppAuthenticated = () => {
	return retrieveToken() ? true : false;
};
