// Параметр user - строка с разделителями "-" или "_" следующего вида
// "имя-фамилия-отчество", "имя_Фамилия-отчество", "Имя_фамилия_Отчество"
// необходимо вернуть новую строку в формате CamelCase и пробелом как разделитель
// подробнее - https://ru.wikipedia.org/wiki/CamelCase
const toCamelCase = (user) => {
    if (!user) return user;
    return user.replace(/(\_|-)\D/g, function(m) {
        return m.toUpperCase().replace(/-/,' ').replace(/\_/,' ');
    });
}

export default toCamelCase;