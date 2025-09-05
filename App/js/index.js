xui.Class('App', 'xui.Module',{
    Instance:{
        autoDestroy:false,
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
                .setQueryURL("https://www.crossui.com/xui/backend/PHP/demo.php")
                .setQueryArgs({
                    "a" : 1,
                    "b" : 2
                })
                .beforeInvoke([
                    {
                        "desc" : "Busy",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [ ],
                        "method" : "busy"
                    }
                ])
                .onData([
                    {
                        "desc" : "free UI",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [ ],
                        "method" : "free"
                    }
                ])
                .onError([
                    {
                        "desc" : "free UI",
                        "type" : "other",
                        "target" : "msg",
                        "params" : [ ],
                        "method" : "free"
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"ctl_pane39")
                .setShowEffects("Blur")
                .setHideEffects("Blur")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("70em")
                .setHeight("88.38095238095238em")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        events:{
            "onRender":[
                {"desc":"message", 
                 "type":"other", 
                 "target":"msg", 
                 "params":[
                     "This is in conf!", 
                     "Page on render"
                 ], 
                 "scope":null, 
                 "method":"message"
                }
            ]
        }
    }
});
