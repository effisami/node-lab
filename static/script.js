

window.addEventListener('load', () => {
    let answerLi = document.getElementById('containerAnswer');
    
    document.getElementById("translateButton").addEventListener('click',() => {
        
        let buttonValue = document.getElementById('searchInput').value;
        let url = `/word?sw=${buttonValue}`;
        function renderSearchHits(hitList) {
            answerLi.innerHTML = '';
            if (hitList.length > 0) {
                for(let i=0; i<hitList.length; i++) {
                    console.log('inuti forloop')
                    answerLi.innerHTML += `
                    <li>The ansver is : ${hitList[i].translation}</li>
                    `
                }
            } else {
                answerLi.innerHTML = '<li>There is no soch word az this</li>'
            }
          
        }
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderSearchHits(data);
        })
        .catch(error => {
            console.log('Fetch failed.', error)
        })
        
    })
})





