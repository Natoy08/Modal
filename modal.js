document.addEventListener('DOMContentLoaded', () => {
    const cancelButton = document.getElementById('cancelButton');
    const modal = document.getElementById('confirmationModal');
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    noButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    yesButton.addEventListener('click', () => {
        modal.querySelector('p').textContent = 'Subscription successfully cancelled!';
        // modal.querySelector('#yesButton').textContent = 'OK';
        // noButton.style.display = 'none';
        setTimeout(() => {
            modal.style.display = 'none';
            cancelButton.textContent = 'Cancelled';
        }, 2000);
    });
});
