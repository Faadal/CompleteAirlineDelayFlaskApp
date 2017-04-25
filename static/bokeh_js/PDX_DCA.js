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
      };var element = document.getElementById("a22919ee-2b87-4be0-90e0-3fe4866bde79");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a22919ee-2b87-4be0-90e0-3fe4866bde79' but no matching script tag was found. ")
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
                  var docs_json = {"91231ffe-f199-4563-a500-ab0f0d3b4503":{"roots":{"references":[{"attributes":{"plot":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"}},"id":"c2ea2d70-854e-44e5-ad4b-27130f8dcfd3","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8a0d8528-ce0f-4314-9d34-6d38a2f28b8f","type":"Rect"},{"attributes":{"data_source":{"id":"fc97f4fd-9f4f-4304-8799-87e3c192d5f5","type":"ColumnDataSource"},"glyph":{"id":"5c5113fc-63b6-4ea5-be6d-1a4a1f90fa66","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d3100383-9945-41d9-98ec-baf948666cd4","type":"GlyphRenderer"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"71120321-dc0d-4ff7-86c1-423517a03f10","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"},"ticker":{"id":"90229b36-a810-4575-8fdc-9883e708677d","type":"CategoricalTicker"}},"id":"4c4f8ba4-9745-4bef-85af-d0afb841bb17","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"}},"id":"c037f854-a8b6-4959-9d1b-48d9e7bda49f","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"82cfe228-0a5b-49ff-af48-6da0a4eda7b1","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"2d6f9f30-c6d0-49f3-8ae3-065a43ff71ce","type":"Rect"},{"attributes":{"overlay":{"id":"7364d40f-d7a8-4f94-bfc8-4ab6a5ff7c49","type":"BoxAnnotation"},"plot":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"}},"id":"fa86c930-f06f-4097-b3be-77b1a629d6d1","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"c6dc234e-3b18-4d55-b870-7c8251d87032","type":"ColumnDataSource"},"glyph":{"id":"ac0cade6-7e0e-471f-a5e8-aaf4d695d644","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aeec3eb9-7dae-4998-95be-59895c49e60a","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e71e0314-8199-47c3-aad7-c0c86fbd4be6","type":"LinearAxis"}],"left":[{"id":"4c4f8ba4-9745-4bef-85af-d0afb841bb17","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"7364d40f-d7a8-4f94-bfc8-4ab6a5ff7c49","type":"BoxAnnotation"},{"id":"265b0e78-a141-4797-a7d4-c860cf11340b","type":"GlyphRenderer"},{"id":"aeec3eb9-7dae-4998-95be-59895c49e60a","type":"GlyphRenderer"},{"id":"0041c253-1ed5-4196-b832-ae1803a5f66f","type":"GlyphRenderer"},{"id":"e65a0e03-f15a-487b-9e89-da4b2771e288","type":"GlyphRenderer"},{"id":"cc00646c-dd2d-49e7-93dc-82b6bbc94b17","type":"GlyphRenderer"},{"id":"a199f813-2750-4ffa-a520-72a5d50a2120","type":"GlyphRenderer"},{"id":"e71e0314-8199-47c3-aad7-c0c86fbd4be6","type":"LinearAxis"},{"id":"4c4f8ba4-9745-4bef-85af-d0afb841bb17","type":"CategoricalAxis"},{"id":"fa1b0aa3-04a8-41b4-b0d1-32c2a06ead24","type":"ColorBar"}],"right":[{"id":"fa1b0aa3-04a8-41b4-b0d1-32c2a06ead24","type":"ColorBar"}],"title":{"id":"8deb5311-4c3d-4b57-9b4e-1f84f39505da","type":"Title"},"tool_events":{"id":"f90e0755-b51f-4ee1-bb75-fcfceb7c2869","type":"ToolEvents"},"toolbar":{"id":"8eb05c46-f8ed-4d12-83ef-ac949f2ff30c","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"101d930b-a25e-4122-83ba-8b92c645150a","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a6cb8cd5-7c54-4854-bcf1-b1ce128f2561","type":"FactorRange"}},"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"e55fbcbd-196e-4682-86a2-d6cfdb481c25","type":"BasicTickFormatter"},{"attributes":{},"id":"71120321-dc0d-4ff7-86c1-423517a03f10","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[3.8, 4.3]"],"chart_index":[{"POS_ARR_DELAY":"[3.8, 4.3]"}],"values":[3.7870967741935484],"x":[9],"y":["Friday"]}},"id":"da3a216c-d82c-4c96-b7d1-7f12a3ef05da","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"}},"id":"afaad68a-2c92-4e7a-8a75-18eefbed2332","type":"HelpTool"},{"attributes":{"child":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"7d0680f1-7e96-413c-a6bf-fb0e4d63c92a","type":"Panel"},{"attributes":{"callback":null,"end":23},"id":"101d930b-a25e-4122-83ba-8b92c645150a","type":"Range1d"},{"attributes":{"plot":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"}},"id":"6b258012-51b8-4d67-94d4-bbf0c46e84e5","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7.8, 8.3]","(7.8, 8.3]"],"chart_index":[{"POS_ARR_DELAY":"(7.8, 8.3]"},{"POS_ARR_DELAY":"(7.8, 8.3]"}],"values":[7.9743589743589745,8.292207792207792],"x":[9,9],"y":["Monday","Saturday"]}},"id":"c9e378eb-2766-418b-a987-f19ff053c43b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"67ee6d7f-9b48-477b-adf1-cb1da97c8738","type":"ColumnDataSource"},"glyph":{"id":"9565a2f9-334c-4c91-9b9c-7528f97b6db5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f5b5f4e8-4be4-436b-b730-00e74ae6e991","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"45fa1faf-e561-4e0b-88b2-403b813044d3","type":"ColumnDataSource"},"glyph":{"id":"a46d355f-99cb-4aa5-9a28-98af71a76588","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e65a0e03-f15a-487b-9e89-da4b2771e288","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"73209a43-17fe-4581-908a-9f127be0b286","type":"LinearAxis"}],"left":[{"id":"b5a865f3-7ba1-4c17-a8b4-a4ecf4dccb32","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"fa31a1c7-bdf2-44d4-ada8-aebfddc89f4b","type":"BoxAnnotation"},{"id":"c1359ca8-6b82-4bed-99a6-5c8a3d0ca734","type":"GlyphRenderer"},{"id":"d3100383-9945-41d9-98ec-baf948666cd4","type":"GlyphRenderer"},{"id":"f5b5f4e8-4be4-436b-b730-00e74ae6e991","type":"GlyphRenderer"},{"id":"f15049d0-8224-434a-a673-276bd1b602bf","type":"GlyphRenderer"},{"id":"8ae53cd6-9824-44fa-95fd-640a076ab7db","type":"GlyphRenderer"},{"id":"45793412-b961-4c8b-af9a-6eb3b27b079b","type":"GlyphRenderer"},{"id":"73209a43-17fe-4581-908a-9f127be0b286","type":"LinearAxis"},{"id":"b5a865f3-7ba1-4c17-a8b4-a4ecf4dccb32","type":"CategoricalAxis"},{"id":"51a4acaa-635e-42e6-b68e-7a37f85e4e0b","type":"ColorBar"}],"right":[{"id":"51a4acaa-635e-42e6-b68e-7a37f85e4e0b","type":"ColorBar"}],"title":{"id":"04bd881d-cfaf-471f-a1f2-7dfdc8aba2a8","type":"Title"},"tool_events":{"id":"8d117629-dff8-4f97-ba57-6fa096792e10","type":"ToolEvents"},"toolbar":{"id":"dd18f92a-8dde-4ed2-92a3-f25be616eed7","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"b01ce7b0-f626-4ad4-9305-759c3e8fd09c","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"1298f6b9-22d0-451d-b842-384221d6e374","type":"FactorRange"}},"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"f36b9a73-9a4d-486b-9f2e-60558a430454","type":"ColumnDataSource"},"glyph":{"id":"3b7d3920-fa3b-4f27-bc9d-2448e90445e7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c1359ca8-6b82-4bed-99a6-5c8a3d0ca734","type":"GlyphRenderer"},{"attributes":{},"id":"bca06a67-f642-467c-8502-28eedc9eb517","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9565a2f9-334c-4c91-9b9c-7528f97b6db5","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.8, 6.3]"],"chart_index":[{"POS_ARR_DELAY":"(5.8, 6.3]"}],"values":[6.185897435897436],"x":[9],"y":["Tuesday"]}},"id":"67ee6d7f-9b48-477b-adf1-cb1da97c8738","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7364d40f-d7a8-4f94-bfc8-4ab6a5ff7c49","type":"BoxAnnotation"},{"attributes":{"color_mapper":{"id":"a399343f-c764-42b1-9e68-ecb7d1a49a1c","type":"LinearColorMapper"},"formatter":{"id":"e55fbcbd-196e-4682-86a2-d6cfdb481c25","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"},"ticker":{"id":"e17e42e3-88a8-4f3f-afa2-5c90874c45b5","type":"BasicTicker"}},"id":"51a4acaa-635e-42e6-b68e-7a37f85e4e0b","type":"ColorBar"},{"attributes":{"data_source":{"id":"861b2aaa-7ddf-492d-bdc2-e4849a778477","type":"ColumnDataSource"},"glyph":{"id":"82cfe228-0a5b-49ff-af48-6da0a4eda7b1","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8ae53cd6-9824-44fa-95fd-640a076ab7db","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.3, 6.8]"],"chart_index":[{"POS_ARR_DELAY":"(6.3, 6.8]"}],"values":[6.774193548387097],"x":[9],"y":["Thursday"]}},"id":"fc97f4fd-9f4f-4304-8799-87e3c192d5f5","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"bca06a67-f642-467c-8502-28eedc9eb517","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"},"ticker":{"id":"cf55c428-da0b-4eab-ae98-bd4c34303f21","type":"CategoricalTicker"}},"id":"b5a865f3-7ba1-4c17-a8b4-a4ecf4dccb32","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"7fbd378f-4b3f-4e29-8fcc-6809f449c258","type":"ColumnDataSource"},"glyph":{"id":"2d6f9f30-c6d0-49f3-8ae3-065a43ff71ce","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f15049d0-8224-434a-a673-276bd1b602bf","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c3e899c2-a272-45e9-bf49-0b743dda7d40","type":"ColumnDataSource"},"glyph":{"id":"8a0d8528-ce0f-4314-9d34-6d38a2f28b8f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cc00646c-dd2d-49e7-93dc-82b6bbc94b17","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"}},"id":"8e12294f-c68c-4e8c-8f31-f48294bf1317","type":"SaveTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a6cb8cd5-7c54-4854-bcf1-b1ce128f2561","type":"FactorRange"},{"attributes":{"plot":null,"text":"Alaska Airlines "},"id":"8deb5311-4c3d-4b57-9b4e-1f84f39505da","type":"Title"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ac0cade6-7e0e-471f-a5e8-aaf4d695d644","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.8, 6.3]"],"chart_index":[{"POS_ARR_DELAY":"(5.8, 6.3]"}],"values":[6.185897435897436],"x":[9],"y":["Tuesday"]}},"id":"582b95ab-e4fe-4c89-89d7-c3a41f6d8e2e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c9e378eb-2766-418b-a987-f19ff053c43b","type":"ColumnDataSource"},"glyph":{"id":"7f7653cd-c801-45a9-b5db-97116dbd2362","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"265b0e78-a141-4797-a7d4-c860cf11340b","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"566c8694-2a86-4eec-a8b4-e893c0ce6d12","type":"BasicTickFormatter"},"plot":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"},"ticker":{"id":"bb67a9bf-477f-40b4-a539-82989eb25521","type":"BasicTicker"}},"id":"e71e0314-8199-47c3-aad7-c0c86fbd4be6","type":"LinearAxis"},{"attributes":{},"id":"e17e42e3-88a8-4f3f-afa2-5c90874c45b5","type":"BasicTicker"},{"attributes":{},"id":"66b21282-85b4-43f4-b6d7-1da439a078fa","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f7653cd-c801-45a9-b5db-97116dbd2362","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.8, 5.3]"],"chart_index":[{"POS_ARR_DELAY":"(4.8, 5.3]"}],"values":[5.083333333333333],"x":[9],"y":["Sunday"]}},"id":"c3e899c2-a272-45e9-bf49-0b743dda7d40","type":"ColumnDataSource"},{"attributes":{},"id":"90229b36-a810-4575-8fdc-9883e708677d","type":"CategoricalTicker"},{"attributes":{"plot":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"}},"id":"397e2681-e61f-4b48-8fa3-c745bb0c1843","type":"ResetTool"},{"attributes":{"data_source":{"id":"da3a216c-d82c-4c96-b7d1-7f12a3ef05da","type":"ColumnDataSource"},"glyph":{"id":"f645874e-cff7-4e66-b5ba-a8b28815dfff","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a199f813-2750-4ffa-a520-72a5d50a2120","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"}},"id":"95995105-a24f-41c6-9beb-f1dde5d1cf55","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6b258012-51b8-4d67-94d4-bbf0c46e84e5","type":"PanTool"},{"id":"95995105-a24f-41c6-9beb-f1dde5d1cf55","type":"WheelZoomTool"},{"id":"fa86c930-f06f-4097-b3be-77b1a629d6d1","type":"BoxZoomTool"},{"id":"8e12294f-c68c-4e8c-8f31-f48294bf1317","type":"SaveTool"},{"id":"397e2681-e61f-4b48-8fa3-c745bb0c1843","type":"ResetTool"},{"id":"afaad68a-2c92-4e7a-8a75-18eefbed2332","type":"HelpTool"}]},"id":"8eb05c46-f8ed-4d12-83ef-ac949f2ff30c","type":"Toolbar"},{"attributes":{},"id":"a4299185-e2c7-4879-977f-3c79eac71110","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.8, 5.3]"],"chart_index":[{"POS_ARR_DELAY":"(4.8, 5.3]"}],"values":[5.083333333333333],"x":[9],"y":["Sunday"]}},"id":"861b2aaa-7ddf-492d-bdc2-e4849a778477","type":"ColumnDataSource"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"66b21282-85b4-43f4-b6d7-1da439a078fa","type":"BasicTickFormatter"},"plot":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"},"ticker":{"id":"f5c519c5-5fab-4e54-8648-4f5f485bd4ce","type":"BasicTicker"}},"id":"73209a43-17fe-4581-908a-9f127be0b286","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.3, 5.8]"],"chart_index":[{"POS_ARR_DELAY":"(5.3, 5.8]"}],"values":[5.455128205128205],"x":[9],"y":["Wednesday"]}},"id":"7fbd378f-4b3f-4e29-8fcc-6809f449c258","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"}},"id":"21940bbf-71a7-493c-9035-75e6f0862ea3","type":"PanTool"},{"attributes":{},"id":"f5c519c5-5fab-4e54-8648-4f5f485bd4ce","type":"BasicTicker"},{"attributes":{},"id":"bb67a9bf-477f-40b4-a539-82989eb25521","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"17527ad3-568d-48ea-826b-e16b8306a5b9","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"b01ce7b0-f626-4ad4-9305-759c3e8fd09c","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.3, 6.8]"],"chart_index":[{"POS_ARR_DELAY":"(6.3, 6.8]"}],"values":[6.774193548387097],"x":[9],"y":["Thursday"]}},"id":"c6dc234e-3b18-4d55-b870-7c8251d87032","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"a399343f-c764-42b1-9e68-ecb7d1a49a1c","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b7d3920-fa3b-4f27-bc9d-2448e90445e7","type":"Rect"},{"attributes":{},"id":"e1afbe2b-0806-4da9-9698-bf3aa204f727","type":"BasicTickFormatter"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"1298f6b9-22d0-451d-b842-384221d6e374","type":"FactorRange"},{"attributes":{},"id":"8d117629-dff8-4f97-ba57-6fa096792e10","type":"ToolEvents"},{"attributes":{},"id":"f90e0755-b51f-4ee1-bb75-fcfceb7c2869","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(5.3, 5.8]"],"chart_index":[{"POS_ARR_DELAY":"(5.3, 5.8]"}],"values":[5.455128205128205],"x":[9],"y":["Wednesday"]}},"id":"45fa1faf-e561-4e0b-88b2-403b813044d3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"582b95ab-e4fe-4c89-89d7-c3a41f6d8e2e","type":"ColumnDataSource"},"glyph":{"id":"03df8807-f6a7-45a4-88d0-2c17beb1a376","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0041c253-1ed5-4196-b832-ae1803a5f66f","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"7d0680f1-7e96-413c-a6bf-fb0e4d63c92a","type":"Panel"},{"id":"d3878c73-0512-4d54-878d-87f9f9e7f293","type":"Panel"}]},"id":"50d8db43-d95a-424e-8ad3-e18ba3ef6577","type":"Tabs"},{"attributes":{"child":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"},"title":"AS"},"id":"d3878c73-0512-4d54-878d-87f9f9e7f293","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f645874e-cff7-4e66-b5ba-a8b28815dfff","type":"Rect"},{"attributes":{"plot":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"}},"id":"091782fc-3532-46da-9f72-18f838970090","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fa31a1c7-bdf2-44d4-ada8-aebfddc89f4b","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"6e866ff5-aef7-4a1d-9dc6-aea02a2d55f7","type":"ColumnDataSource"},"glyph":{"id":"17527ad3-568d-48ea-826b-e16b8306a5b9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"45793412-b961-4c8b-af9a-6eb3b27b079b","type":"GlyphRenderer"},{"attributes":{},"id":"566c8694-2a86-4eec-a8b4-e893c0ce6d12","type":"BasicTickFormatter"},{"attributes":{},"id":"cf55c428-da0b-4eab-ae98-bd4c34303f21","type":"CategoricalTicker"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"7d783205-a24e-4fa3-83c4-ecf7e530e229","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"03df8807-f6a7-45a4-88d0-2c17beb1a376","type":"Rect"},{"attributes":{"plot":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"}},"id":"d38abebc-e2c7-4799-a134-597b39f1baed","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[3.8, 4.3]"],"chart_index":[{"POS_ARR_DELAY":"[3.8, 4.3]"}],"values":[3.7870967741935484],"x":[9],"y":["Friday"]}},"id":"6e866ff5-aef7-4a1d-9dc6-aea02a2d55f7","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a46d355f-99cb-4aa5-9a28-98af71a76588","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"21940bbf-71a7-493c-9035-75e6f0862ea3","type":"PanTool"},{"id":"091782fc-3532-46da-9f72-18f838970090","type":"WheelZoomTool"},{"id":"effdc76f-7c12-4636-9951-1375ebc00e25","type":"BoxZoomTool"},{"id":"c2ea2d70-854e-44e5-ad4b-27130f8dcfd3","type":"SaveTool"},{"id":"c037f854-a8b6-4959-9d1b-48d9e7bda49f","type":"ResetTool"},{"id":"d38abebc-e2c7-4799-a134-597b39f1baed","type":"HelpTool"}]},"id":"dd18f92a-8dde-4ed2-92a3-f25be616eed7","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7.8, 8.3]","(7.8, 8.3]"],"chart_index":[{"POS_ARR_DELAY":"(7.8, 8.3]"},{"POS_ARR_DELAY":"(7.8, 8.3]"}],"values":[7.9743589743589745,8.292207792207792],"x":[9,9],"y":["Monday","Saturday"]}},"id":"f36b9a73-9a4d-486b-9f2e-60558a430454","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5c5113fc-63b6-4ea5-be6d-1a4a1f90fa66","type":"Rect"},{"attributes":{"overlay":{"id":"fa31a1c7-bdf2-44d4-ada8-aebfddc89f4b","type":"BoxAnnotation"},"plot":{"id":"79197e2e-7cbe-4971-b3a4-4c1fdfd02a0f","subtype":"Chart","type":"Plot"}},"id":"effdc76f-7c12-4636-9951-1375ebc00e25","type":"BoxZoomTool"},{"attributes":{"color_mapper":{"id":"7d783205-a24e-4fa3-83c4-ecf7e530e229","type":"LinearColorMapper"},"formatter":{"id":"e1afbe2b-0806-4da9-9698-bf3aa204f727","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"8ca81da7-e6ea-4f87-8ca8-849d679fba0d","subtype":"Chart","type":"Plot"},"ticker":{"id":"a4299185-e2c7-4879-977f-3c79eac71110","type":"BasicTicker"}},"id":"fa1b0aa3-04a8-41b4-b0d1-32c2a06ead24","type":"ColorBar"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"04bd881d-cfaf-471f-a1f2-7dfdc8aba2a8","type":"Title"}],"root_ids":["50d8db43-d95a-424e-8ad3-e18ba3ef6577"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"91231ffe-f199-4563-a500-ab0f0d3b4503","elementid":"a22919ee-2b87-4be0-90e0-3fe4866bde79","modelid":"50d8db43-d95a-424e-8ad3-e18ba3ef6577"}];
                  
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