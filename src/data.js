import localStorageDataProvider from 'ra-data-local-storage';

const dataProvider = localStorageDataProvider({
    defaultData: {
        posts: [
            { id: 0, title: 'Hello, world!' },
            { id: 1, title: 'FooBar' },
        ],
        comments: [
            { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
            { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
        ],
    }
});

export default dataProvider;