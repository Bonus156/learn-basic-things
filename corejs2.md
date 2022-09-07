CoreJS Interview #2

Advanced Expressions

  # Hoisting
    Поднятие объявления переменной вверх своей области видимости.
    Приэтом var инициализируется undefined
    let и const находяться в TDZ
  # Temporal dead zone
    Это область, где находятся переменные до их объявления в коде. Т.е. участок между областью поднятия и строкой объявления переменной.
    Пока переменная находиться в TDZ (ВМЗ -- временная мертвая зона) её можно привязывать к методам и использовать в функциях но нельзя приэтом вызывать данные функции и использовать методы. Попытка прочитать, либо записать значения пока переменная находится в TDZ приведут к ошибке ReferenceError.

Objects Built-in methods.

  # Know static Object methods
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

    Object.defineProperties() -- позволяет определять множество  свойств сразу.
      Его синтаксис:
      Object.defineProperties(obj, {
        prop1: descriptor1,
        prop2: descriptor2
        // ...
      });

      Например:

      Object.defineProperties(user, {
        name: { value: "John", writable: false },
        surname: { value: "Smith", writable: false },
        // ...
      });

    Object.defineProperty() -- позволяет обновлять флаги свойств объектов.
      Если указанного свойства не существует -- метод создаёт новое свойство с указанным значением и флагами;
      если какой-либо флаг не указан явно, ему присваивается значение false.

    Object.entries() -- метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries() не зависит от того как объект объявлен. Если существует необходимость в определённом порядке, то массив должен быть отсортирован до вызова метода, например Object.entries(obj).sort((a, b) => a[0] - b[0]);.

    Object.freeze() -- замораживает объект: это значит, что он предотвращает добавление новых свойств к объекту, удаление старых свойств из объекта и изменение существующих свойств или значения их атрибутов  перечисляемости, настраиваемости и записываемости. В сущности, объект становится эффективно неизменным. Метод возвращает замороженный объект.

    Object.fromEntries() -- преобразует список пар ключ-значение в объект.

    Object.getOwnPropertyDescriptor() -- позволяет получить полную информацию о свойстве.
      Object.getOwnPropertyDescriptor(obj, propertyName);
        /* дескриптор свойства:
          {
            "value": "John",
            "writable": true,
            "enumerable": true,
            "configurable": true
          }
        */
    Object.getOwnPropertyDescriptors() -- позволяет получить все дескрипторы свойств сразу, но не получает унаследованные свойства.
    
    Object.getOwnPropertyNames()
    
    Object.getOwnPropertySymbols() -- возвращающий массив только символьных ключей
    Также, существует метод Reflect.ownKeys(obj), который возвращает все ключи.

    Object.getPrototypeOf() -- возвращает прототип (то есть, внутреннее свойство [[Prototype]]) указанного объекта.

    Object.hasOwn() -- возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
    Object.prototype.hasOwnProperty() -- возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
    Object.is() -- определяет, являются ли два значения одинаковыми значениями

    Object.isExtensible() -- Возвращает false, если добавление свойств запрещено, иначе true.
    Object.isFrozen() -- определяет, был ли объект заморожен.

    Object.prototype.isPrototypeOf()

    Object.isSealed() --  определяет, является ли объект запечатанным.

    Object.keys() -- возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл  перечисляет свойства и из цепочки прототипов).

    Object.preventExtensions() -- предотвращает добавление новых свойств к объекту (то есть, предотвращает расширение этого объекта в будущем).

    Object.prototype.propertyIsEnumerable()

    Object.seal() -- запечатывает объект, предотвращая добавление новых свойств к объекту и делая все существующие свойства не настраиваемыми. Значения представленных свойств всё ещё могут изменяться, поскольку они  остаются записываемыми.

    Object.setPrototypeOf()

    Object.prototype.toLocaleString()

    Object.prototype.toString() -- возвращает строку, представляющую объект.

    Object.prototype.valueOf() -- возвращает примитивное значение указанного объекта.

    Object.values() -- возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.

  # Property flags & descriptors (student is able to set property via Object. defineProperty)
    https://learn.javascript.ru/property-descriptors

    Флаги свойств
      Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).
        writable – если true, свойство можно изменить, иначе оно только для чтения.
        enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.
        configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

      Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
        let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
          obj -- Объект, из которого мы получаем информацию.
          propertyName -- Имя свойства. 

      Возвращаемое значение – это объект, так называемый «дескриптор свойства»: он содержит значение свойства и все его флаги.
        /* дескриптор свойства:
        {
          "value": "John",
          "writable": true,
          "enumerable": true,
          "configurable": true
        }
        */

    Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.
      Его синтаксис:
        Object.defineProperty(obj, propertyName, descriptor)
          obj, propertyName -- Объект и его свойство, для которого нужно применить дескриптор.
          descriptor -- Применяемый дескриптор.
      
      Если свойство существует, defineProperty обновит его флаги.
      
      В противном случае метод создаёт новое свойство с указанным значением и флагами;
      если какой-либо флаг не указан явно, ему присваивается значение false.

    Ошибки появляются только в строгом режиме
      В нестрогом режиме, без use strict, мы не увидим никаких ошибок при записи в свойства «только для чтения» и т.п. Но эти операции всё равно не будут выполнены успешно. 
      Действия, нарушающие ограничения флагов, в нестрогом режиме просто молча игнорируются.

    Метод Object.defineProperties
      Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество  свойств сразу.

      Его синтаксис:

      Object.defineProperties(obj, {
        prop1: descriptor1,
        prop2: descriptor2
        // ...
      });

      Например:

      Object.defineProperties(user, {
        name: { value: "John", writable: false },
        surname: { value: "Smith", writable: false },
        // ...
      });

      Таким образом, мы можем определить множество свойств одной операцией.



  # Know how to create iterable objects, Symbol.iterator usage (optional)
    https://learn.javascript.ru/iterable
    
    «итератор», создаётся вызовом range[Symbol.iterator](), и именно его next() генерирует значения.
    {done: Boolean, value: any}

    Получение итератора:
      let iterator = str[Symbol.iterator]();

    Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator, как было описано выше.
    
    Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.

    Объекты, которые можно использовать в цикле for..of, называются итерируемыми.

        Технически итерируемые объекты должны иметь метод Symbol.iterator.
            Результат вызова obj[Symbol.iterator] называется итератором. Он управляет процессом итерации.
            Итератор должен иметь метод next(), который возвращает объект {done: Boolean, value: any}, где done:true сигнализирует об окончании процесса итерации, в противном случае value – следующее значение.
        Метод Symbol.iterator автоматически вызывается циклом for..of, но можно вызвать его и напрямую.
        Встроенные итерируемые объекты, такие как строки или массивы, также реализуют метод Symbol.iterator.
        Строковый итератор знает про суррогатные пары.

    Объекты, имеющие индексированные свойства и length, называются псевдомассивами. Они также могут иметь другие свойства и методы, но у них нет встроенных методов массивов.

    Если мы заглянем в спецификацию, мы увидим, что большинство встроенных методов рассчитывают на то, что они будут работать с итерируемыми объектами или псевдомассивами вместо «настоящих» массивов, потому что эти объекты более абстрактны.

    Array.from(obj[, mapFn, thisArg]) создаёт настоящий Array из итерируемого объекта или псевдомассива obj, и затем мы можем применять к нему методы массивов. Необязательные аргументы mapFn и thisArg позволяют применять функцию с задаваемым контекстом к каждому элементу.


# Object as Hash.

  # Be able to loop through Object keys
    https://learn.javascript.ru/keys-values-entries
    Для простых объектов доступны следующие методы:

      Object.keys(obj) – возвращает массив ключей.
      Object.values(obj) – возвращает массив значений.
      Object.entries(obj) – возвращает массив пар [ключ, значение].


# Arrays Built-in methods

 # Know how to copy array part
    arr.slice(start, end);

 # Know how to flatten nested array
    arr.flat();

 # Arrays Iterating, Sorting, Filtering

   # Be able to custom sorting for Array
    arr.sort((a, b) => a - b);
      a > b return > 0 (1)
      a === b return 0,
      a < b return < 0 (-1)

   # Be able to filter Array elements
    arr.filter((item) item < 0);
    Если return true то item попадает в результирующий набор.

 # Functional Scope

  # Know global scope and functional scope
  # Know variables visibility areas
  # Understand nested scopes and able work with them

Functions Parameters / Arguments

  Know how to define Function parameters
  Know difference between parameters passing by value and by reference
  Know how to handle dynamic amount of Function parameters

 # ECMAScript Intermediate

  # Function default parameters
    function add(a = 0, b = 2) {}

  # ECMA script modules
  https://learn.javascript.ru/modules-intro
    Модуль – это просто файл. Один скрипт – это один модуль.

    Модули могут загружать друг друга и использовать директивы export и import, чтобы обмениваться функциональностью, вызывать функции одного модуля из другого:

    export отмечает переменные и функции, которые должны быть доступны вне текущего модуля.
    import позволяет импортировать функциональность из других модулей.

    !!!В модуле на верхнем уровне this не определён (undefined).

    загрузка внешних модулей, таких как <script type="module" src="...">, не блокирует обработку HTML.
    модули, даже если загрузились быстро, ожидают полной загрузки HTML документа, и только затем выполняются.
    сохраняется относительный порядок скриптов: скрипты, которые идут раньше в документе, выполняются раньше.


  # Know how to use spread operator for Function arguments
    function (...args) {}
    function (a, b, ...args) {}

  # Be able to compare arguments and rest parameters
    Arguments -- псевдомассив, не содержит методы массивов. Хотя можно перебирать.
    Все аргументы находятся в псевдомассиве под своими порядковыми номерами.

    function(...rest) {}
    rest -- полноценный массив

  # Spread operator for Array
    let [a, b] = array;

  # Understand and able to use spread operator for Array concatenation Destructuring assignment
    let d = [...array1, ...array2];

  # Be able to discover destructuring assignment concept
  https://learn.javascript.ru/destructuring

  # Understand variables and Function arguments destructuring assignment
  https://learn.javascript.ru/destructuring-assignment
    Пропускайте элементы, используя запятые
    Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:
    // второй элемент не нужен
    let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
    alert( title ); // Consul

    // цикл по ключам и значениям
    for (let [key, value] of Object.entries(user)) {
      alert(`${key}:${value}`); // name:John, затем age:30
    }

    Трюк обмена переменных
    [guest, admin] = [admin, guest];


      let options = {
      title: "Menu",
      width: 100,
      height: 200
    };

    // { sourceProperty: targetVariable }
    let {width: w, height: h, title} = options; //переименование

    // width -> w
    // height -> h
    // title -> title

    alert(title);  // Menu
    alert(w);      // 100
    alert(h);      // 200

  # String templates
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals
  `строка текста ${выражение} строка текста`

  # Know how for..of loop works (optional)
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of
  Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, Map (en-US), Set, объект аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

# Advanced Functions

  # this scope

  # Reference Type & losing this
  https://learn.javascript.ru/bind
  При передаче методов объекта в качестве колбэков, например для setTimeout, возникает известная проблема – потеря this.
  Метод bind возвращает «привязанный вариант» функции func, фиксируя контекст this и первые аргументы   arg1, arg2…, если они заданы.

  Обычно bind применяется для фиксации this в методе объекта, чтобы передать его в качестве колбэка.  Например, для setTimeout.

  Когда мы привязываем аргументы, такая функция называется «частично применённой» или «частичной».

  Частичное применение удобно, когда мы не хотим повторять один и тот же аргумент много раз. Например,  если у нас есть функция send(from, to) и from всё время будет одинаков для нашей задачи, то мы можем   создать частично применённую функцию и дальше работать с ней.

  # Understand difference between function and method
    Значение this вычисляется во время выполнения кода, в зависимости от контекста.
    Вызов без объекта: this == undefined

    Мы даже можем вызвать функцию вообще без объекта:

    function sayHi() {
      alert(this);
    }

    sayHi(); // undefined

    В строгом режиме ("use strict") в таком коде значением this будет являться undefined. Если мы     попытаемся получить доступ к this.name – это вызовет ошибку.

    В нестрогом режиме значением this в таком случае будет глобальный объект (window в браузерe, мы     вернёмся к этому позже в главе Глобальный объект). Это – исторически сложившееся поведение this,    которое исправляется использованием строгого режима ("use strict").

    Обычно подобный вызов является ошибкой программирования. Если внутри функции используется this, тогда     она ожидает, что будет вызвана в контексте какого-либо объекта.



  # Understand how this works, realize this possible issues

  # Manage this scope

  # Be able to replace this scope
  func.bind(newThis);

  # Be able to use call and apply Function built-in methods
  https://learn.javascript.ru/call-apply-decorators


# Functional Patterns

  # Immediately invoked functional expression (IIFE) (optional)
    // Пути создания IIFE

    (function() {
      alert("Скобки вокруг функции");
    })();

    (function() {
      alert("Скобки вокруг всего");
    }());

    !function() {
      alert("Выражение начинается с логического оператора NOT");
    }();

    +function() {
      alert("Выражение начинается с унарного плюса");
    }();


  Know IIFE pattern (optional)

  Callback (Function as argument)

  Know callback pattern

  Understand callback limitations (callback hell) (optional)

  Binding, binding one function twice

  Know how to bind this scope to function

  Carrying and partial functions
  https://learn.javascript.ru/currying-partials


# Network requests

  Fetch (with usage)
  XMLHTTPRequest (concept) (optional)
  WebSocket (concept) (optional)

Web components

  Web components, shadow DOM (concept) (optional)

Date & time

  Timezones (optional)
  Internationalization js (Intl) (optional)

Closures Advanced

  Context (lexical environment)
  Understand function creation context (lexical environment)
  Be able to explain difference between scope and context
  Inner/outer lexical environment
  Understand lexical environment traversing mechanism
  Understand connection between function and lexical environment

Object Oriented Programming

  new keyword
  Understand how new keyword works
  Function constructor
  Know function constructor concept
  Able to create constructor functions
  Public, private, static members
  Know how to create public members
  Know how to create private members
  Know how to create static members
  Understand OOP emulation patterns and conventions

Prototypal Inheritance Basics

  __proto__ property
  Understand __proto__ object property
  Able to use [Object.create] and define __proto__ explicitly
  Able to set / get object prototype (optional)
  prototype property
  Know function prototype property
  Understand dependency between function constructor prototype and instance __proto__
  Able to create 'class' methods using function prototype property

ECMAScript Classes

  Class declaration
  Know class declaration syntax
  Understand difference between class and constructor function
  Getter/setter
  What does super() do and where we have to use it?

ECMAScript Data Types & Expressions

  Object keys/values
  Object calculated props
  Set/Map data types
  WeakSet/WeakMap data types

JavaScript Errors

  try..catch statement
  Know how to handle errors
  Custom errors (optional)

  ECMAScript Advanced
    Garbage collector (concept) (optional)
    Promises
    Promise states
    Promise Chaining
    Promise static methods
    Be able to compare promise and callback patterns (optional)
    Be able to handle errors in promises
    event loop
    async/await

JavaScript in Browser:

Global object window

  Location
  Know browser location structure
  History API (Global object window)
  Know browser History APIconcept
  Be able to navigate within browser history
  Be able to use history state (optional)
  Navigator (optional)
  Know how to parse user agent (optional)
  Know how to discover client platform, browser
  Cookies

Page Lifecycle

  Parsing
  Reflow
  Repaint

Events Basics

  Be able to explain difference between capturing and bubbling
  Know Event concept
  Custom events (optional)

Events Propagation / Preventing

  Know Event propagation cycle
  Know how to stop Event propagation
  Know how to prevent Event default browser behavior
  Delegating
  Understand Event delegating concept
  Understand Event delegating benefits and drawbacks

Timers

  clearTimeout
  requestAnimationFrame (optional)
  Be able to explain difference between setTimeout and requestAnimationFrame (optional)

  Web Storage API & cookies
    Cookies (concept)
    Difference between localStorage, sessionStorage, session and cookies

Typescript:

  Ability to write concise TypeScript code using its constructs
    understanding TS(ES6) module system
    describing variables with primitive data types.
    using interfaces with optional properties, read-only properties, etc...
    creating custom types.
    types/interface differences (optional)
    function types.
    utitily types (optional)
    typeguards (optional)
    generic types (concept)

Design patterns:

  Intermediate knowledge of patterns and best practices:
    design patterns used on his project, and able to compare these patterns (optional)
    KISS, DRY, YAGNI
    The meaning behind SOLID principles.

Web Communication Protocols: (optional)

HTTP vs HTTPS vs HTTP/2
RESTful API
HTTP methods

  HTTP status codes groups

Common web-security knowledge (optional)

  Basic understanding of most common security terms (CORS, XSS) (optional)
    XSS
    CORS
    OWASP Top 10
    Auth (JWT, OAuth, Basic, etc.)

Coding tasks:

  Function.prototype.bind implement polyfill

  Object.create implement polyfill

  Array.flat implement polyfill

  Array.reduce implement polyfill

  'hello world'.repeating(3) -> 'hello world hello world hello world'. How to implement?

  myFunc('!', 4, -10, 34, 0) -> '4!-10!34!0`. How to implement?

  five(plus(seven(minus(three())))) -> 9. How to implement?
  
  add(5)(9)(-4)(1) -> 11. How to implement?

  periodOutput(period) method should output in the console once per every period how mach time has passed since the first function call. Example: periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), ...

  extendedPeriodOutput(period) method should output in the console once per period how mach time has passed since the first function call and then increase the period. Example: // extendedPeriodOutput(100) -> 100(after 100 ms), 200(after 200 ms), 300(after 300 ms)
