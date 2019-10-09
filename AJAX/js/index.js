

$.ajax({
	url : 'https://tc2026daw.github.io/ajax/restaurants.xml',
	type : 'GET',
	dataType : 'xml',
	success : function(data) {
		console.log(data)

		let newHtml = ''

		$(data).find('restaurant').each(function(){
			newHtml += `
				<li>
				${$(this).attr('name')}
				</li>`
		})
		$('#restaurantCatalog').append(newHtml)
	},
	error : function(errorMsg) {
		console.log(errorMsg)
	} ,

})

$.ajax({
	url: 'https://tc2026daw.github.io/ajax/mexicanStates.json',
	type : 'GET',
	dataType : 'json',
	success : function(data) {
		let newHtml = ''

		for( let i=0; i < data.length; i++) {
			newHtml += `
				<option value="${data[i].identifier}">
					${data[i].state}
					</option>
			`
		}
		$('#mexicanStates').append(newHtml)
		loadCapitalJSON()
	},
	error : function(errorMsg) {
		console.log(errorMsg)
	}
})

function loadCapitalJSON() {
	$.ajax({
		url: 'https://tc2026daw.github.io/ajax/mexicanStatesCapitals.json',
		type : 'GET',
		dataType : 'json',
		success : function(data) {
			$('#mexicanStates').on('change', function(event) {
				let id = $(this).val()

				for(let i=0; i<data.length; i++) {
					if(id == data[i].id ) {
						$('#stateCapital').val(data[i].capital)
					}
				}
			})
		},
		error : function(errorMsg) {
			console.log(errorMsg)
		}
	})
}


