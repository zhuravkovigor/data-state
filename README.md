# DataState.js [pre alpha version, name can be changed]
DataState.js is a library for managing the state of your application with simple and intuitive API. It is based on the concept of data flow and is inspired by [AlpineJS](https://alpinejs.dev/) and [Svelte](https://svelte.dev). It is written in TypeScript and has no dependencies. **Right now it is in the early stages of development and is not ready for production use.**

## Install
```html
<script src="./datastate.js"></script>
```

That's it! For initialization with function initStates
```html
<script>
    initStates({ /* your states */ })
</script>
```

## Usage
### Basic
```html
<body>
    <h2 data-state="Hello, {great}"></h2>

    <script>
        initStates({
            great: "World!"
        })
    </script>
</body>
```

## Change state
```html
<body>
    <h2 data-state="Hello, {name}"></h2>
    
    <button onclick="changename()">Change</button>

    <script>
        const states = initStates({
            name: "Nikita"
        })
        
        function changename() {
            states.name = "John"
        }
    </script>
</body>
```

## Math
```html
<body>
    <h2 data-state="2 + 2 = {num1 + num2}"></h2>

    <script>
        initStates({ num1: 2, num2: 2 })
    </script>
</body>
```

Right now you can change state only with direct assignment. In the future, the ability to use methods will be added.

## Features for future versions
- [ ] method data-for for iteration: [Issie #2](https://github.com/zhuravkovigor/data-state/issues/2)
- [ ] method data-if for conditional rendering: [Issie #1](https://github.com/zhuravkovigor/data-state/issues/1)
- [ ] method data-bind for two-way data binding: [Issie #3](https://github.com/zhuravkovigor/data-state/issues/3)
- [ ] method data-else for else: [Issie #4](https://github.com/zhuravkovigor/data-state/issues/4)
- [ ] method data-else-if for else if: [Issie #5](https://github.com/zhuravkovigor/data-state/issues/5)

And other features that will be added in the future.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
Zhuravkov Igor - [GitHub](https://github.com/zhuravkovigor)
