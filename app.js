/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyTestApp.Application',

    name: 'MyTestApp',

    requires: [
        // This will automatically load all classes in the MyTestApp namespace
        // so that application classes do not need to require each other.
        'MyTestApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyTestApp.view.main.Main'
});
