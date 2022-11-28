const grap = document.getElementById("myChart")
const tipo= ['Deposits','Withdrwals']
const dinero= [500,350]
const myChart = new Chart (grap,{
    type: 'bar',
    data: {
        labels: [tipo],
        datasets: [{
            label: 'money',
            data: dinero,
            backgroundColor:[
                'rgba(255,99,132,0.2)',
                'rgba(54,162,235,0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',  
            ],
            borderWith: 1.5
        }] 
    }
})