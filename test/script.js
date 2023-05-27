document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('showMore');
    const moreInfo = document.getElementById('moreInfo');

    showMoreButton.addEventListener('click', function() {
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
            showMoreButton.textContent = 'Ẩn bớt';
        } else {
            moreInfo.style.display = 'none';
            showMoreButton.textContent = 'Xem thêm';
        }
    });
});