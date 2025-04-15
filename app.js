// 設定倒數日期
const countdownDate = new Date("May 1, 2025 15:00:00").getTime();

// 倒數計時器函數
function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // 計算天數、時、分、秒
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 格式化時間顯示
  const formattedTime = `${days}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;

  // 更新倒數計時器顯示
  document.getElementById("countdown-timer").innerHTML = formattedTime;

  // 如果倒數結束，顯示文本
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown-timer").innerHTML = "活動開始！";
  }
}

// 開始倒數計時器
const countdownInterval = setInterval(updateCountdown, 1000);
