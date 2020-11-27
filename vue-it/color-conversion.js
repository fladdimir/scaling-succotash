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