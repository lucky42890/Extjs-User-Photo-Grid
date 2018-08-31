/**
 * This view is an example list of people.
 */
Ext.define('MyTestApp.view.main.UserGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'usergrid',
    requires: [
        'MyTestApp.store.Personnel'
    ],

    store: { type: 'personnel' },
    columns: [
        { 
            text: 'ID',
            dataIndex: 'id',
            width: 40,
            cell: {
                userCls: 'bold'
            }
        }, { 
            text: 'Name',
            dataIndex: 'name',
            width: 100,
            cell: {
                userCls: 'bold'
            }
        }, {
            text: 'Username',
            dataIndex: 'username',
            width: 150 
        }, {
            text: 'Email',
            dataIndex: 'email',
            width: 230 
        }, { 
            text: 'Address',
            dataIndex: 'address',
            width: 230,
            renderer: function(v, meta, rec) {
                return v.street + ' ' + v.suite + ' ' + v.city;
            }
        }, { 
            text: 'Zipcode',
            dataIndex: 'address',
            width: 130,
            renderer: function(v, meta, rec) {
                return v.zipcode
            }
        }, { 
            text: 'GeoLocation',
            dataIndex: 'address',
            width: 130,
            renderer: function(v, meta, rec) {
                return 'LAT: ' + v.geo.lat + ', LNG: ' + v.geo.lng
            }
        }, { 
            text: 'Phone',
            dataIndex: 'phone',
            width: 150 
        }, { 
            text: 'Website',
            dataIndex: 'website',
            width: 150 
        }, { 
            text: 'Company Name',
            dataIndex: 'company',
            width: 150 ,
            renderer: function(v, meta, rec) {
                return v.name
            }
        }, { 
            text: 'Company Phrase',
            dataIndex: 'company',
            width: 250 ,
            renderer: function(v, meta, rec) {
                return v.catchPhrase
            }
        }
    ]
});
