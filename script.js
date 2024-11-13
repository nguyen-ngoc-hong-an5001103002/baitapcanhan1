document.addEventListener('DOMContentLoaded', function () {
    const aquarium = document.querySelector('.aquarium');
    const numberOfFishes = 8; // Cập nhật số lượng cá để bao gồm cá thứ 5

    // Hàm tạo cá với vị trí ngẫu nhiên
    function createFish() {
        const fish = document.createElement('div');
        fish.classList.add('fish');

        // Đặt vị trí ngẫu nhiên cho cá trong bể
        const randomX = Math.random() * (aquarium.offsetWidth - 100); // Tạo vị trí X ngẫu nhiên
        const randomY = Math.random() * (aquarium.offsetHeight - 50); // Tạo vị trí Y ngẫu nhiên

        // Đặt hình ảnh cá ngẫu nhiên
        const fishImages = ['fish1.png', 'fish2.png', 'fish3.png']; // Thêm các ảnh cá bạn muốn
        const randomImage = fishImages[Math.floor(Math.random() * fishImages.length)];
        fish.style.backgroundImage = `url('${randomImage}')`;

        // Đặt vị trí và chiều rộng cho cá
        fish.style.left = `${randomX}px`;
        fish.style.top = `${randomY}px`;

        // Thêm cá vào bể
        aquarium.appendChild(fish);

        // Tạo hiệu ứng di chuyển cho cá
        moveFish(fish);
    }

    // Hàm di chuyển cá theo đường chéo (cá thứ 5)
    function moveFish5(fish5) {
        let positionX5 = parseFloat(fish5.style.left) || 0;
        let positionY5 = parseFloat(fish5.style.top) || 0;
        const speedX5 = Math.random() * 2 + 1; // Tốc độ di chuyển ngẫu nhiên theo chiều ngang
        const speedY5 = Math.random() * 2 + 1; // Tốc độ di chuyển ngẫu nhiên theo chiều dọc
        const directionX5 = Math.random() > 0.5 ? 1 : -1; // Hướng di chuyển ngẫu nhiên theo chiều ngang
        const directionY5 = Math.random() > 0.5 ? 1 : -1; // Hướng di chuyển ngẫu nhiên theo chiều dọc

        function updateFish5Position() {
            positionX5 += directionX5 * speedX5;
            positionY5 += directionY5 * speedY5;

            // Nếu cá chạm vào thành bể, đổi hướng
            if (positionX5 <= 0 || positionX5 >= aquarium.offsetWidth - 100) {
                directionX5 *= -1; // Đổi hướng theo chiều ngang
            }
            if (positionY5 <= 0 || positionY5 >= aquarium.offsetHeight - 50) {
                directionY5 *= -1; // Đổi hướng theo chiều dọc
            }

            // Cập nhật vị trí con cá
            fish5.style.left = `${positionX5}px`;
            fish5.style.top = `${positionY5}px`;

            // Yêu cầu gọi lại hàm này để di chuyển liên tục
            requestAnimationFrame(updateFish5Position);
        }

        // Bắt đầu cập nhật vị trí
        requestAnimationFrame(updateFish5Position);
    }

    // Tạo cá và di chuyển chúng
    for (let i = 0; i < numberOfFishes; i++) {
        createFish();
    }

    // Tạo và di chuyển fish-2
    const fish2 = document.querySelector('.fish-2');
    moveFish(fish2);

    // Tạo và di chuyển fish-3
    const fish3 = document.createElement('div');
    fish3.classList.add('fish-3');
    fish3.style.backgroundImage = "url('fish3.png')";
    aquarium.appendChild(fish3);
    moveFish(fish3);

    // Tạo và di chuyển fish-4 (cá lên xuống)
    const fish4 = document.createElement('div');
    fish4.classList.add('fish-4');
    fish4.style.backgroundImage = "url('fish4.png')";
    aquarium.appendChild(fish4);
    moveFish4(fish4);

    // Tạo và di chuyển fish-5 (cá di chuyển theo đường chéo)
    const fish5 = document.createElement('div');
    fish5.classList.add('fish-5');
    fish5.style.backgroundImage = "url('fish5.png')"; // Sử dụng ảnh cá mới
    aquarium.appendChild(fish5);
    moveFish5(fish5); // Gọi hàm di chuyển cho fish-5
});
