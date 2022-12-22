---
title: Политика фильтров AdGuard
sidebar_position: 6
---

Во время обсуждения рекламных фильтров AdGuard часто возникают дискуссии о том, должен ли AdGuard блокировать ту или иную рекламу. При составлении фильтров мы уже давно придерживаемся определённых правил. Во многом наша политика похожа на [политику EasyList](https://easylist.to/pages/policy.html), которую мы находим правильной и уместной. Тем не менее, некоторые пункты мы пересмотрели и публикуем собственную версию.

![Фильтровать или не фильтровать](https://cdn.adtidy.org/public/Adguard/Common/page_filtering.png)

## Терминология

В этом тексте мы используем термины **собственный** и **сторонний**, которые обозначают принадлежность к тем или иным сайтам.

«‎Собственный»‎ обозначает принадлежность либо к сайту, на который пользователь перешёл намеренно, либо к набору ресурсов в сети, управляемых той же организацией. На практике мы почти всегда под этим понимаем принадлежность к одному и тому же регистрируемому домену: публичный суффикс плюс одна дополнительная метка. Пример: `site.example`, `www.site.example` и `subsite.example` принадлежат одной и той же стороне, поскольку `site.example` — это их общий регистрируемый домен.

«Сторонний»‎ обозначает принадлежность к любому сайту, в отношении которого неприменимо обозначение «собственный». Взаимодействия с любыми не-собственными элементами считаются сторонними, даже если пользователь проинформирован об этом в контексте (например, в случае перенаправления). Простое наведение курсора, отключение звука, постановка на паузу или скрытие любого элемента пользователем не рассматривается нами как намеренное взаимодействие.

## Общие критерии

Они применяются к правилам всех фильтров.

- Правила, которые часто вызывают проблемы с работой сайтов, будут удаляться.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Посещаемость определяется по открытой статистике (если она есть) либо по косвенным признакам, например, по количеству подписчиков в социальных сетях. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Рекламные фильтры

В этой части описываются Базовый фильтр AdGuard, Фильтр мобильной рекламы и следующие языковые фильтры: русский, немецкий, голландский, испано-португальский, японский, турецкий, китайский и французский.

**Что должны блокировать эти фильтры?**

- Фильтры должны блокировать рекламные объявления везде, где это возможно.
- Реклама должна блокироваться независимо от её причин и целей.
- Мы будем блокировать рекламу, вызванную вредоносными приложениями или расширениями, которые вставляют рекламу. Обратите внимание, что мы сделаем это только при условии, если вы укажете, как нам установить это приложение или расширение.

**Ограничения и исключения**

Если правило подпадает под описанный ниже список ограничений, то оно не будет добавлено в основные фильтры.

- Собственная реклама сайтов не должна удаляться специально. С другой стороны, она не должна быть разблокирована, если это может привести к появлению сторонней рекламы.
- Правила для конкретного сайта будут добавлены только в том случае, если на нём достаточно трафика. Посещаемость определяется по открытой статистике (если она есть) либо по косвенным признакам, например, по количеству подписчиков в социальных сетях. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.
- Противоблокировочные скрипты будут блокироваться только в том случае, если они ограничивают функциональность сайта или серьёзно мешают его использованию.
- Противоблокировочные скрипты не будут блокироваться в случаях, когда это запрещено законом.
- Правила, которые часто вызывают проблемы с работой сайтов, будут удаляться.

## Фильтр счётчиков и систем аналитики

**Что должно блокироваться этим фильтром?**

- Фильтр должен блокировать трекеры (счётчики), которые собирают личные данные пользователей.

Мы определяем **трекинг** как сбор данных о личности и действиях человека на одном или нескольких сайтах. Даже если по этим данным невозможно установить личность человека, подобные действия всё равно считаются трекингом.

**Трекер (счётчик)** — это онлайн-скрипт, единственной целью (или одной из целей) которого является трекинг.

**Ограничения и исключения**

Если правило подпадает под описанный ниже список ограничений, то оно не будет добавлено в фильтр.

- Правила, которые часто вызывают проблемы с работой сайтов, будут удаляться.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Посещаемость определяется по открытой статистике (если она есть) либо по косвенным признакам, например, по количеству подписчиков в социальных сетях. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Фильтр отслеживания по URL

**Что должно блокироваться этим фильтром?**

- Этот фильтр должен удалять все параметры отслеживания из URL-адресов.

Мы определяем **трекинг** как сбор данных о личности и действиях человека на одном или нескольких сайтах. Даже если по этим данным невозможно установить личность человека, подобные действия всё равно считаются трекингом.

**Ограничения и исключения**

Если правило подпадает под описанный ниже список ограничений, то оно не будет добавлено в фильтр.

- Правила, снижающие уровень безопасности пользователей, будут удаляться.
- Правила, которые часто вызывают проблемы с работой сайтов, будут удаляться.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Посещаемость определяется по открытой статистике (если она есть) либо по косвенным признакам, например, по количеству подписчиков в социальных сетях. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Фильтр виджетов социальных сетей

**Что должно блокироваться этим фильтром?**

- Фильтр должен блокировать виджеты социальных сетей на сторонних сайтах, такие как кнопки «Нравится» и «Поделиться», виджеты групп, рекомендаций и т. п.

**Ограничения и исключения**

Если правило подпадает под описанный ниже список ограничений, то оно не будет добавлено в фильтр.

- Правила, которые блокируют виджеты, являющиеся частью функциональности сайта, такие как «Комментарии», «Встроенная запись», «Опросы» или виджеты, требующие авторизации через социальные сети.
- Правила, блокирующие ссылки на сообщества сайта в социальных сетях.
- Правила, которые часто вызывают проблемы с работой сайтов, будут удаляться.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Посещаемость определяется по открытой статистике (если она есть) либо по косвенным признакам, например, по количеству подписчиков в социальных сетях. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Фильтр раздражителей

**Что должно блокироваться этим фильтром?**

- Этот фильтр должен блокировать элементы на странице, которые не являются рекламой, но мешают просмотру и затрудняют восприятие содержания сайта. Сюда относятся уведомления о куки, сторонние виджеты, всплывающие сообщения внутри страниц, формы подписки на email-рассылки, баннеры с информацией о скидках и агрессивно размещённые виджеты социальных сетей.

**Ограничения и исключения**

Если правило подпадает под описанный ниже список ограничений, то оно не будет добавлено в фильтр.

- Правила, блокирующие элементы, необходимые для нормального функционирования сайта (например, формы авторизации), не будут заблокированы, даже если они подходят под определение.
- Правила, которые часто вызывают проблемы с работой сайтов, будут удаляться.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Посещаемость определяется по открытой статистике (если она есть) либо по косвенным признакам, например, по количеству подписчиков в социальных сетях. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Фильтр поисковой рекламы и саморекламы

В отличие от других фильтров, этот фильтр **разблокирует** определённую рекламу. Подробнее об этом читайте в статье [о поисковой рекламе и саморекламе](../search-ads).

**Что должен разблокировать этот фильтр?**

- Поисковую рекламу (рекламу, появляющуюся в выдаче при использовании онлайн-поисковиков).
- Собственную рекламу сайтов (когда реклама на сайте продвигает сам сайт или же относящиеся непосредственно к нему социальные сети и другие подобные ресурсы).

**Ограничения и исключения**

- Правила, которые часто вызывают проблемы с работой сайтов, будут удаляться.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Посещаемость определяется по открытой статистике (если она есть) либо по косвенным признакам, например, по количеству подписчиков в социальных сетях. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Требования к качеству правил фильтрации

- Правила должны быть максимально эффективными с точки зрения производительности.
- Правила-исключения должны быть максимально конкретизированы, чтобы не разблокировать ничего лишнего.
- Правила CSS и JS-вставок должны использоваться как можно реже и только в том случае, если без них блокировка рекламы невозможна.