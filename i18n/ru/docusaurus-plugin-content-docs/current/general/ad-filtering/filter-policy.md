---
title: Политика фильтров AdGuard
sidebar_position: 6
---

Во время обсуждения рекламных фильтров AdGuard часто возникают дискуссии о том, должен ли AdGuard блокировать ту или иную рекламу. При составлении фильтров мы уже давно придерживаемся определённых правил. Во многом наша политика похожа на [политику EasyList](https://easylist.to/pages/policy.html), которую мы находим правильной и уместной. Тем не менее, некоторые пункты мы пересмотрели и публикуем собственную версию.

![Фильтровать или не фильтровать](https://cdn.adguard.com/public/Adguard/Common/page_filtering.png)

## Терминология

В этом тексте мы используем термины **собственный** и **сторонний**, которые обозначают принадлежность к тем или иным сайтам.

«‎Собственный»‎ обозначает принадлежность либо к сайту, на который пользователь перешёл намеренно, либо к набору ресурсов в сети, управляемых той же организацией. На практике мы почти всегда под этим понимаем принадлежность к одному и тому же регистрируемому домену: публичный суффикс плюс одна дополнительная метка. Пример: `site.example`, `www.site.example`и `subsite.example` принадлежат одной и той же стороне, поскольку `site.example` — это их общий регистрируемый домен.

«Сторонний»‎ обозначает принадлежность к любому сайту, в отношении которого неприменимо обозначение «собственный». Interactions with other parties are considered third-party, even if the user is transiently informed in context (for example, in the form of a redirect). Простое наведение курсора, отключение звука, постановка на паузу или скрытие любого элемента пользователем не рассматривается нами как намеренное взаимодействие.

## Общие критерии

Они применяются к правилам всех фильтров.

- Правила, которые часто вызывают проблемы с работой сайтов, будут удаляться.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Traffic is determined by open statistics (if available) or by other means, such as social media following. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Рекламные фильтры

This part describes the AdGuard Base filter, the Mobile Ads filter, and the following language-specific filters: Russian, German, Dutch, Spanish/Portuguese, Japanese, Turkish, Chinese, and French.

**What shall these filters block?**

- These filters will block ads wherever possible.
- Ads should be blocked regardless of their reasons and goals.
- We will block ads caused by malicious apps or extensions that inject ads. Please note that we do it only on the condition that you specify how to install such an app or extension.

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

- Rules that cause problems with website functionality will be removed.
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

- Rules that block widgets that are a part of a website’s functionality, such as "Comments," "Embedded Post," "Surveys," or widgets that require authorization via social networks.
- Rules that block links to a website’s communities in social networks.
- Rules that cause problems with website functionality will be removed.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Traffic is determined by open statistics (if available) or by other means, such as social media following. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Фильтр раздражителей

**Что должно блокироваться этим фильтром?**

- This filter will block obstructions on the page. These elements are not ads, but they obstruct the view and make it difficult to see the actual content of the website. Such elements include cookie notices, third-party widgets, in-page popups, email subscription forms, banners with special offers, and aggressively placed social media widgets.

**Ограничения и исключения**

Если правило подпадает под описанный ниже список ограничений, то оно не будет добавлено в фильтр.

- Rules that block elements that are essential for the website functioning (e.g. authorization forms) will not be blocked even if they satisfy other requirements.
- Rules that cause problems with website functionality will be removed.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Traffic is determined by open statistics (if available) or by other means, such as social media following. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Filter unblocking search ads and self-promotion

Unlike other filters, this one **unblocks** certain ads. Read more about it in the [article on search ads and self-promotion](search-ads.md).

**What will be unblocked with this filter?**

- Search ads (ads that you see among the results when using an online search engine).
- Website self-promotion (when an ad on a website is promoting this very website or other websites/social media/etc closely related to it).

**Ограничения и исключения**

- Rules that cause problems with website functionality will be removed.
- Правила для отдельного сайта будут добавляться, если сайт обладает достаточной посещаемостью. Traffic is determined by open statistics (if available) or by other means, such as social media following. Посещаемость сайта считается достаточной, если количество посещений достигает 30 тысяч в месяц.

## Quality requirements for filtering rules

- The rules should be as efficient as possible in terms of performance.
- Exception rules should be as specific as possible in order to avoid unnecessary unblocking.
- CSS and JS injection rules should be used as rarely as possible and only when it is impossible to block ads without them.