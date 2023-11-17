const convert = (time) => {
    return `${new Date(time * 1000).toLocaleDateString()} ${new Date(time * 1000).toLocaleTimeString()}`
}

const setResult = (time) => {
    document.getElementById('result').innerText = convert(time)
}

const currentTime = () => {
    document.getElementById('now').innerText = convert(new Date()/1000)
}

const timeInterval = window.setInterval(currentTime, 1000)