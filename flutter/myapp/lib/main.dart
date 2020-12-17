// https://github.com/mchome/flutter_colorpicker

import 'package:flutter/material.dart';
import 'package:flutter_colorpicker/flutter_colorpicker.dart';

import 'color_requests.dart';

void main() {
  runApp(MaterialApp(home: MyApp()));
}

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Color currentColor = Colors.yellowAccent;

  @override
  void initState() {
    super.initState();
    fetchColor().then((value) => setState(() => currentColor = value));
  }

  void changeColor(Color color) {
    setState(() => currentColor = color);
    saveColor(currentColor);
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SingleChildScrollView(
        child: SlidePicker(
          pickerColor: currentColor,
          onColorChanged: changeColor,
          paletteType: PaletteType.rgb,
          enableAlpha: false,
          displayThumbColor: true,
          showLabel: false,
          showIndicator: true,
        ),
      ),
    );
  }
}
