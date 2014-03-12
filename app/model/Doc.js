Ext.define('cat.model.Doc', {
    extend : 'Ext.data.Model',
    config : {
        fields : [
            { name : 'id', mapping : '@id' },
            'name',
            'city',
            'state',
            'latitude',
            'longitude',
        ]
    }
});