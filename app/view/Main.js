Ext.define('cat.view.Main', {
    extend: "Ext.Map",
    xtype: 'mapview',
    id:'map11', 
    config: {

        mapOptions: {    
            center: new google.maps.LatLng(26.6300, 92.8000),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoom:6,
        },

       
    }
});