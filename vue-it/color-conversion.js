function toHsl(r, g, b) {
    r = parseFloat(r);
    g = parseFloat(g);
    b = parseFloat(b);
    if (r < 0) r = 0;
    if (g < 0) g = 0;
    if (b < 0) b = 0;
    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;
    hex = r * 65536 + g * 256 + b;
    hex = hex.toString(16, 6);
    len = hex.length;
    if (len < 6)
        for (i = 0; i < 6 - len; i++)
            hex = '0' + hex;
    r /= 255;
    g /= 255;
    b /= 255;
    M = Math.max(r, g, b);
    m = Math.min(r, g, b);
    d = M - m;
    if (d == 0) h = 0;
    else if (M == r) h = ((g - b) / d) % 6;
    else if (M == g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
    l = (M + m) / 2;
    if (d == 0)
        s = 0;
    else
        s = d / (1 - Math.abs(2 * l - 1));
    s *= 100;
    l *= 100;
    h = h.toFixed(0);
    s = s.toFixed(1);
    l = l.toFixed(1);
    return [h, s, l];
}


function toRgb(h, s, l) {
    h = parseFloat(h);
    s = parseFloat(s);
    l = parseFloat(l);
    if (h < 0) h = 0;
    if (s < 0) s = 0;
    if (l < 0) l = 0;
    if (h >= 360) h = 359;
    if (s > 100) s = 100;
    if (l > 100) l = 100;
    s /= 100;
    l /= 100;
    C = (1 - Math.abs(2 * l - 1)) * s;
    hh = h / 60;
    X = C * (1 - Math.abs(hh % 2 - 1));
    r = g = b = 0;
    if (hh >= 0 && hh < 1) {
        r = C;
        g = X;
    }
    else if (hh >= 1 && hh < 2) {
        r = X;
        g = C;
    }
    else if (hh >= 2 && hh < 3) {
        g = C;
        b = X;
    }
    else if (hh >= 3 && hh < 4) {
        g = X;
        b = C;
    }
    else if (hh >= 4 && hh < 5) {
        r = X;
        b = C;
    }
    else {
        r = C;
        b = X;
    }
    m = l - C / 2;
    r += m;
    g += m;
    b += m;
    r *= 255.0;
    g *= 255.0;
    b *= 255.0;
    r = Math.round(r);
    g = Math.round(g);
    b = Math.round(b);
    return [r, g, b];
}