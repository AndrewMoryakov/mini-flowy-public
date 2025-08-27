# UI компоненты

Примеры создания пользовательских интерфейсов с помощью диаграмм.

## Структура веб-приложения

```mermaid
flowchart TD
    subgraph "Header"
        Logo[Логотип]
        Nav[Навигация]
        Profile[Профиль]
    end
    
    subgraph "Sidebar"
        Menu[Меню]
        Filters[Фильтры]
    end
    
    subgraph "Main Content"
        Content[Основной контент]
        Pagination[Пагинация]
    end
    
    subgraph "Footer"
        Links[Ссылки]
        Copyright[Копирайт]
    end
    
    Logo --- Nav
    Nav --- Profile
    Menu --- Filters
    Content --- Pagination
    Links --- Copyright
    
    style Header fill:#e3f2fd
    style Sidebar fill:#f3e5f5
    style "Main Content" fill:#e8f5e8
    style Footer fill:#fff3e0
```

## Пользовательский путь

```mermaid
journey
    title Путь пользователя в интернет-магазине
    section Поиск товара
      Заходит на сайт           : 5: Пользователь
      Ищет товар               : 3: Пользователь
      Просматривает результаты : 4: Пользователь
    section Покупка
      Добавляет в корзину      : 5: Пользователь
      Оформляет заказ          : 3: Пользователь
      Оплачивает               : 1: Пользователь
    section После покупки
      Получает товар           : 5: Пользователь
      Оставляет отзыв          : 4: Пользователь
```

## Архитектура микросервисов

```mermaid
graph TB
    subgraph "API Gateway"
        Gateway[Nginx/Kong]
    end
    
    subgraph "Микросервисы"
        User[User Service]
        Product[Product Service]
        Order[Order Service]
        Payment[Payment Service]
    end
    
    subgraph "Данные"
        UserDB[(User DB)]
        ProductDB[(Product DB)]
        OrderDB[(Order DB)]
    end
    
    Gateway --> User
    Gateway --> Product
    Gateway --> Order
    Gateway --> Payment
    
    User --> UserDB
    Product --> ProductDB
    Order --> OrderDB
    
    Order -.-> User
    Order -.-> Product
    Payment -.-> Order
    
    style Gateway fill:#e1f5fe
    style User fill:#f3e5f5
    style Product fill:#e8f5e8
    style Order fill:#fff3e0
    style Payment fill:#fce4ec
```
