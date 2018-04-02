# ngx-mock-provider
ngx-mock-provider allows to easily mock any provider for Angular in unit tests

### Usage
ngx-mock-provider is designed to create isolated environment for your unit tests and replace your own services with mocked ones.

It is inspired by [ng2-mock-component](https://github.com/cnunciato/ng2-mock-component) and can be used in addition to this package.

You just need to specify the `provider` that you wish to mock and array with methods if any:
```
MockProvider({ provider: UserService, methods: ['getUserInfo'] })
``` 

In case you need to have some methods mocked but several ones need your own implementation you could specify them in the property called `overwrite`:
```
MockProvider({
  provider: UserService,
  methods: ['getUserInfo'],
  overwrite: {
    getUserRoles: () => {
      return Observable.of(['Admin', 'User']);
    },
    getSomeOtherInfo: () => {
      // implementation
    }
  }
})
``` 

### Why do you need it?
If you install both [ng2-mock-component](https://github.com/cnunciato/ng2-mock-component) and [ngx-mock-provider](https://github.com/stas-kh/ngx-mock-provider) your unit tests can become much cleaner:
```
beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],
    declarations: [
      UserComponent,
      MockComponent({ selector: 'bg-user' }),
      MockComponent({ selector: 'bg-user-config', inputs: ['event', 'type'] }),
      MockComponent({ selector: 'bg-tile-box', inputs: ['isDisabled', 'timeline'] }),
      MockComponent({ selector: 'bg-newcomers', inputs: ['data'] })
    ],
    providers: [
      MockProvider({ provider: EventsService, methods: ['getEvent'] }),
      MockProvider({ provider: NotificationsService, methods: ['success', 'error'] }),
      MockProvider({ provider: UserInfoService, methods: ['getUserInfo'] }),
      MockProvider({ provider: EventInformationService, methods: ['getEventInformation'] })
    ]
  })
  .compileComponents();
}));
``` 

## Author
Stanislav Khorunzhyi
* LinkedIn: https://www.linkedin.com/in/staskh
* Gmail: [stanislav.khorunzhyi@gmail.com](mailto:stanislav.khorunzhyi@gmail.com)