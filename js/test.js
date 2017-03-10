"use strict";

// WrappingText_Tests

var wrappingText_Tests = document.getElementById('WrappingText_Tests');
wrappingText_Tests.onclick = wrappText_Tests;

function wrappText_Tests() {
    console.log('тест h1, "Я хочу стать программистом" -> <h1>Я хочу стать программистом</h1>');
    var wrappTag = buildWrapper("h1");
    var result = wrappTag("Я хочу стать программистом");
    console.log( (result === "<h1>Я хочу стать программистом</h1>") ? 'пройден' : 'НЕ ПРОЙДЕН!' );

    console.log('тест span, "Я хочу стать разработчикам" -> <span>Я хочу стать разработчикам</span>');
    var wrappTag = buildWrapper("span");
    var result = wrappTag("Я хочу стать разработчикам");
    console.log( (result === "<span>Я хочу стать разработчикам</span>") ? 'пройден' : 'НЕ ПРОЙДЕН!' );

    console.log('тест a, "JavaScript" -> <a>JavaScript</a>');
    var wrappTag = buildWrapper("a");
    var result = wrappTag("JavaScript");
    console.log( (result === "<a>JavaScript</a>") ? 'пройден' : 'НЕ ПРОЙДЕН!' );

    console.log('тест p, "HTML + CSS + JavaScript" -> <p>HTML + CSS + JavaScript</p>');
    var wrappTag = buildWrapper("p");
    var result = wrappTag("HTML + CSS + JavaScript");
    console.log( (result === "<p>HTML + CSS + JavaScript</p>") ? 'пройден' : 'НЕ ПРОЙДЕН!' );

    console.log('тест div, "Я буду JS разработчикам" -> <div>Я буду JS разработчикам</div>');
    var wrappTag = buildWrapper("div");
    var result = wrappTag("Я буду JS разработчикам");
    console.log( (result === "<div>Я буду JS разработчикам</div>") ? 'пройден' : 'НЕ ПРОЙДЕН!' );    
}