document.getElementById('voltarAval').addEventListener('click', function() {
    document.getElementById('aval').classList.add('hidden');;
})

async function buscarFaseDb(){

    var dataUrl = '/Scriptgame/model/php/read_fases.php';
    

    let id1 = 0;
    let mundo1 = 0; 
    let fase1 = 0;
    let likes1 = 0;
    let dislikes1 = 0;
    let dificuldade1 = 0;

    let counter = 0;

    try {
        const response = await fetch(dataUrl);
        const data = await response.json();

        data.forEach(item => {

            id1 = item.id;
            mundo1 = item.mundo; 
            fase1 = item.fase;

            
            likes1 = item.likes;
            dislikes1 = item.dislikes;
           
            
            dificuldade1 = item.dificuldade;

            const tableBody = document.querySelector('#avalTable tbody');
            const firstRow = tableBody.rows[counter];

            
            if (firstRow) {
                
                firstRow.cells[2].textContent = likes1;
                firstRow.cells[3].textContent = dislikes1;
                firstRow.cells[4].textContent = dificuldade1;
                
            }

            counter++;
            
        });

    } catch (error) {
        console.error('Error:', error);
    }
}

buscarFaseDb();



