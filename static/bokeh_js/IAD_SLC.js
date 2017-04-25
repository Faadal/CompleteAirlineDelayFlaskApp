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
      };var element = document.getElementById("a24ec0c8-a79c-4a70-912d-f96deadd2aeb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a24ec0c8-a79c-4a70-912d-f96deadd2aeb' but no matching script tag was found. ")
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
                  var docs_json = {"cdab669d-2348-4255-818b-079baecee7fb":{"roots":{"references":[{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a7f36949-8ad3-43f3-9a7f-36e09c297778","type":"FactorRange"},{"attributes":{"data_source":{"id":"b7f02b35-718e-4509-a7fb-a9909a93adce","type":"ColumnDataSource"},"glyph":{"id":"4b76df46-6d2a-485f-a9e6-499a8d190dbd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8dfdb6f4-af39-45cf-ada5-2365b3214ab2","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5a44fb97-1034-4fb0-b419-594736d1bf61","type":"PanTool"},{"id":"f9f7eaa0-0b87-4987-9d85-1000dcdf85cc","type":"WheelZoomTool"},{"id":"975504be-cd6b-4e51-a962-5d1cd36c7fbb","type":"BoxZoomTool"},{"id":"000ccfa2-e67b-40aa-9b8b-f1a972fe6f7b","type":"SaveTool"},{"id":"1b5b24ac-843e-481d-863d-c41d79430abb","type":"ResetTool"},{"id":"c8bd2401-ce22-40c1-a5b5-0bd66d43e5bf","type":"HelpTool"}]},"id":"ab3b9d70-d778-4de1-a93f-3725a0b0c9c3","type":"Toolbar"},{"attributes":{"plot":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"}},"id":"f8dbe267-750f-45cb-a1e0-a19dfb9dfb52","type":"WheelZoomTool"},{"attributes":{},"id":"7e2bdab6-b514-4c68-af32-eedb490edd0a","type":"CategoricalTickFormatter"},{"attributes":{"plot":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"}},"id":"bb26a13d-a163-4c5b-8eb8-aed7ac0ce312","type":"HelpTool"},{"attributes":{"plot":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"}},"id":"4742486c-b06b-4c58-93e1-b4ee9bc88d0b","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7781088c-b368-49b8-bcd7-576d8ac82b77","type":"Rect"},{"attributes":{},"id":"d89de538-869c-4cf5-9e96-3f4a6ba2d7f9","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.0,13.0],"x":[18,20],"y":["Wednesday","Sunday"]}},"id":"f773314f-c339-4430-816f-3c76cafaa0db","type":"ColumnDataSource"},{"attributes":{},"id":"055d2386-588a-4280-bc79-2e19cfe721b9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"8afb4580-7d55-487b-a874-0b962de9ec09","type":"ColumnDataSource"},"glyph":{"id":"a01fb6a1-c0ff-47b5-8fca-0b2afbf91f1a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b8e89294-c687-484e-9495-bb9c42684c0f","type":"GlyphRenderer"},{"attributes":{},"id":"8ed179cd-d524-4b89-9e40-27b93ef891e9","type":"BasicTickFormatter"},{"attributes":{"callback":null,"tabs":[{"id":"7debc7fc-fb9d-4ce0-ae51-e22412d5bd1f","type":"Panel"},{"id":"caf4f0e9-eb25-442c-beef-0db95aff5cba","type":"Panel"},{"id":"f8c24920-cd07-4511-a83a-45002909e913","type":"Panel"}]},"id":"e5b84a79-aa7e-4600-aa01-8b49a92cfc5f","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f40c851f-d5f8-48df-89be-8e8976016a2f","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"4cec45f2-3fbb-46a7-ba0a-2c00c4904a04","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"},"ticker":{"id":"d89de538-869c-4cf5-9e96-3f4a6ba2d7f9","type":"CategoricalTicker"}},"id":"c13db979-9934-4add-8a18-6f94af918d2c","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"111eaafe-9f99-48e2-b75e-bc4139dbde88","type":"Rect"},{"attributes":{},"id":"52cca042-6d3b-42d8-8de5-feb1aa6d6b36","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"7758406f-9e39-4a33-ac25-aba7d429b9a8","type":"BoxAnnotation"},"plot":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"}},"id":"975504be-cd6b-4e51-a962-5d1cd36c7fbb","type":"BoxZoomTool"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"8ed179cd-d524-4b89-9e40-27b93ef891e9","type":"BasicTickFormatter"},"plot":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"},"ticker":{"id":"1ae56fc0-8761-468d-9a8a-763b858a14d8","type":"BasicTicker"}},"id":"2c624178-165f-43a0-b9fa-9d8018235613","type":"LinearAxis"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"2c624178-165f-43a0-b9fa-9d8018235613","type":"LinearAxis"}],"left":[{"id":"4f21e29a-ea0a-4fac-883d-aa73410d3dd8","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"7758406f-9e39-4a33-ac25-aba7d429b9a8","type":"BoxAnnotation"},{"id":"4fa4baf2-9e7e-4b89-8532-876c0050312e","type":"GlyphRenderer"},{"id":"4edf2ce7-38f7-48fb-9b18-1a7501c82709","type":"GlyphRenderer"},{"id":"8dfdb6f4-af39-45cf-ada5-2365b3214ab2","type":"GlyphRenderer"},{"id":"bdd57e56-c24d-40f7-8af4-87190e7c9276","type":"GlyphRenderer"},{"id":"467c6af8-7621-41e2-a9fd-b672db81c704","type":"GlyphRenderer"},{"id":"b8e89294-c687-484e-9495-bb9c42684c0f","type":"GlyphRenderer"},{"id":"2c624178-165f-43a0-b9fa-9d8018235613","type":"LinearAxis"},{"id":"4f21e29a-ea0a-4fac-883d-aa73410d3dd8","type":"CategoricalAxis"},{"id":"6bdabfd4-16a6-4e95-8de5-0f7e43779c3f","type":"ColorBar"}],"right":[{"id":"6bdabfd4-16a6-4e95-8de5-0f7e43779c3f","type":"ColorBar"}],"title":{"id":"846b5dc5-f38e-4577-a01a-7062b18cbcf8","type":"Title"},"tool_events":{"id":"1950be13-ceb9-4851-b78a-52dbcf0deeb7","type":"ToolEvents"},"toolbar":{"id":"ab3b9d70-d778-4de1-a93f-3725a0b0c9c3","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"6b770a3c-162e-4f70-a05d-3fd764213194","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a7bbcdd0-acf5-4be2-bc8a-c193ad77c456","type":"FactorRange"}},"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.333333333333334,8.166666666666666],"x":[18,18],"y":["Thursday","Friday"]}},"id":"737f5ccb-12d3-41a4-8fed-c22026b590da","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7758406f-9e39-4a33-ac25-aba7d429b9a8","type":"BoxAnnotation"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"ee901c5b-ce55-4f0e-9bda-8b2c074e528d","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"},"ticker":{"id":"074dd1d2-ea7d-492a-b010-260f4b151198","type":"CategoricalTicker"}},"id":"4f21e29a-ea0a-4fac-883d-aa73410d3dd8","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"}},"id":"ce4629de-ab3e-491e-bbcb-8932579bac72","type":"ResetTool"},{"attributes":{"data_source":{"id":"d0ad36c4-a950-4656-b8a9-dc26c683d0e3","type":"ColumnDataSource"},"glyph":{"id":"7781088c-b368-49b8-bcd7-576d8ac82b77","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7ad64b57-dd23-4fc7-899d-a7704ddbe335","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"42a21fd2-e87e-4ffb-b47c-0f141e295d99","type":"Rect"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"ac9a7605-cb72-4630-a55b-ac000192aedb","type":"Title"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2fadc083-7a0a-440d-b75c-edc46c02d1bb","type":"BasicTickFormatter"},"plot":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"},"ticker":{"id":"7d7fffdf-92e3-4456-b565-785e82de95d5","type":"BasicTicker"}},"id":"ebe40716-19a3-48c7-b3ff-3a07f1d9cb6a","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.11111111111111],"x":[18],"y":["Sunday"]}},"id":"2541c96f-f245-471b-a360-da1d5507746e","type":"ColumnDataSource"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"7e2bdab6-b514-4c68-af32-eedb490edd0a","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"},"ticker":{"id":"5ba7419a-1127-4162-be1f-9e92465de467","type":"CategoricalTicker"}},"id":"cc3cc1a1-9955-48e1-9814-71a4ebf58a59","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"}},"id":"ad1f0a81-4b1d-4362-9c91-da7a11f2d758","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.0],"x":[18],"y":["Wednesday"]}},"id":"b7f02b35-718e-4509-a7fb-a9909a93adce","type":"ColumnDataSource"},{"attributes":{},"id":"2fadc083-7a0a-440d-b75c-edc46c02d1bb","type":"BasicTickFormatter"},{"attributes":{},"id":"ce7aa885-8463-4b73-8dd3-5802dcf4335b","type":"BasicTickFormatter"},{"attributes":{},"id":"61c65ffe-3f1c-49be-8cc5-a20b0fb81204","type":"BasicTicker"},{"attributes":{},"id":"1950be13-ceb9-4851-b78a-52dbcf0deeb7","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4951505e-3891-451b-95bb-8b90235a0888","type":"BoxAnnotation"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e1e9763-3548-4df5-b6dd-32912b672375","type":"Rect"},{"attributes":{"data_source":{"id":"737f5ccb-12d3-41a4-8fed-c22026b590da","type":"ColumnDataSource"},"glyph":{"id":"7e1e9763-3548-4df5-b6dd-32912b672375","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a6c9cd96-c60f-4d30-bc82-6028bad2132b","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"ccb96918-3a78-4242-93e5-46cc8bb5eab5","type":"BasicTickFormatter"},"plot":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"},"ticker":{"id":"13c7e262-7498-48ed-9746-0cc3f598ffd6","type":"BasicTicker"}},"id":"c4561c19-19ca-4a14-aaec-a26ce0a24883","type":"LinearAxis"},{"attributes":{},"id":"65a75305-5c4b-41a4-9722-4cf946db2ae7","type":"BasicTicker"},{"attributes":{"plot":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"}},"id":"e65f09e0-79fb-4de7-b768-cd3a93de4adc","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"035bbcbd-96db-40a6-9aa3-b813ae055179","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"48f4be4f-fa93-4796-8032-3bb6565e8497","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"6b770a3c-162e-4f70-a05d-3fd764213194","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"35e9e29e-f536-47da-b873-83270e094631","type":"PanTool"},{"id":"ad1f0a81-4b1d-4362-9c91-da7a11f2d758","type":"WheelZoomTool"},{"id":"53ae245e-2d27-49a4-8f55-433fba89d620","type":"BoxZoomTool"},{"id":"d6df6809-f9b5-402b-b770-d1d01ff2439e","type":"SaveTool"},{"id":"ce4629de-ab3e-491e-bbcb-8932579bac72","type":"ResetTool"},{"id":"bb26a13d-a163-4c5b-8eb8-aed7ac0ce312","type":"HelpTool"}]},"id":"433d51ec-40ce-4409-98ab-72364fa81947","type":"Toolbar"},{"attributes":{},"id":"ee901c5b-ce55-4f0e-9bda-8b2c074e528d","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"042529d5-17d0-4494-93ef-5cf0f775ad9c","type":"ColumnDataSource"},"glyph":{"id":"5cd82249-181d-40b3-8b6d-81fa2099cb05","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f154a742-299e-476f-8665-1151af60d406","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.5,5.6],"x":[17,18],"y":["Monday","Monday"]}},"id":"a451d746-c196-40e0-b540-6061e2b62c40","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b76df46-6d2a-485f-a9e6-499a8d190dbd","type":"Rect"},{"attributes":{},"id":"8b074601-a9ed-4f32-a452-4f36a29ea70d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8f25d2ed-69c0-454b-b30c-d2b3bb54a39e","type":"ColumnDataSource"},"glyph":{"id":"111eaafe-9f99-48e2-b75e-bc4139dbde88","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c40ee6f0-ed1e-4c68-8e0d-8b0a63a7a103","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"b3c38eb0-dad8-408d-9ca9-9729811deb2f","type":"LinearColorMapper"},"formatter":{"id":"ce7aa885-8463-4b73-8dd3-5802dcf4335b","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"},"ticker":{"id":"61c65ffe-3f1c-49be-8cc5-a20b0fb81204","type":"BasicTicker"}},"id":"ae6e0b9e-8a35-41ca-8586-7876053407d1","type":"ColorBar"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5cd82249-181d-40b3-8b6d-81fa2099cb05","type":"Rect"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"7f199ace-ad63-482c-94ea-6e12253b41b0","type":"LinearColorMapper"},{"attributes":{},"id":"5ba7419a-1127-4162-be1f-9e92465de467","type":"CategoricalTicker"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"ebe40716-19a3-48c7-b3ff-3a07f1d9cb6a","type":"LinearAxis"}],"left":[{"id":"c13db979-9934-4add-8a18-6f94af918d2c","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"aa949d88-74b2-43a3-ac60-a2281aa857e5","type":"BoxAnnotation"},{"id":"7ad64b57-dd23-4fc7-899d-a7704ddbe335","type":"GlyphRenderer"},{"id":"ebe40716-19a3-48c7-b3ff-3a07f1d9cb6a","type":"LinearAxis"},{"id":"c13db979-9934-4add-8a18-6f94af918d2c","type":"CategoricalAxis"},{"id":"73982ae3-c32a-43ad-ac54-e7885f636857","type":"ColorBar"}],"right":[{"id":"73982ae3-c32a-43ad-ac54-e7885f636857","type":"ColorBar"}],"title":{"id":"6ee4dcb3-c94e-4689-a55b-5aa0f95da2d3","type":"Title"},"tool_events":{"id":"7f52c83b-8464-463b-8f71-0c58225c51f4","type":"ToolEvents"},"toolbar":{"id":"433d51ec-40ce-4409-98ab-72364fa81947","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"7d8ce3ce-f9b7-4164-82cf-3be7615d5bab","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"85884e8e-a4ee-4c76-8d2d-3268f348a003","type":"FactorRange"}},"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[8.333333333333334,8.166666666666666],"x":[18,18],"y":["Thursday","Friday"]}},"id":"d6426692-f0f1-4942-9cc3-171359d0ab13","type":"ColumnDataSource"},{"attributes":{},"id":"7d7fffdf-92e3-4456-b565-785e82de95d5","type":"BasicTicker"},{"attributes":{"callback":null,"factors":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"id":"85884e8e-a4ee-4c76-8d2d-3268f348a003","type":"FactorRange"},{"attributes":{},"id":"1ae56fc0-8761-468d-9a8a-763b858a14d8","type":"BasicTicker"},{"attributes":{"plot":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"}},"id":"35e9e29e-f536-47da-b873-83270e094631","type":"PanTool"},{"attributes":{},"id":"ccb96918-3a78-4242-93e5-46cc8bb5eab5","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"bdd946d9-454e-4ed0-beb9-b66886eed352","type":"ColumnDataSource"},"glyph":{"id":"035bbcbd-96db-40a6-9aa3-b813ae055179","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d79b45f7-4b07-4e68-97fe-226a8af47e53","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"7f199ace-ad63-482c-94ea-6e12253b41b0","type":"LinearColorMapper"},"formatter":{"id":"52cca042-6d3b-42d8-8de5-feb1aa6d6b36","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"},"ticker":{"id":"8b074601-a9ed-4f32-a452-4f36a29ea70d","type":"BasicTicker"}},"id":"6bdabfd4-16a6-4e95-8de5-0f7e43779c3f","type":"ColorBar"},{"attributes":{"plot":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"}},"id":"000ccfa2-e67b-40aa-9b8b-f1a972fe6f7b","type":"SaveTool"},{"attributes":{"data_source":{"id":"f773314f-c339-4430-816f-3c76cafaa0db","type":"ColumnDataSource"},"glyph":{"id":"42a21fd2-e87e-4ffb-b47c-0f141e295d99","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5636c6b1-5cdf-470a-8561-e1906df4969c","type":"GlyphRenderer"},{"attributes":{"child":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"},"title":"UA"},"id":"caf4f0e9-eb25-442c-beef-0db95aff5cba","type":"Panel"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0],"x":[18,17,17,17],"y":["Tuesday","Wednesday","Thursday","Saturday"]}},"id":"8afb4580-7d55-487b-a874-0b962de9ec09","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[4.5,5.6],"x":[17,18],"y":["Monday","Monday"]}},"id":"bdd946d9-454e-4ed0-beb9-b66886eed352","type":"ColumnDataSource"},{"attributes":{},"id":"074dd1d2-ea7d-492a-b010-260f4b151198","type":"CategoricalTicker"},{"attributes":{},"id":"5d0e5fc1-5a1e-4f4e-b451-a73c66a52404","type":"ToolEvents"},{"attributes":{"plot":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"}},"id":"a415f400-3416-4199-b1bf-7639567a5f89","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(12.999, 13.00144]"],"chart_index":[{"POS_ARR_DELAY":"(12.999, 13.00144]"}],"values":[13.0],"x":[20],"y":["Sunday"]}},"id":"d0ad36c4-a950-4656-b8a9-dc26c683d0e3","type":"ColumnDataSource"},{"attributes":{},"id":"4cec45f2-3fbb-46a7-ba0a-2c00c4904a04","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a01fb6a1-c0ff-47b5-8fca-0b2afbf91f1a","type":"Rect"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a7bbcdd0-acf5-4be2-bc8a-c193ad77c456","type":"FactorRange"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"c4561c19-19ca-4a14-aaec-a26ce0a24883","type":"LinearAxis"}],"left":[{"id":"cc3cc1a1-9955-48e1-9814-71a4ebf58a59","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"4951505e-3891-451b-95bb-8b90235a0888","type":"BoxAnnotation"},{"id":"f154a742-299e-476f-8665-1151af60d406","type":"GlyphRenderer"},{"id":"c40ee6f0-ed1e-4c68-8e0d-8b0a63a7a103","type":"GlyphRenderer"},{"id":"5636c6b1-5cdf-470a-8561-e1906df4969c","type":"GlyphRenderer"},{"id":"a6c9cd96-c60f-4d30-bc82-6028bad2132b","type":"GlyphRenderer"},{"id":"d79b45f7-4b07-4e68-97fe-226a8af47e53","type":"GlyphRenderer"},{"id":"05543433-6b7b-4076-b463-ee27e4c3f2ae","type":"GlyphRenderer"},{"id":"c4561c19-19ca-4a14-aaec-a26ce0a24883","type":"LinearAxis"},{"id":"cc3cc1a1-9955-48e1-9814-71a4ebf58a59","type":"CategoricalAxis"},{"id":"ae6e0b9e-8a35-41ca-8586-7876053407d1","type":"ColorBar"}],"right":[{"id":"ae6e0b9e-8a35-41ca-8586-7876053407d1","type":"ColorBar"}],"title":{"id":"ac9a7605-cb72-4630-a55b-ac000192aedb","type":"Title"},"tool_events":{"id":"5d0e5fc1-5a1e-4f4e-b451-a73c66a52404","type":"ToolEvents"},"toolbar":{"id":"bfe1d969-12a7-484a-bd02-1779bada0649","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"329381a3-ff30-432e-986a-1d183252a5a9","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a7f36949-8ad3-43f3-9a7f-36e09c297778","type":"FactorRange"}},"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"},{"attributes":{"child":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"7debc7fc-fb9d-4ce0-ae51-e22412d5bd1f","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b89b164-21af-43c7-8356-6abea1176a69","type":"Rect"},{"attributes":{"callback":null,"end":23},"id":"329381a3-ff30-432e-986a-1d183252a5a9","type":"Range1d"},{"attributes":{"plot":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"}},"id":"c8bd2401-ce22-40c1-a5b5-0bd66d43e5bf","type":"HelpTool"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"ed640b4a-824c-43f6-a253-a6bd7eb2e78b","type":"LinearColorMapper"},{"attributes":{"data_source":{"id":"a451d746-c196-40e0-b540-6061e2b62c40","type":"ColumnDataSource"},"glyph":{"id":"5b89b164-21af-43c7-8356-6abea1176a69","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"467c6af8-7621-41e2-a9fd-b672db81c704","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aa949d88-74b2-43a3-ac60-a2281aa857e5","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"United Air Lines "},"id":"846b5dc5-f38e-4577-a01a-7062b18cbcf8","type":"Title"},{"attributes":{"callback":null,"end":23},"id":"7d8ce3ce-f9b7-4164-82cf-3be7615d5bab","type":"Range1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4742486c-b06b-4c58-93e1-b4ee9bc88d0b","type":"PanTool"},{"id":"f8dbe267-750f-45cb-a1e0-a19dfb9dfb52","type":"WheelZoomTool"},{"id":"633b2a2f-d47d-4e1f-b886-e9c84780ef71","type":"BoxZoomTool"},{"id":"e65f09e0-79fb-4de7-b768-cd3a93de4adc","type":"SaveTool"},{"id":"7e1105ec-a991-4d51-b743-a194745eb285","type":"ResetTool"},{"id":"a415f400-3416-4199-b1bf-7639567a5f89","type":"HelpTool"}]},"id":"bfe1d969-12a7-484a-bd02-1779bada0649","type":"Toolbar"},{"attributes":{},"id":"13c7e262-7498-48ed-9746-0cc3f598ffd6","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[17],"y":["Sunday"]}},"id":"042529d5-17d0-4494-93ef-5cf0f775ad9c","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"4951505e-3891-451b-95bb-8b90235a0888","type":"BoxAnnotation"},"plot":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"}},"id":"633b2a2f-d47d-4e1f-b886-e9c84780ef71","type":"BoxZoomTool"},{"attributes":{},"id":"7f52c83b-8464-463b-8f71-0c58225c51f4","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e64d3c7-3a88-4c48-855e-7c7d7bd9fd2f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[17.11111111111111],"x":[18],"y":["Sunday"]}},"id":"8f25d2ed-69c0-454b-b30c-d2b3bb54a39e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"}},"id":"f9f7eaa0-0b87-4987-9d85-1000dcdf85cc","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[0.0,0.0,0.0,0.0],"x":[18,17,17,17],"y":["Tuesday","Wednesday","Thursday","Saturday"]}},"id":"55fb92b9-9c63-4522-ba12-17f1da2bad57","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[30.0],"x":[17],"y":["Sunday"]}},"id":"392c190a-5fe4-4b66-8051-5c1df65d6894","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Delta Air Lines "},"id":"6ee4dcb3-c94e-4689-a55b-5aa0f95da2d3","type":"Title"},{"attributes":{"plot":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"}},"id":"1b5b24ac-843e-481d-863d-c41d79430abb","type":"ResetTool"},{"attributes":{"child":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"},"title":"DL"},"id":"f8c24920-cd07-4511-a83a-45002909e913","type":"Panel"},{"attributes":{"data_source":{"id":"2541c96f-f245-471b-a360-da1d5507746e","type":"ColumnDataSource"},"glyph":{"id":"7e64d3c7-3a88-4c48-855e-7c7d7bd9fd2f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4edf2ce7-38f7-48fb-9b18-1a7501c82709","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"}},"id":"d6df6809-f9b5-402b-b770-d1d01ff2439e","type":"SaveTool"},{"attributes":{"data_source":{"id":"55fb92b9-9c63-4522-ba12-17f1da2bad57","type":"ColumnDataSource"},"glyph":{"id":"48f4be4f-fa93-4796-8032-3bb6565e8497","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"05543433-6b7b-4076-b463-ee27e4c3f2ae","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"bf007460-a765-4b9d-aee8-01cd991f2313","subtype":"Chart","type":"Plot"}},"id":"7e1105ec-a991-4d51-b743-a194745eb285","type":"ResetTool"},{"attributes":{"overlay":{"id":"aa949d88-74b2-43a3-ac60-a2281aa857e5","type":"BoxAnnotation"},"plot":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"}},"id":"53ae245e-2d27-49a4-8f55-433fba89d620","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"c47f67fe-fd7f-4461-aef5-08019bf7e726","subtype":"Chart","type":"Plot"}},"id":"5a44fb97-1034-4fb0-b419-594736d1bf61","type":"PanTool"},{"attributes":{"data_source":{"id":"d6426692-f0f1-4942-9cc3-171359d0ab13","type":"ColumnDataSource"},"glyph":{"id":"b98113f1-3850-42f9-a2d3-a760f1307f66","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"bdd57e56-c24d-40f7-8af4-87190e7c9276","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"ed640b4a-824c-43f6-a253-a6bd7eb2e78b","type":"LinearColorMapper"},"formatter":{"id":"055d2386-588a-4280-bc79-2e19cfe721b9","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"397dbfde-ed13-4d0a-b707-2b738d5cdff7","subtype":"Chart","type":"Plot"},"ticker":{"id":"65a75305-5c4b-41a4-9722-4cf946db2ae7","type":"BasicTicker"}},"id":"73982ae3-c32a-43ad-ac54-e7885f636857","type":"ColorBar"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"b3c38eb0-dad8-408d-9ca9-9729811deb2f","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"b98113f1-3850-42f9-a2d3-a760f1307f66","type":"Rect"},{"attributes":{"data_source":{"id":"392c190a-5fe4-4b66-8051-5c1df65d6894","type":"ColumnDataSource"},"glyph":{"id":"f40c851f-d5f8-48df-89be-8e8976016a2f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4fa4baf2-9e7e-4b89-8532-876c0050312e","type":"GlyphRenderer"}],"root_ids":["e5b84a79-aa7e-4600-aa01-8b49a92cfc5f"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"cdab669d-2348-4255-818b-079baecee7fb","elementid":"a24ec0c8-a79c-4a70-912d-f96deadd2aeb","modelid":"e5b84a79-aa7e-4600-aa01-8b49a92cfc5f"}];
                  
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