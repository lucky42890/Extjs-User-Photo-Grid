/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */

Ext.define('MyTestApp.view.main.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainlist',

    destroy: function () {
        Ext.destroy(this.dialog);

        this.callParent();
    },

    onCancel: function (button) {
        console.log('onCancel');
        this.dialog.hide();
    },

    onOK: function (button) {
        console.log('onOK');
        var view = this.getView();
        var grid = view.down('usergrid');
        var store = grid.store;
        var values = Ext.ComponentQuery.query("userform")[0].getValues();
        
        store.insert(0, {
            "name": values.name,
            "username": values.username,
            "email": values.email,
            "address": {
              "street": values.street,
              "suite": values.suite,
              "city": values.city,
              "zipcode": values.zipcode,
              "geo": {
                "lat": values.lat,
                "lng": values.lng
              }
            },
            "phone": values.phone,
            "website": values.website,
            "company": {
              "name": values.company_name,
              "catchPhrase": values.catchPhrase,
              "bs": values.bs
            }
        });
        this.dialog.hide();
    },

    showFormModal: function() {
        var view = this.getView(),
            dialog = this.dialog;

        if (!dialog) {
            dialog = Ext.apply({
                ownerCmp: view
            }, view.dialog);

            this.dialog = dialog = Ext.create(dialog);
        }

        dialog.show();
    }
});
