Ext.application({
    name: 'cat',

    requires: [
        'Ext.MessageBox',
        'Ext.device.Geolocation',
        'Ext.Map',
        'Ext.data.reader.Xml'
    ],

    views: ['Main'],
    stores: ['Docs'],
    models: ['Doc'],

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(map1 = Ext.create('cat.view.Main'));

        var map2 = map1.getMap();
        
        Ext.device.Geolocation.getCurrentPosition({

            success: function(position) {
                //console.log(position.coords.latitude);
                //console.log(position.coords.longitude);

               //map1.getMap().setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                //Not needed right now . 
            },

            failure: function() {
                console.log('God is just testing your patience ! Chill ! Have a break ');
            }
        });

        var doctors = Ext.getStore('idDocs');
        //console.log(doctors);

        doctors.load(function(records, options, success){
 
        console.log(records);
        
        if(success){


            Ext.each(records,function(record){
                //console.log(record);
                //console.log(record.data);

                //console.log('Name of Doctor: '+record.data.name);
                //console.log('place: '+ record.data.city);
                addToMap(record.data);

                });



            } 
                

        });



        //console.log(map1);
        //console.log(map2 = map1.getMap().center); //gives center longtitude coord thru center.A as i saw from console/devtools/firebug       
        addToMap = function(temp) {
            //var latLng = new google.maps.LatLng(temp.latitude, temp.longitude);
            
            //console.log(temp.latitude);
            //console.log(temp.longitude);
            //console.log(latLng);

            var infowindow = new google.maps.InfoWindow();
            var marker, i, pos;
            var bounds = new google.maps.LatLngBounds();
            
            pos = new google.maps.LatLng(temp.latitude, temp.longitude);

            bounds.extend(pos);

            var marker = new google.maps.Marker({
                position: pos,
                animation: google.maps.Animation.BOUNCE,
                icon: 'data/dot.png',
                map: map2,
                title: 'Click Me ' + temp.name
            });

            //console.log(marker);
           
        };

    },

});
