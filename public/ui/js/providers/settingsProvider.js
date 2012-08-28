/**
 * Vash - Dashboard for your media
 *
 * https://github.com/dawnerd/Vash
 *
 * Loads settings.
 */

(function(){
  var Settings = function() {
    this.settings = {};

    this.load();

    return this;
  };

  Settings.prototype.get = function(prop) {
    if(typeof this.settings[prop] === 'undefined') {
      return null;
    }
    
    return this.settings[prop];
  };

  Settings.prototype.load = function() {
    $.ajax('/settings.json', {
      dataType: 'json'
    }).done($.proxy(this.parseConfig, this));

    return this;
  };

  Settings.prototype.parseConfig = function(data) {
    this.settings = data;
    return this;
  };

  this.vash.settings = new Settings();
}());