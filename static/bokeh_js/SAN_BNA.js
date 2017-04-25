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
      };var element = document.getElementById("c6d9e5b7-9d33-4765-80e4-0c600c7fa0a4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c6d9e5b7-9d33-4765-80e4-0c600c7fa0a4' but no matching script tag was found. ")
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
                  var docs_json = {"906c2c06-cb70-49d1-83f8-f9a9666fd4bf":{"roots":{"references":[{"attributes":{"callback":null,"end":23},"id":"c8644ac1-b32c-459c-b269-38d49e153e44","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10.2, 13.5]","(10.2, 13.5]","(10.2, 13.5]","(10.2, 13.5]","(10.2, 13.5]"],"chart_index":[{"POS_ARR_DELAY":"(10.2, 13.5]"},{"POS_ARR_DELAY":"(10.2, 13.5]"},{"POS_ARR_DELAY":"(10.2, 13.5]"},{"POS_ARR_DELAY":"(10.2, 13.5]"},{"POS_ARR_DELAY":"(10.2, 13.5]"}],"values":[13.416666666666666,11.395348837209303,10.555555555555555,12.23076923076923,12.205882352941176],"x":[10,11,6,10,12],"y":["Monday","Monday","Wednesday","Thursday","Thursday"]}},"id":"82c1e16a-ceaa-4bab-a7a9-45f275c394cf","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]"],"chart_index":[{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"}],"values":[4.454545454545454,4.461538461538462,5.809523809523809,6.230769230769231,4.222222222222222,5.4,5.384615384615385,4.0,6.857142857142857,6.076923076923077,6.90625,5.411764705882353],"x":[8,10,11,10,13,8,10,13,9,10,11,12],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"4bd38666-dc9a-44de-bf52-0ac3106f640e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"}},"id":"bbf32806-f0cc-4f43-9879-e2e34df5063d","type":"WheelZoomTool"},{"attributes":{"child":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"},"title":"WN"},"id":"6b6a8e27-719b-4dff-a50c-6fd2ef09ee1a","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,27.0,30.0,30.0],"x":[8,15,15,11,16],"y":["Wednesday","Wednesday","Thursday","Saturday","Saturday"]}},"id":"683e783b-d12d-4195-9971-241ad5293b3c","type":"ColumnDataSource"},{"attributes":{"callback":null,"tabs":[{"id":"fce06b08-2b14-43d6-a9c4-8675e52cd0ff","type":"Panel"},{"id":"6b6a8e27-719b-4dff-a50c-6fd2ef09ee1a","type":"Panel"}]},"id":"6e91ba5d-c3eb-41a7-8797-ba967cfbbcde","type":"Tabs"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.8, 20.1]","(16.8, 20.1]"],"chart_index":[{"POS_ARR_DELAY":"(16.8, 20.1]"},{"POS_ARR_DELAY":"(16.8, 20.1]"}],"values":[19.625,18.102040816326532],"x":[14,14],"y":["Wednesday","Thursday"]}},"id":"57546b80-1b7a-48c7-9755-1f59c40223b0","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"}},"id":"811a6dce-5be5-4f7e-81c4-6f3e791777ab","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.5, 16.8]","(13.5, 16.8]","(13.5, 16.8]"],"chart_index":[{"POS_ARR_DELAY":"(13.5, 16.8]"},{"POS_ARR_DELAY":"(13.5, 16.8]"},{"POS_ARR_DELAY":"(13.5, 16.8]"}],"values":[13.555555555555555,15.127659574468085,14.0],"x":[15,14,15],"y":["Monday","Sunday","Sunday"]}},"id":"d83bd2b0-c342-4a52-9d74-104d67fd9617","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6fa2a726-8689-4a62-8071-4da593ccb4cb","type":"ColumnDataSource"},"glyph":{"id":"7a38c939-209b-40c9-b30d-5e7ff0006d69","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"15498771-1b58-4aae-b95c-2e76f4447f8a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"f7463487-5b9e-4f2c-ac6b-078d2d4035a1","type":"ColumnDataSource"},"glyph":{"id":"2b98dadb-20d7-4f4b-b103-f8bbe0b0c0fd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7a9c6222-7610-4ae9-abdc-11b306f42868","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"82c1e16a-ceaa-4bab-a7a9-45f275c394cf","type":"ColumnDataSource"},"glyph":{"id":"81722d90-0866-4ddb-8107-b984ac460250","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a165b339-b8c6-47b6-90fd-f7b77f069747","type":"GlyphRenderer"},{"attributes":{},"id":"20d1fff3-214a-46ee-a77a-91e6c4c93127","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d83bd2b0-c342-4a52-9d74-104d67fd9617","type":"ColumnDataSource"},"glyph":{"id":"f71fb0fb-907d-48ea-902e-7191f5f5535c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c91cc217-1cee-4927-aae0-0f7707a0d912","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"64f03bcc-2c06-4af5-93b8-e19525e8ee77","type":"ColumnDataSource"},"glyph":{"id":"2f8b74a2-4ec4-44c9-af78-0263e27ae07a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"599e305d-4829-4263-979a-7a9476eb3155","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f71fb0fb-907d-48ea-902e-7191f5f5535c","type":"Rect"},{"attributes":{},"id":"180a6257-5401-405e-99c2-4f9e4bb4476f","type":"CategoricalTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"dcf9205a-2510-463d-818b-3004bcb745e6","type":"LinearAxis"}],"left":[{"id":"75917ac0-8687-4a82-9f9a-4ce00474ee37","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"c03f9e01-9348-4e90-9016-bb95f5c60455","type":"BoxAnnotation"},{"id":"782156a3-178d-4e4c-9854-701483290944","type":"GlyphRenderer"},{"id":"7acd0bca-2d5b-4121-8539-23c8cc983f43","type":"GlyphRenderer"},{"id":"ce67df5f-9318-4828-8969-675a41621248","type":"GlyphRenderer"},{"id":"cdc8f859-06f7-4e48-ad60-1c1faeff6f27","type":"GlyphRenderer"},{"id":"7a9c6222-7610-4ae9-abdc-11b306f42868","type":"GlyphRenderer"},{"id":"c12ea9fd-3983-494c-88ca-654940bbad51","type":"GlyphRenderer"},{"id":"0d8af4ca-a7c5-41a5-997f-00d31ee0b77f","type":"GlyphRenderer"},{"id":"a34b3017-1e10-4a19-aa9e-1f8ec51608a9","type":"GlyphRenderer"},{"id":"6d890d3f-0f6e-4144-af6f-ed5f017f1117","type":"GlyphRenderer"},{"id":"dcf9205a-2510-463d-818b-3004bcb745e6","type":"LinearAxis"},{"id":"75917ac0-8687-4a82-9f9a-4ce00474ee37","type":"CategoricalAxis"},{"id":"87b2eb09-4b4c-4ce0-9a04-b383fbd3b405","type":"ColorBar"}],"right":[{"id":"87b2eb09-4b4c-4ce0-9a04-b383fbd3b405","type":"ColorBar"}],"title":{"id":"655463ea-6263-4fd9-baae-2b0060fa8048","type":"Title"},"tool_events":{"id":"275ebaf9-0680-4349-b9d7-2119e2ae3922","type":"ToolEvents"},"toolbar":{"id":"2b398587-1ac8-4b9f-86b6-5dbf9cee13cc","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"c8644ac1-b32c-459c-b269-38d49e153e44","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"ea110d29-3b8e-4fc0-9941-51f58f98a68d","type":"FactorRange"}},"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c186d8fb-f4e4-4876-92c8-7e70cbb2a2f4","type":"Rect"},{"attributes":{},"id":"866b6e6b-a793-4184-9816-2594bad7f3f2","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0,30.0,27.0,30.0,30.0],"x":[8,15,15,11,16],"y":["Wednesday","Wednesday","Thursday","Saturday","Saturday"]}},"id":"7523bfc4-82d4-4c14-9613-5a46e9163c89","type":"ColumnDataSource"},{"attributes":{},"id":"275ebaf9-0680-4349-b9d7-2119e2ae3922","type":"ToolEvents"},{"attributes":{"color_mapper":{"id":"5660a300-16b5-4ba5-8886-017552977acf","type":"LinearColorMapper"},"formatter":{"id":"3732a173-a304-47f4-a3b0-f39d8ecbac20","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"},"ticker":{"id":"335b6c66-d0eb-493a-8538-f3ac778e0b4f","type":"BasicTicker"}},"id":"87b2eb09-4b4c-4ce0-9a04-b383fbd3b405","type":"ColorBar"},{"attributes":{"data_source":{"id":"b53b9359-c4f6-4a79-b94e-9aa837110ae7","type":"ColumnDataSource"},"glyph":{"id":"d74aacc6-48fb-4997-91f2-8ae62a4dc8be","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0d8af4ca-a7c5-41a5-997f-00d31ee0b77f","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c03f9e01-9348-4e90-9016-bb95f5c60455","type":"BoxAnnotation"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"c923dcb1-2550-4270-bae1-b6e812d92e2c","type":"LinearAxis"}],"left":[{"id":"94420a45-f808-4d83-a242-e784fc3e15bc","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"eb729eb0-4070-4123-8122-b6325b2876c7","type":"BoxAnnotation"},{"id":"6ea55443-5d49-4c10-9a98-bf832cc640ff","type":"GlyphRenderer"},{"id":"15498771-1b58-4aae-b95c-2e76f4447f8a","type":"GlyphRenderer"},{"id":"599e305d-4829-4263-979a-7a9476eb3155","type":"GlyphRenderer"},{"id":"43a16b22-4521-4d0e-a487-cf8b710d6e2a","type":"GlyphRenderer"},{"id":"c91cc217-1cee-4927-aae0-0f7707a0d912","type":"GlyphRenderer"},{"id":"a165b339-b8c6-47b6-90fd-f7b77f069747","type":"GlyphRenderer"},{"id":"139c2aa8-2ad7-42fe-87f2-7ee6407260b3","type":"GlyphRenderer"},{"id":"86347849-e9c8-4d6d-8b1a-7eacb8122c9a","type":"GlyphRenderer"},{"id":"244b0bde-da10-4c08-8f1f-bf2958b5f4c2","type":"GlyphRenderer"},{"id":"c923dcb1-2550-4270-bae1-b6e812d92e2c","type":"LinearAxis"},{"id":"94420a45-f808-4d83-a242-e784fc3e15bc","type":"CategoricalAxis"},{"id":"859db1eb-36e5-40c0-8e59-8d3accba0770","type":"ColorBar"}],"right":[{"id":"859db1eb-36e5-40c0-8e59-8d3accba0770","type":"ColorBar"}],"title":{"id":"9df596ca-eb4a-4f39-9dec-1c8aca96b785","type":"Title"},"tool_events":{"id":"9923db7d-381d-49cf-bc7c-da6dfe5ba828","type":"ToolEvents"},"toolbar":{"id":"af1a6d64-3063-4e2d-b85a-4bb3d7600feb","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"1c89ec56-e4ea-4601-8de4-83235ff260f6","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"94071b78-7231-48fc-8e19-260159f7378f","type":"FactorRange"}},"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"f3b27a49-d3f3-41d7-b9c1-42a9ed627727","type":"LinearColorMapper"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"5660a300-16b5-4ba5-8886-017552977acf","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"91505e9c-7ef7-436f-960f-5b4fe8dfcfb0","type":"ColumnDataSource"},"glyph":{"id":"9625d5d9-5085-4bcd-8fc8-76dc62397137","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6d890d3f-0f6e-4144-af6f-ed5f017f1117","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8e66d83e-db1a-4c3a-a267-329d5b9ed3db","type":"Rect"},{"attributes":{"data_source":{"id":"82ab68f5-e22f-4ac4-88d2-989c5f7fba25","type":"ColumnDataSource"},"glyph":{"id":"9b836d24-3b25-4a1d-b9fa-92ed2f1cd34f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"139c2aa8-2ad7-42fe-87f2-7ee6407260b3","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6c7e9233-c9d8-4076-a365-4c70ad58fb87","type":"PanTool"},{"id":"f00268f5-08cf-41ae-ad3a-125fd6ca7a5d","type":"WheelZoomTool"},{"id":"4cc78551-bcda-48fa-9c3a-8b358a39d713","type":"BoxZoomTool"},{"id":"811a6dce-5be5-4f7e-81c4-6f3e791777ab","type":"SaveTool"},{"id":"103f8f2e-4d65-4a3a-bc29-21edc8e7dd32","type":"ResetTool"},{"id":"01f3a426-ab72-47f1-a9b3-f6f4c86ff511","type":"HelpTool"}]},"id":"af1a6d64-3063-4e2d-b85a-4bb3d7600feb","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.8, 20.1]","(16.8, 20.1]"],"chart_index":[{"POS_ARR_DELAY":"(16.8, 20.1]"},{"POS_ARR_DELAY":"(16.8, 20.1]"}],"values":[19.625,18.102040816326532],"x":[14,14],"y":["Wednesday","Thursday"]}},"id":"bfd462c8-26b2-42c8-a628-af26d157c5ca","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"655463ea-6263-4fd9-baae-2b0060fa8048","type":"Title"},{"attributes":{"plot":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"}},"id":"95fde071-c441-4170-8526-48cdca7802cc","type":"PanTool"},{"attributes":{},"id":"5f82fa2d-e0eb-4a42-9349-7e2e92c0ef46","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":23},"id":"1c89ec56-e4ea-4601-8de4-83235ff260f6","type":"Range1d"},{"attributes":{},"id":"3732a173-a304-47f4-a3b0-f39d8ecbac20","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"43216e9b-9ca8-4d46-a594-3fdc1f4ba149","type":"ColumnDataSource"},"glyph":{"id":"c186d8fb-f4e4-4876-92c8-7e70cbb2a2f4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a34b3017-1e10-4a19-aa9e-1f8ec51608a9","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"}},"id":"9394188d-46af-4fac-b0eb-db7292871dcc","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]"],"chart_index":[{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"}],"values":[8.0,7.0,7.285714285714286,7.25,7.51063829787234,8.952380952380953,8.682926829268293,7.8,8.617647058823529,7.658536585365853,7.92,10.0],"x":[12,13,12,13,14,11,11,8,12,12,10,13],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"82ab68f5-e22f-4ac4-88d2-989c5f7fba25","type":"ColumnDataSource"},{"attributes":{},"id":"a85e848a-ebe3-440b-bfca-5ac414f0ff52","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.4, 26.7]","(23.4, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.4, 26.7]"},{"POS_ARR_DELAY":"(23.4, 26.7]"}],"values":[24.0,24.8],"x":[11,13],"y":["Friday","Saturday"]}},"id":"86f62152-cf8c-4b85-88dd-10227751e1bf","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"ea110d29-3b8e-4fc0-9941-51f58f98a68d","type":"FactorRange"},{"attributes":{"plot":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"}},"id":"6dec269c-88cd-4015-bd59-f985cbe52420","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"eb729eb0-4070-4123-8122-b6325b2876c7","type":"BoxAnnotation"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"866b6e6b-a793-4184-9816-2594bad7f3f2","type":"BasicTickFormatter"},"plot":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"},"ticker":{"id":"58427f9a-8f6a-406b-a011-74c2fe8deb77","type":"BasicTicker"}},"id":"c923dcb1-2550-4270-bae1-b6e812d92e2c","type":"LinearAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9625d5d9-5085-4bcd-8fc8-76dc62397137","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a38c939-209b-40c9-b30d-5e7ff0006d69","type":"Rect"},{"attributes":{},"id":"7f7d5019-4e99-4a71-871f-dbe0fa875f16","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2b98dadb-20d7-4f4b-b103-f8bbe0b0c0fd","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"526c476b-f15b-43e4-9937-2d967ea77a23","type":"Rect"},{"attributes":{},"id":"7ee9719b-45e7-4e3c-8063-f8039a2e25c5","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2f8b74a2-4ec4-44c9-af78-0263e27ae07a","type":"Rect"},{"attributes":{},"id":"58427f9a-8f6a-406b-a011-74c2fe8deb77","type":"BasicTicker"},{"attributes":{"data_source":{"id":"57546b80-1b7a-48c7-9755-1f59c40223b0","type":"ColumnDataSource"},"glyph":{"id":"c0eaa869-2f31-4902-97a5-5507fe4b020c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"43a16b22-4521-4d0e-a487-cf8b710d6e2a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"}},"id":"01f3a426-ab72-47f1-a9b3-f6f4c86ff511","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.5, 16.8]","(13.5, 16.8]","(13.5, 16.8]"],"chart_index":[{"POS_ARR_DELAY":"(13.5, 16.8]"},{"POS_ARR_DELAY":"(13.5, 16.8]"},{"POS_ARR_DELAY":"(13.5, 16.8]"}],"values":[13.555555555555555,15.127659574468085,14.0],"x":[15,14,15],"y":["Monday","Sunday","Sunday"]}},"id":"f7463487-5b9e-4f2c-ac6b-078d2d4035a1","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"}},"id":"f00268f5-08cf-41ae-ad3a-125fd6ca7a5d","type":"WheelZoomTool"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"a85e848a-ebe3-440b-bfca-5ac414f0ff52","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"},"ticker":{"id":"7ee9719b-45e7-4e3c-8063-f8039a2e25c5","type":"CategoricalTicker"}},"id":"75917ac0-8687-4a82-9f9a-4ce00474ee37","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"25a8fe9e-e2ef-489c-9e96-b35f4aafdb0a","type":"Rect"},{"attributes":{"overlay":{"id":"c03f9e01-9348-4e90-9016-bb95f5c60455","type":"BoxAnnotation"},"plot":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"}},"id":"dd3b495f-ee56-436a-b2d8-79e232c8f4a1","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.4, 26.7]","(23.4, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.4, 26.7]"},{"POS_ARR_DELAY":"(23.4, 26.7]"}],"values":[24.0,24.8],"x":[11,13],"y":["Friday","Saturday"]}},"id":"6fa2a726-8689-4a62-8071-4da593ccb4cb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7523bfc4-82d4-4c14-9613-5a46e9163c89","type":"ColumnDataSource"},"glyph":{"id":"25a8fe9e-e2ef-489c-9e96-b35f4aafdb0a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"782156a3-178d-4e4c-9854-701483290944","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"d805255d-569e-4ed4-8f51-92d49ac32791","type":"BasicTickFormatter"},"plot":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"},"ticker":{"id":"7f7d5019-4e99-4a71-871f-dbe0fa875f16","type":"BasicTicker"}},"id":"dcf9205a-2510-463d-818b-3004bcb745e6","type":"LinearAxis"},{"attributes":{},"id":"c9378c3e-e249-4c03-9f07-05595c038483","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"}},"id":"103f8f2e-4d65-4a3a-bc29-21edc8e7dd32","type":"ResetTool"},{"attributes":{"data_source":{"id":"4bd38666-dc9a-44de-bf52-0ac3106f640e","type":"ColumnDataSource"},"glyph":{"id":"b17734ea-ce57-4973-8948-5ab2fae8482f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"86347849-e9c8-4d6d-8b1a-7eacb8122c9a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"e7bec2e2-2b06-44cf-a991-17d173daf529","type":"ColumnDataSource"},"glyph":{"id":"8e66d83e-db1a-4c3a-a267-329d5b9ed3db","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ce67df5f-9318-4828-8969-675a41621248","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"683e783b-d12d-4195-9971-241ad5293b3c","type":"ColumnDataSource"},"glyph":{"id":"e081675f-bb6c-4acb-b7c8-01b7da90652c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6ea55443-5d49-4c10-9a98-bf832cc640ff","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"eb729eb0-4070-4123-8122-b6325b2876c7","type":"BoxAnnotation"},"plot":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"}},"id":"4cc78551-bcda-48fa-9c3a-8b358a39d713","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]","(3.6, 6.9]"],"chart_index":[{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"},{"POS_ARR_DELAY":"(3.6, 6.9]"}],"values":[4.454545454545454,4.461538461538462,5.809523809523809,6.230769230769231,4.222222222222222,5.4,5.384615384615385,4.0,6.857142857142857,6.076923076923077,6.90625,5.411764705882353],"x":[8,10,11,10,13,8,10,13,9,10,11,12],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"43216e9b-9ca8-4d46-a594-3fdc1f4ba149","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20.1, 23.4]","(20.1, 23.4]","(20.1, 23.4]","(20.1, 23.4]","(20.1, 23.4]"],"chart_index":[{"POS_ARR_DELAY":"(20.1, 23.4]"},{"POS_ARR_DELAY":"(20.1, 23.4]"},{"POS_ARR_DELAY":"(20.1, 23.4]"},{"POS_ARR_DELAY":"(20.1, 23.4]"},{"POS_ARR_DELAY":"(20.1, 23.4]"}],"values":[22.5,21.545454545454547,20.555555555555557,22.934782608695652,23.11111111111111],"x":[14,8,15,14,15],"y":["Monday","Tuesday","Tuesday","Friday","Friday"]}},"id":"64f03bcc-2c06-4af5-93b8-e19525e8ee77","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]","(6.9, 10.2]"],"chart_index":[{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"},{"POS_ARR_DELAY":"(6.9, 10.2]"}],"values":[8.0,7.0,7.285714285714286,7.25,7.51063829787234,8.952380952380953,8.682926829268293,7.8,8.617647058823529,7.658536585365853,7.92,10.0],"x":[12,13,12,13,14,11,11,8,12,12,10,13],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Wednesday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"b53b9359-c4f6-4a79-b94e-9aa837110ae7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20.1, 23.4]","(20.1, 23.4]","(20.1, 23.4]","(20.1, 23.4]","(20.1, 23.4]"],"chart_index":[{"POS_ARR_DELAY":"(20.1, 23.4]"},{"POS_ARR_DELAY":"(20.1, 23.4]"},{"POS_ARR_DELAY":"(20.1, 23.4]"},{"POS_ARR_DELAY":"(20.1, 23.4]"},{"POS_ARR_DELAY":"(20.1, 23.4]"}],"values":[22.5,21.545454545454547,20.555555555555557,22.934782608695652,23.11111111111111],"x":[14,8,15,14,15],"y":["Monday","Tuesday","Tuesday","Friday","Friday"]}},"id":"e7bec2e2-2b06-44cf-a991-17d173daf529","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"}},"id":"c8506f0f-b2af-4532-be5c-138c435e1904","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb2e8e63-a55c-4a82-b802-c83dae14c555","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"81722d90-0866-4ddb-8107-b984ac460250","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c0eaa869-2f31-4902-97a5-5507fe4b020c","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b17734ea-ce57-4973-8948-5ab2fae8482f","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"c9378c3e-e249-4c03-9f07-05595c038483","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"},"ticker":{"id":"180a6257-5401-405e-99c2-4f9e4bb4476f","type":"CategoricalTicker"}},"id":"94420a45-f808-4d83-a242-e784fc3e15bc","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"edf05332-d9a6-43db-ac04-baf13c69af3a","type":"ColumnDataSource"},"glyph":{"id":"526c476b-f15b-43e4-9937-2d967ea77a23","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c12ea9fd-3983-494c-88ca-654940bbad51","type":"GlyphRenderer"},{"attributes":{},"id":"d805255d-569e-4ed4-8f51-92d49ac32791","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"}},"id":"6c7e9233-c9d8-4076-a365-4c70ad58fb87","type":"PanTool"},{"attributes":{"plot":null,"text":"Southwest Airlines "},"id":"9df596ca-eb4a-4f39-9dec-1c8aca96b785","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]"],"chart_index":[{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"}],"values":[1.3333333333333333,3.388888888888889,3.5625,0.35294117647058826,3.2222222222222223,1.2222222222222223,2.0,1.9,2.4705882352941178,3.6],"x":[6,6,12,6,13,6,7,8,6,8],"y":["Monday","Tuesday","Wednesday","Thursday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"91505e9c-7ef7-436f-960f-5b4fe8dfcfb0","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bfd462c8-26b2-42c8-a628-af26d157c5ca","type":"ColumnDataSource"},"glyph":{"id":"fb2e8e63-a55c-4a82-b802-c83dae14c555","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cdc8f859-06f7-4e48-ad60-1c1faeff6f27","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"94071b78-7231-48fc-8e19-260159f7378f","type":"FactorRange"},{"attributes":{"data_source":{"id":"1729b869-3995-48d4-872f-1b1d4da700c9","type":"ColumnDataSource"},"glyph":{"id":"6c4e7782-5ea5-4d3e-8f02-1933bb1230b1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"244b0bde-da10-4c08-8f1f-bf2958b5f4c2","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b836d24-3b25-4a1d-b9fa-92ed2f1cd34f","type":"Rect"},{"attributes":{},"id":"9923db7d-381d-49cf-bc7c-da6dfe5ba828","type":"ToolEvents"},{"attributes":{"child":{"id":"d630f52e-a6b3-41ad-9ab6-ffc5ff315a1e","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"fce06b08-2b14-43d6-a9c4-8675e52cd0ff","type":"Panel"},{"attributes":{"color_mapper":{"id":"f3b27a49-d3f3-41d7-b9c1-42a9ed627727","type":"LinearColorMapper"},"formatter":{"id":"5f82fa2d-e0eb-4a42-9349-7e2e92c0ef46","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"30fc46ec-48d7-4074-9236-32a46fd15a1b","subtype":"Chart","type":"Plot"},"ticker":{"id":"20d1fff3-214a-46ee-a77a-91e6c4c93127","type":"BasicTicker"}},"id":"859db1eb-36e5-40c0-8e59-8d3accba0770","type":"ColorBar"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"95fde071-c441-4170-8526-48cdca7802cc","type":"PanTool"},{"id":"bbf32806-f0cc-4f43-9879-e2e34df5063d","type":"WheelZoomTool"},{"id":"dd3b495f-ee56-436a-b2d8-79e232c8f4a1","type":"BoxZoomTool"},{"id":"6dec269c-88cd-4015-bd59-f985cbe52420","type":"SaveTool"},{"id":"9394188d-46af-4fac-b0eb-db7292871dcc","type":"ResetTool"},{"id":"c8506f0f-b2af-4532-be5c-138c435e1904","type":"HelpTool"}]},"id":"2b398587-1ac8-4b9f-86b6-5dbf9cee13cc","type":"Toolbar"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9868e5de-092e-437b-b554-efb252cc28ed","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10.2, 13.5]","(10.2, 13.5]","(10.2, 13.5]","(10.2, 13.5]","(10.2, 13.5]"],"chart_index":[{"POS_ARR_DELAY":"(10.2, 13.5]"},{"POS_ARR_DELAY":"(10.2, 13.5]"},{"POS_ARR_DELAY":"(10.2, 13.5]"},{"POS_ARR_DELAY":"(10.2, 13.5]"},{"POS_ARR_DELAY":"(10.2, 13.5]"}],"values":[13.416666666666666,11.395348837209303,10.555555555555555,12.23076923076923,12.205882352941176],"x":[10,11,6,10,12],"y":["Monday","Monday","Wednesday","Thursday","Thursday"]}},"id":"edf05332-d9a6-43db-ac04-baf13c69af3a","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6c4e7782-5ea5-4d3e-8f02-1933bb1230b1","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d74aacc6-48fb-4997-91f2-8ae62a4dc8be","type":"Rect"},{"attributes":{"data_source":{"id":"86f62152-cf8c-4b85-88dd-10227751e1bf","type":"ColumnDataSource"},"glyph":{"id":"9868e5de-092e-437b-b554-efb252cc28ed","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7acd0bca-2d5b-4121-8539-23c8cc983f43","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]","[0.3, 3.6]"],"chart_index":[{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"},{"POS_ARR_DELAY":"[0.3, 3.6]"}],"values":[1.3333333333333333,3.388888888888889,3.5625,0.35294117647058826,3.2222222222222223,1.2222222222222223,2.0,1.9,2.4705882352941178,3.6],"x":[6,6,12,6,13,6,7,8,6,8],"y":["Monday","Tuesday","Wednesday","Thursday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday"]}},"id":"1729b869-3995-48d4-872f-1b1d4da700c9","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"e081675f-bb6c-4acb-b7c8-01b7da90652c","type":"Rect"},{"attributes":{},"id":"335b6c66-d0eb-493a-8538-f3ac778e0b4f","type":"BasicTicker"}],"root_ids":["6e91ba5d-c3eb-41a7-8797-ba967cfbbcde"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"906c2c06-cb70-49d1-83f8-f9a9666fd4bf","elementid":"c6d9e5b7-9d33-4765-80e4-0c600c7fa0a4","modelid":"6e91ba5d-c3eb-41a7-8797-ba967cfbbcde"}];
                  
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