async function fetchUsers() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    )
    const users = await response.json()

    const userList = document.getElementById('user-list')


    userList.innerHTML = ''

    users.forEach((user) => {
      const card = document.createElement('div')
      card.className = 'card'
      card.innerHTML = `
                <img src="https://i.pravatar.cc/80?u=${user.id}" alt="User Photo">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            `
      userList.appendChild(card)
    })
  }

  fetchUsers()

  const refreshBtn = document.getElementById('refresh-button')
  refreshBtn.addEventListener('click', fetchUsers)
  
