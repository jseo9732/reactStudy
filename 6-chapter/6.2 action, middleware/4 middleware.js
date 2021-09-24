const myMiddleware = store => next => action => next(action);

const myMiddleware = function(store) {
    return function(next) {
        return function(action) {
            return next(action);
        };
    };
};