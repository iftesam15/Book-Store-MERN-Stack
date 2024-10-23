import { useCallback, useState } from "react";
import Search from "./Search";

const allUsers = [
  "john",
  "alex",
  "james",
  "emma",
  "sarah",
  "oliver",
  "charlie",
  "lucas",
];

export default function Demo() {
  const [users, setUsers] = useState(allUsers); // Initially set to show all users

  const handleSearch = useCallback((text) => {
    const filteredUsers = allUsers.filter(
      (user) => user.toLowerCase().includes(text.toLowerCase()) // case-insensitive search
    );
    setUsers(filteredUsers);
  }, []);

  const shuffle = (array) => {
    // Fisher-Yates shuffle algorithm
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      <div>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          onClick={() => setUsers(shuffle(allUsers))}
        >
          Shuffle
        </button>
      </div>
      <Search testChange={handleSearch} />
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li> // Correctly return the <li> elements
        ))}
      </ul>
    </div>
  );
}
