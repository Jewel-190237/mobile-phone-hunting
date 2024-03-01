
const loadPhone = async (searchValue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`);
    const data = await res.json();
    const phones = data.data;
    //console.log(phone);
    displayPhone(phones);
}

loadPhone()

const displayPhone = phones => {
    //step 1: get id
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    //console.log(phones.length);

    const showAll = document.getElementById('show-all-phone');

    if(phones.length > 12){
        showAll.classList.remove('hidden');
    }

    else {
        showAll.classList.add('hidden');
    }


    phones = phones.slice(0,12);

    phones.forEach(phone => {
        console.log(phone);
        //step 2: crate a div
        const phoneCard = document.createElement('div');
        //step 3: set classList and inner HTML
        phoneCard.classList =`card p-4 bg-gray-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Phone" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>This is a apple brand phone</p>
          <div class="card-actions justify-center">
            <button onclick="showDetails()" class="btn btn-primary">Show Details</button>
          </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}

const handleSearch = () => {
    //console.log('Search Option active');
    const inputData = document.getElementById('input-data');
    const inputValue = inputData.value;
    //console.log(inputValue);
    loadPhone(inputValue);
}

