/**
 * This view is an example list of people.
 */
Ext.define('MyTestApp.view.main.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userform',
    autoSize: true,
    requires: ['Ext.form.field.*'],

    items: [{
        xtype: 'textfield',
        label: 'Name',
        name: 'name',
        labelWidth: 150
    }, {
        xtype: 'textfield',
        label: 'Username',
        name: 'username',
        labelWidth: 150
    }, {
        xtype: 'emailfield',
        label: 'Email',
        name: 'email',
        allowBlank: false,
        required: true,
        validators: 'email',
        labelWidth: 150
    }, {
        xtype: 'textfield',
        label: 'Street',
        name: 'street',
        labelWidth: 150
    }, {
        xtype: 'textfield',
        label: 'Suite',
        name: 'suite',
        labelWidth: 150
    }, {
        xtype: 'textfield',
        label: 'City',
        name: 'city',
        labelWidth: 150
    }, {
        xtype: 'numberfield',
        label: 'Zipcode',
        name: 'zipcode',
        labelWidth: 150
    }, {
        xtype: 'containerfield',
        label: 'Geo',
        name: 'geo',
        labelWidth: 150,
        items: [{
            xtype: 'numberfield',
            placeholder: 'Lat',
            name: 'lat',
            flex: 1
        }, {
            xtype: 'numberfield',
            placeholder: 'Lng',
            name: 'lng',
            flex: 1
        }]
    }, {
        xtype: 'numberfield',
        label: 'Phone',
        name: 'phone',
        labelWidth: 150
    }, {
        xtype: 'textfield',
        label: 'Website',
        name: 'website',
        labelWidth: 150
    }, {
        xtype: 'textfield',
        label: 'Company Name',
        name: 'company_name',
        labelWidth: 150
    }, {
        xtype: 'textfield',
        label: 'CatchPhrase',
        name: 'catchPhrase',
        labelWidth: 150
    },  {
        xtype: 'textfield',
        label: 'Company BS',
        name: 'bs',
        labelWidth: 150
    }]
});
