To learn patterns
https://doka.guide/js/clean-architecture/
https://doka.guide/js/architecture-data-flow/
https://facebook.github.io/flux/
https://doka.guide/tools/microservices/
https://doka.guide/js/design-patterns-creational/


Архитектурные паттерны.

    MVC (сокращение от Model—View—Controller)

        Взаимоотношение компонентов в паттерне MVC
        https://doka.guide/js/architecture-mvc/
    
            Пользователь подаёт команды программе. Контроллер получает эти команды и преобразует данные в модели. Модель обновляется и уведомляет представление о том, что нужно перерисовать интерфейс, чтобы отобразить изменения в данных.
            https://herbertograca.com/2017/08/17/mvc-and-its-variants/

    MVVM (сокращение от Model—View—Viewmodel)

        Вместо контроллера используется Viewmodel. Это «надстройка» над представлением, которая связывает данные и представление так, что разработчикам больше не нужно писать самим логику обновления UI и обработки команд пользователя.
        Для работы связывания нужен Binder (биндер) — фреймворк, библиотека или целый язык, который автоматически отображает изменения из модели в UI.

    MVP (сокращение от Model-View-Presenter)

    Место контроллера занимает презентер. Главное отличие от MVC в том, как расположены компоненты и, соответственно, как передаются данные. Если в MVC данные передавались по кругу, то в MVP компоненты располагаются по линии. На концах находятся модель и представление, а между ними — презентер.



Паттерны проектирования.

    Порождающие

        «Фабрику»;

        «Фабричный метод»;
        https://refactoring.guru/ru/design-patterns/factory-method
        Лучшее объяснение.
        https://web-artcraft.com/blog/sablon-proektirovania-factory-method-v-realizacii-na-javascript
            Фабричный метод — это порождающий паттерн проектирования, который определяет общий интерфейс для создания объектов в суперклассе, позволяя подклассам изменять тип создаваемых объектов.

            Шаблон позволяет классу делегировать создание объектов подклассам. Используется, когда:

            Классу заранее неизвестно, объекты каких подклассов ему нужно создать.

            Обязанности делегируются подклассу, а знания о том, какой подкласс принимает эти обязанности, локализованы.

            Создаваемые объекты родительского класса специализируются подклассами.

            class Car {
             constructor() {
               this.color = 'white';
               this.maxSpeed = 300;
               this.wheels = 4
             }
            }

            class Moto {
             constructor() {
               this.color = 'black';
               this.maxSpeed = 200;
               this.wheels = 2
             }
            }

            const types = {
             Moto,
             Car
            };

            class TransportFactory {
             static createTransport(type) {
               return new types[type]
             }
            }

            const moto = TransportFactory.createTransport('Moto');
            const car = TransportFactory.createTransport('Car');

            console.log(moto); // Moto { color: 'black', maxSpeed: 200, wheels: 2 }
            console.log(car); // Car { color: 'white', maxSpeed: 300, wheels: 4 }



        «Абстрактную фабрику»;
        «Строителя».

    Структурные 

        «Адаптер»;
        «Декоратор»;
        «Фасад»;
        «Прокси».

    Поведенческие

        «Цепочку ответственности»;
        «Стратегию»;
        «Команду»;
        «Наблюдателя».
