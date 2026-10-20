const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxwxKmBeR-2E3QAjSXgK4F2RV5aXeLSvQ_GxLBPt9BPdfQieY0PXoyxZdsuIyp-EKzlVw/exec";

expressOrderForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const payload = {
        fullName: document.getElementById('fullName').value,
        emailAddress: document.getElementById('emailAddress').value,
        contactNumber: document.getElementById('contactNumber').value,
        quantity: document.getElementById('quantity').value,
        otherDescriptions: document.getElementById('otherDescriptions').value
    };

    fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).catch(err => console.error("Logged to sheet & email triggered.", err));

    document.getElementById('modalCustomerName').textContent = payload.fullName;
    document.getElementById('modalEmail').textContent = payload.emailAddress;
    document.getElementById('modalContact').textContent = payload.contactNumber;
    document.getElementById('modalQty').textContent = payload.quantity;
    document.getElementById('modalDesc').textContent = payload.otherDescriptions;

    orderModal.classList.remove('hidden');
    setTimeout(() => {
        modalCard.classList.remove('scale-95', 'opacity-0');
        modalCard.classList.add('scale-100', 'opacity-100');
    }, 10);
});

        const expressOrderForm = document.getElementById('expressOrderForm');
        const orderModal = document.getElementById('orderModal');
        const modalCard = document.getElementById('modalCard');
        const closeModalBtn = document.getElementById('closeModalBtn');

        expressOrderForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('fullName').value;
            const email = document.getElementById('emailAddress').value;
            const contact = document.getElementById('contactNumber').value;
            const qty = document.getElementById('quantity').value;
            const desc = document.getElementById('otherDescriptions').value;

            document.getElementById('modalCustomerName').textContent = name;
            document.getElementById('modalEmail').textContent = email;
            document.getElementById('modalContact').textContent = contact;
            document.getElementById('modalQty').textContent = qty;
            document.getElementById('modalDesc').textContent = desc;

            orderModal.classList.remove('hidden');
            setTimeout(() => {
                modalCard.classList.remove('scale-95', 'opacity-0');
                modalCard.classList.add('scale-100', 'opacity-100');
            }, 10);
        });

        closeModalBtn.addEventListener('click', function() {
            modalCard.classList.remove('scale-100', 'opacity-100');
            modalCard.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                orderModal.classList.add('hidden');
                expressOrderForm.reset();
            }, 200);
        });