    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    module.exports = function toReadable(number) {

        if (number == 0) return "zero";
        else return convert_hundred(number);
    }

    function convert_hundred(number) {
        if (number > 99) {
            var hundredWord = ones[Math.floor(number / 100)] + " hundred";
            if (number % 100 == 0) return hundredWord;
            else return hundredWord + " " + convert_ten(number % 100);
        } else {
            return convert_ten(number);
        }
    }

    function convert_ten(number) {
        if (number < 10) return ones[number];
        else if (number >= 10 && number < 20) return teens[number - 10];
        else {
            var tensWord = tens[Math.floor(number / 10)];
            if (number % 10 == 0) return tensWord;
            else return tensWord + " " + ones[number % 10];
        }
    }