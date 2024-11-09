function showMessage(response) {
    const message = document.getElementById("response-message");
    
    if (response === "forgive") {
        message.innerHTML = "เย้ดีกันแล้ววว ! ❤️";
        message.style.color = "#4CAF50"; // สีเขียว
    } else {
        message.innerHTML = "อ่าวคือแบบ ทำมาง้อขนาดนี้เลยนะเนี่ยดีกันได้แล้ว เข้าใจรึป่าว !! ❤️";
        message.style.color = "#f44336"; // สีแดง
    }
    
    createHearts(); // สร้างหัวใจลอย
}

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // ตั้งความเร็วแอนิเมชัน
        heart.innerText = "❤️";
        
        document.body.appendChild(heart);
        
        // ลบหัวใจเมื่อแอนิเมชันจบ
        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}
