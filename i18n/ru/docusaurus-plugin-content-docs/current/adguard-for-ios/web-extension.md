---
title: Веб-расширение Safari
sidebar_position: 3
---

Веб-расширения добавляют дополнительные функции в Safari. Здесь вы можете найти [больше информации о веб-расширениях](https://developer.apple.com/documentation/safariservices/safari_web_extensions).

![Как выглядит веб-расширение в Safari](https://cdn.adguard.com/public/Adguard/kb/iOS/webext/menu_en.png)

Веб-расширение AdGuard для Safari — это инструмент, который позволяет пользоваться преимуществами новых функций iOS 15. Он служит для расширения возможностей приложения AdGuard для iOS. С ним AdGuard может применять продвинутые правила фильтрации и, в конечном счёте, блокировать больше рекламы.

## Что оно делает

По умолчанию, Safari предоставляет блокировщикам контента только базовые инструменты. Эти инструменты не позволяют добиться уровня блокировки, который доступен блокировщикам на других операционных системах (Windows, Mac, Android). Например, приложения AdGuard для других платформ могут использовать такие мощные средства борьбы против рекламы как [CSS-правила](/general/ad-filtering/create-own-filters.md#cosmetic-css-rules), [CSS-селекторы](/general/ad-filtering/create-own-filters.md#extended-css-selectors) и [скриптлеты](/general/ad-filtering/create-own-filters.md#scriptlets). К сожалению, эти инструменты совершенно незаменимы при работе со сложной рекламой, такой как, например, видеореклама в YouTube.

Веб-расширение AdGuard для Safari дополняет AdGuard, давая ему возможность применять все эти типы правил фильтрации.

Помимо этого, веб-расширение AdGuard для Safari может быть использовано для управления приложением AdGuard для iOS прямо из браузера. Нажмите на кнопку *Расширения* — это иконка с пазлом, которая может быть расположена левее или правее адресной строки, в зависимости от типа вашего устройства. Найдите в списке расширений **AdGuard** и нажмите на него.

![Меню веб-расширения](https://cdn.adguard.com/public/Adguard/kb/iOS/webext/ext_adguard_en.png?1)
> На устройствах iPad веб-расширение AdGuard для Safari доступно напрямую, путём нажатия на иконку AdGuard в адресной строке браузера.

Вы увидите следующий список опций:

* **Включение/выключение защиты на текущем сайте**. Сдвиньте переключатель в положение «выкл.», чтобы полностью отключить работу AdGuard на текущем сайте и добавить соответствующее правило-исключение. Повторное нажатие по переключателю приведёт к возврату защиты для сайта и удалению данного правила. После каждого подобного действия может потребоваться некоторое время, чтобы изменения вступили в силу.

* **Ручная блокировка элемента на странице**. Нажмите кнопку *Заблокировать элементы на этой странице*, чтобы вызвать попап для блокировки элемента. Выберите любой элемент на странице, который хотите скрыть, настройте область выделения и после предпросмотра изменений подтвердите скрытие элемента. Соответствующее правило фильтрации будет добавлено в AdGuard (позже вы можете отключить или удалить это правило, чтобы вернуть отображение элемента).

* **Сообщить о проблеме**. Смахните меню вверх, чтобы показать кнопку *Сообщить о проблеме*. Используйте её, чтобы отправить отчёт о пропущенной рекламе или любой другой проблеме, встреченной на текущей странице.

## Как включить веб-расширение AdGuard в Safari

### В настройках iOS

> Веб-расширение AdGuard для Safari значительно улучшает качество блокировки рекламы, поэтому мы рекомендуем включить его на всех сайтах.

Веб-расширение не является самостоятельным приложением и требует наличия AdGuard для iOS. Если на вашем устройстве не установлен AdGuard для iOS, пожалуйста, сначала [установите его](/adguard-for-ios/installation.md) и выполните первый запуск приложения, чтобы подготовить его к работе.

После того, как вы выполнили эти действия, откройте раздел *Настройки > Safari > Расширения*.

![Выберите "Safari"](https://cdn.adguard.com/public/Adguard/kb/iOS/webext/settings1_en.png)

![Выберите "Расширения"](https://cdn.adguard.com/public/Adguard/kb/iOS/webext/settings2_en.png)

Найдите раздел **Разрешить эти расширения** и выберите **AdGuard** среди доступных расширений. Нажмите на него и включите переключатель.

![Выберите "AdGuard" в разделе РАЗРЕШИТЬ ЭТИ РАСШИРЕНИЯ](https://cdn.adguard.com/public/Adguard/kb/iOS/webext/settings3_en.png)

Коснитесь его, затем включите переключатель. На том же экране убедитесь, что расширение AdGuard имеет необходимые разрешения: опция **Все сайты** должна иметь статус *Разрешить*.

![](https://cdn.adguard.com/public/Adguard/kb/iOS/webext/settings4_en.png)

> Веб-расширение AdGuard для Safari требует доступ к содержимому веб-страниц для своей работы, но не использует его ни для каких других целей, кроме как для блокировки рекламы.

### В Safari

Вы также можете включить расширение AdGuard прямо в браузере Safari. Для этого нажмите кнопку *Расширения* (если рядом с адресной строкой нет кнопки Расширения, нажмите кнопку `aA`).

![В Safari нажмите значок A](https://cdn.adguard.com/public/Adguard/kb/iOS/webext/safari1_en.png)

Затем найдите опцию *Управлять расширениями* и выберите её. В открывшемся окне активируйте переключатель **AdGuard**.

![](https://cdn.adguard.com/public/Adguard/kb/iOS/webext/safari2_en.png)

![](https://cdn.adguard.com/public/Adguard/kb/iOS/webext/safari3_en.png)

Если вы используете этот метод, вам всё равно может потребоваться открыть настройки Safari, чтобы выдать расширению AdGuard необходимые разрешения.

Теперь AdGuard должен появиться среди доступных расширений в Safari. Нажмите на него, затем нажмите на жёлтую иконку с символом **i**. Включите **Расширенную защиту**, нажав кнопку *Включить* и подтвердив действие.
> Если вы используете AdGuard для iOS без Premium-подписки, вы не сможете включить **Расширенную защиту**.

В качестве альтернативы вы можете включить **Расширенную защиту** прямо в приложении, во вкладке **Защита** (вторая иконка слева в нижнем ряду).

Веб-расширение AdGuard для Safari работает только на iOS версий 15 и выше.