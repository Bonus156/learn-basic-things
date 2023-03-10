JavaScript:

Basics

  # Data types Типы данных
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects
    Встроенные примитивные типы данных:
      1. string
      2. number [infinity, NaN] max = 2^53 - 1
      3. BigInt max > 2^53
      4. boolean
      5. undefined
      6. null typeof null === "object". Специальный примитив, используемый не
          только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов;
      7. Symbol Символ — это уникальное и иммутабельное примитивное значение,
          которое может быть использовано как ключ для свойства объекта.
      8. object ключем может являться строка или символ. Значения могут быть любыми.

      Все примитивные типы данных кроме Объектов являются иммутабельными (значения нельзя изменить, а только перезаписать полным набором).

    Встроенные сложные типы данных:
      1. Функции
      2. Даты
      3. Массивы общие
      4. Массивы типизированные
      5. Коллекции
          Map
          Set
          WeakMaps
          WeakSets

  # Number methods
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
    **Number.isNaN() -- проверяет является ли переданное значение NaN.**
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
   **Number.isFinite() -- проверяет является ли значение конечным числом.**
      Number.isFinite(0);         // true
      Number.isFinite(2e64);      // true
      Number.isFinite(Infinity);  // false
      Number.isFinite(NaN);       // false
      Number.isFinite(-Infinity); // false
      Number.isFinite('0');       // false

   **Number.isSafeInteger() -- проверяет является ли значение безопасным целочисленным [-2^53 + 1; 2^53 - 1]**
      
   **Number.isInteger() -- проверяет является ли значение целочисленным**
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

   **Number.parseFloat() -- разбирает строковый аргумент и возвращает число с плавающей запятой.**

   **Number.parseInt() -- разбирает строковый аргумент и возвращает целое число.**
    // apply()
    // call()
    // toSource()

   **Number.prototype.toString() --возвращает строковое представление указанного объекта Number**
      numObj.toString([radix])
        radix -- Необязательный параметр. Целое число между 2 и 36, определяющее основание системы счисления, используемой для представления числового значения.

   **Number.prototype.toExponential() -- возвращает строку, представляющую объект Number в экспоненциальной записи.**
    numObj.toExponential([fractionDigits])
      fractionDigits -- Необязательный параметр. Целое число, определяющее количество цифр после десятичной запятой. По умолчанию используется столько цифр, сколько необходимо для указания числа. 

   **Number.prototype.toFixed() -- форматирует число, используя запись с фиксированной запятой.**
    numObj.toFixed([digits])
      digits -- Необязательный параметр. Количество цифр после десятичной запятой; может быть значением между 0 и 20 включительно, хотя реализации могут поддерживать и больший диапазон значений. Если аргумент опущен, он считается равным 0.

   **Number.prototype.toLocaleString() --  возвращает строку с языкозависимым представлением числа.**

   **Number.prototype.toPrecision() -- возвращает строку, представляющую объект Number с указанной точностью.**
    umObj.toPrecision([precision])
      precision -- Необязательный параметр. Целое число, определяющее количество значащих цифр.

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

    String.prototype.includes() -- проверяет, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.
      str.includes(searchString[, position])
        searchString -- Строка для поиска в данной строке.
        position -- (Необязательный) Позиция в строке, с которой начинать поиск строки searchString, по умолчанию 0. 

    String.prototype.indexOf() -- Метод indexOf() возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено.
    str.indexOf(searchValue, [fromIndex])
      searchValue -- Строка, представляющая искомое значение.
      fromIndex -- Необязательный параметр. Местоположение внутри строки, откуда начинать поиск. Может быть любым целым числом. Значение по умолчанию установлено в 0. Если fromIndex < 0, поиск ведётся по всей строке (так же, как если бы был передан 0). Если fromIndex >= str.length, метод вернёт -1, но только в том случае, если searchValue не равен пустой строке, в этом случае он вернёт str.length. 

    String.prototype.lastIndexOf() -- возвращает индекс последнего вхождения указанного значения в строковый объект String, на котором он был вызван, или -1, если ничего не было найдено. Поиск по строке ведётся от конца к началу, начиная с индекса fromIndex.
      searchValue -- Строка, представляющая искомое значение.
      fromIndex -- Необязательный параметр. Местоположение внутри строки, откуда начинать поиск, нумерация индексов идёт слева направо. Может быть любым целым числом. Значение по умолчанию установлено в str.length. Если оно отрицательно, трактуется как 0. Если fromIndex > str.length, параметр fromIndex будет трактоваться как str.length. 

    String.prototype.localeCompare()
    String.prototype.match()
    String.prototype.matchAll()
    String.prototype.normalize()
    String.prototype.padEnd()
    String.prototype.padStart()

    String.prototype.repeat() -- конструирует и возвращает новую строку, содержащую указанное количество соединённых вместе копий строки, на которой он был вызван.

    String.prototype.replace() -- возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель. Шаблон может быть строкой или регулярным выражением, а заменитель может быть строкой или функцией, вызываемой при каждом сопоставлении.
    str.replace(regexp|substr, newSubStr|function[, flags])

    String.prototype.replaceAll() -- возвращает новую строку со всеми совпадениями pattern , который меняется на replacement. 

    String.prototype.search() -- выполняет поиск сопоставления между регулярным выражением и этим объектом String.

    String.prototype.slice() --  извлекает часть строки и возвращает новую строку без изменения оригинальной строки.

    String.prototype.split() -- разбивает объект String на массив строк путём разделения строки указанной подстрокой.

    String.prototype.startsWith() -- помогает определить, начинается ли строка с символов указанных в скобках, возвращая, соответственно, true или false.

    String.prototype.toLocaleLowerCase()
    String.prototype.toLocaleUpperCase()

    String.prototype.toLowerCase()
    
    String.prototype.toString() -- возвращает строку, представляющую указанный объект.
    
    String.prototype.toUpperCase()

    String.prototype.trim() -- удаляет пробельные символы с начала и конца строки. Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел и прочие) и все символы конца строки (LF, CR и прочие).

    String.prototype.trimEnd()
    String.prototype.trimStart()

    String.prototype.valueOf() -- возвращает примитивное значение объекта String.


  # let var const - differences
https://medium.com/nuances-of-programming/var-let-const-%D0%B2-%D1%87%D0%B5%D0%BC-%D1%80%D0%B0%D0%B7%D0%BD%D0%B8%D1%86%D0%B0-dc6c3beb0b12
                |  var                | let               | const
===============================================================================
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
    Преобразование объекта в примитив вызывается автоматически многими встроенными функциями и операторами, которые ожидают примитив в качестве значения.

    Существует всего 3 типа (хинта) для этого:
  Хинт      | Когда испльзуется                         | Пример 
  ===================================================================================================
  "string"  | для alert и других операций, которым      | alert(obj)
            | нужна строка                              |
  ---------------------------------------------------------------------------------------------------
  "number"  | для математических операций:              | 
            |  Явное преобразование                     | Number(obj)
            |  Математическое(не считая бинарный плюс)  | +obj  date1 - date2
            |  Сравнения (больше / меньше)              | obj1 > obj2 -- используют хинт number по 
            |                                           | историческим причинам
  ---------------------------------------------------------------------------------------------------
  "default" | для некоторых других операторов, когда    | бинарный плюс + может работать как со
            | оператор «не уверен», какой тип ожидать.  | строками (объединяя их в одну), так и с
            | Обычно объекты реализуют его как "number" | числами (складывая их). Поэтому, если 
            |                                           | бинарный плюс получает объект в качестве
            |                                           | аргумента, он использует хинт "default"
            |                                           | для его преобразования. Аналогично сравнение,
            |                                           | использующее == нестрогое равенство.
  ---------------------------------------------------------------------------------------------------

    Спецификация явно описывает для каждого оператора, какой ему следует использовать хинт.

    Есть встроенный символ с именем Symbol.toPrimitive, который следует использовать для обозначения метода преобразования.
    Если метод Symbol.toPrimitive существует, он используется для всех хинтов, и больше никаких методов не требуется.

    Алгоритм преобразования таков:

        Сначала вызывается метод obj[Symbol.toPrimitive](hint), если он существует,
        Иначе, в случае, если хинт равен "string"
            происходит попытка вызвать obj.toString() и obj.valueOf(), смотря что есть.
        В случае, если хинт равен "number" или "default"
            происходит попытка вызвать obj.valueOf() и obj.toString(), смотря что есть.

    Все эти методы должны возвращать примитив (если определены).

    На практике часто бывает достаточно реализовать только obj.toString() в качестве универсального метода для преобразований к строке, который должен возвращать удобочитаемое представление объекта для целей логирования или отладки.

    Если нет Symbol.toPrimitive, тогда JavaScript пытается найти методы toString и valueOf:

    Для хинта "string": вызвать метод toString, а если он не существует или возвращает объект вместо примитивного значения, то valueOf (таким образом, toString имеет приоритет при строковом преобразовании).
    Для других хинтов: вызвать метод valueOf, а если он не существует или возвращает объект вместо примитивного значения, то toString (таким образом, valueOf имеет приоритет для математических операций).
    Методы toString и valueOf берут своё начало с древних времён. Это не символы (символов тогда ещё не было), а скорее просто «обычные» методы со строковыми именами. Они предоставляют альтернативный «старомодный» способ реализации преобразования.

    Эти методы должны возвращать примитивное значение. Если toString или valueOf возвращает объект, то он игнорируется (так же, как если бы метода не было).

    По умолчанию обычный объект имеет следующие методы toString и valueOf:

    Метод toString возвращает строку "[object Object]".
    Метод valueOf возвращает сам объект.


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


  **Важно**
    Особые случаи, в которых часто допускаются ошибки:
     - undefined при численном преобразовании становится NaN, не 0.
     - "0" и строки из одних пробелов типа " " при логическом преобразовании всегда true.


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
Вызов       | Можно вызвать до          | Нельзя вызвать до объявления | Нельзя вызвать до объявления
            | объявления                |                              |
----------------------------------------------------------------------------------------------------
Поднятие    | Поднимаются               | Не поднимаются               | Не поднимаются          
----------------------------------------------------------------------------------------------------
Контекст    | this динамическое в зависимости от контекста исполнения. | this всегда равен значению
 this       | Обычный вызов -- this = Window. Вызов метода --          | this внешней функции.
            | this = instance объекта. Косвенный вызов (call, apply)   | Функция не создает свой
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

  **Создание**

    new Date() -- Создаёт объект Date с текущей датой и временем.
      var now = new Date();

    new Date(milliseconds) -- Создаёт объект Date, значение которого равно количеству миллисекунд, прошедших с 1 января 1970 года GMT+0.
      var Jan02_1970 = new Date(3600 * 24 * 1000);

    new Date(datestring) -- Создаёт объект Date из единственного аргумента – строки, используется вызов Date.parse для чтения даты из неё.

    new Date(year, month, date, hours, minutes, seconds, ms) -- Создает дату, используя компоненты в  местной временной зоне. Для этого формата обязательны только первые два аргумента. Отсутствующие   параметры, начиная с hours считаются равными нулю, а date – единице.

      !!!Важно:
        Год year должен быть из 4 цифр.
        Отсчёт месяцев month начинается с нуля 0.

  **Получение компонентов даты**

    getFullYear()
      Получить год (из 4 цифр)
    getMonth()
      Получить месяц, от 0 до 11.
    getDate()
      Получить число месяца, от 1 до 31.
    getHours(), getMinutes(), getSeconds(), getMilliseconds()
      Получить соответствующие компоненты.
    getDay()
      Получить номер дня в неделе. Неделя в JavaScript начинается с воскресенья, так что результат будет  числом от **0(воскресенье) до 6(суббота)**.
      ^
      |
    **Все методы, указанные выше, возвращают результат для местной временной зоны.**

    Cуществуют также UTC-варианты этих методов, возвращающие день, месяц, год и т.п. для зоны GMT+0 (UTC): 
    getUTCFullYear(),
    getUTCMonth(),
    getUTCDay()

    Кроме описанных выше, существуют два специальных метода без UTC-варианта:

    getTime() -- Возвращает число миллисекунд, прошедших с 1 января 1970 года GMT+0, то есть того же вида, который используется в конструкторе new Date(milliseconds).

    getTimezoneOffset() -- Возвращает разницу между местным и UTC-временем, в минутах.

  **Установка компонентов даты**

    Следующие методы позволяют устанавливать компоненты даты и времени:

        setFullYear(year [, month, date])
        setMonth(month [, date])
        setDate(date)
        setHours(hour [, min, sec, ms])
        setMinutes(min [, sec, ms])
        setSeconds(sec [, ms])
        setMilliseconds(ms)
        setTime(milliseconds) (устанавливает всю дату по миллисекундам с 01.01.1970 UTC)

    Все они, кроме setTime(), обладают также UTC-вариантом, например: setUTCHours().

  **Автоисправление даты**

    Автоисправление – очень удобное свойство объектов Date. Оно заключается в том, что можно устанавливать заведомо некорректные компоненты (например 32 января), а объект сам себя поправит.

  **Преобразование к числу, разность дат**
    Когда объект Date используется в числовом контексте, он преобразуется в количество миллисекунд.
    Важный побочный эффект: даты можно вычитать, результат вычитания объектов Date – их временная разница, в миллисекундах.


  **Форматирование и вывод дат**
    Во всех браузерах, кроме IE10-, поддерживается новый стандарт Ecma 402, который добавляет   специальные   методы для форматирования дат.

    Это делается вызовом date.toLocaleString(локаль, опции), в котором можно задать много настроек. Он    позволяет указать, какие параметры даты нужно вывести, и ряд настроек вывода, после чего  интерпретатор   сам сформирует строку.

    Пример с почти всеми параметрами даты и русским, затем английским (США) форматированием:

    date.toLocaleString(локаль, опции)

    var date = new Date(2014, 11, 31, 12, 30, 0);

    var options = {
      era: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    alert( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
    alert( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00  PM

    Методы вывода без локализации:

    toString(), toDateString(), toTimeString() Возвращают стандартное строчное представление, не заданное жёстко в стандарте, а зависящее от браузера. Единственное требование к нему – читаемость человеком.

    toString() -- возвращает дату целиком,
    toDateString() и toTimeString() – только дату и время соответственно.

    var d = new Date();

    alert( d.toString() ); // вывод, похожий на 'Wed Jan 26 2011 16:40:50 GMT+0300'

    toUTCString() То же самое, что toString(), но дата в зоне UTC.

    toISOString() Возвращает дату в формате ISO. Поддерживается современными браузерами, не поддерживается IE8-.

    var d = new Date();

    alert( d.toISOString() ); // вывод, похожий на '2011-01-26T13:51:50.417Z'

    Если хочется иметь большую гибкость и кросс-браузерность, то также можно воспользоваться специальной библиотекой, например Moment.JS или написать свою функцию форматирования.

  **Разбор строки, Date.parse**

    Все современные браузеры, включая IE9+, понимают даты в упрощённом формате ISO 8601 Extended.

    Этот формат выглядит так: YYYY-MM-DDTHH:mm:ss.sssZ, где:

      YYYY-MM-DD – дата в формате год-месяц-день.
      Обычный символ T используется как разделитель.
      HH:mm:ss.sss – время: часы-минуты-секунды-миллисекунды.
      Часть 'Z' обозначает временную зону – в формате +-hh:mm, либо символ Z, обозначающий UTC. По стандарту её можно не указывать, тогда UTC, но в Safari с этим ошибка, так что лучше указывать всегда.

    Также возможны укороченные варианты, например YYYY-MM-DD или YYYY-MM или даже только YYYY.

    Метод Date.parse(str) разбирает строку str в таком формате и возвращает соответствующее ей количество миллисекунд. Если это невозможно, Date.parse возвращает NaN.

    Например:

    var msUTC = Date.parse('2012-01-26T13:51:50.417Z'); // зона UTC

    alert( msUTC ); // 1327571510417 (число миллисекунд)

    С таймзоной -07:00 GMT:

    var ms = Date.parse('2012-01-26T13:51:50.417-07:00');

    alert( ms ); // 1327611110417 (число миллисекунд)

  
  **Метод Date.now()**

    Метод Date.now() возвращает дату сразу в виде миллисекунд.

    Технически, он аналогичен вызову +new Date(), но в отличие от него не создаёт промежуточный объект даты, а поэтому – во много раз быстрее.

    Его использование особенно рекомендуется там, где производительность при работе с датами критична. Обычно это не на веб-страницах, а, к примеру, в разработке игр на JavaScript.

Objects Built-in methods.

  # Know how to use built-in methods
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
  Object.assign() -- используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.

  Object.create() -- создаёт новый объект с указанным прототипом и свойствами.
  let animal = {
    eats: true
  };
  
  let rabbit = Object.create(animal, {
    jumps: {
      value: true
    }
  });

  alert(rabbit.jumps); // true
  
  Object.defineProperties()
  Object.defineProperty()

  Object.entries() -- метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries() не зависит от того как объект объявлен. Если существует необходимость в определённом порядке, то массив должен быть отсортирован до вызова метода, например Object.entries(obj).sort((a, b) => a[0] - b[0]);.

  Object.freeze() -- замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов перечисляемости, настраиваемости и записываемости. В сущности, объект становится эффективно неизменным. Метод возвращает замороженный объект.

  Object.fromEntries() -- преобразует список пар ключ-значение в объект.

  Object.getOwnPropertyDescriptor()
  Object.getOwnPropertyDescriptors()
  Object.getOwnPropertyNames()
  Object.getOwnPropertySymbols()

  Object.getPrototypeOf() -- возвращает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта.

  Object.hasOwn() -- возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
  Object.prototype.hasOwnProperty() -- возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
  Object.is() -- определяет, являются ли два значения одинаковыми значениями
  
  Object.isExtensible()
  Object.isFrozen() -- определяет, был ли объект заморожен.

  Object.prototype.isPrototypeOf()

  Object.isSealed() --  определяет, является ли объект запечатанным.

  Object.keys() -- возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).

  Object.preventExtensions() -- предотвращает добавление новых свойств к объекту (то есть, предотвращает расширение этого объекта в будущем).

  Object.prototype.propertyIsEnumerable()

  Object.seal() -- запечатывает объект, предотвращая добавление новых свойств к объекту и делая все существующие свойства не настраиваемыми. Значения представленных свойств всё ещё могут изменяться, поскольку они остаются записываемыми.

  Object.setPrototypeOf()

  Object.prototype.toLocaleString()

  Object.prototype.toString() -- возвращает строку, представляющую объект.

  Object.prototype.valueOf() -- возвращает примитивное значение указанного объекта.

  Object.values() -- возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.

Arrays Built-in methods
  Array.isArray()
  Array.from()
  Array.of()
  Array.prototype.at() -- принимает значение в виде целого числа и возвращает элемент массива с данным индексом. В качестве аргумента метод принимает положительные и отрицательные числа. При отрицательном значении отсчёт происходит с конца массива.

  Array.prototype.concat() -- возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.

  Array.prototype.copyWithin()

  Array.prototype.entries() -- возвращает новый объект итератора массива Array Iterator, содержащий пары ключ / значение для каждого индекса в массиве.

  Array.prototype.every() -- проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

  Array.prototype.fill() -- заполняет все элементы массива от начального до конечного индексов одним значением.

  Array.prototype.filter() -- создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

  Array.prototype.find() -- возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции. В противном случае возвращается undefined.

  Array.prototype.findIndex()
  Array.prototype.findLast()
  Array.prototype.findLastIndex()

  Array.prototype.flat() -- возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.

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

  Array.prototype.some() -- проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

  Array.prototype.sort()
  Array.prototype.splice() -- изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
  Array.prototype.toLocaleString()
  Array.prototype.toString()
  Array.prototype.unshift()
  Array.prototype.values() -- возвращает новый объект итератора массива Array Iterator, содержащий значения для каждого индекса в массиве.



  # Know how to copy array
  https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/

  1. Spread Operator (Shallow copy)
    numbers = [1, 2, 3];
    numbersCopy = [...numbers];
  
  2. Good Old for() Loop (Shallow copy)
    numbers = [1, 2, 3];
    numbersCopy = [];

    for (i = 0; i < numbers.length; i++) {
      numbersCopy[i] = numbers[i];
    }

  3. Good Old while() Loop (Shallow copy)
    numbers = [1, 2, 3];
    numbersCopy = [];
    i = -1;

    while (++i < numbers.length) {
      numbersCopy[i] = numbers[i];
    }

  4. Array.map (Shallow copy)
    numbers = [1, 2, 3];
    double = (x) => x * 2;

    numbers.map(double);

  5. Array.filter (Shallow copy)
    numbers = [1, 2, 3];
    numbersCopy = numbers.filter(() => true);

  6. Array.reduce (Shallow copy)
    numbers = [1, 2, 3];

    numbersCopy = numbers.reduce((newArray, element) => {
      newArray.push(element);
      return newArray;
    }, []);

  7. Array.slice (Shallow copy)
    numbers = [1, 2, 3, 4, 5];
    numbersCopy = numbers.slice();

  8. JSON.parse and JSON.stringify
    nestedNumbers = [[1], [2]];
    numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));

  9. Array.concat (Shallow copy)
    [1, 2, 3].concat(); // [1, 2, 3]
    [1, 2, 3].concat([]); // [1, 2, 3]

  10. Array.from (Shallow copy)
    numbers = [1, 2, 3];
    numbersCopy = Array.from(numbers);

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

    for ..in -- по ключам

    for ..of -- по значениям

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
  
          once: если true, тогда обработчик будет автоматически удалён после выполнения.
          capture: фаза, на которой должен сработать обработчик, подробнее об этом будет рассказано в главе Всплытие и погружение. Так исторически сложилось, что options может быть false/true, это то же самое, что {capture: false/true}.
          passive: если true, то указывает, что обработчик никогда не вызовет preventDefault().
  
  Для удаления обработчика следует использовать removeEventListener:

  element.removeEventListener(event, handler[, options]);


Как использовать closest()
  table.onclick = function(event) {
    let td = event.target.closest('td'); // (1)

    if (!td) return; // (2)

    if (!table.contains(td)) return; // (3)

    highlight(td); // (4)
  };
  
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

  # Mouse Events
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

  # Keyboard Events
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

  # Form / Input Events
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


 # Timers
https://learn.javascript.ru/settimeout-setinterval
  # setTimeout
  let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
  clearTimeout(timerId);
  
  # setInterval
  let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)
  clearInterval(timerId)

Web Storage API & cookies
https://learn.javascript.ru/localstorage
https://learn.javascript.ru/cookie

  # LocalStorage
  
  # SessionStorage

  Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы и свойства:

    setItem(key, value) – сохранить пару ключ/значение.
    getItem(key) – получить данные по ключу key.
    removeItem(key) – удалить данные с ключом key.
    clear() – удалить всё.
    key(index) – получить ключ на заданной позиции.
    length – количество элементов в хранилище.

    К сожалению, объекты веб-хранилища нельзя перебрать в цикле, они не итерируемы.

    Но можно пройти по ним, как по обычным массивам:

    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      alert(`${key}: ${localStorage.getItem(key)}`);
    }

    Другой способ – использовать цикл, как по обычному объекту for key in localStorage.

    Здесь перебираются ключи, но вместе с этим выводятся несколько встроенных полей, которые нам не нужны:

    // bad try
    for(let key in localStorage) {
      alert(key); // покажет getItem, setItem и другие встроенные свойства
    }

    …Поэтому нам нужно либо отфильтровать поля из прототипа проверкой hasOwnProperty:

    for(let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
      }
      alert(`${key}: ${localStorage.getItem(key)}`);
    }

    …Либо просто получить «собственные» ключи с помощью Object.keys, а затем при необходимости вывести их при помощи цикла:

    let keys = Object.keys(localStorage);
    for(let key of keys) {
      alert(`${key}: ${localStorage.getItem(key)}`);
    }

    Последнее работает, потому что Object.keys возвращает только ключи, принадлежащие объекту, игнорируя прототип.

API:

    setItem(key, value) – сохранить пару ключ/значение.
    getItem(key) – получить данные по ключу key.
    removeItem(key) – удалить значение по ключу key.
    clear() – удалить всё.
    key(index) – получить ключ на заданной позиции.
    length – количество элементов в хранилище.
    Используйте Object.keys для получения всех ключей.
    Можно обращаться к ключам как к обычным свойствам объекта, в этом случае событие storage не срабатывает.

Событие storage:

    Срабатывает при вызове setItem, removeItem, clear.
    Содержит все данные об произошедшем обновлении (key/oldValue/newValue), url документа и объект хранилища storageArea.
    Срабатывает на всех объектах window, которые имеют доступ к хранилищу, кроме того, где оно было сгенерировано (внутри вкладки для sessionStorage, глобально для localStorage).
