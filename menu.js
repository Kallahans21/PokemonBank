function mensajeDatos()
{
	Swal.fire(
	{
		icon:'info',
		html: "<h2 class='text-dark'>Usser information</h2><br></bt><h4 class='text-muted'>Ussername: Ash Ketchum<br><br>Account number: 0987654321 <br><br>Member since: 2022</h4>",
		confirmButtonText: "<h7 class='text-white'>OK</h7>",
		background:'#E9E7F0',
		confirmButtonColor:'#3596ff',
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false, 
		stopKeyDownPropagation: true,
		width: '35%',
		footer: '<h6 class="text-muted">All user data</h6>',
})
}

function mensajeSalirSesion()
{
	const swalWithBootstrapButtons = Swal.mixin(
	{
		customClass: { confirmButton: 'btn btn-outline-primary', cancelButton: 'mr-2 btn btn-outline-secondary' },
	  	buttonsStyling: false
	});

	swalWithBootstrapButtons.fire(
	{
		html: "<h2 class='text-muted'>Logout</h2><br><h4 class='text-dark'>Are you sure you want logout?</h4>",
		background:'#E9E7F0',
		width: '35%',
		icon:'question',
		showCancelButton: true, 
		reverseButtons: true,
		confirmButtonText: 'Logout',
		cancelButtonText: 'Cancel',
		confirmButtonColor:'#a10096',
		allowOutsideClick: false,
		allowEscapeKey: false, 
		allowEnterKey: false, 
	}
	).then((result) => 
	{
  		if (result.isConfirmed) 
  		{
  			location.href = 'login.html' 
    	} 
	})	
}

let deposito;
let retiro;
let numeroRetiros = 0;
let numeroDepositos = 0;
let retiros = [];
let depositos = [];
let total = 500;
let pagosElectricidad = [];
let pagosIT = [];
let pagosAgua = [];

buttonDatos = document.getElementById('buttonDatos');
salirSesion = document.getElementById('salirSesion');
depositar = document.getElementById('depositar');
retirar = document.getElementById('retirar');
consultarSaldo = document.getElementById('consultarSaldo');
pagarServicios = document.getElementById('pagarServicios');

buttonDatos.addEventListener('click', mensajeDatos);
salirSesion.addEventListener('click', mensajeSalirSesion);

depositar.addEventListener('click', () =>
{
	const swalWithBootstrapButtons = Swal.mixin(
	{
		customClass: { confirmButton: 'btn btn-outline-primary', cancelButton: 'mr-2 btn btn-outline-secondary' },
	  	buttonsStyling: false
	});
	swalWithBootstrapButtons.fire(
	{
		html: "<h2 class='text-muted'>Deposit</h2>",
		icon: 'question',
		footer: '<h6 class="text-dark">How much do you want to deposit?</h6>',
		width: '35%', 
		background:'#E9E7F0',
		confirmButtonText: 'Deposit',
		cancelButtonText: 'Cancel',
		showCancelButton: true, 
		reverseButtons: true, 
		input: 'text',
		inputPlaceholder: 'Amount',
		inputValue: '',
		allowOutsideClick: false,
		allowEscapeKey: false, 
		allowEnterKey: false, 
	}).then((result) =>
	{ 
		if(result.isConfirmed)
		{
			deposito = parseFloat(swalWithBootstrapButtons.getInput().value);
			if(swalWithBootstrapButtons.getInput().value === '' || isNaN(deposito))
			{
				swalWithBootstrapButtons.fire(
				{
					html: "<h4 class='text-dark'>Wrong data</h4>",
					icon: 'error',
					footer: '<h6 class="text-muted">Try again</h6>',
					width: '35%',
					background:'#E9E7F0',
					confirmButtonText: 'OK',
					allowOutsideClick: false, 
					allowEscapeKey: false,
					allowEnterKey: false, 
				})
			}
			else
			{
				total += deposito;
				depositos.push(deposito);
				swalWithBootstrapButtons.fire(
				{
					html: "<h4 class='text-muted'>"+ deposito +"$ has been successfully deposited</h4>",
					icon: 'success', 
					footer: '<h6 class="text-muted"Successful deposit</h6>',
					width: '35%', 
					background:'#E9E7F0',
					confirmButtonText: 'Awsome',
					allowOutsideClick: false, 
					allowEscapeKey: false, 
					allowEnterKey: false, 
				})
			} 
		}
	})
})

retirar.addEventListener('click', () =>
{
	const swalWithBootstrapButtons = Swal.mixin(
	{
		customClass: { confirmButton: 'btn btn-outline-primary', cancelButton: 'mr-2 btn btn-outline-secondary' },
	  	buttonsStyling: false
	});
	swalWithBootstrapButtons.fire(
	{
		html: "<h2 class='text-dark'>Withdrawals</h2>",
		icon: 'info', 
		footer: '<h6 class="text-muted">How much do you want to withdrawal?</h6>',
		width: '35%', 
		background:'#E9E7F0',
		confirmButtonText: 'Confirm',
		cancelButtonText: 'Cancel',
		showCancelButton: true, 
		reverseButtons: true, 
		input: 'text',
		inputPlaceholder: 'Amount',
		inputValue: '',
		allowOutsideClick: false,
		allowEscapeKey: false,
		allowEnterKey: false,
	}).then((result) =>
	{ 
		if(result.isConfirmed)
		{
			retiro = parseFloat(swalWithBootstrapButtons.getInput().value);
			if(swalWithBootstrapButtons.getInput().value === '' || isNaN(retiro))
			{
				swalWithBootstrapButtons.fire(
				{
					html: "<h4 class='text-muted'>Wrong data</h4>",
					icon: 'error', 
					footer: '<h6 class="text-muted">Try again</h6>',
					width: '35%', 
					background:'#E9E7F0',
					confirmButtonText: 'Ok',
					allowOutsideClick: false, 
					allowEnterKey: false, 
				})
			}
			if(retiro <= total)
			{
				total -= retiro;
				retiros.push(retiro);
				swalWithBootstrapButtons.fire(
				{
					html: "<h4 class='text-muted'>"+ retiro +"$ has been withdrawn successfully</h4>",
					icon: 'success',
					footer: '<h6 class="text-muted">Successful withdrawal</h6>',
					width: '35%', 
					background:'#E9E7F0',
					confirmButtonText: 'OK',
					allowOutsideClick: false,
					allowEscapeKey: false,
					allowEnterKey: false,
				})
			} 
			else if(retiro > total)
			{
				swalWithBootstrapButtons.fire(
				{
					html: "<h4 class='text-dark'>Fail</h4>",
					icon: 'error', 
					footer: '<h6 class="text-muted">You dont have enough money</h6>',
					width: '35%',
					background:'#E9E7F0',
					confirmButtonText: 'OK',
					allowOutsideClick: false, 
					allowEscapeKey: false, 
					allowEnterKey: false, 
				})
			}
		}
	})
})
consultarSaldo.addEventListener("click", () =>
{
	Swal.fire(
	{
		html: "<h2 class='text-muted'>Your balance is: " + total + "$</h2>",
		icon: 'info', 
		confirmButtonText: 'OK',
		footer: '<h6 class="text-muted">Balance</h6>',
		width: '35%', 
		background:'#E9E7F0',
		allowOutsideClick: false, 
		allowEscapeKey: false,
		allowEnterKey: false, 
	});	
})

pagarServicios.addEventListener("click", () =>
{
	let swalWithBootstrapButtons = Swal.mixin(
	{
		customClass: { confirmButton: 'btn btn-outline-primary', cancelButton: 'mr-2 btn btn-outline-secondary' },
	  	buttonsStyling: false
	});
	swalWithBootstrapButtons.fire(
	{
		html: "<h2 class='text-dark'>Pay for services</h2>",
		icon: 'info',
		footer: '<h6 class="text-muted">Choose one service</h6>',
		width: '35%',
		background:'#E9E7F0',
		confirmButtonText: 'Pay',
		cancelButtonText: 'Cancel',
		showCancelButton: true, 
		reverseButtons: true, 
		input: "select",
		inputPlaceholder: "Services",
		inputOptions: { energiaElectrica: "Energy service", internetTelefonia: "Internet and landline", aguaPotable: "Water service" },
		inputValue: '',
		allowOutsideClick: false, 
		allowEscapeKey: false, 
		allowEnterKey: false
	}).then((result) => 
	{
		if(result.isConfirmed)
		{
			servicio = swalWithBootstrapButtons.getInput().selectedOptions[0].text;
			swalWithBootstrapButtons = Swal.mixin(
			{
				customClass: { confirmButton: 'btn btn-outline-primary'},
			  	buttonsStyling: false
			});
			swalWithBootstrapButtons.fire(
			{
				html: "<h6 class='text-muted'>Pay service amount:" + servicio + " </h6>",
				icon: 'info',
				width: '35%', 
				background:'#E9E7F0',
				confirmButtonText: 'Pay',
				input: 'text',
				inputPlaceholder: 'Amount',
				inputValue: '',
				allowOutsideClick: false, 
				allowEscapeKey: false,
				allowEnterKey: false, 
			}).then((result) =>
			{ 
				let cuota;
				if(result.isConfirmed)
				{
					cuota = parseFloat(swalWithBootstrapButtons.getInput().value);
					if(swalWithBootstrapButtons.getInput().value === '' || isNaN(cuota))
					{
						swalWithBootstrapButtons.fire(
						{
							html: "<h4 class='text-dark'>Wrong data</h4>",
							icon: 'error',
							footer: '<h6 class="text-muted">Try again</h6>',
							width: '35%', 
							background:'#E9E7F0',
							confirmButtonText: 'OK',
							allowOutsideClick: false, 
							allowEscapeKey: false, 
							allowEnterKey: false, 
						})
					}
					if(cuota <= total)
					{
						total -= cuota;
						switch(servicio)
						{
							case "Energy Service":
								pagosElectricidad.push(cuota);
								break;
							case "Internet and landline":
								pagosIT.push(cuota);
								break;
							case "Water Service":
								pagosAgua.push(cuota);
								break;
						}
						swalWithBootstrapButtons.fire(
						{
							html: "<h4 class='text-muted'>"+ cuota +"$ have been paid successfully</h4>",
							icon: 'success', 
							footer: '<h6 class="text-muted">Successful payment</h6>',
							width: '35%', 
							background:'#E9E7F0',
							confirmButtonText: 'OK',
							allowOutsideClick: false, 
							allowEscapeKey: false, 
							allowEnterKey: false, 
						})
					} 
					else if(cuota > total)
					{
						swalWithBootstrapButtons.fire(
						{
							html: "<h4 class='text-dark'>Fail</h4>",
							icon: 'error', 
							footer: '<h6 class="text-muted">You dont have enough money</h6>',
							width: '35%', 
							background:'#E9E7F0',
							confirmButtonText: 'OK',
							allowOutsideClick: false,
							allowEscapeKey: false, 
							allowEnterKey: false, 
						})
					}
				}
			})
		}
	})
})


pdf.addEventListener('click', () =>
{
	let lineas = 10;
	let doc = new jsPDF();
	lineas += 10;
	doc.text(10,lineas, `RECORD - KETCHUM ${dayjs().format("MMMM D, YYYY")}`);
	lineas += 10;
	doc.text(20,lineas, "Deposits");
	for(let i = 0; i < depositos.length; i++)
	{
		lineas += 10;
		doc.text(20,lineas, (i + 1) + ". Deposit: " + depositos[i] + "$");
	}
	lineas += 10;
	doc.text(20,lineas, "Withdrawal");
	for(let i = 0; i < retiros.length; i++)
	{
		lineas += 10;
		doc.text(20,lineas, (i + 1) + ". Withdrawal: " + retiros[i] + "$");
	}
	lineas += 10;
	doc.text(20,lineas, "Energy service payments");
	for(let i = 0; i < pagosElectricidad.length; i++)
	{
		lineas += 10;
		doc.text(20,lineas, (i + 1) + ". Energy service payments" + pagosElectricidad[i] + "$");
	}
	lineas += 10;
	doc.text(20,lineas, "Internet and landline payments");
	for(let i = 0; i < pagosIT.length; i++)
	{
		lineas += 10;
		doc.text(20,lineas, (i + 1) + ". Internet and landline: " + pagosIT[i] + "$");
	}
	lineas += 10;
	doc.text(20,lineas, "Water service payments");
	for(let i = 0; i < pagosAgua.length; i++)
	{
		lineas += 10;
		doc.text(20,lineas, (i + 1) + ". Water service payments: " + pagosAgua[i] + "$");
	}
	doc.save("Record-KETCHUM.pdf");
})

let ctx = document.getElementById("myChart").getContext("2d");
let myChart = new Chart(ctx, 
	{
		type: "bar",
		data: 
		{
			labels: ['col1', 'col2', 'col3'],
			datasets: [
			{
				label: "Information",
				data: [10,9,15]
			}]
		}
	});