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
    * providers -- список поставщиков доступных для этого компонента и его потомков
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

 

Lifecycle hooks
  ngOnChanges() вызывается когда мы меняем внутренние свойства через bindings директивы @Input. Вызывается самым первым. Первее может вызываться только конструктор.
  При создании вызывается самым первым и делает привязку к значениям.
  Делает перепривязку к свойствам при изменении значения. Вызывается каждый раз, когда изменяется значение.

  ngOnInit() вызывается 1 раз после того как все привязки произошли, посоле первого ngOnInit

  ngDoCheck() вызывается тогда, когда Angular не может сдетектить самостаятельно путем встроенного механизма

  ngAfterContentInit() вызывается когда проинициализировалась внутренняя разметка

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

  