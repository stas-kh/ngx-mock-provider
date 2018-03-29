declare function MockProvider(options: {
    provider: any;
    methods?: string[];
    overwrite?: any;
}): {
    provide: any;
    useValue: any;
};
export { MockProvider };
