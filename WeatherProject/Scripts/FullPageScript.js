'use strict';
$(document).ready(function () {
    var url = 'https://api.darksky.net/forecast/';
    var apiKey = 'd306712144c35cde269e147029ce3adb';
    var unit = 'auto';
    var lati = 59.426717;
    var longi = 17.836298;
    var language = "en";

    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=59.426717,17.836298&key=AIzaSyAo0_u3FX2momYaZRXxcxgtp2Vkt-KJFO8",
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            var nowAdress = data.results[0].address_components[1].long_name;
            var loc_name = data.results[0].address_components[0].long_name;
            $('#tidzon').html(" " + nowAdress + " " + loc_name);


            // Detta ska kunna fungera som en setting. 
            //Get location Image by City and Street and generate an image as background from location.
            //    $("#flip").click(function () {
            //       $("#panel").slideToggle("slow");

            //    });

            //    $('.btn').on('click', function (e) {
            //        e.preventDefault();
            //        var street = $("#street").val();

            //        var city = $("#city").val();

            //        var fullLocation = street + ", " + city;

            //        var googleUrl = '"https://maps.googleapis.com/maps/api/streetview?size=1000x400&location=' + fullLocation + '"';

            //        $(".jumbotron").css('background-image', 'url(' + googleUrl + ')');
            //    });
            //});

            // Slut på location image generator.
        },
        error: function () {
            alert("error");
        }
    });
    jQuery.ajax({
        url: url + apiKey + "/" + lati + "," + longi + "?callback=?&units=" + unit + "&lang=" + language,
        type: 'GET',
        dataType: 'jsonp',
        timeout: 3000,
        success: function (data) {
            moment.locale("sv");

            // chart 

            var ctx = document.getElementById("myChart3").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [{
                        label: 'Max-temp',
                        data: [2, 4, 12, 10, 15, 19, 25],
                        backgroundColor: "rgba(153,255,51,0.4)"
                    }, {
                        label: 'Min-temp',
                        data: [-2, -4, 0, 2, 4, 6, 10],
                        backgroundColor: "rgba(255,153,0,0.4)"
                    }]
                }
            });

            //Icons and data
            var skycons = new Skycons({ "color": "blue" });
            var todayIcon = data.currently.icon;

            $('.jumbo > h1').html("Genti's weather App");

            var myVar = setInterval(myTimer, 1000);

            var humid = data.currently.humidity;

            var humiDity = humid * 100;

            function myTimer() {

                skycons.set("icon", todayIcon);
                $("#dagensVeckoDag").html(moment().format('dddd'));
                $('#current_time').html(moment().format('HH:mm'));
                $('#current_date').html(moment().format('MMMM YYYY'));
                $('#currentTemp').html(data.currently.temperature.toFixed(0) + "&#8451");
                $('#RealFeel').html("RealFeel&#174; " + data.currently.apparentTemperature.toFixed(0) + " " + "&#8451");
                $('#windSpeed').html("wind: " + data.currently.windSpeed.toFixed(2) + " m/s");
                $('#summaryToday').html(data.currently.summary);
                $('#humidity').html("humidity: " + humiDity.toFixed(0) + "%");
                $('#summary_hourly').html(data.hourly.summary);

                //Forecast
                var day1_icon = data.daily.data[0].icon;
                skycons.set("day1", day1_icon);
                $('#Temp1').html(data.daily.data[0].temperatureMin.toFixed(0) + "&#8451" + "/" + data.daily.data[0].temperatureMax.toFixed(0) + "&#8451");

                var day2_icon = data.daily.data[1].icon;
                skycons.set("day2", day2_icon);
                $('#Temp2').html(data.daily.data[1].temperatureMin.toFixed(0) + "&#8451" + "/" + data.daily.data[1].temperatureMax.toFixed(0) + "&#8451");

                var day3_icon = data.daily.data[2].icon;
                skycons.set("day3", day3_icon);
                $('#Temp3').html(data.daily.data[2].temperatureMin.toFixed(0) + "&#8451" + "/" + data.daily.data[2].temperatureMax.toFixed(0) + "&#8451");

                var day4_icon = data.daily.data[3].icon;
                skycons.set("day4", day4_icon);
                $('#Temp4').html(data.daily.data[3].temperatureMin.toFixed(0) + "&#8451" + "/" + data.daily.data[3].temperatureMax.toFixed(0) + "&#8451");

                var day5_icon = data.daily.data[4].icon;
                skycons.set("day5", day5_icon);
                $('#Temp5').html(data.daily.data[4].temperatureMin.toFixed(0) + "&#8451" + "/" + data.daily.data[4].temperatureMax.toFixed(0) + "&#8451");

                var day6_icon = data.daily.data[5].icon;
                skycons.set("day6", day6_icon);
                $('#Temp6').html(data.daily.data[5].temperatureMin.toFixed(0) + "&#8451" + "/" + data.daily.data[5].temperatureMax.toFixed(0) + "&#8451");

                var day7_icon = data.daily.data[6].icon;
                skycons.set("day7", day7_icon);
                $('#Temp7').html(data.daily.data[6].temperatureMin.toFixed(0) + "&#8451" + "/" + data.daily.data[6].temperatureMax.toFixed(0) + "&#8451");

                var day8_icon = data.daily.data[7].icon;
                skycons.set("day8", day8_icon);
                $('#Temp8').html(data.daily.data[7].temperatureMin.toFixed(0) + "&#8451" + "/" + data.daily.data[7].temperatureMax.toFixed(0) + "&#8451");



                //Lägg till dagar som mån, tis ons, tors osv i forecast
                var new_date1 = moment().add(1, 'days');
                var new_date2 = moment().add(2, 'days');
                var new_date3 = moment().add(3, 'days');
                var new_date4 = moment().add(4, 'days');
                var new_date5 = moment().add(5, 'days');
                var new_date6 = moment().add(6, 'days');
                var new_date7 = moment().add(7, 'days');
                var new_date8 = moment().add(8, 'days');

                ////Skapa en variabel för varje dag
                var day1 = new_date1.format('dddd');
                var day2 = new_date2.format('dddd');
                var day3 = new_date3.format('dddd');
                var day4 = new_date4.format('dddd');
                var day5 = new_date5.format('dddd');
                var day6 = new_date6.format('dddd');
                var day7 = new_date7.format('dddd');
                var day8 = new_date8.format('dddd');

                // Lägg till variabel till dagarna i i varsin div
                $("#dagDate1").html(day1);
                $("#dagDate2").html(day2);
                $("#dagDate3").html(day3);
                $("#dagDate4").html(day4);
                $("#dagDate5").html(day5);
                $("#dagDate6").html(day6);
                $("#dagDate7").html(day7);
                $("#dagDate8").html(day8);

                var timezone = data.timezone;


                $("#location").html("Location: " + timezone);
                $("#rise").html("Sunrise:");
                $("#down").html("Sunset:");

                var sunRise = 0;
                var timestamp = moment.unix(data.daily.data[0].sunriseTime);
                sunRise = timestamp.format("HH:ss");

                var sunSet = 0;
                var timestamp1 = moment.unix(data.daily.data[0].sunsetTime);
                sunSet = timestamp1.format("HH:ss");
                $('#test').html("<img src='../Images/sunrise.png' width='28' height='30' />" + " " + sunRise + " " +
                    "<img src='../Images/sunset.png' width='28' height='30' />" + " " + sunSet);

                // tabell variabler
                $("#dayTable1").html(day1);
                $("#dayTable2").html(day2);
                $("#dayTable3").html(day3);
                $("#dayTable4").html(day4);
                $("#dayTable5").html(day5);
                $("#dayTable6").html(day6);
                $("#dayTable7").html(day7);
                $("#dayTable8").html(day8);

                // Tabell humidity dagligen
                var humid1 = data.daily.data[0].humidity;
                var humid2 = data.daily.data[1].humidity;
                var humid3 = data.daily.data[2].humidity;
                var humid4 = data.daily.data[3].humidity;
                var humid5 = data.daily.data[4].humidity;
                var humid6 = data.daily.data[5].humidity;
                var humid7 = data.daily.data[6].humidity;
                var humid8 = data.daily.data[7].humidity;

                var humiDity1 = humid1 * 100;
                var humiDity2 = humid2 * 100;
                var humiDity3 = humid3 * 100;
                var humiDity4 = humid4 * 100;
                var humiDity5 = humid5 * 100;
                var humiDity6 = humid6 * 100;
                var humiDity7 = humid7 * 100;
                var humiDity8 = humid8 * 100;

                $("#humidTable1").html(humiDity1.toFixed(0) + "%");
                $("#humidTable2").html(humiDity2.toFixed(0) + "%");
                $("#humidTable3").html(humiDity3.toFixed(0) + "%");
                $("#humidTable4").html(humiDity4.toFixed(0) + "%");
                $("#humidTable5").html(humiDity5.toFixed(0) + "%");
                $("#humidTable6").html(humiDity6.toFixed(0) + "%");
                $("#humidTable7").html(humiDity7.toFixed(0) + "%");
                $("#humidTable8").html(humiDity8.toFixed(0) + "%");


            }
            skycons.play();

        },
        error: function () {
            $('.weatherWrapper').html('Latest forecast not available, please check the API key');
            $('.forecastWrapper').hide();
        }
    });
});