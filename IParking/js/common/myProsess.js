var myProsess = (function(){
			var $box = $('.myProsessBox'),
				$num = $box.find('.ProsessNum span'),
				$bar = $box.find('.ProsessBar'),
				setProse,
				cancle,
				isnum,
				isFn;

			isnum = function(num){
				return /^[+\-]?(\d+\.)?\d+$/.test(num)
			};

			isFn = function(fn){
				if(typeof fn === 'function'){
					try{
						fn();
					}
					catch(e){

					}
				}
			}

			cancle = function(cb){
				if($box.hasClass('active')){
					$box.removeClass('active');
				}
				$num[0].innerHTML = 0;

				isFn(cb);

			};

			setProse = function(num,cb){
				
				if(!num || !isnum(num) || num>100){
					return;
				}

				if(num>1){
					num = (num/100).toFixed(2);
				}

				if(!$box.hasClass('active')){
					$box.addClass('active');
				}

				var poss = Math.ceil(num*100);

				$num[0].innerHTML = poss;

				$bar.stop().animate({width:poss+'%'},500,function(){
					if(poss >= 100){
						$box.removeClass('active');
						$num[0].innerHTML = 0;
						
						isFn(cb);
						
					}
				});
			};

			return {
					setProse : setProse,
					cancle : cancle
				}})();


		