const initStates = (states: any) => {
    const elements = document.querySelectorAll('[data-state]');

    elements.forEach((element: any) => {
        const text = element.getAttribute('data-state');
        // if text has + inside brackets {stateName + stateName + ...states} then sum the states together

        // if text has + - * / inside brackets {stateName} then do math with the states
        if (text.match(/{(\w+)(\s*[\+\-\*\/]\s*\w+)+}/g)) {
            const matches = text.match(/{(\w+)(\s*[\+\-\*\/]\s*\w+)+}/g);

            matches.forEach((match: any) => {
                // check if math has a text then just join values
                if (match.match(/(\w+)/g).length > 1) {
                    const result = match.match(/(\w+)/g).reduce((acc: any, stateName: any) => acc + states[stateName], "");

                    text.replace(match, "");

                    element.innerHTML = text.replace(/{(\w+)(\s*[\+\-\*\/]\s*\w+)+}/g, result);

                    return;
                }

                const result = eval(match.replace(/(\w+)/g, (match: any, stateName: any) => states[stateName]))

                text.replace(match, "");

                element.innerHTML = text.replace(/{(\w+)(\s*[\+\-\*\/]\s*\w+)+}/g, result);
            });

            return;
        }


        element.innerHTML = text.replace(/{(\w+)}/g, (match, state) => states[state]);
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
                const text = element.getAttribute('data-state');
                element.innerHTML = text.replace(/{(\w+)}/g, (match, state) => states[state]);
            });

            return true;
        }
    });
}