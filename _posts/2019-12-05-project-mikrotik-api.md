---
layout: post
project: true
title: "Mikrotik API"
date: 2019-12-06
excerpt: "داشبوردی کامل جهت مانیتورینگ و مدیریت روتر / سوییچ های میکروتیک"
tags: [mikrotik, api, dashboard, میکروتیک, داشبورد میکروتیک, monitoring, mikrotik monitoring]
comments: false
source: "https://github.com/hatamiarash7/Mikrotik_API"
website: "https://github.com/hatamiarash7/Mikrotik_API"
---

روتر میکروتیک شما را قادر می‎سازد تا در کم ترین زمان ممکن بتوانید کلیه سرویس های شبکه را پیاده سازی کنید. سیستم عامل این دستگاه Router OS می‎باشد که به سادگی بر روی روتر نصب شده و قابل تنظیم است و همچنین برای اکثر سناریوهای شبکه قابلیت انعطاف زیادی دارد. کمپانی میکروتیک در حال حاضر یکی از برترین کمپانی های است که در زمینه ارائه خدمات شبکه فعالیت می‎کند و مشتریان این شرکت کمپانی های چون HP – Motorola – Siemens – Nasa و ... میباشد.

در مقایسه با دستگاه های دیگر نصب و پیاده سازی این روتر بسیار کم هزینه می‎باشد به طوریکه شما به راحتی می‎توانید یک شبکه وایرلس و کابلی بسیار خوب داشته باشید و همچنین کارمندان این شبکه ها را کنترل کنید. 

![tooltip](/assets/img/projects/9.webp)

یکی از دغدغه های مدیران شبکه و ناظرین دیتاسنتر ها مانیتورینگ و عیب یابی این دستگاه ها می باشد. انجام این کار به صورت پیشفرض کاری دشوار بوده و نیازمند روندی طولانی است. این روند در صورتی که در شبکه ی خود Hotspot نیز راه اندازی کرده باشید طولانی تر و سخت تر خواهد شد.

در حال حاضر سیستم عامل Router OS به همراه یک API داخلی عرضه می شود که در کنار آن ، افراد مختلف کتابخانه هایی را برای زبان های برنامه نویسی گوناگون منتشر کرده اند. برای مثال :

[PHP](https://github.com/BenMenking/routeros-api){:target="_blank"}

[Node JS](https://github.com/Trakkasure/mikronode){:target="_blank"}

[Java](https://github.com/GideonLeGrange/mikrotik-java){:target="_blank"}

این پروژه ، ابزاری برای مانیتورینگ و مدیریت دستگاه های میکروتیک می باشید که با زبان PHP نوشته شده است. همانند WinBox می توانید به صورت ریموت یا محلی به دستگاه متصل شده و آن را مدیریت کنید. همچنین با توجه به داشتن رابط کاربری گرافیکی و بهتر نسبت به WinBox مانیتورینگ دستگاه ساده تر خواهد بود

![tooltip](/assets/img/projects/10.webp)

جهت مدیریت Hotspot ویژگی های خاصی نیز در این پروژه وجود دارد. برای مثال می توانید برای کاربران ایجاد شده ، تیکت های مخصوص ساختته و پرینت کنید.

### نصب

کل پروژه Dockerize شده و جهت اجرای آن چند دستور ساده نیاز دارید

```
git clone https://github.com/hatamiarash7/Mikrotik_API && cd Mikrotik_API
docker-compose up --build
```

پس از آن با نام کاربری admin و رمز عبور admin وارد اپلیکیشن شده و دستگاه خود را ثبت کنید.

جهت هرگونه راهنمایی برای نصب یا تنظیم می توانید در تماس باشید.