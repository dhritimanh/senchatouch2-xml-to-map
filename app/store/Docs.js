Ext.define('cat.store.Docs', {
    extend : 'Ext.data.Store',
    requires :['Ext.data.reader.Xml','cat.model.Doc'] ,
    config : {
        autoload:true,
        storeId:'idDocs',
        model : 'cat.model.Doc',
        proxy : {
            type   : 'ajax',
            url    : 'data/a.xml',
            reader : {
                type         : 'xml',
                rootProperty : 'doctors',
                record       : 'doctor',
            }
        }
    }
});