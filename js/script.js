/*	LoLarchive - Website to keep track of your games in League of Legends
    Copyright (C) 2013-2014  Kewin Dousse (Protectator)

    This file is part of LoLarchive.

    LoLarchive is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or any later version.

    LoLarchive is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

    Contact : kewin.d@websud.ch
    Project's repository : https://github.com/Protectator/LoLarchive
*/

function updateSearchInputs() {
	var summoner = ($("#id option:selected").text());
	var name = summoner.substr(0, summoner.indexOf('[')-1);
	var region = summoner.substring(summoner.indexOf('[')+1, summoner.indexOf(']'));
	if (name != "") {
		$("#name").val(name).attr("disabled", true);
		$("#region").val(region.toUpperCase()).attr("disabled", true);
		$("#hiddenRegion").removeAttr("disabled").val(region);
	} else {
		$("#name").removeAttr("disabled");
		$("#region").removeAttr("disabled");
		$("#hiddenRegion").attr("disabled", true);
	}
}

function processGet() {
	var form = $(".toProcess");
	var inputs = $(".toProcess input.get, .toProcess select.get");
	var values = [];
	inputs.each(function(i) {
		values.push(encodeURIComponent(inputs[i].name)+"="+encodeURIComponent(inputs[i].value));
	});
	form[0].action += "?" + values.join("&");
}

$(document).ready(function(){

	if ($('#champFilterBox').is (':checked'))
		{
			$("#champFilterChoice").prop('disabled', false);
		} else {
			$("#champFilterChoice").prop('disabled', true);
		}


	if ($('#modeFilterBox').is (':checked'))
		{
			$("#modeFilterChoice").prop('disabled', false);
		} else {
			$("#modeFilterChoice").prop('disabled', true);
		}

	if ($('#dateFilterBox').is (':checked'))
		{
			$("#date1").prop('disabled', false);
			$("#date2").prop('disabled', false);
			$("#datepicker").removeClass("disabled");
		} else {
			$("#date1").prop('disabled', true);
			$("#date2").prop('disabled', true);
			$("#datepicker").addClass("disabled");
		}


	$('#champFilterBox').click (function ()
	{
		var thisCheck = $(this);
		if (thisCheck.is (':checked'))
		{
			$("#champFilterChoice").prop('disabled', false);
		} else {
			$("#champFilterChoice").prop('disabled', true);
		}
	});

	$('#modeFilterBox').click (function ()
	{
		var thisCheck = $(this);
		if (thisCheck.is (':checked'))
		{
			$("#modeFilterChoice").prop('disabled', false);
		} else {
			$("#modeFilterChoice").prop('disabled', true);
		}
	});

	$('#dateFilterBox').click (function ()
	{
		var thisCheck = $(this);
		if (thisCheck.is (':checked'))
		{
			$("#date1").prop('disabled', false);
			$("#date2").prop('disabled', false);
			$("#datepicker").removeClass("disabled");
		} else {
			$("#date1").prop('disabled', true);
			$("#date2").prop('disabled', true);
			$("#datepicker").addClass("disabled");
		}
	});

	$('.input-daterange').datepicker({
	    format: "d-m-yyyy",
	    weekStart: 1,
	    endDate: today,
	    todayBtn: "linked",
	    todayHighlight: true
	});

	var scrolls = $("#access :first-child");
	if (scrolls.length > 0) {
		scrolls.scrollTop(scrolls[0].scrollHeight);
		// Yeah, because I can't touch the scroll of hidden divs, I have to first activate them,
		// then change the scroll and finally desactivate them...
		$("#errors").addClass("active");
		$("#errors :first-child").scrollTop($("#errors :first-child")[0].scrollHeight);
		$("#errors").removeClass("active");
		$("#admin").addClass("active");
		$("#admin :first-child").scrollTop($("#admin :first-child")[0].scrollHeight);
		$("#admin").removeClass("active");
		$("#logsTab").tab();
	}

	updateSearchInputs();

	$("#id").change(updateSearchInputs);

});