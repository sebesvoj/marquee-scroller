<script>
	var s='%NEWSSOURCE%';
	var tt;
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open('GET','https://raw.githubusercontent.com/Qrome/marquee-scroller/master/sources.json',!0);
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			if(xmlhttp.status==200){
				var obj=JSON.parse(xmlhttp.responseText);
				obj.sources.forEach(t)
			}
		}
	};
	xmlhttp.send();
	function t(it){
		if(it!=null){
			if(s==it.id){
				se=' selected'
			}
			else{se=''}
			tt+='<option'+se+'>'+it.id+'</option>';
			document.getElementById('newssource').innerHTML=tt
		}
	}
</script>