/**
 * This view is an example list of people.
 */
Ext.define('MyTestApp.view.main.List', {
    extend: 'Ext.Panel',
    xtype: 'mainlist',

    controller: 'mainlist',

    requires: [
        'MyTestApp.view.main.UserGrid',
        'MyTestApp.view.main.UserForm'
    ],
    
    layout: 'fit',

    items: [
        {
            xtype: 'usergrid',
        },
        {
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                text: 'Add',
                iconCls: 'x-fa fa-plus',
                handler: 'showFormModal'
            }]
        }
    ],

    dialog: {
        xtype: 'dialog',
        title: 'Dialog',

        closable: true,
        defaultFocus: 'textfield',
        maskTapHandler: 'onCancel',

        bodyPadding: 20,
        layout: 'fit',
        maxWidth: 750,

        items: [{
            xtype: 'userform'
        }],

        // We are using standard buttons on the button
        // toolbar, so their text and order are consistent.
        buttons: {
            ok: 'onOK',
            cancel: 'onCancel'
        }
    },
});
