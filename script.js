let customers = [];

function addCustomer() {
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;

  if (name === "" || contact === "") return;

  customers.push({ name, contact });
  renderCustomers();
}

function renderCustomers() {
  const list = document.getElementById("customerList");
  list.innerHTML = "";

  customers.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.name} - ${c.contact}`;
    list.appendChild(li);
  });
}
