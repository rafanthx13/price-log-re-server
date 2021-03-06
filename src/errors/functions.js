module.exports = app => {
	
	function notExists(value) {
		// gets :: '', null, undefined
		if(!value) return true;
		// gets :: []
		if(Array.isArray(value) && value.length === 0) return true;
		// gets :: ' '
		if(typeof value === 'string' && !value.trim()) return true;
		// get :: { }
		if(typeof value === 'object' && isEmpty(value)) return true
		return false
	}

	function exist(value){
		return !notExists(value)
	}

	function isEmpty(obj) {
		for(var key in obj) {
			if(obj.hasOwnProperty(key))
				return false;
		}
		return true;
	}

	function validateDTO(obj, dto){
		if(notExists(obj))
			return [false, false, 'invalid_data']
		for(let propriety of dto){
			if(obj.hasOwnProperty(propriety)){
				if(notExists(obj[propriety])){
					return [false, propriety, 'invalid_value']
				}
			} else {
				return [false, propriety, 'propriety_missing']
			}
		}
		return [true, true, 'success']
	}

	function validateUpdateDTO(obj, dto){
		if(notExists(obj))
			return [false, false, 'invalid_data']
		for(let propriety in obj){
			if(dto.includes(propriety)){
				if(notExists(obj[propriety])){
					return [false, propriety, 'invalid_value']
				}
			}else{
				return [false, propriety, 'propriety_invalid']
			}
		}
		return [true, true, 'success']
	}

	// Constant with Template Errors Messages
	let templateMessages = {
		'success': 'success',
		'propriety_missing': "'PROPERTY' property is missing",
		'propriety_invalid': "The property 'PROPERTY' has an invalid value",
		'invalid_value': "The property 'PROPERTY' has an invalid value",
		'invalid_data' : "The data sent is absolutely invalid"
	}

	function errorMessages(status, propriety = '', options){
		return [status, templateMessages[options].replace("PROPERTY", propriety)]
	}

	function verifyDTO(obj, dto){
		let [status, propriety, options] = validateDTO(obj, dto)
		return errorMessages(status, propriety, options)
	}

	function verifyUpdateDTO(obj, dto){
		let [status, propriety, options] = validateUpdateDTO(obj, dto)
		return errorMessages(status, propriety, options)
	}

	return { notExists, exist, validateDTO, verifyDTO, verifyUpdateDTO }
	
}
