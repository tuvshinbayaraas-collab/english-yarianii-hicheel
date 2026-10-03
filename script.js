function saveAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    const successMsg = document.getElementById('successMsg');

    if (userAnswer === "") {
        successMsg.style.color = "#e74c3c";
        successMsg.innerText = "Та эхлээд хариултаа бичнэ үү!";
    } else {
        successMsg.style.color = "#27ae60";
        successMsg.innerText = "🎉 Амжилттай хадгалагдлаа! Таны ярианы дадлага хийх бэлтгэл сайн байна.";
        
        // Хүсвэл хөтөчийн санах ойд хадгалж болно
        localStorage.setItem('english_practice_answer', userAnswer);
    }
}