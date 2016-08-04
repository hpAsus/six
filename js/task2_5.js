/*
5*. Create a TreeView component
* Initially only the top items must be visible
* On item click
* If its children are hidden (collapsed), they must be made visible (expanded)
* If its children are visible (expanded), they must be made hidden (collapsed)
* Research about events


see example in "http://i.imgur.com/cqaTqTC.png"
*/

(function () {

    var events = ['expand', 'collapse'];
    var menuId = 'treeview';
    var itemsLi = '#' + menuId + ' > li';
    var menu = document.getElementById(menuId);
    var items = menu.getElementsByTagName('li');

    // closing submenus on start
    _.forEach(items, function (item) {
        var children = item.children;
        if (children.length) {
            children[0].className = 'hide';
            console.log(children[0]);
        }

        item.style.cursor = 'pointer';

        item.addEventListener('click', function(ev) {
            var child = this.children[0];

            if (this.children.length) {
                //console.log(child);
                child.classList.toggle('hide');
            }
        });
    });

})();

