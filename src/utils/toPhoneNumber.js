// Параметр numbers - строка из 10 символов
// её необходимо преобразовать в вид '7 (xxx) xxx-xxxx'
const toPhoneNumber = (numbers) => {
    const numberArr= numbers.split('');
    const formattedNumbers=[7," "]
	.concat("(",
      	numberArr.slice(0, 3),
		") ",
		numberArr.slice(3, 6),
		'-',
		numberArr.slice(6, 10))
	.join('')
    return formattedNumbers
}

export default toPhoneNumber;