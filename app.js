$(document).ready(function(){
	$(".submit").click(function( event ) {
		event.preventDefault();

		var $inputs = $("input, select");
		var employee = {};

		$inputs.each(function() {
			employee[this.name] = $(this).val();
			$(this).val("");
		});

		var $employeeToInsert = $('<li>' + employee.firstName + ' ' + employee.lastName + ', ' + employee.employeeNumber + ', ' + employee.title 
		+ ', <span class="R' + employee.reviewScore + '">' + employee.reviewScore + '</span>, $' 
		+ employee.salary + '<button class="remove">Remove</button></li>');

		$(".employeeList").append($employeeToInsert);

	});

 	$(document).on("click",'.remove', function(){
     	//alert("You clicked a button!");
       $(this).closest("li").remove();
  	});


 //  
});

