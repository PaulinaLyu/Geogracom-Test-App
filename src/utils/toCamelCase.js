// Параметр user - строка с разделителями "-" или "_" следующего вида
// "имя-фамилия-отчество", "имя_Фамилия-отчество", "Имя_фамилия_Отчество"
// необходимо вернуть новую строку в формате CamelCase и пробелом как разделитель
// подробнее - https://ru.wikipedia.org/wiki/CamelCase
const toCamelCase = (user) => {
    if (!user) return user;
    const formattedUser = user.replace(/_/g, ' ')
        .replace(/-/g, ' ').split(' ')
        .map(item => item[0].toUpperCase() + item.slice(1))
        .join(' ')
    return formattedUser
}

export default toCamelCase;