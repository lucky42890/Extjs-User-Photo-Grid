Ext.define('MyTestApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyTestApp.model.Personnel',
    
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'rest',
        url: 'http://jsonplaceholder.typicode.com/users',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json'
        }
    }
});
