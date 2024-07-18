let value = 0;
Object.defineProperty(window, 'myProperty', {
    get: function() {
        return value;
    },
    set: function(newValue) {
        value = newValue;
        fastCheck();
    }
});
