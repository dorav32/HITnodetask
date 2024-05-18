document.getElementById('go-button').addEventListener('click', fetchItems);

function fetchItems() {
    fetch('/api/items')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('cards-container');
            container.innerHTML = '';
            data.slice(0, 9).forEach(item => { // Display only first 9 items for demo
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.body}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching items:', error));
}
