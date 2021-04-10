
	pass.addEventListener('keyup',function(){
		strength();

		
	})
	function strength(){
		var val=document.getElementById("pass").value;
		var status=document.getElementById("length");
		var caunter=0;


		if (val!="")
		{
			if(val.length<=5)
				counter=1;
			if(val.length >5 && val.length<=10)
				counter=2;
			if(val.length>10 && val.length<=15)
				counter=3;



			if(counter==1){
				status.innerHTML="WEAK";
				status.style.background="#fa6775"
				status.style.color="#fff"
			}
			if(counter==2){
				status.innerHTML="GOOD";
				status.style.background="#336b87"
				status.style.color="#fff"
			}
			if(counter==3){
				status.innerHTML="STRONG";
				status.style.background="#89da59"
				status.style.color="#fff"
			}
		}

	}
