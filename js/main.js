lengthInput = document.getElementById('length-input');
lengthInputValue = document.getElementById('length-input-value');
lengthResult = document.getElementById('length-result');
lengthResultValue = document.getElementById('length-result-value');

weightInput = document.getElementById('weight-input');
weightInputValue = document.getElementById('weight-input-value');
weightResult = document.getElementById('weight-result');
weightResultValue  = document.getElementById('weight-result-value');

temperatureInput = document.getElementById('temperature-input');
temperatureInputValue = document.getElementById('temperature-input-value');
temperatureResult = document.getElementById('temperature-result');
temperatureResultValue = document.getElementById('temperature-result-value');

speedInput = document.getElementById('speed-input');
speedInputValue = document.getElementById('speed-input-value');
speedResult = document.getElementById('speed-result');
speedResultValue = document.getElementById('speed-result-value');


function convertLength() {
	if (lengthInput.value == 'mm') {
		if (lengthResult.value == 'mm') {
			lengthResultValue.value = lengthInputValue.value;
		}
		if (lengthResult.value == 'cm') {
			lengthResultValue.value = lengthInputValue.value / 10;
		}
		if (lengthResult.value == 'inch') {
			lengthResultValue.value = lengthInputValue.value / 25.4;
		}
		if (lengthResult.value == 'foot') {
			lengthResultValue.value = lengthInputValue.value / 305;
		}
		if (lengthResult.value == 'meter') {
			lengthResultValue.value = lengthInputValue.value / 1000;
		}
		if (lengthResult.value == 'km') {
			lengthResultValue.value = lengthInputValue.value / 1e+6;
		}
		if (lengthResult.value == 'mile') {
			lengthResultValue.value = lengthInputValue.value / 1.609e+6;
		}
	}
	if (lengthInput.value == 'cm') {
		if (lengthResult.value == 'mm') {
			lengthResultValue.value = lengthInputValue.value * 10;
		}
		if (lengthResult.value == 'cm') {
			lengthResultValue.value = lengthInputValue.value;
		}
		if (lengthResult.value == 'inch') {
			lengthResultValue.value = lengthInputValue.value / 2.54;
		}
		if (lengthResult.value == 'foot') {
			lengthResultValue.value = lengthInputValue.value / 30.48;
		}
		if (lengthResult.value == 'meter') {
			lengthResultValue.value = lengthInputValue.value / 100;
		}
		if (lengthResult.value == 'km') {
			lengthResultValue.value = lengthInputValue.value / 100000;
		}
		if (lengthResult.value == 'mile') {
			lengthResultValue.value = lengthInputValue.value / 160934;
		}
	}
	if (lengthInput.value == 'inch') {
		if (lengthResult.value == 'mm') {
			lengthResultValue.value = lengthInputValue.value * 25.4;
		}
		if (lengthResult.value == 'cm') {
			lengthResultValue.value = lengthInputValue.value * 2.54;
		}
		if (lengthResult.value == 'inch') {
			lengthResultValue.value = lengthInputValue.value;
		}
		if (lengthResult.value == 'foot') {
			lengthResultValue.value = lengthInputValue.value / 12;
		}
		if (lengthResult.value == 'meter') {
			lengthResultValue.value = lengthInputValue.value / 39.37;
		}
		if (lengthResult.value == 'km') {
			lengthResultValue.value = lengthInputValue.value / 39370;
		}
		if (lengthResult.value == 'mile') {
			lengthResultValue.value = lengthInputValue.value / 63360;
		}
	}
	if (lengthInput.value == 'foot') {
		if (lengthResult.value == 'mm') {
			lengthResultValue.value = lengthInputValue.value * 305;
		}
		if (lengthResult.value == 'cm') {
			lengthResultValue.value = lengthInputValue.value * 30.48;
		}
		if (lengthResult.value == 'inch') {
			lengthResultValue.value = lengthInputValue.value * 12;
		}
		if (lengthResult.value == 'foot') {
			lengthResultValue.value = lengthInputValue.value;
		}
		if (lengthResult.value == 'meter') {
			lengthResultValue.value = lengthInputValue.value / 3.281;
		}
		if (lengthResult.value == 'km') {
			lengthResultValue.value = lengthInputValue.value / 3281;
		}
		if (lengthResult.value == 'mile') {
			lengthResultValue.value = lengthInputValue.value / 5280;
		}
	}
	if (lengthInput.value == 'meter') {
		if (lengthResult.value == 'mm') {
			lengthResultValue.value = lengthInputValue.value * 1000;
		}
		if (lengthResult.value == 'cm') {
			lengthResultValue.value = lengthInputValue.value * 100;
		}
		if (lengthResult.value == 'inch') {
			lengthResultValue.value = lengthInputValue.value * 39.37;
		}
		if (lengthResult.value == 'foot') {
			lengthResultValue.value = lengthInputValue.value * 3.281;
		}
		if (lengthResult.value == 'meter') {
			lengthResultValue.value = lengthInputValue.value;
		}
		if (lengthResult.value == 'km') {
			lengthResultValue.value = lengthInputValue.value / 1000;
		}
		if (lengthResult.value == 'mile') {
			lengthResultValue.value = lengthInputValue.value / 1609;
		}
	}
	if (lengthInput.value == 'km') {
		if (lengthResult.value == 'mm') {
			lengthResultValue.value = lengthInputValue.value * 1e+6;
		}
		if (lengthResult.value == 'cm') {
			lengthResultValue.value = lengthInputValue.value * 100000;
		}
		if (lengthResult.value == 'inch') {
			lengthResultValue.value = lengthInputValue.value * 39370;
		}
		if (lengthResult.value == 'foot') {
			lengthResultValue.value = lengthInputValue.value * 3281;
		}
		if (lengthResult.value == 'meter') {
			lengthResultValue.value = lengthInputValue.value * 1000;
		}
		if (lengthResult.value == 'km') {
			lengthResultValue.value = lengthInputValue.value;
		}
		if (lengthResult.value == 'mile') {
			lengthResultValue.value = lengthInputValue.value / 1.609;
		}
	}
}

function convertWeight() {
	if (weightInput.value == 'grain') {
		if (weightResult.value == 'grain') {
			weightResultValue.value = weightInputValue.value;
		}
		if (weightResult.value == 'gram') {
			weightResultValue .value = weightInputValue.value / 15.432;
		}
		if (weightResult.value == 'ounce') {
			weightResultValue.value = weightInputValue.value / 438;
		}
		if (weightResult.value == 'pound') {
			weightResultValue.value = weightInputValue.value / 7000;
		}
		if (weightResult.value == 'kg') {
			weightResultValue.value = weightInputValue.value / 15432;
		}
		if (weightResult.value == 'stone') {
			weightResultValue.value = weightInputValue.value / 98000;
		}
	}weightInput
	if (weightInput.value == 'gram') {
		if (weightResult.value == 'grain') {
			weightResultValue.value = weightInputValue.value * 15.432;
		}
		if (weightResult.value == 'gram') {
			weightResultValue.value = weightInputValue.value;
		}
		if (weightResult.value == 'ounce') {
			weightResultValue.value = weightInputValue.value / 28.35;
		}
		if (weightResult.value == 'pound') {
			weightResultValue.value = weightInputValue.value / 454;
		}
		if (weightResult.value == 'kg') {
			weightResultValue.value = weightInputValue.value / 1000;
		}
		if (weightResult.value == 'stone') {
			weightResultValue.value = weightInputValue.value / 6350;
		}
	}
	if (weightInput.value == 'ounce') {
		if (weightResult.value == 'grain') {
			weightResultValue.value = weightInputValue.value * 438;
		}
		if (weightResult.value == 'gram') {
			weightResultValue.value = weightInputValue.value * 28.35;
		}
		if (weightResult.value == 'ounce') {
			weightResultValue.value = weightInputValue.value;
		}
		if (weightResult.value == 'pound') {
			weightResultValue.value = weightInputValue.value / 16;
		}
		if (weightResult.value == 'kg') {
			weightResultValue.value = weightInputValue.value / 35.274;
		}
		if (weightResult.value == 'stone') {
			weightResultValue.value = weightInputValue.value / 224;
		}
	}
	if (weightInput.value == 'pound') {
		if (weightResult.value == 'grain') {
			weightResultValue.value = weightInputValue.value * 7000;
		}
		if (weightResult.value == 'gram') {
			weightResultValue.value = weightInputValue.value * 454;
		}
		if (weightResult.value == 'ounce') {
			weightResultValue.value = weightInputValue.value * 16;
		}
		if (weightResult.value == 'pound') {
			weightResultValue.value = weightInputValue.value;
		}
		if (weightResult.value == 'kg') {
			weightResultValue.value = weightInputValue.value / 2.205;
		}
		if (weightResult.value == 'stone') {
			weightResultValue.value = weightInputValue.value / 14;
		}
	}
	if (weightInput.value == 'kg') {
		if (weightResult.value == 'grain') {
			weightResultValue.value = weightInputValue.value * 15432;
		}
		if (weightResult.value == 'gram') {
			weightResultValue.value = weightInputValue.value * 1000;
		}
		if (weightResult.value == 'ounce') {
			weightResultValue.value = weightInputValue.value * 35.274;
		}
		if (weightResult.value == 'pound') {
			weightResultValue.value = weightInputValue.value * 2.205;
		}
		if (weightResult.value == 'kg') {
			weightResultValue.value = weightInputValue.value;
		}
		if (weightResult.value == 'stone') {
			weightResultValue.value = weightInputValue.value / 6.35;
		}
	}
	if (weightInput.value == 'stone') {
		if (weightResult.value == 'grain') {
			weightResultValue.value = weightInputValue.value * 98000;
		}
		if (weightResult.value == 'gram') {
			weightResult.value = weightInputValue.value * 6350;
		}
		if (weightResult.value == 'ounce') {
			weightResultValue.value = weightInputValue.value * 224;
		}
		if (weightResult.value == 'pound') {
			weightResultValue.value = weightInputValue.value * 14;
		}
		if (weightResult.value == 'kg') {
			weightResultValue.value = weightInputValue.value * 6.35;
		}
		if (weightResult.value == 'stone') {
			weightResultValue.value = weightInputValue.value;
		}
	}
}

function convertTemperature() {
	if (temperatureInput.value == 'centigrade') {
		if (temperatureResult.value == 'centigrade') {
			temperatureResultValue.value = temperatureInputValue.value;
		}
		if (temperatureResult.value == 'fahrenheit') {
			temperatureResultValue.value = (temperatureInputValue.value * 9/5) + 32;
		}
		if (temperatureResult.value == 'kelvin') {
			temperatureResultValue.value = temperatureInputValue.value + 273.15;
		}
		if (temperatureResult.value == 'rankine') {
			temperatureResultValue.value = temperatureInputValue.value * 9/5 + 491.67;
		}
	}
	if (temperatureInput.value == 'fahrenheit') {
		if (temperatureResult.value == 'centigrade') {
			temperatureResultValue.value = (temperatureInputValue.value - 32) * 5/9;
		}
		if (temperatureResult.value == 'fahrenheit') {
			temperatureResultValue.value = temperatureInputValue.value;
		}
		if (temperatureResult.value == 'kelvin') {
			temperatureResultValue.value = (temperatureInputValue.value - 32) * 5/9 + 273.15;
		}
		if (temperatureResult.value == 'rankine') {
			temperatureResultValue.value = temperatureInputValue.value + 459.67;
		}
	}
	if (temperatureInput.value == 'kelvin') {
		if (temperatureResult.value == 'centigrade') {
			temperatureResultValue.value = temperatureInputValue.value - 273.15;
		}
		if (temperatureResult.value == 'fahrenheit') {
			temperatureResultValue.value = (temperatureInputValue.value - 273.15) * 9/5 + 32;
		}
		if (temperatureResult.value == 'kelvin') {
			temperatureResultValue.value = temperatureInputValue.value;
		}
		if (temperatureResult.value == 'rankine') {
			temperatureResultValue.value = temperatureInputValue.value * 9/5;
		}
	}
	if (temperatureInput.value == 'rankine') {
		if (temperatureResult.value == 'centigrade') {
			temperatureResultValue.value = (temperatureInputValue.value - 491.67) * 5/9;
		}
		if (temperatureResult.value == 'fahrenheit') {
			temperatureResultValue.value = temperatureInputValue.value - 459.67;
		}
		if (temperatureResult.value == 'kelvin') {
			temperatureResultValue.value = temperatureInputValue.value * 5/9;
		}
		if (temperatureResult.value == 'rankine') {
			temperatureResultValue.value = temperatureInputValue.value;
		}
	}
}

function convertSpeed() {
	if (speedInput.value == 'fts') {
		if (speedResult.value == 'fts') {
			speedResultValue.value = speedInputValue.value;
		}
		if (speedResult.value == 'ms') {
			speedResultValue.value = speedInputValue.value / 3.281;
		}
		if (speedResult.value == 'kmh') {
			speedResultValue.value = speedInputValue.value / 1.097;
		}
		if (speedResult.value == 'mih') {
			speedResultValue.value = speedInputValue.value / 1.467;
		}
		if (speedResult.value == 'knots') {
			speedResultValue.value = speedInputValue.value / 1.688;
		}
		if (speedResult.value == 'lightspeed') {
			speedResultValue.value = speedInputValue.value / 9.836e+8;
		}
	}
	if (speedInput.value == 'ms') {
		if (speedResult.value == 'fts') {
			speedResultValue.value = speedInputValue.value * 3.281;
		}
		if (speedResult.value == 'ms') {
			speedResultValue.value = speedInputValue.value;
		}
		if (speedResult.value == 'kmh') {
			speedResultValue.value = speedInputValue.value * 3.6;
		}
		if (speedResult.value == 'mih') {
			speedResultValue.value = speedInputValue.value * 2.237;
		}
		if (speedResult.value == 'knots') {
			speedResultValue.value = speedInputValue.value * 1.944;
		}
		if (speedResult.value == 'lightspeed') {
			speedResultValue.value = speedInputValue.value / 2.998e+8;
		}
	}
	if (speedInput.value == 'kmh') {
		if (speedResult.value == 'fts') {
			speedResultValue.value = speedInputValue.value / 1.097;
		}
		if (speedResult.value == 'ms') {
			speedResultValue.value = speedInputValue.value / 3.6;
		}
		if (speedResult.value == 'kmh') {
			speedResultValue.value = speedInputValue.value;
		}
		if (speedResult.value == 'mih') {
			speedResultValue.value = speedInputValue.value / 1.609;
		}
		if (speedResult.value == 'knots') {
			speedResultValue.value = speedInputValue.value / 1.852;
		}
		if (speedResult.value == 'lightspeed') {
			speedResultValue.value = speedInputValue.value / 1.079e+9;
		}
	}
	if (speedInput.value == 'mih') {
		if (speedResult.value == 'fts') {
			speedResultValue.value = speedInputValue.value * 1.467;
		}
		if (speedResult.value == 'ms') {
			speedResultValue.value = speedInputValue.value / 2.237;
		}
		if (speedResult.value == 'kmh') {
			speedResultValue.value = speedInputValue.value * 1.609;
		}
		if (speedResult.value == 'mih') {
			speedResultValue.value = speedInputValue.value;
		}
		if (speedResult.value == 'knots') {
			speedResultValue.value = speedInputValue.value / 1.151;
		}
		if (speedResult.value == 'lightspeed') {
			speedResultValue.value = speedInputValue.value / 6.706e+8;
		}
	}
	if (speedInput.value == 'knots') {
		if (speedResult.value == 'fts') {
			speedResultValue.value = speedInputValue.value * 1.688;
		}
		if (speedResult.value == 'ms') {
			speedResultValue.value = speedInputValue.value * 1.944;
		}
		if (speedResult.value == 'kmh') {
			speedResultValue.value = speedInputValue.value * 1.852;
		}
		if (speedResult.value == 'mih') {
			speedResultValue.value = speedInputValue.value * 1.151;
		}
		if (speedResult.value == 'knots') {
			speedResultValue.value = speedInputValue.value;
		}
		if (speedResult.value == 'lightspeed') {
			speedResultValue.value = speedInputValue.value / 5.827e+8;
		}
	}
	if (speedInput.value == 'lightspeed') {
		if (speedResult.value == 'fts') {
			speedResultValue.value = speedInputValue.value * 9.836e+8;
		}
		if (speedResult.value == 'ms') {
			speedResultValue.value = speedInputValue.value * 2.998e+8;
		}
		if (speedResult.value == 'kmh') {
			speedResultValue.value = speedInputValue.value * 1.079e+9;
		}
		if (speedResult.value == 'mih') {
			speedResultValue.value = speedInputValue.value * 6.706e+8;
		}
		if (speedResult.value == 'knots') {
			speedResultValue.value = speedInputValue.value * 5.827e+8;
		}
		if (speedResult.value == 'lightspeed') {
			speedResultValue.value = speedInputValue.value;
		}
	}
}
