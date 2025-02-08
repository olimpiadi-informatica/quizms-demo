# ASY Library

Library of utility functions for [Asymptote](https://asymptote.sourceforge.io), designed to be included as git submodule in Asymptote-based projects.

### Pictures

Headers with a single `picture drawing(<params>)` function, producing a parametric picture. They can be used in external asymptote files through code such as:

```
access "path/to/asy-library/mypicture.asy" as mypicture;

add(shift(x, y) * mypicture.drawing(params...));
```

###  Structures

More complex tools, for drawing structured objects. It includes:

- `graph.asy` for drawing graphs;
- `layout.asy` for auto-placement of elements in layouts and drawing block-style programs.

### Tools

Helper scripts that can be useful in expanding the library or otherwise manipulating asymptote files.

#### SVG to ASY

Converts an SVG file into Asymptote code, to allow parametrization of existing third-party pictures. Picture must be already in SVG format: you may vectorize a bitmap through tools such as [svgtrace](https://svgtrace.com/png-to-svg). It is **strongly recommended** to tweak the SVG file with [Inkscape](https://inkscape.org) first, in particular using its "path > simplify" tool to reduce the number of points in the SVG hence the size of the translated code. Then you can convert it to asymptote code through:

```
tools/svg_to_asy.py -c 100 path/to/file.svg > path/to/file.asy
```
