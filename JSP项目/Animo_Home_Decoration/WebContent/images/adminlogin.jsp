<!DOCTYPE html>
<%String path = request.getContextPath(); %>
<html>	
<head>
<title>Login</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="<%=path %>/css/loginstyle.css" rel='stylesheet' type='text/css' />
<!--webfonts-->

</head>
<body>
<script>$(document).ready(function(c) {
	$('.close').on('click', function(c){
		$('.login-form').fadeOut('slow', function(c){
	  		$('.login-form').remove();
		});
	});	  
});
</script>
 <!--SIGN UP-->
 <h1> Login Form</h1>
<div class="login-form">
	<div class="close"> </div>
		<div class="head-info">
			<label class="lbl-1"> </label>
			<label class="lbl-2"> </label>
			<label class="lbl-3"> </label>
		</div>
			<div class="clear"> </div>
	<div class="avtar">
		<img src="images/avtar.png" />
	</div>
			<form>
					<input type="text" class="text" >
						<div class="key">
					<input type="password" >
						</div>
			</form>
	<div class="signin">
		<input type="submit" value="Login" >
	</div>
</div>


</body>
</html>