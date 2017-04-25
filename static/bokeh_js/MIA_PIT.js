document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("8ea1f5cf-cba0-422a-9036-955e2fd59208");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8ea1f5cf-cba0-422a-9036-955e2fd59208' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"34f93e6b-36f3-4562-990f-e52f2044868d":{"roots":{"references":[{"attributes":{"plot":null,"text":"Envoy Air"},"id":"fb2bd998-6a70-4af2-893d-125a5c15e6e6","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"55c3ba9f-49f4-4871-9b0e-92e5847fd498","type":"Rect"},{"attributes":{},"id":"cd59aedd-946e-4576-aa9c-6665e7e11654","type":"BasicTicker"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"7b8a4add-4abb-41c5-af44-728d3f87d0c1","type":"BasicTickFormatter"},"plot":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"},"ticker":{"id":"7301d790-d6e0-4d42-8db1-69625676b16d","type":"BasicTicker"}},"id":"3d862f25-22bf-48fe-81f9-5ca4874281af","type":"LinearAxis"},{"attributes":{"data_source":{"id":"358c64d3-86be-481d-9f93-a854a4b17f9d","type":"ColumnDataSource"},"glyph":{"id":"18114e7f-4714-4292-a964-0efbd76bb874","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"06a49361-fd06-4dc0-a85c-a9161a6c902d","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4ccba090-154b-4cbe-acd1-21db7683875f","type":"ColumnDataSource"},"glyph":{"id":"29d67e13-50c5-4c9d-8658-d450624b04a2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"930b4401-6528-4b23-bb3c-87ee2a027304","type":"GlyphRenderer"},{"attributes":{},"id":"6ed05638-639d-4eaf-a009-3e16301a5db6","type":"ToolEvents"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"3d862f25-22bf-48fe-81f9-5ca4874281af","type":"LinearAxis"}],"left":[{"id":"6a91fc34-5152-4a09-b95f-75a7fbb14d74","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"d5ddac11-9a01-4f41-9443-764a3c4c6a3b","type":"BoxAnnotation"},{"id":"3854d411-1438-411b-8883-ee23e362c1dc","type":"GlyphRenderer"},{"id":"5acdc235-f1b7-431e-981f-347c8d6a6cff","type":"GlyphRenderer"},{"id":"930b4401-6528-4b23-bb3c-87ee2a027304","type":"GlyphRenderer"},{"id":"7b305207-1924-4f2e-a32e-84426090cca2","type":"GlyphRenderer"},{"id":"06a49361-fd06-4dc0-a85c-a9161a6c902d","type":"GlyphRenderer"},{"id":"e0638d6f-d8c4-4960-a130-515a9fe873bb","type":"GlyphRenderer"},{"id":"276dc97a-a421-4046-99dc-5c0b8a339455","type":"GlyphRenderer"},{"id":"3d862f25-22bf-48fe-81f9-5ca4874281af","type":"LinearAxis"},{"id":"6a91fc34-5152-4a09-b95f-75a7fbb14d74","type":"CategoricalAxis"},{"id":"aaf1a53f-0ad5-42d3-a12d-7a514c664b84","type":"ColorBar"}],"right":[{"id":"aaf1a53f-0ad5-42d3-a12d-7a514c664b84","type":"ColorBar"}],"title":{"id":"9acb6edd-a42b-412d-8e88-c9af02d9c09c","type":"Title"},"tool_events":{"id":"557eb9d9-1be6-4851-96e8-f2bbab7ab6be","type":"ToolEvents"},"toolbar":{"id":"9ca345c9-dccf-464b-8189-feac15da559c","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"ab37b22e-f469-47c9-9413-90b8a2e97df5","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"5b921911-a374-4734-bdbd-1bea5bbef5a3","type":"FactorRange"}},"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d6d0ca1f-152c-43e6-9ea0-aced050c8d99","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.9, 11.07]","(8.9, 11.07]","(8.9, 11.07]","(8.9, 11.07]"],"chart_index":[{"POS_ARR_DELAY":"(8.9, 11.07]"},{"POS_ARR_DELAY":"(8.9, 11.07]"},{"POS_ARR_DELAY":"(8.9, 11.07]"},{"POS_ARR_DELAY":"(8.9, 11.07]"}],"values":[9.2,9.25,8.94,10.272727272727273],"x":[7,9,20,9],"y":["Tuesday","Tuesday","Friday","Saturday"]}},"id":"4ccba090-154b-4cbe-acd1-21db7683875f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"2ca0e592-a7c5-4cd3-9c4f-3ed2f99a2751","type":"ColumnDataSource"},"glyph":{"id":"5b926b34-d7ae-458a-8d83-90574c81264f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"276dc97a-a421-4046-99dc-5c0b8a339455","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4dd3ea08-b626-4839-a8d2-063d00c1c12b","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b926b34-d7ae-458a-8d83-90574c81264f","type":"Rect"},{"attributes":{"plot":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"}},"id":"35cb66a5-5989-46b2-85f5-2c3125282d4d","type":"PanTool"},{"attributes":{"data_source":{"id":"c7ec690c-3284-43cb-a371-a2e1fc7a958a","type":"ColumnDataSource"},"glyph":{"id":"d6d0ca1f-152c-43e6-9ea0-aced050c8d99","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ec788ddd-d5b9-4084-9a6c-dcaca016a12b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(8.9, 11.07]","(8.9, 11.07]","(8.9, 11.07]","(8.9, 11.07]"],"chart_index":[{"POS_ARR_DELAY":"(8.9, 11.07]"},{"POS_ARR_DELAY":"(8.9, 11.07]"},{"POS_ARR_DELAY":"(8.9, 11.07]"},{"POS_ARR_DELAY":"(8.9, 11.07]"}],"values":[9.2,9.25,8.94,10.272727272727273],"x":[7,9,20,9],"y":["Tuesday","Tuesday","Friday","Saturday"]}},"id":"627a1a2a-f15a-4521-b52a-35b73ddf72b1","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":23},"id":"2086dadc-0058-4b9e-9677-e265ba364803","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"29d67e13-50c5-4c9d-8658-d450624b04a2","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"84ed572f-41db-40ef-9ae1-2b82c0adda1e","type":"LinearColorMapper"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"94dbaefe-e480-41c0-8d5a-4314d7fd6d80","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"678e3e61-ccd1-45f4-a953-bd23fc654eb7","type":"ColumnDataSource"},"glyph":{"id":"177166f7-c256-44c5-81c1-32f7661c9d9b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3854d411-1438-411b-8883-ee23e362c1dc","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(11.07, 13.2]","(11.07, 13.2]","(11.07, 13.2]"],"chart_index":[{"POS_ARR_DELAY":"(11.07, 13.2]"},{"POS_ARR_DELAY":"(11.07, 13.2]"},{"POS_ARR_DELAY":"(11.07, 13.2]"}],"values":[13.117647058823529,11.94,12.176470588235293],"x":[20,20,20],"y":["Monday","Saturday","Sunday"]}},"id":"29c4c593-793b-4dda-be11-e6da2d4824f6","type":"ColumnDataSource"},{"attributes":{"child":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"},"title":"MQ"},"id":"407cd905-9227-411f-98ff-c6d1fefc0b62","type":"Panel"},{"attributes":{},"id":"4a0952e3-679c-425e-8585-a41d1094fb42","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"be61c1d7-c248-4d18-be75-910529902fe1","type":"ColumnDataSource"},"glyph":{"id":"65bc34a9-a3b5-4ba5-a37f-1ddc3fa40c33","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e0638d6f-d8c4-4960-a130-515a9fe873bb","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"6fc06995-f026-46bd-8723-7a40cb61dbc8","type":"LinearAxis"}],"left":[{"id":"86432aea-fb2c-49d5-9409-e82d462e2af2","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"94dbaefe-e480-41c0-8d5a-4314d7fd6d80","type":"BoxAnnotation"},{"id":"03830374-ff38-42f0-b8e5-4e98e195ea7d","type":"GlyphRenderer"},{"id":"f09c0500-dd74-4d88-9284-837604ccbfd3","type":"GlyphRenderer"},{"id":"aad6ecb7-3f53-4b44-b9d6-79886ce0ec18","type":"GlyphRenderer"},{"id":"32ed53e9-dc16-419b-9d34-5ca1c5a762ab","type":"GlyphRenderer"},{"id":"ec788ddd-d5b9-4084-9a6c-dcaca016a12b","type":"GlyphRenderer"},{"id":"3d8cdc97-1893-4ce2-b92b-5c347ec9a66f","type":"GlyphRenderer"},{"id":"cf874183-c18e-4d71-8992-19b710b5f16b","type":"GlyphRenderer"},{"id":"6fc06995-f026-46bd-8723-7a40cb61dbc8","type":"LinearAxis"},{"id":"86432aea-fb2c-49d5-9409-e82d462e2af2","type":"CategoricalAxis"},{"id":"b6a88543-644c-425b-8039-adc6086f6cb0","type":"ColorBar"}],"right":[{"id":"b6a88543-644c-425b-8039-adc6086f6cb0","type":"ColorBar"}],"title":{"id":"fb2bd998-6a70-4af2-893d-125a5c15e6e6","type":"Title"},"tool_events":{"id":"6ed05638-639d-4eaf-a009-3e16301a5db6","type":"ToolEvents"},"toolbar":{"id":"4d1e742b-e3f3-4ccb-a193-c43a6942e679","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"2086dadc-0058-4b9e-9677-e265ba364803","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"7e17549a-dd41-4203-b04c-bf52a0ad80e3","type":"FactorRange"}},"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"5b921911-a374-4734-bdbd-1bea5bbef5a3","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(2.5, 4.7]","(2.5, 4.7]"],"chart_index":[{"POS_ARR_DELAY":"(2.5, 4.7]"},{"POS_ARR_DELAY":"(2.5, 4.7]"}],"values":[4.363636363636363,3.090909090909091],"x":[19,9],"y":["Saturday","Sunday"]}},"id":"be61c1d7-c248-4d18-be75-910529902fe1","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"377c5989-ce30-454d-a1b7-f9eb3d9ef7af","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"},"ticker":{"id":"09852e0c-64b6-4248-bc6d-5dd71bb038e1","type":"CategoricalTicker"}},"id":"6a91fc34-5152-4a09-b95f-75a7fbb14d74","type":"CategoricalAxis"},{"attributes":{},"id":"06f69a60-5bfb-45b2-a3d3-e7419d48aa7d","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"}},"id":"04d21c61-875a-40a3-9639-adccb04392a3","type":"ResetTool"},{"attributes":{"data_source":{"id":"209045d4-015c-4b90-8f1b-93ea1ee71f3c","type":"ColumnDataSource"},"glyph":{"id":"a29ece21-9604-4950-a070-ae7fa6d907d1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"32ed53e9-dc16-419b-9d34-5ca1c5a762ab","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.8, 8.9]","(6.8, 8.9]","(6.8, 8.9]","(6.8, 8.9]","(6.8, 8.9]","(6.8, 8.9]"],"chart_index":[{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"}],"values":[7.066666666666666,8.75,8.76,7.195652173913044,8.666666666666666,6.804347826086956],"x":[8,19,20,8,19,8],"y":["Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Sunday"]}},"id":"209045d4-015c-4b90-8f1b-93ea1ee71f3c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"}},"id":"9deb5939-8c17-4d0a-82f0-5f9e1fc331e4","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"177166f7-c256-44c5-81c1-32f7661c9d9b","type":"Rect"},{"attributes":{"plot":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"}},"id":"b405c1a8-a0ad-4b40-a24e-b2983f3b1305","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"dfd0991c-6853-400b-8acc-a3707683ca09","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"18114e7f-4714-4292-a964-0efbd76bb874","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0a90ee8c-43bf-4489-92bf-dac42642dad0","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"26067b82-0716-4bf1-a2c1-dea4f1efb00b","type":"Rect"},{"attributes":{"callback":null,"tabs":[{"id":"7eee6612-912c-42fb-b2ca-d3bf743d5072","type":"Panel"},{"id":"407cd905-9227-411f-98ff-c6d1fefc0b62","type":"Panel"}]},"id":"9ccb5667-1cbf-419c-97cd-9cc540c61057","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]"],"chart_index":[{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"}],"values":[5.555555555555555,5.7272727272727275,5.918367346938775,5.136363636363637,6.454545454545454,5.340909090909091,6.2727272727272725,5.511111111111111,6.363636363636363],"x":[8,9,20,8,19,8,9,8,19],"y":["Monday","Monday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday"]}},"id":"358c64d3-86be-481d-9f93-a854a4b17f9d","type":"ColumnDataSource"},{"attributes":{},"id":"7b8a4add-4abb-41c5-af44-728d3f87d0c1","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"9acb6edd-a42b-412d-8e88-c9af02d9c09c","type":"Title"},{"attributes":{},"id":"7301d790-d6e0-4d42-8db1-69625676b16d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"573c3cc9-d7f2-430a-b867-887a48ff43d8","type":"PanTool"},{"id":"b405c1a8-a0ad-4b40-a24e-b2983f3b1305","type":"WheelZoomTool"},{"id":"d49a201d-be1c-46e0-95bc-c3ea73ec6940","type":"BoxZoomTool"},{"id":"9deb5939-8c17-4d0a-82f0-5f9e1fc331e4","type":"SaveTool"},{"id":"fce5bf21-af33-4ad5-9a54-533f090199f6","type":"ResetTool"},{"id":"23a5ca97-8293-49bf-aec0-d5c26f70f93f","type":"HelpTool"}]},"id":"9ca345c9-dccf-464b-8189-feac15da559c","type":"Toolbar"},{"attributes":{},"id":"557eb9d9-1be6-4851-96e8-f2bbab7ab6be","type":"ToolEvents"},{"attributes":{},"id":"7726e69e-8a33-4493-bc83-db2d29367c27","type":"BasicTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"23b1618d-0d88-4637-b871-8380e53ab299","type":"LinearColorMapper"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"06f69a60-5bfb-45b2-a3d3-e7419d48aa7d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"},"ticker":{"id":"4e009a05-9545-4fbf-baa6-a6a063ffbcd4","type":"CategoricalTicker"}},"id":"86432aea-fb2c-49d5-9409-e82d462e2af2","type":"CategoricalAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"35cb66a5-5989-46b2-85f5-2c3125282d4d","type":"PanTool"},{"id":"a91907ba-7d70-4d80-9c7b-362e241bf87d","type":"WheelZoomTool"},{"id":"f6fd347f-fc9e-4f89-9f52-569709201d8b","type":"BoxZoomTool"},{"id":"b26e52e8-36e2-41b8-b0c4-c6b0e6458ef7","type":"SaveTool"},{"id":"04d21c61-875a-40a3-9639-adccb04392a3","type":"ResetTool"},{"id":"0e3017d6-3db1-4efe-ac78-a9d4990ba944","type":"HelpTool"}]},"id":"4d1e742b-e3f3-4ccb-a193-c43a6942e679","type":"Toolbar"},{"attributes":{},"id":"377c5989-ce30-454d-a1b7-f9eb3d9ef7af","type":"CategoricalTickFormatter"},{"attributes":{"overlay":{"id":"d5ddac11-9a01-4f41-9443-764a3c4c6a3b","type":"BoxAnnotation"},"plot":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"}},"id":"d49a201d-be1c-46e0-95bc-c3ea73ec6940","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"}},"id":"fce5bf21-af33-4ad5-9a54-533f090199f6","type":"ResetTool"},{"attributes":{"data_source":{"id":"bf363a88-489d-420f-952c-003a5ed0ab79","type":"ColumnDataSource"},"glyph":{"id":"55c3ba9f-49f4-4871-9b0e-92e5847fd498","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7b305207-1924-4f2e-a32e-84426090cca2","type":"GlyphRenderer"},{"attributes":{},"id":"7931fc07-903f-4e42-8783-07d169be9865","type":"BasicTicker"},{"attributes":{"overlay":{"id":"94dbaefe-e480-41c0-8d5a-4314d7fd6d80","type":"BoxAnnotation"},"plot":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"}},"id":"f6fd347f-fc9e-4f89-9f52-569709201d8b","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.8, 8.9]","(6.8, 8.9]","(6.8, 8.9]","(6.8, 8.9]","(6.8, 8.9]","(6.8, 8.9]"],"chart_index":[{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"},{"POS_ARR_DELAY":"(6.8, 8.9]"}],"values":[7.066666666666666,8.75,8.76,7.195652173913044,8.666666666666666,6.804347826086956],"x":[8,19,20,8,19,8],"y":["Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Sunday"]}},"id":"bf363a88-489d-420f-952c-003a5ed0ab79","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]","(4.7, 6.8]"],"chart_index":[{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"},{"POS_ARR_DELAY":"(4.7, 6.8]"}],"values":[5.555555555555555,5.7272727272727275,5.918367346938775,5.136363636363637,6.454545454545454,5.340909090909091,6.2727272727272725,5.511111111111111,6.363636363636363],"x":[8,9,20,8,19,8,9,8,19],"y":["Monday","Monday","Wednesday","Thursday","Thursday","Friday","Friday","Saturday","Sunday"]}},"id":"c7ec690c-3284-43cb-a371-a2e1fc7a958a","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d5ddac11-9a01-4f41-9443-764a3c4c6a3b","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(17.5, 19.6]","(17.5, 19.6]","(17.5, 19.6]"],"chart_index":[{"POS_ARR_DELAY":"(17.5, 19.6]"},{"POS_ARR_DELAY":"(17.5, 19.6]"},{"POS_ARR_DELAY":"(17.5, 19.6]"}],"values":[19.6,17.857142857142858,18.555555555555557],"x":[7,20,19],"y":["Monday","Thursday","Friday"]}},"id":"678e3e61-ccd1-45f4-a953-bd23fc654eb7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]"],"chart_index":[{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"}],"values":[0.9090909090909091,2.0,1.5,1.6,2.3636363636363638,1.0,0.4,0.4],"x":[19,7,9,7,9,7,7,7],"y":["Monday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"2ca0e592-a7c5-4cd3-9c4f-3ed2f99a2751","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"}},"id":"573c3cc9-d7f2-430a-b867-887a48ff43d8","type":"PanTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"4a0952e3-679c-425e-8585-a41d1094fb42","type":"BasicTickFormatter"},"plot":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"},"ticker":{"id":"7931fc07-903f-4e42-8783-07d169be9865","type":"BasicTicker"}},"id":"6fc06995-f026-46bd-8723-7a40cb61dbc8","type":"LinearAxis"},{"attributes":{"color_mapper":{"id":"84ed572f-41db-40ef-9ae1-2b82c0adda1e","type":"LinearColorMapper"},"formatter":{"id":"85cdc631-ce5d-4ad8-84de-a1b382c6760e","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"},"ticker":{"id":"7726e69e-8a33-4493-bc83-db2d29367c27","type":"BasicTicker"}},"id":"aaf1a53f-0ad5-42d3-a12d-7a514c664b84","type":"ColorBar"},{"attributes":{"data_source":{"id":"6ae78ee6-f66f-4b74-a566-db53b89f9278","type":"ColumnDataSource"},"glyph":{"id":"26067b82-0716-4bf1-a2c1-dea4f1efb00b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"03830374-ff38-42f0-b8e5-4e98e195ea7d","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"461f5e87-39a5-483e-a84d-180211867996","type":"Rect"},{"attributes":{"plot":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"}},"id":"a91907ba-7d70-4d80-9c7b-362e241bf87d","type":"WheelZoomTool"},{"attributes":{"callback":null,"end":23},"id":"ab37b22e-f469-47c9-9413-90b8a2e97df5","type":"Range1d"},{"attributes":{"plot":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"}},"id":"0e3017d6-3db1-4efe-ac78-a9d4990ba944","type":"HelpTool"},{"attributes":{},"id":"09852e0c-64b6-4248-bc6d-5dd71bb038e1","type":"CategoricalTicker"},{"attributes":{},"id":"1297a72b-363b-4945-9572-7ba698c4d044","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"29c4c593-793b-4dda-be11-e6da2d4824f6","type":"ColumnDataSource"},"glyph":{"id":"9b31b029-70f0-4bfa-8e1a-744199f5fb68","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5acdc235-f1b7-431e-981f-347c8d6a6cff","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e1105cdd-e82d-4e86-adfb-6ce883e639fe","type":"ColumnDataSource"},"glyph":{"id":"0a90ee8c-43bf-4489-92bf-dac42642dad0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cf874183-c18e-4d71-8992-19b710b5f16b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]","[0.4, 2.5]"],"chart_index":[{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"},{"POS_ARR_DELAY":"[0.4, 2.5]"}],"values":[0.9090909090909091,2.0,1.5,1.6,2.3636363636363638,1.0,0.4,0.4],"x":[19,7,9,7,9,7,7,7],"y":["Monday","Wednesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday"]}},"id":"e1105cdd-e82d-4e86-adfb-6ce883e639fe","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(11.07, 13.2]","(11.07, 13.2]","(11.07, 13.2]"],"chart_index":[{"POS_ARR_DELAY":"(11.07, 13.2]"},{"POS_ARR_DELAY":"(11.07, 13.2]"},{"POS_ARR_DELAY":"(11.07, 13.2]"}],"values":[13.117647058823529,11.94,12.176470588235293],"x":[20,20,20],"y":["Monday","Saturday","Sunday"]}},"id":"a8438bf0-2067-4b59-8cab-06909a9c5c2a","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(2.5, 4.7]","(2.5, 4.7]"],"chart_index":[{"POS_ARR_DELAY":"(2.5, 4.7]"},{"POS_ARR_DELAY":"(2.5, 4.7]"}],"values":[4.363636363636363,3.090909090909091],"x":[19,9],"y":["Saturday","Sunday"]}},"id":"0ca398b3-be45-4a7b-8036-25d468b76432","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"}},"id":"23a5ca97-8293-49bf-aec0-d5c26f70f93f","type":"HelpTool"},{"attributes":{},"id":"85cdc631-ce5d-4ad8-84de-a1b382c6760e","type":"BasicTickFormatter"},{"attributes":{},"id":"4e009a05-9545-4fbf-baa6-a6a063ffbcd4","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"65bc34a9-a3b5-4ba5-a37f-1ddc3fa40c33","type":"Rect"},{"attributes":{"plot":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"}},"id":"b26e52e8-36e2-41b8-b0c4-c6b0e6458ef7","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(17.5, 19.6]","(17.5, 19.6]","(17.5, 19.6]"],"chart_index":[{"POS_ARR_DELAY":"(17.5, 19.6]"},{"POS_ARR_DELAY":"(17.5, 19.6]"},{"POS_ARR_DELAY":"(17.5, 19.6]"}],"values":[19.6,17.857142857142858,18.555555555555557],"x":[7,20,19],"y":["Monday","Thursday","Friday"]}},"id":"6ae78ee6-f66f-4b74-a566-db53b89f9278","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b31b029-70f0-4bfa-8e1a-744199f5fb68","type":"Rect"},{"attributes":{"data_source":{"id":"a8438bf0-2067-4b59-8cab-06909a9c5c2a","type":"ColumnDataSource"},"glyph":{"id":"4dd3ea08-b626-4839-a8d2-063d00c1c12b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f09c0500-dd74-4d88-9284-837604ccbfd3","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a29ece21-9604-4950-a070-ae7fa6d907d1","type":"Rect"},{"attributes":{"data_source":{"id":"0ca398b3-be45-4a7b-8036-25d468b76432","type":"ColumnDataSource"},"glyph":{"id":"461f5e87-39a5-483e-a84d-180211867996","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3d8cdc97-1893-4ce2-b92b-5c347ec9a66f","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"23b1618d-0d88-4637-b871-8380e53ab299","type":"LinearColorMapper"},"formatter":{"id":"1297a72b-363b-4945-9572-7ba698c4d044","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"cac20f91-13a1-416d-8dd0-7f6a0fdbec6d","subtype":"Chart","type":"Plot"},"ticker":{"id":"cd59aedd-946e-4576-aa9c-6665e7e11654","type":"BasicTicker"}},"id":"b6a88543-644c-425b-8039-adc6086f6cb0","type":"ColorBar"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"7e17549a-dd41-4203-b04c-bf52a0ad80e3","type":"FactorRange"},{"attributes":{"data_source":{"id":"627a1a2a-f15a-4521-b52a-35b73ddf72b1","type":"ColumnDataSource"},"glyph":{"id":"dfd0991c-6853-400b-8acc-a3707683ca09","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aad6ecb7-3f53-4b44-b9d6-79886ce0ec18","type":"GlyphRenderer"},{"attributes":{"child":{"id":"d0d498fe-4866-461d-93e8-e64c075a2df3","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"7eee6612-912c-42fb-b2ca-d3bf743d5072","type":"Panel"}],"root_ids":["9ccb5667-1cbf-419c-97cd-9cc540c61057"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"34f93e6b-36f3-4562-990f-e52f2044868d","elementid":"8ea1f5cf-cba0-422a-9036-955e2fd59208","modelid":"9ccb5667-1cbf-419c-97cd-9cc540c61057"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});