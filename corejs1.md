JavaScript:

Basics

  # Data types Типы данных
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects
    Встроенные примитивные типы данных:
      string
      number [infinity, NaN] max = 2^53
      BigInt max > 2^53
      boolean
      undefined
      null typeof null === "object". Специальный примитив, используемый не
        только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов;
      Symbol Символ — это уникальное и иммутабельное примитивное значение,
        которое может быть использовано как ключ для свойства объекта

      object ключем может являться строка или символ. Значения могут быть любыми.

      Все примитивные типы данных кроме Объектов являются иммутабельными (значения нельзя изменить, а только перезаписать полным набором).

    Встроенные сложные типы данных:
      Функции
      Даты
      Массивы общие
      Массивы типизированные
      Коллекции
        Map
        Set
        WeakMaps
        WeakSets
          
  # Number methods
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
    Number.isNaN() -- проверяет является ли переданное значение NaN.
      Number.isNaN(NaN); // true
      Number.isNaN(Number.NaN); // true
      Number.isNaN(0 / 0) // true

      // При использовании глобальной функции isNaN() это всё будет true
      Number.isNaN('NaN');      // false
      Number.isNaN(undefined);  // false
      Number.isNaN({});         // false
      Number.isNaN('blabla');   // false

      // А это всё в любом случае будет false
      Number.isNaN(true);
      Number.isNaN(null);
      Number.isNaN(37);
      Number.isNaN('37');
      Number.isNaN('37.37');
      Number.isNaN('');
      Number.isNaN(' ');

    Number.isFinite() -- проверяет является ли значение конечным числом.
      Number.isFinite(0);         // true
      Number.isFinite(2e64);      // true
      Number.isFinite(Infinity);  // false
      Number.isFinite(NaN);       // false
      Number.isFinite(-Infinity); // false
      Number.isFinite('0');       // false

    Number.isSafeInteger() -- проверяет является ли значение целочисленным
      
    Number.isInteger() -- проверяет является ли значение целочисленным
      // простые значения
      Number.isInteger(0);         // true
      Number.isInteger(1);         // true
      Number.isInteger(-100000);   // true
      Number.isInteger(99999999999999999999999); // true
      // дробные
      Number.isInteger(0.1);       // false
      Number.isInteger(Math.PI);   // false
      // спец. значеня и несоответствующие типы данных
      Number.isInteger(NaN);       // false
      Number.isInteger(Infinity);  // false
      Number.isInteger(-Infinity); // false
      Number.isInteger('10');      // false
      Number.isInteger(true);      // false
      Number.isInteger(false);     // false
      Number.isInteger([1]);       // false
      // но!
      Number.isInteger(5.0);       // true
      Number.isInteger(5.000000000000001); // false
      Number.isInteger(5.0000000000000001); // true
    Number.parseFloat()

    Number.parseInt()
    // apply()
    // call()
    // toSource()
    Number.prototype.toString()
    Number.prototype.toExponential()
    Number.prototype.toFixed()
    Number.prototype.toLocaleString()
    Number.prototype.toPrecision()
    Number.prototype.valueOf()


  # String methods
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
    String.fromCharCode()
    String.fromCodePoint()
    String.raw()
    String.prototype[@@iterator]()
    String.prototype.at()
      Метод at() принимает целочисленное значение и возвращает новую строку, состоящую из одной единицы кода UTF-16, расположенной с указанным смещением. Этот метод допускает использование положительных и отрицательных целых чисел. Отрицательные целые числа отсчитываются от последнего символа строки.
      at(index)
      index -- Индекс (позиция) возвращаемого строкового символа. Поддерживает относительную индексацию с конца строки при передаче отрицательного индекса; т.е. если используется отрицательное число, возвращаемый символ будет найден путем обратного отсчета от конца строки.

    String.prototype.charAt()
      Метод charAt() возвращает указанный символ из строки.
      str.charAt(index)
      index -- Целое число от 0 до длины строки минус 1.

    String.prototype.charCodeAt()
      Метод charCodeAt() возвращает числовое значение Юникода для символа по указанному индексу (за исключением кодовых точек Юникода, больших 0x10000).
      str.charCodeAt(index)
      index -- Целое число больше, либо равное 0 и меньше длины строки; если параметр не является числом, он устанавливается в 0. 

    String.prototype.codePointAt()
    String.prototype.concat()
      Метод concat() объединяет строковые аргументы с вызывающей строкой и возвращает новую строку.

    String.prototype.endsWith()

    String.prototype.includes()
    String.prototype.indexOf()
    String.prototype.lastIndexOf()
    String.prototype.localeCompare()
    String.prototype.match()
    String.prototype.matchAll()
    String.prototype.normalize()
    String.prototype.padEnd()
    String.prototype.padStart()
    String.prototype.repeat()
    String.prototype.replace()
    String.prototype.replaceAll()
    String.prototype.search()
    String.prototype.slice()
    String.prototype.split()
    String.prototype.startsWith()
    String.prototype.substring()
    String.prototype.toLocaleLowerCase()
    String.prototype.toLocaleUpperCase()
    String.prototype.toLowerCase()
    String.prototype.toString()
    String.prototype.toUpperCase()
    String.prototype.trim()
    String.prototype.trimEnd()
    String.prototype.trimStart()
    String.prototype.valueOf()


  # let var const - differences
https://medium.com/nuances-of-programming/var-let-const-%D0%B2-%D1%87%D0%B5%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-dc6c3beb0b12
                |  var                | let               | const
-------------------------------------------------------------------------------
  Поднятие      | Поднимаются         | Поднимаются       | Поднимаются
-------------------------------------------------------------------------------
  Инициализация | Инициализируются    | Не                | Должно быть 
                | значением undefined | инициализируется  | инициализировано
                | при поднятии        | значение при      | в момент 
                |                     | поднятии          | обЪявления
-------------------------------------------------------------------------------
  Видимость     |  Голобальная        | Блочная           | Блочная
                |  Локальная (в рамках| { внутри фигурных}|  { внутри фигурных}
                |  функции)           |      {скобок}     |      {скобок}     
-------------------------------------------------------------------------------
  Объявление    | Могут повторно      | Нельзя повторно   | Нельзя повторно 
                | объявляться         | объявлять         | объявлять
-------------------------------------------------------------------------------
  Обновление    | Могут обновляться   | Могут обновляться | Нельзя обновить


  
  # ternary operator
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

  условие ? выражение1 : выражение2;
  условие ? (res = true, begin = 'Начинаем') : begin = 'Провал';
  
  # switch case - examples, where it can be useful
  https://learn.javascript.ru/switch
  switch (color) {
    case 'black':
      console.log("It is a pencil!!!");
      break;         <--- Если пропустить break то выполнение пойдет дальше без сравненеия.
    case 'red':
      console.log("Pen is red");
      break;
    case 'orange':   <--- группировка значений
    case 'yellow':
      console.log("Pen is yellow");
      break;
    default:
      console.log("Pen is blue");
  }
  
  # type conversions
  https://learn.javascript.ru/type-conversions
  https://learn.javascript.ru/object-toprimitive
    Преобразование объекта в примитив вызывается автоматически многими  встроенными функциями и операторами, которые ожидают примитив в качестве   значения.

    Существует всего 3 типа (хинта) для этого:

        "string" (для alert и других операций, которым нужна строка)
        "number" (для математических операций)
        "default" (для некоторых других операторов, обычно объекты реализуют его    как "number")

    Спецификация явно описывает для каждого оператора, какой ему следует    использовать хинт.

    Алгоритм преобразования таков:

        Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он   существует,
        В случае, если хинт равен "string"
            происходит попытка вызвать obj.toString() и obj.valueOf(), смотря   что   есть.
        В случае, если хинт равен "number" или "default"
            происходит попытка вызвать obj.valueOf() и obj.toString(), смотря   что   есть.

    Все эти методы должны возвращать примитив (если определены).

    На практике часто бывает достаточно реализовать только obj.toString() в     качестве универсального метода для преобразований к строке, который должен    возвращать удобочитаемое представление объекта для целей логирования или    отладки.

Advanced Expressions

  # Be able to discover cases of implicit data types conversion into


  # boolean, string, number
  https://learn.javascript.ru/type-conversions

  # Number 
  ======
  undefined     | NaN
  -------------------
  null          | 0
  -------------------
  true / false  | 1 / 0
  -------------------
  string        | Пробельные символы по краям обрезаются. Далее, если остаётся пустая строка, то
                | получаем 0, иначе из непустой строки «считывается» число. При ошибке результат NaN.
  
  # Boolean
  =======
  0, null, undefined, NaN, ""  | false
  -------------------------------------
  Любое другое значение        | true

  # String
  Преобразование происходит очевидным способом
  ===========================================
  true    | "true"
  false   | "false"
  null    | "null"
  NaN     | "NaN"
  -0      | "0"


  # Strict comparison
  Строгое равенство -- сравнивает величины не выполняя приведение типов. Если типы разные, то выражения не равны.
  
  # Object.is (optional)
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  Ведет себя как строгое равенство, но со специфической обработкой NaN, +0, -0.
  Возвращает false при сравнении -0 и +0
  Возвращает true  при сравнении NaN и NaN
  Object.is(-0, +0)      // false
  Object.is(NaN, NaN)    // true

  Примеры
  Object.is('foo', 'foo');     // true
  Object.is(window, window);   // true   

  Object.is('foo', 'bar');     // false
  Object.is([], []);           // false  

  var test = { a: 1 };
  Object.is(test, test);       // true   

  Object.is(null, null);       // true   

  // Специальные случаи
  Object.is(0, -0);            // false
  Object.is(-0, -0);           // true
  Object.is(NaN, 0/0);         // true
  
  # what is polyfills
  https://developer.mozilla.org/ru/docs/Glossary/Polyfill
  Полифил — это фрагмент кода, который позволяет использовать современную функциональность в более старых браузерах, которые не поддерживают ее по умолчанию.

Function

  # arrow func/ func expression/ func declaration
  https://behemothoz.gitbooks.io/js-learn/content/chapter1/raznitsa-mezhdu-function-expression-i-function-declaration.html

              Function declaration      | Function expression          | Arrow function
----------------------------------------------------------------------------------------------------
Вид         | function add(a, b) {      | const add = function(a, b) { | const add = (a, b) => {
            |   return a + b;           |   return a + b;              |   return a + b;
            | };                        | };                           | };
----------------------------------------------------------------------------------------------------
Создание    | Создаются до              | Создаются в процессе         | Создаются в процессе
            | выполнения кода           | выполнения выражения         | выполнения выражения 
----------------------------------------------------------------------------------------------------
Вызов       | Можно вызвать до          | Нельзя вызвать до объявления |
            | объявления                |                              |
----------------------------------------------------------------------------------------------------
Поднятие    | Поднимаются               | Не поднимаются               | Не поднимаются          
----------------------------------------------------------------------------------------------------
Контекст    | this динамическое в зависимости от контекста исполнения. | this всегда равен значению
 this       | Обычный вызов -- this = Window. Вызов метода --          | this внешней функции.
            | this = instance объекта. Косвенный вызов (call, apply)   | Функцияя не создает свой
            | -- this = первому переданному аргументу.                 | контекст исполнения,
            | myFunc.call(thisVal, arg1, ..., argN)                    | она использует внешний.
            | myFunc.apply(thisVal, [arg1, ..., argN])                 |
            | Вызов с помощью конструктора используя ключевое слово    |
            | new, значение this эквивалентно новосозданной сущности.  |
----------------------------------------------------------------------------------------------------
Создание    | Может легко создавать объекты с помощью вызова с исполь- | Не могут создать объект.
объектов    | зованием ключевого слова new:                            | Т.к. не имеют своего this.
            | const redCar = new Car('red');                           | При использовании new будет
            | redCar instanceof Car; // true                           | выброшено исключение.
----------------------------------------------------------------------------------------------------
arguments   | Существует массивоподобный объект arguments. Содержащий  | Отсутствует специальное 
            | список аргументов, переданных в функцию.                 | слово arguments. Массив 
            |                                                          | arguments будет браться из 
            |                                                          | внешней функции.
----------------------------------------------------------------------------------------------------
return      | ОБЯЗАТЕЛЬНО!!!                                           | Если только 1 инструкция 
            |                                                          | и нет {} скобок, то выражение
            |                                                          | возвращается автоматически
----------------------------------------------------------------------------------------------------


Date & time (optional)

  # Date object
  
  # Date methods, props

Objects Built-in methods.

  # Know how to use built-in methods
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
  Object.assign()
  Object.create()
  Object.defineProperties()
  Object.defineProperty()
  Object.entries()
  Object.freeze()
  Object.fromEntries()
  Object.getOwnPropertyDescriptor()
  Object.getOwnPropertyDescriptors()
  Object.getOwnPropertyNames()
  Object.getOwnPropertySymbols()
  Object.getPrototypeOf()
  Object.hasOwn()
  Object.prototype.hasOwnProperty()
  Object.is()
  Object.isExtensible()
  Object.isFrozen()
  Object.prototype.isPrototypeOf()
  Object.isSealed()
  Object.keys()
  Object.preventExtensions()
  Object.prototype.propertyIsEnumerable()
  Object.seal()
  Object.setPrototypeOf()
  Object.prototype.toLocaleString()
  Object.prototype.toString()
  Object.prototype.valueOf()
  Object.values()

Arrays Built-in methods
  Array.isArray()
  Array.from()
  Array.of()
  Array.prototype.at()
  Array.prototype.concat()
  Array.prototype.copyWithin()
  Array.prototype.entries()
  Array.prototype.every()
  Array.prototype.fill()
  Array.prototype.filter()
  Array.prototype.find()
  Array.prototype.findIndex()
  Array.prototype.findLast()
  Array.prototype.findLastIndex()
  Array.prototype.flat()
  Array.prototype.flatMap()
  Array.prototype.forEach()
  Array.prototype.includes()
  Array.prototype.indexOf()
  Array.prototype.join()
  Array.prototype.keys()
  Array.prototype.lastIndexOf()
  Array.prototype.map()
  Array.prototype.pop()
  Array.prototype.push()
  Array.prototype.reduce()
  Array.prototype.reduceRight()
  Array.prototype.reverse()
  Array.prototype.shift()
  Array.prototype.slice()
  Array.prototype.some()
  Array.prototype.sort()
  Array.prototype.splice()
  Array.prototype.toLocaleString()
  Array.prototype.toString()
  Array.prototype.unshift()
  Array.prototype.values()



  # Know how to copy array
  https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
  
  # Know how to modify array
  https://bobbyhadz.com/blog/javascript-modify-all-array-elements

Arrays Iterating, Sorting, Filtering

  # Know how to sort Array
  arr.sort((a, b) => a - b);
  arr.sort(compare)
  compare -- function;
  
  # Know several method how to iterate Array elements
  Циклы for, while
  Встроенные методы .forEach, .map, .filter, .reduce, .every, .some

  # Loops
    for loop
    for (let i = 0; i < 5; i++) {
      code;
    }

    while loop
    let i = 0;
    while (i < 5) {
      code;
      i++;
    }

    do while loop
    let i = 0;
    do {
      code;
      i++;
    } while(i < 5)







JavaScript in Browser:

Global object window

  # Document

Events Basics

  # Event Phases
  
  # Event Listeners
  
  # DOM Events
  
  # Know basic Event types
  
  # Mouse / Keyboard Events
  
  # Form / Input Events

Timers

  # setTimeout
  
  # setInterval

Web Storage API & cookies

  # LocalStorage
  
  # SessionStorage
