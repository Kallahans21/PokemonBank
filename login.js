const loginbtn = $("#loginbtn")
			const pinlabel=$("#pinLABEL")
			let PIN = 1234;
			loginbtn.click(function(){

				login();
			}
			)
			function login () {

				if(pinlabel==PIN)
				{
					location.href="facebook.com"
				}
				else{
									Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!',
				footer: '<a href="">Why do I have this issue?</a>'
				})
								}
   				 } 