$('#editControls a').click(function (e) {
	switch ($(this).data('role')) {
		case 'h2':
		case 'p':
			document.execCommand('formatBlock', false, $(this).data('role'));
			break;
		default:
			document.execCommand($(this).data('role'), false, null);
			break;
	}
	update_output();
})

$('#editor').bind('blur keyup paste copy cut mouseup', function (e) {
	update_output();
})

function update_output() {
	$('#output').val($('#editor').html());
}



window.onload = function () {
	var fileInput = document.getElementById('fileInput');
	var fileDisplayArea = document.getElementById('editor');

	fileInput.addEventListener('change', function (e) {
		var file = fileInput.files[0];
		var textType = /text.*/;

		if (file.type.match(textType)) {
			var reader = new FileReader();

			reader.onload = function (e) {
				fileDisplayArea.innerHTML = reader.result.split('<body>').pop().split('</body>')[0];
				update_output();
			}

			reader.readAsText(file);
		} else {
			fileDisplayArea.innerText = "File not supported!"
		}
	});
}