var app = new Vue({
	el: '#boodschappen',
	data: {
		search: '',
		items: [],
		groups: [],
		add: '',
		data: [],
		test: 'bla'
	},
	computed: {
		sortedItems: function (){
			self = this;
			items = this.getItems();
			self.items = this.sortItems();
			return self.items
		}
	},
	created: function() {
		return this.groupItems(this.sortedItems);
	},
	watch: {
		search: function() {
			this.filterItems();
		}
	},
	methods: {
		sortItems(items = this.items) {
			list = items
			list.sort((a, b) => (a.title > b.title) ? 1 : -1);
			return list;
		},
		getItems() {
			_data = '';
			self = this;
			$.ajax(
				{
					url: 'https://kevin.nodum.io/json/items',
					success: function(result) {
						self.items = result
					},
					async: false
				}
			);
		},
		filterItems() {
			self = this;

			items = this.items;
			newItems = [];
			items.forEach(function(item) {
				if(self.itemInItemlist(item.title)) {
					newItems.push({ title : item.title })
				}
			})
			newItems = self.sortItems(newItems);
			self.groupItems(newItems);
		},
		itemInItemlist(item) {
			if(item.toLowerCase().indexOf(self.search.toLowerCase()) !== -1) {
				return true
			}
			return false
		},
		groupItems(items) {
			self = this;
			self.groups = [];
			groups = [];

			items.forEach(function(item) {
				$firstLetterOfItem = item.title.slice(0,1);

				// Check if firstLetterOfItem exists in groups
				$indexOfLetterInGroups = groups.map(function(e) { return e.letter; } ).indexOf($firstLetterOfItem);
				if( $indexOfLetterInGroups > -1 ) {
					values = groups[$indexOfLetterInGroups].values;
					values.push(item.title);
				} else {
					groups.push({ letter : $firstLetterOfItem, values : [] });
					// Reset $indexOfLetterInGroups because now we have an index :)
					$indexOfLetterInGroups = groups.map(function(e) { return e.letter; } ).indexOf($firstLetterOfItem);
					values = [item.title]
				}


				groups[$indexOfLetterInGroups].values = values

			});
			this.groups = groups;
			return this.groups
		},
		addItemToList() {
			self = this;
			item = self.add;
			self.items.push({title : item});
			self.sortItems(self.items);
			self.groupItems(self.items);

			$.post('json/additem', {item : self.add}, function(data) {});

			self.add = '';
		}
	}
});
