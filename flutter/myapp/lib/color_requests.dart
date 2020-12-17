import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

const int MAX = 255;

Future<Color> fetchColor() async {
  var response = await http.get('http://localhost:8080/rgbColors/1');
  if (response.statusCode != 200) {
    throw Exception(response.toString());
  }
  var body = jsonDecode(response.body) as Map<String, dynamic>;
  List<int> colors = [body['r'], body['g'], body['b']];
  colors = colors.map((e) => (e / body['max'] * MAX).round()).toList();
  var color = Color.fromARGB(MAX, colors[0], colors[1], colors[2]);
  return color;
}

Future<http.Response> saveColor(Color color) {
  String body = jsonEncode(
      {'id': 1, 'max': MAX, 'r': color.red, 'g': color.green, 'b': color.blue});
  return http.put('http://localhost:8080/rgbColors/1',
      body: body, headers: {"Content-Type": ContentType.json.toString()});
}
