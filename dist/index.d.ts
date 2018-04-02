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
declare function MockProvider(options: {
    provider: any;
    methods?: string[];
    overwrite?: any;
}): {
    provide: any;
    useValue: any;
};
export { MockProvider };
