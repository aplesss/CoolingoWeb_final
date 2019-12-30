$(document).ready(function(){
	var Machude=0;
	var Capdo=0;
	const Struct = (...keys) => ((...v) => keys.reduce((o, k, i) => {o[k] = v[i]; return o} , {}))
	var index=0;
	const Content = Struct('index', 'type');
	var Chude = [];

	user= sessionStorage.getItem("user");
	if(user)
	{
	$(".dummy-heading").text(user+"|"+"Coolingo-Member");
	}
	var createLevel =function(){
		$(".content").find(".info").remove();
		alert("AAAA");
		$(".skills-tree-container").show(); 
		$(".skills-tree-container").html("");
		var level =$(this).attr("data-index");
	$.ajax({
		headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"},
		url: `http://localhost:5555/getlevel?macd=${level}`,
		type: 'GET',
		dataType:"json",
		processData: false,
		success: function(data) {
				
			$.each(data, function(key, value){
				CreateSkill(value.CAPDO);
			})
		},
		error:  function(err)
		{
			alert(err);
		}
		});		
	};
	$(".skills-tree-container").hide();
	$.ajax({
		headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"},
		url: `http://localhost:5555/getchude`,
		type: 'GET',
		dataType:"json",
		processData: false,
		success: function(data) {
			 
			$.each(data, function(key, value){
 
				Chude.push(Content(value.MACD, value.TENCD))
				CreateMenu(Chude[index]);
			});
			$(".titlemenu").each(function()
			{	
			$(this).on("click",function(event){
				$(".titlemenu").each(function()
				{	
				$(this).children(".menu__link").removeClass("menuclick");
				});
				$(this).children(".menu__link").addClass("menuclick");
				event.stopPropagation();
				event.stopImmediatePropagation();
				$(".content").find(".info").remove();
				$(".skills-tree-container").show(); 
				$("#skills-node-container").html("");
				var level =$(this).attr("data-index");
				Machude=level;
 
			$.ajax({
				headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "access-control-allow-origin, access-control-allow-headers"},
				url: `http://localhost:5555/getlevel?macd=${level}`,
				type: 'GET',
				dataType:"json",
				processData: false,
				success: function(data) {
					$.each(data, function(key, value){
						CreateSkill(value.CAPDO);
					});
					$(".skill").each(function()
					{
						$(this).on("click",function(event){
							event.stopPropagation();
							event.stopImmediatePropagation();
							Capdo= $(this).attr("data-level");
							sessionStorage.setItem("macd", Machude);
							sessionStorage.setItem("capdo", Capdo);
							window.location.replace("../Lesson/learning.html");
						
						});
					});

				},
				error:  function(err)
				{
					alert(err);
				}
				});		
			});
		});
		},
		error:  function(err)
		{
			alert(err);
		}
	});
	var CreateMenu=function(chude)
	{
		$("#all_menu").append("<div class='menu__item titlemenu' role='menuitem'   data-index='"+chude.index+"'>"+
		"<a class='menu__link'>"+chude.type+"</a></div>")
		index++;
	};
	
	
	

	var CreateSkill=function(capdo)
	{
		$("#skills-node-container").append("<a class='pointer'>"+
		"<span class='skill' data-level='"+capdo+"'></span>"+
		"<p>Level "+capdo+"</p>"+
	  "</a>");
	}
});