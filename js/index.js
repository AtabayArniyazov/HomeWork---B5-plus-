"use strict";

function buildWrapper(tagName) {
	var tagOpen = String("<" + tagName + ">"),
		tagClose = String("</" + tagName + ">");

	return function (text) {
		return tagOpen + text + tagClose;
	}
}