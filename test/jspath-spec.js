(function($,_){
  	// RSpec/Bacon Style
	with (jqUnit) {
		
		//tests basic init functionality
		describe('jsPath', '_', {
			before: function(){
				var _this = this;
				// this is an assignment object so we cant mess
				// with the actual test suite
				this.colors = {};
				jQuery.ajax({
					type:'GET',
					dataType:'json',
					url:'data/colors.js',
					async:false,
					success:function(js){
						_this.colors = js;
					},
					error:function(){
						ok(false);
					}
				});
			}
		}).it('should be a function', function(){
			isType(_, Function);
		}).should('return the context when setting the context', function(){
			equals(_(this.a('colors'))[0], this.a('colors'));
		}).should('return the context called with no args', function(){
			equals(_()[0], this.a('colors'));
		}).it('can select the first level', function(){
			ok(_('.color').length == 1);
			ok(_('.*').length == 1);
		}).it('can select all items in an array', function(){
			ok(_('.color[*]').length == 7 );
			ok(_('.*[*]').length == 7 );
		}).it('can test items attributes', function(){
			ok(_('.color[?(@.$name == "red")]').length == 1 );
			ok(_('.color[?(@.$name == "red")].$value').get(0) == '#f00' );
			ok(_('.color[?(@.$name == "red")].$value')[0] == '#f00' );
			ok(_('.color[?(@.$name == "red")].$value').toString() == '#f00' );
			ok(_('.color[?(@.$name == "red")]').attr('$value') == '#f00' );
		}).pending('should do something awesome', function(){
			// It doesnt matter what you put here it wont be run until
			// you change this to an actual spec
			ok(false);
		});
		
		
	}
    
})(jQuery,jsPath);
