const country = document.getElementById('country')
const state = document.getElementById('state')
const x = document.getElementById('outputArea')

async function fun(){
    const response = await fetch(`http://universities.hipolabs.com/search?country=${country.value}`);
    const jsonData = await response.json()  

    let ans = []
    for(let i=0; i<jsonData.length; i++){
        
        const val = await jsonData[i]['state-province']
        if(val===state.value){
            const university = await jsonData[i].name
            ans.push(university)
        }
    
    }

    let html = ''
    for(let i=0; i<ans.length; i++){
        html += `<div class="box">
                    <h2>${i+1.}-  ${ans[i]}</h2>
                </div>`
    }
    x.innerHTML = html

}


