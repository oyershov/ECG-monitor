// Object.values was introduced in ES2017
// compensate for it if it's not already there
function extObjectValues(obj) {
    if (typeof obj.values === 'undefined') {
        return Object.keys(obj).map(key => obj[key])
    }
    
    return obj.values();
}