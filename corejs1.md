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
https://developer.mozilla.org/ru/docs/Web/API/Window

  # Document
  https://developer.mozilla.org/ru/docs/Web/API/Document

Events Basics

  # Event Phases
  https://learn.javascript.ru/bubbling-and-capturing
  event.stopPropagation() -- отменяет всплытие. Все обработчики на данном элементе выполнятся.
  event.stopImmediatePropagation() -- отменяет всплытие и прекращает выполнение всех обработчиков на текущем элементе.

  Также мы можем записывать какую-то служебную информацию в объект event в одном обработчике, а читать в другом, таким образом мы можем сообщить обработчикам на родительских элементах информацию о том, что событие уже было как-то обработано.

  elem.addEventListener(..., {capture: true})
  // или просто "true", как сокращение для {capture: true}
  elem.addEventListener(..., {capture: true})
  Существуют два варианта значений опции capture:
    Если аргумент false (по умолчанию), то событие будет поймано при всплытии.
    Если аргумент true, то событие будет перехвачено при погружении.
  Чтобы убрать обработчик removeEventListener, нужна та же фаза
  На каждой фазе разные обработчики на одном элементе срабатывают в порядке назначения

  Каждый обработчик имеет доступ к свойствам события event:

    event.target – самый глубокий элемент, на котором произошло событие.
    event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (тот, на котором «висит» конкретный обработчик)
    event.eventPhase – на какой фазе он сработал (погружение=1, фаза цели=2, всплытие=3).

  
  # Event Listeners
  Есть три способа назначения обработчиков событий:

    Атрибут HTML: onclick="...".
    DOM-свойство: elem.onclick = function.
    Специальные методы: elem.addEventListener(event, handler[, phase]) для добавления, removeEventListener для удаления.

  https://learn.javascript.ru/introduction-browser-events
  Синтаксис добавления обработчика:

  element.addEventListener(event, handler, [options]);
  
  event
      Имя события, например "click".
  handler
      Ссылка на функцию-обработчик.
  options
      Дополнительный объект со свойствами:
  
          once: если true, тогда обработчик будет автоматически удалён после   выполнения.
          capture: фаза, на которой должен сработать обработчик, подробнее об    этом будет рассказано в главе Всплытие и погружение. Так исторически   сложилось, что options может быть false/true, это то же самое, что   {capture: false/true}.
          passive: если true, то указывает, что обработчик никогда не вызовет    preventDefault(), подробнее об этом будет рассказано в главе Действия    браузера по умолчанию.
  
  Для удаления обработчика следует использовать removeEventListener:
  
  element.removeEventListener(event, handler[, options]);
  
  # DOM Events
  
  # Know basic Event types
  https://itchief.ru/javascript/browser-events

   события мыши (Mouse Events)
   события клавиатуры (Keyboard Events)
   события объектов и фреймов (Frame/Object Events)
   события формы и элементов управления (Form Events)
   события перетаскивания (Drag Events)
   события анимации (Animation Events)
   события буфера обмена (Clipboard Events)
   события мультимедиа (Media Events)
   события трансформации (Transition Events)
   события, посылаемые сервером (Server-Sent Events)
   события касания (Touch Events)
   события печати (Print Events)
   разные события (Misc Events)

События мыши
    mousedown – при нажатии кнопки мыши;
    mouseup – при отпускании кнопки мыши;
    click – при клике (порядок возникновения событий при click: mousedown -> mouseup -> click);
    dblclick – при двойном клике (порядок возникновения событий при dblclick: mousedown -> mouseup -> click -> mousedown -> mouseup -> click -> dblclick);
    mousemove – при перемещении курсора мыши;
    mouseover – при вхождении курсора мыши в область, принадлежащей целевому элементу и других элементов, вложенных в него;
    mouseenter – при вхождении указателя мыши в целевой элемент (в отличие от mouseover происходит только один раз при вхождении курсора в целевой элемент; при дальнейшем движении курсора и его вхождении в другие элементы (находящихся в целевом) – оно больше не возникает);
    mouseout – при уходе курсора с целевого элемента и других элементов, вложенных в него;
    mouseleave – при покидании границ целевого элемента (в отличие от mouseout не возникает при покидании курсора элементов вложенных в целевой);
    contextmenu – при открытии контекстного меню.

События при CSS переходе

    transitionrun – возникает при создании CSS перехода (т.е. когда он добавляется к набору запущенных переходов, но не обязательно он начался);
    transitionstart – происходит, когда CSS переход начинает выполняться;
    transitioncancel – возникает, если CSS переход был отменен;
    transitionend – происходит при завершении CSS перехода.

События при CSS анимации

    animationstart – происходит, когда CSS анимация начинается;
    animationiteration – возникает, когда заканчивается одна итерация CSS анимации и начинается другая;
    animationend – происходит при окончании CSS анимации.

События клавиатуры

Порядок возникновения событий: keydown -> keypress -> keyup.

    keydown - событие происходит, когда нажата клавиша на клавиатуре над элементом, но ещё не отпущена.
    keyup - событие происходит, когда нажатая клавиша на клавиатуре над элементом перешла в состояние отпущено.
    keypress - событие происходит, когда пользователь нажал клавишу на клавиатуре над элементом.

События объектов и фреймов

    beforeunload - событие происходит, перед тем как документ будет выгружен. Это событие позволяет отображать дополнительное сообщение в диалоговом окне подтверждения "Вы действительно хотите покинуть эту страницу?". Стандартное сообщение, которое появляется при закрытии документа, может отличаться в разных браузерах. Но его Вы не можете изменить или удалить, Вы можете только с помощью этого метода добавить к нему собственное сообщение, которое будет отображаться вместе с сообщением по умолчанию.
    error - событие срабатывает при возникновении ошибки, которая происходит при загрузке внешнего файла (например, документа или изображения).
    hashchange - событие происходит при изменении якорной части (начинается с символа '#') текущего URL.
    load - событие происходит, когда загрузка объекта завершена. Событие load наиболее часто используется для элемента body, чтобы выполнить сценарий сразу же после того как веб-страница полностью загрузится.
    unload - событие происходит при выгрузке страницы (например, при закрытии вкладки (окна) браузера).
    pageshow - событие происходит, когда пользователь переходит на веб-страницу, т.е. после того как страница становится доступна пользователю. Событие pageshow похоже на событие load, за исключением того, что оно срабатывает каждый раз при загрузке страницы, даже если она загружается из кэша. При первой загрузке страницы событие pageshow срабатывает сразу после события load.
    pagehide - событие происходит, когда пользователь уходит со страницы (событие pagehide происходит до события unload). Кроме этого данное событие, в отличие от события unload не препятствует кэшированию страницы.
    resize - событие происходит при изменении размеров окна браузера.
    scroll - событие происходит, когда вы прокручиваете содержимое элемента, имеющего полосу прокрутки.

События формы и элементов управления

    focus - событие происходит, когда элемент получает фокус. Данное событие не всплывает.
    blur - событие происходит, когда объект теряет фокус. Данное событие не всплывает.
    focusin - событие происходит, когда элемент получает фокус. Событие focusin подобно событию focus, но отличается от него тем, что оно всплывает. Поэтому его можно использовать, когда Вам необходимо выяснить, кто теряет фокус: элемент или его ребёнок?
    focusout - событие происходит, когда элемент собирается потерять фокус. Событие focusout подобно событию blur, но отличается от него тем, что оно всплывает. Поэтому его можно использовать, когда Вам необходимо выяснить, кто теряет фокус: элемент или его ребёнок?
    change - событие происходит при изменении значения элемента, но уже после того как элемент потерял фокус. Кроме события change в JavaScript есть также похожее событие input, которое отличается от события change тем, что происходит сразу же после изменения значения элемента. Событие сhange в отличие от события input также работает с элементами keygen и select. Для радиокнопок (radiobuttons) и флажков (checkboxes) событие change происходит при изменении состояния этих элементов.
    input - событие происходит после того как изменяется значение элемента input или элемента textarea.
    invalid - событие происходит, когда элемент input, данные которого необходимо отправить вместе с другими данными формы на сервер, содержит недопустимые данные.
    reset - событие происходит перед очисткой формы, которая осуществляется элементом input с type="reset".
    search - событие возникает после того как пользователь нажимает на клавишу Enter или нажимает кнопку "x" (отмена) в элементе input с type="search".
    select - событие происходит после того как Вы выбрали некоторый текст в элементе. Событие select в основном используется для элемента input с type="text" или textarea.
    submit - событие происходит перед отправкой формы на сервер.

События перетаскивания

События, связанные с перетаскиваемым объектом (draggable target, исходный объект):

    dragstart – событие происходит, когда пользователь начал перетаскивать элемент;
    drag – событие происходит, когда пользователь перетаскивает элемент;
    dragend – событие происходит, когда пользователь закончил перетаскивания элемента, т.е. когда отпустил курсор мыши.

События, связанные с объектом (drop target), который принимает перетаскиваемый объект (draggable target):

    dragenter – событие происходит, когда перетаскиваемый объект (draggable target) вошёл в область элемента (drop target), который может принять перетаскиваемый объект (draggable target).
    ragleave – событие происходит, когда перетаскиваемый объект (draggable target) покидает пределы элемента (drop target), который может его принять.
    dragover - событие происходит, когда перетаскиваемый объект (draggable target) перемещается в области элемента (drop target), который может его принять.
    drop - событие происходит, когда пользователь отпускает перетаскиваемый объект (draggable target) в область элемента (drop target), который может его принять.

События буфера обмена

    сopy - событие происходит, когда пользователь копирует содержимое элемента. Событие copy также происходит, когда пользователь копирует элемент (например, изображения, созданные с помощью элемента img). Событие copy используется в основном для элементов input с type="text".
    сut - событие происходит, когда пользователь вырезает содержимое элемента.
    paste - событие происходит, когда пользователь вставляет некоторое содержимое в элемент.

События печати

    afterprint - событие происходит, когда страница начинает печататься (т.е. после нажатия кнопки "Печать" в диалоговом окне) или если диалоговое окно "Печать" было закрыто.
    beforeprint - событие возникает перед печатью страницы, т.е. до открытия диалогового окна "Печать".

События, посылаемые сервером

    error - событие возникает при возникновении ошибки с источником события. Ошибка обычно возникает, когда связь нарушается. Если это произойдет, то объект EventSource будет автоматически пытаться подключиться к серверу.
    open - событие возникает, когда соединение с источником события открыто.
    message - событие возникает, когда сообщение получено через источник события.
    Объект event события message поддерживает следующие свойства:
        data - содержит сообщение.
        origin - URL документа, который вызвал событие.
        lastEventId - идентификатор (id) последнего полученного сообщения.

События мультимедиа

В процессе загрузки аудио/видео события происходят в следующем порядке: loadstart -> durationchange -> loadedmetadata -> loadeddata -> progress -> canplay -> canplaythrough.

    abort - событие возникает, когда прерывается загрузка аудио/видео. Это событие возникает именно когда загрузка медиа данных была прервана (отменена), а не, потому что возникла ошибка.
    error - событие возникает, когда произошла ошибка при загрузке аудио/видео.
    stalled - событие возникает, когда браузер пытается получить медиа данные, но данные недоступны.
    suspend - событие возникает, когда браузер не может получить медиа данные, т.е. загрузка медиа останавливается по какой-то причине.
    loadstart - событие происходит, когда браузер начинает искать указанное аудио/видео, т.е. когда начинается процесс загрузки.
    durationchange - событие возникает, когда изменяется длительность аудио/видео. Если аудио/видео загружается, то длительность будет меняться от значения "NaN" до фактической длительности аудио/видео.
    loadedmetadata - событие возникает, когда метаданные для указанного аудио/видео загружены. Метаданные аудио/видео состоят из: длительности, размера (только видео) и текстовой дорожки.
    loadeddata - событие возникает, после того как первый кадр медиа загрузился.
    progress - событие происходит, когда браузер загружает указанное аудио/видео.
    canplay - событие возникает, когда браузер может начать воспроизведение указанного аудио/видео (т.е. когда буферизация потока аудио/видео достаточна для того чтобы браузер мог начать его воспроизводить).
    canplaythrough - событие возникает в тот момент времени, когда браузер может проигрывать указанное медиа без остановки на буферизацию.
    ended - событие происходит, когда воспроизведение аудио/видео завершилось (достигло конца). Это событие может использоваться для вывода сообщений типа "Спасибо за внимание", "Спасибо за просмотр" и др.
    pause - событие происходит, когда воспроизведение аудио/видео приостановлено пользователем или с помощью кода (программно).
    play - событие происходит, когда начинается воспроизведение аудио/видео. Оно также происходит, когда аудио/видео было снято с паузы и начинает воспроизводиться.
    playing - событие происходит, когда аудио/видео воспроизводится после того как оно было поставлено на паузу или остановилось для буферизации.
    ratechange - событие происходит, когда изменяется скорость воспроизведения аудио/видео.
    seeking - событие происходит, когда пользователь начинает перемещение ползунка (переход) к новой временной позиции проигрываемого аудио/видео.
    seeked - событие происходит, когда пользователь закончил перемещение ползунка (переход) в новую временную позицию проигрываемого аудио/видео. Событие seeked противоположно событию seeking. Для того чтобы получить текущую позицию воспроизведения, используйте свойство currentTime объекта Audio/Video.
    timeupdate - событие происходит при изменении временной позиции воспроизводимого аудио/видео.
    Это событие происходит:
        при воспроизведении потока аудио/видео.
        при перемещении ползунка в новую временную позицию воспроизводимого аудио/видео.
    Событие timeupdate часто используется вместе со свойством объекта Audio/Video currentTime, которое возвращает текущую временную позицию воспроизводимого аудио/видео в секундах.
    volumechange – событие происходит каждый раз при изменении громкости воспроизводимого потока видео/аудио.
    Это событие происходит, при:
        увеличении или уменьшении громкости;
        отключении или включении звука.
    waiting - событие происходит, когда видео останавливается для буферизации.

Разные события

    toggle - событие происходит, когда пользователь открывает или закрывает элемент details. Элемент details предназначен для создания дополнительных сведений, которые пользователь при необходимости может просматривать или скрывать.
    wheel - событие происходит при прокручивании колеса мыши вперёд или назад над элементом.

  
  # Mouse / Keyboard Events
  
  # Form / Input Events

Timers

  # setTimeout
  
  # setInterval

Web Storage API & cookies

  # LocalStorage
  
  # SessionStorage
