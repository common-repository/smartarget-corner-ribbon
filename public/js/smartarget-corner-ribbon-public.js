function init_corner_ribbon (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_corner_ribbon(hash);
}

function insertJs_corner_ribbon (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=wordpress_corner_ribbon`;
	document.head.appendChild(script);
}

init_corner_ribbon(smartarget_corner_ribbon_params.hash);
