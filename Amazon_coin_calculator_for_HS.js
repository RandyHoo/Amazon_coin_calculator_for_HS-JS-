var have_coin = 0; //手持ちコイン
var coinback = 0; //コインバック計算用
var total_num = 0; //合計個数

//値段と個数、それぞれの要素番号が対応している必要がある
var price_list	= [ 6000,	2400,	1200,	360 ]
var num_list	= [ 40, 	15,  	7,  	2   ]

function test_func(){
	have_coin = 0;
	coinback = 0;
	total_num = 0;
	
	have_coin = document.form.coin.value;
	
	coinback = document.form.back.value;
	if( (coinback != 0) && (coinback != 100) ){
		coinback /= 100;
	}
	
	document.body.insertAdjacentHTML("beforeend", "<p>手順:</p>");
	while( ( have_coin / price_list[ price_list.length - 1 ] ) >= 1 ){
		for( var i = 0;i < price_list.length ;i++ ){
			if(( have_coin / price_list[i] ) >= 1){
				total_num += num_list[i];
				have_coin -= price_list[i];
				have_coin += price_list[i] * coinback;
				have_coin = Math.ceil(have_coin);
				document.body.insertAdjacentHTML("beforeend", "<p>" + num_list[i] + "パック購入</p>");
			}
		}
	}
	
	document.body.insertAdjacentHTML("beforeend", "<p>合計パック:" + total_num + "</p>");
	document.body.insertAdjacentHTML("beforeend", "<p>余りコイン:" + have_coin + "</p>");
}
