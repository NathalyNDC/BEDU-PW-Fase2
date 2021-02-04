function addTabs(node) {
    var tabs = Array.from(node.children).map(function(node) {
      var newButton = document.createElement("button");
      newButton.style = "background-color: white; border-radius: 8px;";
      newButton.textContent = node.getAttribute("data-tabname");
  
      var tab = {
        node: node,
        newButton: newButton
      };
  
      newButton.onclick = function() {
        return selectTab(tab);
      }
      return tab;
    });
  
    var newTabs = document.createElement("div");
  
    for (var i = 0; i < tabs.length; i++) {
        newTabs.appendChild(tabs[i].newButton);
    }
  
    node.insertBefore(newTabs, node.firstChild);
  
    function selectTab(selectedTab) {
      for (var i = 0; i < tabs.length; i++) {
        var selected = tabs[i] == selectedTab;
        tabs[i].node.style.display = selected ? "" : "none";
        tabs[i].newButton.style = selected ? "color: #2ec9c7; background-color: #1a5c5b;" : "";
      }
    }
    selectTab(tabs[0]);
  }
  
  addTabs(document.querySelector("#tab-panel"));