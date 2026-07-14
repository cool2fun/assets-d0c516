// Firebase stub for offline play
var firebase = {
    initializeApp: function() {},
    auth: function() { return { onAuthStateChanged: function(cb) { cb(null); }, signInAnonymously: function() { return Promise.resolve(); } }; },
    database: function() { return { ref: function() { return { on: function() {}, set: function() { return Promise.resolve(); }, once: function() { return Promise.resolve({ val: function() { return null; } }); } }; } }; }
};
