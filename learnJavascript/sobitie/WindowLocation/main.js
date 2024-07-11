window.addEventListener('load', () => {
    document.getElementById('con').addEventListener('click', () => {
        if(confirm("Вы действительно хотите покинуть эту страницу?") == true){
            window.location = "https://www.youtube.com/"
        }
        return false
    }) 

})