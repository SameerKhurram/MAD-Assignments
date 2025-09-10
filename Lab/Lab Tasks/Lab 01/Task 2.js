                   // Lab 1 (Task # 2)

// Generic function "SolveThis(obj)"

function SolveThis(inputObj) {
    var result = {};

    // To loop through each key in input object
    for (var key in inputObj) {
        var values = inputObj[key]; 

        // SUM
        if (key === "sum") {
            var total = 0;
            for (var i = 0; i < values.length; i++) {
                total = total + values[i];
            }
            result[key] = total;
        }

        // MAX
        else if (key === "max") {
            var maxValue = values[0];
            for (var i = 1; i < values.length; i++) {
                if (values[i] > maxValue) {
                    maxValue = values[i];
                }
            }
            result[key] = maxValue;
        }

        // MIN
        else if (key === "min") {
            var minValue = values[0];
            for (var i = 1; i < values.length; i++) {
                if (values[i] < minValue) {
                    minValue = values[i];
                }
            }
            result[key] = minValue;
        }

        // ABS (Absolute Value)
        else if (key === "abs") {
            var absArray = [];
            for (var i = 0; i < values.length; i++) {
                if (values[i] < 0) {
                    absArray.push(-values[i]); 
                } else {
                    absArray.push(values[i]);
                }
            }
            result[key] = absArray;
        }

        // CEIL (round up)
        else if (key === "ceil") {
            var ceilArray = [];
            for (var i = 0; i < values.length; i++) {
                var num = values[i];
                var rounded = (num % 1 === 0) ? num : (parseInt(num) + 1);
                ceilArray.push(rounded);
            }
            result[key] = ceilArray;
        }

        // FLOOR (round down)
        else if (key === "floor") {
            var floorArray = [];
            for (var i = 0; i < values.length; i++) {
                var num = values[i];
                var rounded = parseInt(num);
                floorArray.push(rounded);
            }
            result[key] = floorArray;
        }

        // RANDOM (To return a random number between 0 and the value we will input)
        else if (key === "random") {
            var limit = values[0];
            var rand = Math.floor(Math.random() * limit); 
            result[key] = rand;
        }
    }

    return result;
}

// Main
console.log(SolveThis({ sum: [3, 2, 4], max: [2, 4, 3, 5], min: [5, 3, 4, 3] }));

console.log(SolveThis({ abs: [-3, -1, 2], ceil: [2.3, 4.7], floor: [2.9, 4.2] }));

console.log(SolveThis({ random: [10] })); 
