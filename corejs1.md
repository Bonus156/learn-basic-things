JavaScript:

Basics

  Data types Типы данных
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
          
  Number methods
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


  String methods
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


  let var const - differences
  
  ternary operator
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  
  switch case - examples, where it can be useful
  
  type conversions

Advanced Expressions

  Be able to discover cases of implicit data types conversion into 
  
  boolean, string, number
  
  Strict comparison
  
  Object.is (optional)
  
  what is polyfills

Function

  arrow func/ func expression/ func declaration

Date & time (optional)

  Date object
  
  Date methods, props

Objects Built-in methods.

  Know how to use built-in methods

Arrays Built-in methods

  Know how to copy array
  
  Know how to modify array

Arrays Iterating, Sorting, Filtering

  Know how to sort Array
  
  Know several method how to iterate Array elements

  Loops
    for loop
    
    while loop
    
    do while loop

JavaScript in Browser:

Global object window

  Document

Events Basics

  Event Phases
  
  Event Listeners
  
  DOM Events
  
  Know basic Event types
  
  Mouse / Keyboard Events
  
  Form / Input Events

Timers

  setTimeout
  
  setInterval

Web Storage API & cookies

  LocalStorage
  
  SessionStorage
