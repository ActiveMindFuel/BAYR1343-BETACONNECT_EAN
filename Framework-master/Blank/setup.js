(function(global) {
  
  // Creating our presentation and global namespace "app"
  global.app = new Presentation({
    type:'json'
  });
  
  // Initiate modules
  app.scroller = new Slidescroller();
  app.analytics.init({ version: '0.1' });
  
  // Initialize presentation
  app.init();
  
})(window);