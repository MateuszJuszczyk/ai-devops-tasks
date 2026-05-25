/**
 * Pobiera dane użytkownika z przykładowego API na podstawie identyfikatora.
 *
 * Funkcja wykonuje żądanie HTTP do endpointu użytkownika, sprawdza poprawność
 * odpowiedzi, przetwarza dane JSON i zwraca uproszczony obiekt zawierający
 * imię, adres e-mail oraz datę ostatniego logowania.
 *
 * @param {string|number} userId - Identyfikator użytkownika, którego dane mają zostać pobrane.
 * @returns {Promise<{name: string, email: string, lastLogin: Date} | null>} Promise zwracający dane użytkownika lub `null`, jeśli wystąpi błąd.
 * @throws {Error} Błąd HTTP jest tworzony, gdy odpowiedź serwera ma status niepoprawny, ale następnie zostaje przechwycony w bloku `catch`.
 */
function fetchUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return {
        name: data.name,
        email: data.email,
        lastLogin: new Date(data.lastLoginTimestamp)
      };
    })
    .catch(error => {
      console.error('Fetch error:', error);
      return null;
    });
}

module.exports = fetchUserData;
