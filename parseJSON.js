var parse = function (wad) {
    var parsed = JSON.parse(wad, function(key, value) {
        if (typeof value === 'string') {
            var d = /\/Date\((\d*)\)\//.exec(value);
            return (d) ? new Date(+d[1]) : value;
        }
        return value;
    });
    return parsed;
};

module.exports = {
    parse : parse
};