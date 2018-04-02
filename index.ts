/**
 * Examples:
 * 1. MockProvider({ provider: UserService, methods: ['getUserInfo', 'getUserRoles'] });
 * 2. MockProvider({
 *      provider: UserService,
 *      methods: ['getUserInfo'],
 *      overwrite: {
 *        type: 'Admin',
 *        getUserRoles: () => Observable.of(['Admin', 'User'])
 *      }
 *    });
 */

function MockProvider(options: { provider: any, methods?: string[], overwrite?: any }): { provide: any, useValue: any } {
	const fakeProvider = Array.isArray(options.methods)
		? createFakeProviderWithMethods(options.methods)
		: {};

	return {
		provide: options.provider,
		useValue: {
			...fakeProvider,
			...options.overwrite
		}
	};
}

function createFakeProviderWithMethods(methods: string[]) {
	return methods.reduce((memo, curr) => {
		return {
			...memo,
			[curr]: () => {}
		};
	}, {});
}

export { MockProvider };