(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _constrants = require("./constrants.js");

var API = {
	fetch: function fetch(path) {
		return new Promise(function (resolve, reject) {
			var uri = _constrants.BASE_URI + "/" + path;
			var request = new XMLHttpRequest();
			request.open("GET", uri, true);
			request.onload = function () {
				if (request.status >= 200 && request.status < 400) {
					resolve(JSON.parse(request.response));
				}
			};
			request.onerror = function () {
				reject(new Error("Something went wrong"));
			};
			request.send();
		});
	}
};

exports.default = API;

},{"./constrants.js":3}],2:[function(require,module,exports){
"use strict";

var _post = require("./post");

var _post2 = _interopRequireDefault(_post);

var _user = require("./user");

var _user2 = _interopRequireDefault(_user);

var _ui = require("./ui");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_post2.default.findAll().then(_ui2.default.renderPosts).catch(function (error) {
	console.log(error);
});
_user2.default.findRecent().then(_ui2.default.renderUsers).catch(function (error) {
	console.log(error);
});
_user2.default;

},{"./post":4,"./ui":5,"./user":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE_URI = 'http://localhost:3000';
exports.BASE_URI = BASE_URI;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = {
	findAll: function findAll() {
		return _api2.default.fetch("posts");
	}
};
exports.default = Post;

},{"./api":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ui = {
  renderPosts: function renderPosts(posts) {
    var elements = posts.map(function (post) {
      var title = post.title;
      var lastReply = post.lastReply;

      return articleTemplate(title, lastReply);
    });
    var target = document.querySelector(".container");
    target.innerHTML = elements.join("");
  },
  renderUsers: function renderUsers(users) {
    var elements = users.map(function (users) {
      var name = users.name;
      var avatar = users.avatar;

      return userTemplate(name, avatar);
    });
    var target = document.querySelector(".sidebar-content");
    target.innerHTML = elements.join("");
  }
};
function userTemplate(name, avatar) {
  var template = "\n    <div class='active-avatar'>\n      <img width=\"54\" src=\"assets/images/" + avatar + "\">\n      <h5 class='post-author'>" + name + "</h5>\n    </div>\n    ";
  return template;
}
function articleTemplate(title, lastReply) {
  var template = "\n   \t\t\t\t<article class='post'>\n            <h2 class='post-title'>\n              " + title + "\n            </h2>\n            <p class='post-meta'>\n              " + lastReply + "\n            </p>\n          </article>";
  return template;
}
exports.default = ui;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = {
	findRecent: function findRecent() {
		return _api2.default.fetch("activeUsers");
	}
};
exports.default = User;

},{"./api":1}]},{},[1,2,3,4,5,6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcGkuanMiLCJqcy9hcHAuanMiLCJqcy9jb25zdHJhbnRzLmpzIiwianMvcG9zdC5qcyIsImpzL3VpLmpzIiwianMvdXNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOztBQUNBLElBQUksTUFBTTtBQUNULE1BRFMsaUJBQ0gsSUFERyxFQUNFO0FBQ1YsU0FBTyxJQUFJLE9BQUosQ0FBZSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQzFDLE9BQUksbUNBQXFCLElBQXpCO0FBQ0EsT0FBSSxVQUFVLElBQUksY0FBSixFQUFkO0FBQ0EsV0FBUSxJQUFSLENBQWEsS0FBYixFQUFvQixHQUFwQixFQUF5QixJQUF6QjtBQUNBLFdBQVEsTUFBUixHQUFpQixZQUFNO0FBQ3RCLFFBQUksUUFBUSxNQUFSLElBQWtCLEdBQWxCLElBQXlCLFFBQVEsTUFBUixHQUFnQixHQUE3QyxFQUFpRDtBQUNoRCxhQUFTLEtBQUssS0FBTCxDQUFXLFFBQVEsUUFBbkIsQ0FBVDtBQUNBO0FBQ0QsSUFKRDtBQUtBLFdBQVEsT0FBUixHQUFrQixZQUFNO0FBQ3ZCLFdBQU8sSUFBSSxLQUFKLENBQVUsc0JBQVYsQ0FBUDtBQUNBLElBRkQ7QUFHQSxXQUFRLElBQVI7QUFDQSxHQWJNLENBQVA7QUFjQTtBQWhCUSxDQUFWOztrQkFtQmUsRzs7Ozs7QUNwQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFDQSxlQUFLLE9BQUwsR0FDRSxJQURGLENBQ08sYUFBRyxXQURWLEVBRUUsS0FGRixDQUVTLFVBQUMsS0FBRCxFQUFXO0FBQ2xCLFNBQVEsR0FBUixDQUFZLEtBQVo7QUFDQSxDQUpGO0FBS0EsZUFBSyxVQUFMLEdBQ0UsSUFERixDQUNPLGFBQUcsV0FEVixFQUVFLEtBRkYsQ0FFUyxVQUFDLEtBQUQsRUFBVztBQUNsQixTQUFRLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsQ0FKRjtBQUtBOzs7Ozs7OztBQ2JBLElBQU0sV0FBVyx1QkFBakI7UUFDUyxRLEdBQUEsUTs7Ozs7Ozs7O0FDRFQ7Ozs7OztBQUNBLElBQUksT0FBTztBQUNWLFFBRFUscUJBQ0Q7QUFDUixTQUFPLGNBQUksS0FBSixDQUFVLE9BQVYsQ0FBUDtBQUNBO0FBSFMsQ0FBWDtrQkFLZSxJOzs7Ozs7OztBQ05mLElBQUksS0FBSztBQUNSLGFBRFEsdUJBQ0ksS0FESixFQUNVO0FBQ2pCLFFBQUksV0FBVyxNQUFNLEdBQU4sQ0FBVyxVQUFDLElBQUQsRUFBVTtBQUFBLFVBQzFCLEtBRDBCLEdBQ0wsSUFESyxDQUMxQixLQUQwQjtBQUFBLFVBQ25CLFNBRG1CLEdBQ0wsSUFESyxDQUNuQixTQURtQjs7QUFFaEMsYUFBTyxnQkFBZ0IsS0FBaEIsRUFBdUIsU0FBdkIsQ0FBUDtBQUNELEtBSFksQ0FBZjtBQUlFLFFBQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjtBQUNBLFdBQU8sU0FBUCxHQUFtQixTQUFTLElBQVQsQ0FBYyxFQUFkLENBQW5CO0FBQ0YsR0FSTztBQVNQLGFBVE8sdUJBU0ssS0FUTCxFQVNXO0FBQ2hCLFFBQUksV0FBVyxNQUFNLEdBQU4sQ0FBWSxVQUFDLEtBQUQsRUFBVztBQUFBLFVBQzlCLElBRDhCLEdBQ2QsS0FEYyxDQUM5QixJQUQ4QjtBQUFBLFVBQ3hCLE1BRHdCLEdBQ2QsS0FEYyxDQUN4QixNQUR3Qjs7QUFFcEMsYUFBTyxhQUFhLElBQWIsRUFBbUIsTUFBbkIsQ0FBUDtBQUNELEtBSGMsQ0FBZjtBQUlBLFFBQUksU0FBUyxTQUFTLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWI7QUFDQSxXQUFPLFNBQVAsR0FBbUIsU0FBUyxJQUFULENBQWMsRUFBZCxDQUFuQjtBQUNEO0FBaEJNLENBQVQ7QUFrQkEsU0FBUyxZQUFULENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLEVBQW1DO0FBQ2pDLE1BQUksK0ZBRXFDLE1BRnJDLDJDQUcwQixJQUgxQiw0QkFBSjtBQU1BLFNBQU8sUUFBUDtBQUNEO0FBQ0QsU0FBUyxlQUFULENBQXlCLEtBQXpCLEVBQWdDLFNBQWhDLEVBQTBDO0FBQ3hDLE1BQUksd0dBR1UsS0FIViw4RUFNVSxTQU5WLDZDQUFKO0FBU0EsU0FBTyxRQUFQO0FBQ0Q7a0JBQ2MsRTs7Ozs7Ozs7O0FDdkNmOzs7Ozs7QUFDQSxJQUFJLE9BQU87QUFDVixXQURVLHdCQUNFO0FBQ1gsU0FBTyxjQUFJLEtBQUosQ0FBVSxhQUFWLENBQVA7QUFDQTtBQUhTLENBQVg7a0JBS2UsSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBCQVNFX1VSSSB9IGZyb20gXCIuL2NvbnN0cmFudHMuanNcIjtcbmxldCBBUEkgPSB7XG5cdGZldGNoKHBhdGgpe1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSggICAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRsZXQgdXJpID0gYCR7QkFTRV9VUkl9LyR7cGF0aH1gO1xuXHRcdFx0bGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCB1cmksIHRydWUpO1xuXHRcdFx0cmVxdWVzdC5vbmxvYWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA+PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgPDQwMCl7XG5cdFx0XHRcdFx0cmVzb2x2ZSAoSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlKSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRyZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG5cdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXF1ZXN0LnNlbmQoKTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUEk7IiwiaW1wb3J0IFBvc3QgZnJvbSBcIi4vcG9zdFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHVpIGZyb20gXCIuL3VpXCI7XG5Qb3N0LmZpbmRBbGwoKVxuXHQudGhlbih1aS5yZW5kZXJQb3N0cylcblx0LmNhdGNoKCAoZXJyb3IpID0+IHtcblx0XHRjb25zb2xlLmxvZyhlcnJvcikgXG5cdH0pO1xuVXNlci5maW5kUmVjZW50KClcblx0LnRoZW4odWkucmVuZGVyVXNlcnMpXG5cdC5jYXRjaCggKGVycm9yKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHR9KTtcblVzZXIiLCJjb25zdCBCQVNFX1VSSSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuZXhwb3J0IHsgQkFTRV9VUkkgfTsiLCJpbXBvcnQgQVBJIGZyb20gXCIuL2FwaVwiO1xubGV0IFBvc3QgPSB7XG5cdGZpbmRBbGwoKXtcblx0XHRyZXR1cm4gQVBJLmZldGNoKFwicG9zdHNcIik7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7IiwibGV0IHVpID0ge1xuXHRyZW5kZXJQb3N0cyhwb3N0cyl7XG5cdFx0bGV0IGVsZW1lbnRzID0gcG9zdHMubWFwKCAocG9zdCkgPT4ge1xuICAgICAgbGV0IHsgdGl0bGUsIGxhc3RSZXBseSB9ID0gcG9zdDtcbiAgICAgIHJldHVybiBhcnRpY2xlVGVtcGxhdGUodGl0bGUsIGxhc3RSZXBseSk7XG4gICAgfSk7XG4gICAgbGV0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgIHRhcmdldC5pbm5lckhUTUwgPSBlbGVtZW50cy5qb2luKFwiXCIpO1xuXHR9LFxuICByZW5kZXJVc2Vycyh1c2Vycyl7XG4gICAgbGV0IGVsZW1lbnRzID0gdXNlcnMubWFwICggKHVzZXJzKSA9PiB7XG4gICAgICBsZXQgeyBuYW1lLCBhdmF0YXJ9ID0gdXNlcnM7XG4gICAgICByZXR1cm4gdXNlclRlbXBsYXRlKG5hbWUsIGF2YXRhcilcbiAgICB9KTtcbiAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyLWNvbnRlbnRcIik7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9IGVsZW1lbnRzLmpvaW4oXCJcIik7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZXJUZW1wbGF0ZShuYW1lLCBhdmF0YXIpe1xuICBsZXQgdGVtcGxhdGUgPSBgXG4gICAgPGRpdiBjbGFzcz0nYWN0aXZlLWF2YXRhcic+XG4gICAgICA8aW1nIHdpZHRoPVwiNTRcIiBzcmM9XCJhc3NldHMvaW1hZ2VzLyR7YXZhdGFyfVwiPlxuICAgICAgPGg1IGNsYXNzPSdwb3N0LWF1dGhvcic+JHtuYW1lfTwvaDU+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgcmV0dXJuIHRlbXBsYXRlO1xufVxuZnVuY3Rpb24gYXJ0aWNsZVRlbXBsYXRlKHRpdGxlLCBsYXN0UmVwbHkpe1xuICBsZXQgdGVtcGxhdGUgPSBgXG4gICBcdFx0XHRcdDxhcnRpY2xlIGNsYXNzPSdwb3N0Jz5cbiAgICAgICAgICAgIDxoMiBjbGFzcz0ncG9zdC10aXRsZSc+XG4gICAgICAgICAgICAgICR7dGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9J3Bvc3QtbWV0YSc+XG4gICAgICAgICAgICAgICR7bGFzdFJlcGx5fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYXJ0aWNsZT5gO1xuICByZXR1cm4gdGVtcGxhdGU7XG59XG5leHBvcnQgZGVmYXVsdCB1aTsiLCJpbXBvcnQgQVBJIGZyb20gXCIuL2FwaVwiO1xubGV0IFVzZXIgPSB7XG5cdGZpbmRSZWNlbnQoKXtcblx0XHRyZXR1cm4gQVBJLmZldGNoKFwiYWN0aXZlVXNlcnNcIik7XG5cdH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il19
