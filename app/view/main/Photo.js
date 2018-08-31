Ext.define('MyTestApp.view.main.Photo',{
    extend: 'Ext.dataview.List',
    xtype: 'photolist',

    requires: [
        'MyTestApp.store.Photo',
        'Ext.dataview.plugin.ListPaging'
    ],

    plugins: [{
        type: 'listpaging',
        autoPaging: true,
        bufferZone: 0
    }],

    store: {
        type: 'photo',
        pageSize: 20
    },

    itemTpl: '<img src="{thumbnailUrl}" width="50" height="50"/> {title} ',
});
