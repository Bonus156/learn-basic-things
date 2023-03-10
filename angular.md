# Components
{{ }} --  интерполяция.
Инерполяция применяется для записи содержимого элемента.

[] = "" -- привязка к атрибутам.
() = "" -- привязка к событиям элементов.
Привязка используется для задания значений атрибутов элементов.
Привязка принимает выражение.
Привязка может быть как к атрибутам элемента, так и к DOM событиям элемента.

Событие передается через $event
(click) = "handleClick($event)"

# Angular generated

Type            |  Command
-----------------------------------------------------
Component       |  ng g component item-path-and-name
-----------------------------------------------------
Directive       |  ng g directive item-path-and-name
-----------------------------------------------------
Pipe            |  ng g pipe item-path-and-name
-----------------------------------------------------
Service         |  ng g service item-path-and-name
-----------------------------------------------------
Class           |  ng g class item-path-and-name
-----------------------------------------------------
Guard           |  ng g guard item-path-and-name
-----------------------------------------------------
Interface       |  ng g interface item-path-and-name
-----------------------------------------------------
Enum            |  ng g enum item-path-and-name
-----------------------------------------------------
Module          |  ng g module item-path-and-name
-----------------------------------------------------

# Decorators
  @Component
    Содержит следующие свойства для настройки:
      @Component({
        selector: 'app-selector', 
          -- указывает название тега элемента для использовании в шаблоне
        templateUrl: './name.component.html', 
          -- привязывает шаблон по указанному пути
        styleUrls: ['.name.component.scss'],
          -- привязывает стили к указанному шаблону
      })
  Так же @Component может содержать:
    animations -- список анимации компонента
    changeDetection -- стратегия определения изменений используемая компонентом
    encapsulation -- стиль стратегии инкапсуляции используемой компонентом
    entryComponents -- список компонентов, которые динамически вставляются в отображения компонента
    * exportAs -- имя под которым инстанс компонента экспортируется в шаблон
    * host -- сопоставление свойства класса с привязками к событиям, свойствам и атрибутам основного элемента
    * inputs -- список имен свойств класса для привязки данных как компонент Input
    Interpolation -- произвольные интерполяции используемых пометок в шаблоне компонента
    moduleId -- ES/CommonJS ИД модуляфайла в котором этот компонент определен
    * outputs -- список имен свойств класса что показывает выходные события на которые другие могут подписаться

    * providers -- список сервисов доступных для этого компонента и его потомков. При указании сервиса здесь, сервис будет доступен только внутри данного компонента.

    * queries -- настраиваемые очереди которые могут быть вставлены в компонент
    * selector -- css селектор, который идентифицирует этот компонент в шаблоне
    styleUrls -- список путей к файлам стилей, которые могут быть применены для этого компонента
    styles -- стили, объявленные инлайн, применяемые к этому отображению компонента
    template -- инлайн объявленный шаблон для отображения
    templateUrl -- путь к внешнему файлу, содержащему шаблон представления
    viewProviders -- список поставщиков, доступных этому компоненту и потомкам его представления.
  @Input


# Components
Component состоит из представления, логики и метаданных.
Шаблон совместно со стилями (HTML и SCSS файлы) является представлением.
Логика находится в TypeScript файлах.
Метаданные распологаются в декораторе @Component внутри файла TypeScript.

Для создания нового компонента необходимо выполнить команду:
  ng g component ./components/name

Создастся компонент с префиксом app-name.

Префикс при названии компонентов задается в файле angular.json в поле prefix, по умолчанию prefix имеет значение app.

При создании компанента используя angular generate также имя нового компонента добавится в свойство declarations соответствующего модуля @NgModule

Двухстороннее связывание: 
ngModel, 
<input [(ngModel)]="value">

При двухстороннем связывании указывается имя переменной, куда будет записываться значение тега, и при изменении этого значения будут обновлены все элементы, где используется данная переменная.

Для использования ngModel необходимо импортировать FormsModule в свойство imports app.module.ts

Связывание элементов :

 <h1 #elem1 [title]="simpleValue">{{ 'Content ' elem1.title }}</h1>
 #elem1 -- Выполняет роль селектора, аналогично document.querySelector() 
 (условна как IDшка)
 elem1.prop -- Собственно использование полученного элемента.

Для получения доступа к элементу внутри класса ts файла необходимо использовать декоратор @ViewChild

@ViewChild('IDName', {static: false}) elementReference: ElementRef;
IDName -- то что указывалось через # в тэге элемента.
{static: false} -- обязательно только для 8-го Angular'a.
elementReference -- используется далее, является полем класса.
ElementRef -- тип ссылки на элемент.

Пример дальнейшего использования:
this.elementReference.nativeElement.style.background = 'black';
Для обращению к элементу необходимо вызвать свойство nativeElement !!!

Аналогично через @ViewChild можно обратиться и к вложенному компоненту
@ViewChild(InnerNameComponent, {static: false}) innerComponent: InnerComponent;

Либо @ViewChildren для того, чтобы достать несколько компонентов с одинаковым названием.

@ViewChildren(InnerNameComponent) innerComponent: QueryList<InnerComponent>;

 Для указания стилей самого компонента необходимо использовать селектор :host.

 Для указания стилей для классов не только внутри компонента, необходимо написать стили с указанием префикса 
 ::ng-deep .my-class {
  color: red;
 }


# Lifecycle hooks
  ngOnChanges() вызывается когда мы меняем внутренние свойства через bindings директивы @Input. Вызывается самым первым. Первее может вызываться только конструктор.
  При создании вызывается самым первым и делает привязку к значениям.
  Делает перепривязку к свойствам при изменении значения. Вызывается каждый раз, когда изменяется значение.

  ngOnInit() вызывается 1 раз после того как все привязки произошли, посоле первого ngOnInit

  ngDoCheck() вызывается тогда, когда Angular не может сдетектить самостаятельно путем встроенного механизма

  ngAfterContentInit() вызывается когда проинициализировалась внутренняя разметка. Всё содержимое директивы.

  ngAfterContentChecked() 

  ngAfterViewInit() вызывается после инициализации View

  ngAfterViewChecked()

  ngOnDestroy() вызывается когда мы уходим из странички. Его используют для очистки памяти и потоков данных.


 

 # Directive
 Директивы, те же компоненты, только не имеющие своего шаблона отображения.
 Директиву можно привязать к уже существующему DOM элементу, позваляющая изменить его отображение, поведение а так же переопределить его структуру.
 @Directive -- декоратор директивы.

Директива состоит из класса и метаданных.

Директивы бывают:
Components (Компонентные)   <my-component></my-component>

*Structural directives (Структурные директивы)   <div *myDirective></div>

[Attribute directives] (Атрибутные директивы)   <div myDirective></div>
                                                <div [myDirective]></div>
                                                <div (myDirective)></div>
                                                <div [(myDirective)]></div>

Создание директивы с использованием ng/cli:
ng g directive directives/new-my-direct

При создании добавляется в declarations @NgModule

Встроенные директивы:

  **ngStyle:**
    <p [ngStyle]="{ 'background-color': getColor() }">Paragraph</p>
    Позволяет использовать выражения для формирования стилей.
    ngStyle принимает объект в формате ключ - значение

    Либо в случае необходимости заменить всего одно свойство можно использовать следующий синтаксис:
   <p [style.background-color]="'green'">Paragraph</p>

  **ngClass:**
   <p [ngClass]="{ bold: true, italic: false, red: false }">Paragraph</p>
   <p [ngClass]="{ bold, italic, red }">Paragraph</p>
   <p [ngClass]="{ 'bold', 'italic', 'red' }">Paragraph</p>

   Если необходимо установить одно свойство:
   <p [class.italic]="true">Paragraph</p>

  **ngNonBindable:** 
  Говорит о том что никакой интрополяции не будет, а это просто текст.
    <p ngNonBindable> 
      Этот текст не содержит никакой {{ interpolation }}
    </p>
    Используется для написания документации.

  @HostListener -- Закидывает листенер в на коренной элемент, что позволяет избежать привязок и интерполяций.

  Пример использования
  @HostListener('mouseenter', ['$event'])
  public onMouseEnter(event: MouseEnter) {
    console.log('Mouse Enter Event');
  }

  @HostBindings -- Позволяет обратиться к стандартному атрибуту

  @HostBindings('attr.aria-label') public label = 'This is an aria-label';

# Структурные директивы
Структурные директивы предоставляют возможность менять структуру элемента, аналогично *ngIf и *ngFor.

<ng-template> - по умолчанию не показывается, пока предварительно не обратиться к нему

Директива *ngIf -- Предназначена для условного вывода элемента в DOM.

Пример при использовании стандартной директивы *ngIf
<div *ngIf="hero" class="name">{{ hero.name }}</div>
преобразуется в :
<ng-template [ngIf]="hero">
  <div class="name">{{ hero.name }}</div>
</ng-template>

Else microsyntax директивы *ngIf

<div class="feed" *ngIf="posts; else loading">
  ...
</div>
используется с:
<ng-template #loading>
  <div>Loading...</div>
</ng-template>

*ngSwitch -- Применяется для условного вывода элементов в DOM аналогично switch case JavaScript

<div [ngSwitch]="hero?.emotion">
  <app-happy-hero *ngSwitchCase="'happy'" [hero]="hero"></app-happy-hero>
  <app-sad-hero *ngSwitchCase="'sad'" [hero]="hero"></app-sad-hero>
</div>

Преобразуется в:
<div [ngSwitch]="hero?.emotion">
  <ng-template [ngSwitchCase]="'happy'">
    <app-happy-hero [hero]="hero"></app-happy-hero>
  </ng-template>
  <ng-template [ngSwitchCase]="'sad'">
    <app-sad-hero [hero]="hero"></app-sad-hero>
  </ng-template>
</div>

*ngFor -- Применяется для итерации по элементам массива и отрисовки элементов в массиве в таком количестве, в котором они содержаться в массиве.

*ngFor microsyntax
let [template input variable] of [array];
let myVariable = [variable];

========================================================================
Variable         | Meaning                        | Return type
========================================================================
index            |  Индекс текущего элемента      |  number (starts 0)
------------------------------------------------------------------------
first            |  Является ли элемент первым    |  boolean
------------------------------------------------------------------------
last             |  Является ли элемент последним |  boolean
------------------------------------------------------------------------
even             |  Является ли элемент четным    |  boolean
------------------------------------------------------------------------
odd              |  Является ли элемент нечетным  |  boolean
------------------------------------------------------------------------

Используется микросинтаксис следующим образом:
  <div *ngFor="let post of posts; let i = index; let isOdd = odd" [class.grey] = "isOdd"></div>

<ng-container></ng-container> -- Структурная обертка, которая будет показываться всегда. ng-container не создает тег-обертку

Директива -- это TypeScript класс который использует соответствующий декоратор, этот класс аттачиться (подключается) к существующему DOM элементу и изменяет его внешний вид, поведение или структуру.

В зависимости от того, для чего предназначены директивы. Директивы подразделяются на атрибутные и структурные.
Атрибутные директивы изменяют внешний вид элемента и поведение.
Структурные директивы изменяют структуру DOM элемента (Могут убирать элемент либо добавлять, либо повторять его необходимое количество раз).


# Pipe

Pipe -- это класс со своим декоратором. Этот класс позволяет изменять данные внутри шаблона.
Использует декоратор @Pipe

Имеют следующий листинг использования:
<p>{{ выражение | имя_pipe:параметр_1:параметр_2 }}</p>
Пример:
<p>{{ 'Angular' | slice:3 | uppercase }}</p>

Pipe принимает и возвращает значение, что позволяет чейнить Pipe внутри шаблона.

Так же можно использовать Pipe внутри класса как функции, для этого сначала импортируем их в класс

import { AgePipe } from ....
import { DatePipe } from ...

, указываем в декораторе компонента как providers

@Constructors({
  ...
  providers: [AgePipe, DatePipe],
  ...
})

, назначаем соответствующим полям в конструкторе

constructor(private datePipe: DatePipe, private agePipe: AgePipe) {}

, а затем используем в коде

public currentDay = this.datePipe.transform(new Date(), 'yyyy/MM/dd');
....
this.employee = this.agePipe.transform(employees, 30);

Стандартные Pipe:
date 
  Принимает аргумент с форматом даты в формате типа 'dd:MM:yy', либо предопределенные форматы: 'short', 'medium', 'long' и т.п.

slice -- аналогично строкам и массивал

currency -- для форматирования валюты

number (Decimal Pipe) -- для форматирования десятичной дроби

uppercase

lowercase

titlecase

percent

please -- добавляет please в начало строки

Pure Pipe -- это пайп по дефолту. Функция transform которого выполняется только в случае изменения примитивного значения либо изменения ссылки на объект. В случае мутации объекта (добавления свойства, добавление элемента в массив, изменение свойства) Pipe не отрабатывает.

Impure Pipe реагирует абсолютно на всё. Но есть особенность, такой Pipe срабатывает на каждый чих приложения, каждый event.

AsyncPipe -- работает с асинхронными объектами... (Промисы и Обзёрвабле)


# Модули
В Angular модуль -- это класс с декоратором @NgModule

Лучшая организаци bizness логики 

Типы @NgModules:

Библиотеки модулей

Фичи модули

Core модули

Shared модули

Routing модули

Декоратор @NgModule содержит следующие свойства:

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [],
  bootstrap: []
})

declarations -- массив из компонентов, директив и пайпов, которые будут доступны в данном конкретном модуле. Не выполняет функцию экспорта.
imports -- массив который импортирует другие модули
exports -- используется для экспорта компонентов модули и сделать их публичными
providers -- определяют сервисы, которые могут быть использованы внутри даннорго конкретного модуля.
bootstrap -- содержит корневой компонент, с которого будет начинаться запуск

# Dependency Injections
Паттерн программирования при котором в конструктор нового класса пеердаются все конструкторы классов, которые используются в его теле.

Передача классов происходит следующим образом: 
constructor(public engine: Engine, public wheels: Wheels) {};

# Сервисы
Сервисы могут содержать любые состояния, функции и фичи.
Сервисы не должны быть в спагетти стайле.
Сервисы являются синглтоном. Это позволяет хранить состояние.
Есть возможность создания нескольких экземпляров сервисов...


@Injectable() -- декоратор, который используется для создания сервисов. Говорит о том, что данный класс может использоваться в механизме DI. 

Сервисы нужно помещать в секцию providers объявление @NgModule()

Создание инстанса класса сервиса происходит в момент передачи класса в секцию providers компонента или модуля. А в конструкторе происходит получение доступа к инстансу ранее созданного сервиса.
Если сервис включен в provide секцию компонента, то данный сервис доступен только в этом компоненте.

@Optional() -- декоратор, который при объявлении в конструкторе класса и не запровайдженом сервисе не ложит приложение а просто устанавливает значение поля в null вместо класса сервиса.

# Router
 Для перехода между страницами в роутере необходимо в шаблоне указывать ссылки со следующим видом 
 <a routerLink="mainPage" routerLinkActive="active"></a>

 routerLink -- ссылка на конкретное правило перехода
 routerLinkActive -- указывает активна ли ссылка в данный момент.
 На практике с использованием привязок данный синтаксиси выглядит следующим образом:

 <a [routerLink]="['/user', userName]" routerLinkActive="active">My Profile</a>

 routerLinkActiveOptions="{ exact: true }" -- указывается в атрибуте компонента навигационной ссылки для определения нужно ли досканальное сравнение URL'а

 # Lazy loading module

 В основном характерно для фича-модулей.

 # Guards 
 Запрещает пользователям переключаться на определенные страницы 
 Содержит методы canActivate и canLoad

 # RxJS 

 Для использования RxJS необходимо добавить её в проект командой:
  npm install --save rxjs

  и импортировать Observable

  import { Observable } from 'rxjs';
 
  **Создание**
 // Создается объект обзёрвабл
 const source = Observable.create((observer) => {
  let count = 0;
  console.log('Observable created');

  // Описывается логика объекта

  const timer = setInterval(() => {
    if (count < 3) {
      // метод next генерит новое событие с передачей параметра как результата выполнения кода.
      observer.next(count++);
    } else {
      // выполняется когда заканчивается естественная генерация событий.
      observer.complete();

      // Выполняется для генерации ошибки
      observer.error('I am broke');
    }, 1000);

    // Объект обзёрвабл должен возвращать деструктор!!!
    // Который очищает память и уничтожает при необходимости ранее созданные объекты
    return () => {
      console.log('Observable destroyed');
      clearInterval(timer);
    }
  })
 });

  **Подписка**

  Подписка на обзёрвабл происходит следующим образом
  const subscription = source.subscribe(
    // Callback, который выполняется при получении нового события от обзёрвера
    (val) => console.log('next', val),
    // Callback при получении ошибки
    (err) => console.log('error', err),
    // Callback при окончании работы обзёрвера
    () => console.log('completed')
  );




Для создания потока событий мы используем метод Observable.create(), куда в качестве callback'а передается функция, которая содержит в качестве параметра observer, который отвечает за генерацию всех событий через следующие методы:

Методы объекта Observer
.next() -- Генерация следующего события
.error() -- Генерация ошибки
.complete() -- Генерация естественного завершения кода

Мы можем на него подписаться, в подписке мы передаем 3 callback'а, первый обрабатывает успешные события,  второй ошибки, а третий когда мы закрываем трубу.

  **Метод .of(any)**
  Данный метод так же импортируется из бибилиотеки RxJS
  import { of } from 'rxjs';

  source = of({ message: 'any Object' });
  Он создает трубу, которая генерирует события которая содержит в себе объект переданный которая тут же завершается.

  Можно так же подписаться 
  const subscription = source.subscribe(
    (val) => console.log('next', val),
    (err) => console.log('error', err),
    () => console.log('completed')
  );

  **Метод .from([])**
  import { from } from 'rxjs';

  source = from([10, 20, 30]);

  Аналогичен методу of но принимает в качестве параметра не объект, а массив объектов.
  При выполнении данный метод генерирует события поочереди в зависимости от того как они расположены в данном массиве. Количество событий равно количеству элементов массива. 
  По завершению перебора элементов массива труба закрывается.

  **Метод .range(10, 4)**
  import { range } from 'rxjs';
  range(start, count);
  source = range(10, 4);
  выдает 10, 11, 12, 13 в качестве результатов события.

  **Метод .interval(2000)**

  import { interval } from 'rxjs';
  import { take } from 'rxjs/operators';

  source = interval(2000).pipe(
    take(2);
  );

  # RxJS Marbles


  Observable  ничего не делает пока на него не подпишуться...

  Promise запускается один раз и использует то значение которое было посчитано.

  Observable создается столько раз сколько на него подписались.