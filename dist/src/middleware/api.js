'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var BASE_URL = '';

function callApi(endpoint, authenticated) {

    var token = localStorage.getItem('id_token') || null;
    var config = {};

    if (authenticated) {
        if (token) {
            config = {
                headers: { 'x-access-token': 'Bearer ' + token }
            };
        } else {
            throw "No token saved!";
        }
    }

    return fetch(BASE_URL + endpoint, config).then(function (response) {
        return response.text().then(function (text) {
            return { text: text, response: response };
        });
    }).then(function (_ref) {
        var text = _ref.text,
            response = _ref.response;

        if (!response.ok) {
            return Promise.reject(text);
        }

        return text;
    }).catch(function (err) {
        return console.log(err);
    });
}

var CALL_API = exports.CALL_API = Symbol('Call API');

exports.default = function (store) {
    return function (next) {
        return function (action) {

            var callAPI = action[CALL_API];

            // So the middleware doesn't get applied to every single action
            if (typeof callAPI === 'undefined') {
                return next(action);
            }

            var endpoint = callAPI.endpoint,
                types = callAPI.types,
                authenticated = callAPI.authenticated;

            var _types = _slicedToArray(types, 3),
                requestType = _types[0],
                successType = _types[1],
                errorType = _types[2];

            // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes


            return callApi(endpoint, authenticated).then(function (response) {
                return next({
                    response: response,
                    authenticated: authenticated,
                    type: successType
                });
            }, function (error) {
                return next({
                    error: error.message || 'There was an error.',
                    type: errorType
                });
            });
        };
    };
};
//# sourceMappingURL=api.js.map