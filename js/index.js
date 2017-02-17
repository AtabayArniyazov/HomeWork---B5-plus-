"use strict";

function buildWrapper(argument) {
	var strTag1 = String("<" + argument + ">"),
		strTag2 = String("</" + argument + ">");

	return function (text) {
		return console.log(String(strTag1 + text + strTag2));
	}
}

var wrapH1 = buildWrapper("h1"),
	wrapP = buildWrapper("p"),
	wrapDiv = buildWrapper("div");

wrapH1("СТИХИ");
wrapP("Однажды в студёную зимнюю пору");
wrapDiv("Privet Medved");