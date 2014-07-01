

function crc32(s/*, polynomial = 0x04C11DB7, initialValue = 0xFFFFFFFF, finalXORValue = 0xFFFFFFFF*/) {
  s = String(s);
  var polynomial = arguments.length < 2 ? 0x04C11DB7 : (arguments[1] >>> 0);
  var initialValue = arguments.length < 3 ? 0xFFFFFFFF : (arguments[2] >>> 0);
  var finalXORValue = arguments.length < 4 ? 0xFFFFFFFF : (arguments[3] >>> 0);
  var table = new Array(256);
 
  var reverse = function (x, n) {
    var b = 0;
    while (--n >= 0) {
      b <<= 1;
      b |= x & 1;
      x >>>= 1;
    }
    return b;
  };
 
  var i = -1;
  while (++i < 256) {
    var g = reverse(i, 32);
    var j = -1;
    while (++j < 8) {
      g = ((g << 1) ^ (((g >>> 31) & 1) * polynomial)) >>> 0;
    }
    table[i] = reverse(g, 32);
  }
 
  var crc = initialValue;
  var length = s.length;
  var k = -1;
  while (++k < length) {
    var c = s.charCodeAt(k);
    if (c > 255) {
      throw new RangeError();
    }
    var index = (crc & 255) ^ c;
    crc = ((crc >>> 8) ^ table[index]) >>> 0;
  }
  return (crc ^ finalXORValue) >>> 0;
}