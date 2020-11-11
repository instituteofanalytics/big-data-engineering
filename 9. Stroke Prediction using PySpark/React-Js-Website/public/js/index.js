/* eslint-disable no-undef */
$(document).ready(function () {

	$('#loading').hide();
	function readURL(input) {

		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#blah').attr('src', e.target.result);
			}

			reader.readAsDataURL(input.files[0]);
		}
	}
	$('#malariafile').change(function (e) {
		$('#malariatab span').html(e.target.files[0].name)
		$('#blah').remove();
		$('#res').remove();
		console.log(e.target.files[0].name)
		$('.form').after("<img id='blah' src='#'/>")
		readURL(this);
		var url = "http://localhost:5000/predict?file=/Users/MadakaYashwanth/Desktop/test-data/" + e.target.files[0].name;
		$.ajax({
			type: "GET",
			dataType: "json",
			url: url,
			success: function (data) {
				var message;
				if (data.prediction === "0") {
					message = "Infected Cell";
				}
				else {
					message = "Uninfected Cell";
				}
				$('#result-1').after("<h2 id='res'>Result:<h2>");
				$('#message-1').html(message);
			}
		});

	})


	$('#submitbtn2').click(function (event) {
		$('#loading').show();
		var formElement = document.querySelector("#heartattack");
		var formData = new FormData(formElement);
		var object = {};
		formData.forEach(function (value, key) {
			object[key] = value;
		});
		var object2 = {}
		object2["arguments"] = object;

		console.log(object2);
		var url = "http://localhost:8080/openscoring/model/ha";

		$.ajax({
			type: "POST",
			dataType: "json",
			url: url,
			data: JSON.stringify(object2),
			// processData: false,
			contentType: "application/json",
			success: function (data) {
				console.log(data)

				var message;
				var message1;
				var message2;

				message1 = " Probability of not occuring: " + Math.round(data.results["probability(0)"] * 10000) / 10000;
				message2 = " Probability of occuring: " + Math.round(data.results["probability(1)"] * 10000) / 10000;
				// message = "Prediction is " + data.prediction;

				if (data.prediction === 0) {
					message = "Less chances of Heart Attack";
				} else {
					message = "Higher chances of Heart Attack!!!";
				}
				$('#loading').hide();
				$('#head-ha').css("opacity", "100");
				$('#message-ha1').html(message);
				$('#message-ha2').html(message1);
				$('#message-ha3').html(message2);
			},
			error: function (e) {
				console.log(e);
			}

		});

	})


	$('#submitbtn1').click(function (event) {
		$('#loading').show();
		var formElement = document.querySelector("#diabetes");
		var formData = new FormData(formElement);
		var object = {};
		formData.forEach(function (value, key) {
			object[key] = value;
		});
		var object2 = {}
		object2["arguments"] = object;

		console.log(object2);
		var url = "http://localhost:8080/openscoring/model/diabetes";

		$.ajax({
			type: "POST",
			dataType: "json",
			url: url,
			data: JSON.stringify(object2),
			// processData: false,
			contentType: "application/json",
			success: function (data) {
				console.log(data)

				var message;
				var message1;
				var message2;
				// message = "Prediction is " + data.prediction;

				if (data.prediction === 0) {
					message = "Less chances of Diabetes";
				} else {
					message = "Higher chances of Diabetes!!!";
				}

				message1 = " Probability of not occuring: " + Math.round(data.results["probability(0)"] * 10000) / 10000;
				message2 = " Probability of occuring: " + Math.round(data.results["probability(1)"] * 10000) / 10000;

				$('#loading').hide();
				$('#head-diabetes').css("opacity", "100");
				$('#message-diabetes1').html(message);
				$('#message-diabetes2').html(message1);
				$('#message-diabetes2').html(message2);
			},
			error: function (e) {
				console.log(e);
			}

		});


	})


	$('#submitbtn').click(function (event) {
		$('#loading').show();
		var formElement = document.querySelector("#stroke");
		var formData = new FormData(formElement);
		var object = {};
		formData.forEach(function (value, key) {
			object[key] = value;
		});
		var object2 = {}
		object2["arguments"] = object;

		console.log(object2);
		var url = "http://localhost:8080/openscoring/model/stroke";

		$.ajax({
			type: "POST",
			dataType: "json",
			url: url,
			data: JSON.stringify(object2),
			// processData: false,
			contentType: "application/json",
			success: function (data) {
				console.log(data)

				var message;
				var message1;
				var message2;
				// message = "Prediction is " + data.prediction;

				if (data.results["prediction"] === 0) {
					message = "Less chances of Stroke";
				} else {
					message = "Higher chances of Stroke!!!";
				}

				message1 = " Probability of not occuring: " + Math.round(data.results["probability(0)"] * 10000) / 10000;
				message2 = " Probability of occuring: " + Math.round(data.results["probability(1)"] * 10000) / 10000;

				$('#loading').hide();
				$('#head-stroke').css("opacity", "100");
				$('#message-stroke1').html(message);
				$('#message-stroke2').html(message1);
				$('#message-stroke3').html(message2);
			},
			error: function (e) {
				console.log(e);
			}

		});


	})


	$(document).ajaxStart(function () {
		$("#loading").show();
	});

	$(document).ajaxStop(function () {
		$("#loading").hide();
	});

});


$(window, document, undefined).ready(function () {

	$('input').blur(function () {
		var $this = $(this);
		if ($this.val())
			$this.addClass('used');
		else
			$this.removeClass('used');
	});

	$('select').blur(function () {
		var $this = $(this);
		if ($this.val())
			$this.addClass('used');
		else
			$this.removeClass('used');
	});

});