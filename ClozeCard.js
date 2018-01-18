// The constructor should accept two arguments: text and cloze.

exports.ClozeCard = function ( text, cloze ){ 
	var textToLower = text.textToLower(); 
	var clozeToLower = cloze.toLowerCase(); 
//errors if the cloze statement appears within the complete text 

	if (!textToLower.includes(clozeToLower)){ 
	console.log('Error: cloze deletion does not appear within full text --- <' + cloze + '>'); 
	return; 
	}

	this.full = text; 
	this.cloze = cloze; 
	this.partial = text.replace(cloze, '...');

}



