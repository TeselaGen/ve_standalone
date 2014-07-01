(function(){
if(typeof Backbone.UI !== 'object') Backbone.UI = {};
if(typeof Backbone.UI.menu !== 'object') Backbone.UI.menu = {};


var Menu = Backbone.UI.menu.Menu;

var MenuInitializer = Menu.prototype.initialize;









var ContextMenu = Backbone.UI.menu.ContextMenu = Menu.extend({

	items: null, // []

	posX: 0,
	posY: 0,

	initialize: function(elements) {
		
		// this.menuBarItem = elements.menuBarItem;

		MenuInitializer.call(this, elements);

		this.$el.addClass('ui-context-menu');

		this.on('hide', onContextMenuHide.bind(this));
	},


});


function onContextMenuHide() {
	this.remove();
}




























































})();