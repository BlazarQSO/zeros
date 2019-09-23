module.exports = function zeros(expression) {
    let five = 0;
    let two = 0;

    let argument = expression.split("*");

    for (let i = 0; i < argument.length; i++) {
        if (argument[i].indexOf("!") == argument[i].length - 1) {
            let item = argument[i].slice(0, argument[i].length - 1);

            for (let k = 1; k <= item; k++) {
                if (k % 5 == 0) {
                    let temp = k;
                    while (temp >= 5 && temp % 5 == 0) {
                        temp = temp / 5;
                        five++;
                    }
                } else if (k % 2 == 0) {
                    let temp = k;
                    while (temp >= 2 && temp % 2 == 0) {
                        temp = temp / 2;
                        two++;
                    }
                }
            }
        } else {
            let item = argument[i].slice(0, argument[i].length - 2);
            if (item % 2 == 1) {
                let index = 1;
                for (let k = 1; k <= item; k = 2 * index - 1) {
                    index++;
                    if (k % 5 == 0) {
                        let temp = k;
                        while (temp >= 5 && temp % 5 == 0) {
                            temp = temp / 5;
                            five++;
                        }
                    }
                }
            } else {
                let index = 1;
                for (let k = 2; k <= item; k = 2 * index) {
                    index++;
                    if (k % 5 == 0) {
                        let temp = k;
                        while (temp >= 5 && temp % 5 == 0) {
                            temp = temp / 5;
                            five++;
                        }
                    } else if (k % 2 == 0) {
                        let temp = k;
                        while (temp >= 2 && temp % 2 == 0) {
                            temp = temp / 2;
                            two++;
                        }
                    }
                }
            }
        }
    }

    return five < two ? five : two;
}
