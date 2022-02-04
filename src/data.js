import localStorageDataProvider from 'ra-data-local-storage';

const dataProvider = localStorageDataProvider({
    defaultData: {
        posts: [
            { id: 0, title: 'Hello, world!' },
            { id: 1, title: 'FooBar' },
        ],
        users: [
            { id: 0, post_id: 0, name: 'John Doe', email: 'a@a.com!',phone:"123",website:"www.lol.com",company:{name:"aaaa"} },
            { id: 1, post_id: 1, name: 'Jane Doe', email: 'b@b.com',phone:"123",website:"www.lol.com",company:{name:"gh"}  },
        ],
    }
});

export default dataProvider;