Ext.define('MyTestApp.store.Photo', {
    extend: 'Ext.data.Store',

    alias: 'store.photo',

    model: 'MyTestApp.model.Photo',
    
    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'rest',
        url: 'http://jsonplaceholder.typicode.com/photos',
        pageParam: '_page',
        startParam: '_start',
        limitParam: '_limit',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json'
        }
    },

    listeners: {
        load: function() {
            this.totalCount = 5000;
        }
    }
});
