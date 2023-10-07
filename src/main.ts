const initStates = (states: any) => {
    const elements = document.querySelectorAll('[data-state]');

    elements.forEach((element: any) => {
        const stateName = element.getAttribute('data-state');
        element.innerHTML = states[stateName];
    });

    return new Proxy(states, {
        get: (target, prop) => {
            elements.forEach((element: any) => {
                const stateName = element.getAttribute('data-state');
                element.innerHTML = states[stateName];
            });

            return target[prop];
        },

        set: (target, prop, value) => {
            target[prop] = value;

            elements.forEach((element: any) => {
                const stateName = element.getAttribute('data-state');
                if (stateName === prop) {
                    element.innerHTML = value;
                }
            });
            return true;
        }
    });
}