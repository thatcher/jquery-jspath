(function($,_){
  	// RSpec/Bacon Style
	with (jqUnit) {
		
        
        
		describe('[jQuery-jsPath] (jsPath Core)', '| jsPath |', {
            
            before: function(){
                //no setup for this portion of the spec
			}
            
        }).should('be a function', function(){
            
			defined(window, 'jsPath', 'jsPath is defined');
            
        });
        
        
        
		describe('[jQuery-jsPath] (jsPath Core)', '| constructor |', {
            
			before: function(){
				var _this = this;
				// this is an assignment object so we cant mess
				// with the actual test suite
				this.colors = {};
				jQuery.ajax({
					type:'GET',
					dataType:'json',
					url:'data/colors.json',
					async:false,
					success:function(js){
						_this.colors = js;
					},
					error:function(){
						ok(false);
					}
				});
			}
		}).should('return the context when setting the context', function(){
            
			equals(_(this.a('colors'))[0], this.a('colors'), 'the first item is the context');
			equals(_(this.a('colors')).length, 1, 'context length should be 1');
            
		}).should('return the context called with no args', function(){
            
			equals(_()[0], this.a('colors'), 'the context is stored');
			equals(_().length, 1, 'the stored context is the correct length');
            
		});
        
        
        
        describe('[jQuery-jsPath] (jsPath Core)', '| selector |', {
            
			before: function(){
				var _this = this;
				// this is an assignment object so we cant mess
				// with the actual test suite
				this.colors = {};
				jQuery.ajax({
					type:'GET',
					dataType:'json',
					url:'data/colors.json',
					async:false,
					success:function(js){
						_this.colors = js;
					},
					error:function(){
						ok(false);
					}
				});
                _(this.colors);
			}
            
		}).should('select the first level with .* or .name', function(){
            
			equals(_('.color').length, 1, 'using .name ');
			equals(_('.*').length, 1, 'using .* ');
            
		}).should('select all items in an array with [*]', function(){
            
			equals(_('.color[*]').length,  7, 'using .name[*] ');
			equals(_('.*[*]').length, 7, 'using .*[*]');
            
		}).should('select objects with specific properties', function(){
            
			equals(_('.color[?(@.$name == "red")]').length, 1, 'using .color[?(@.$name == "red")]' );
			equals(_('.color[?(@.$name == "red")].$value').get(0), '#f00', 'using .color[?(@.$name == "red")].$value' );
			equals(_('.color[?(@.$name == "red")].$value')[0], '#f00', 'using .color[?(@.$name == "red")].$value' );
			equals(_('.color[?(@.$name == "red")].$value').toString(), '#f00', 'using .color[?(@.$name == "red")].$value' );
			equals(_('.color[?(@.$name == "red")]').attr('$value'), '#f00', '.color[?(@.$name == "red")]' );
            
		});
        
        
        
        
        describe('[jQuery-jsPath] (jsPath Core)', '| collections |', {
            
			before: function(){
				var _this = this;
				// this is an assignment object so we cant mess
				// with the actual test suite
				this.colors = {};
				jQuery.ajax({
					type:'GET',
					dataType:'json',
					url:'data/colors.json',
					async:false,
					success:function(js){
						_this.colors = js;
					},
					error:function(){
						ok(false);
					}
				});
                _(this.colors);
			}
            
		}).should('iterate items with "each"', function(){
            
            var expectedIndex = 0
			_('.color[*]').each(function(index, value){
               equals(index, expectedIndex, 'The correct index is passed.');
               ok(this.$name, 'item has a $name');
               ok(this.$value, 'item has a $value');
               expectedIndex++
            });
            
		}).pending('map items with "map"', function(){
            
		}).pending('extend', function(){
            
		}).pending('index', function(){
            
		}).pending('setArray', function(){
            
		}).pending('get', function(){
            
		}).pending('size', function(){
            
		}).pending('eq', function(){
            
		}).pending('slice', function(){
            
		}).pending('andSelf', function(){
            
		}).pending('filter', function(){
            
		}).pending('not', function(){
            
		}).pending('is', function(){
            
		}).pending('add', function(){
            
		}).pending('pushStack', function(){
            
		}).pending('end', function(){
            
		}).pending('attr', function(){
            
		});
		
		
	}
    
})(jQuery,jsPath);
